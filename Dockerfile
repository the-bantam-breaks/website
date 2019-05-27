FROM node:10
ENV YARN_VERSION 1.15.2

# yarn
RUN \
    curl -fSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
    && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
    && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
    && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
    && rm yarn-v$YARN_VERSION.tar.gz

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn

# rethinkdb
RUN apt-get update && \
    apt-get install -qq -y lsb-release && \
    echo "deb http://download.rethinkdb.com/apt $(lsb_release --codename --short) main" | \
    tee /etc/apt/sources.list.d/rethinkdb.list && \
    wget -qO- https://download.rethinkdb.com/apt/pubkey.gpg | apt-key add - && \
    apt-get update && \
    # https://github.com/rethinkdb/rethinkdb/issues/6228#issuecomment-331753821
    wget -q http://mirrors.kernel.org/ubuntu/pool/main/p/protobuf/libprotobuf9v5_2.6.1-1.3_amd64.deb -O /tmp/libprotobuf9v5_2.6.1-1.3_amd64.deb && \
    dpkg -i /tmp/libprotobuf9v5_2.6.1-1.3_amd64.deb && \
    rm /tmp/libprotobuf9v5_2.6.1-1.3_amd64.deb && \
    apt-get install -qq -y rethinkdb && \
    apt-get clean

# Setup RethinkDB to start
COPY docker/etc /etc
WORKDIR /app
COPY docker/start.sh .
COPY /app/ .
COPY package.json .
COPY src ./src

# Used for healthcheck
ENV APP_PORT 3000
# Select PORT
ENV PORT 3000
# set enviroment to production
ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL info
# Expose the port on which this app listens
EXPOSE 3000
EXPOSE 8080
ENTRYPOINT ["/init"]
CMD [ "sh", "-", "./start.sh" ]
