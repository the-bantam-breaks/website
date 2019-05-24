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
RUN \
    wget http://download.rethinkdb.com/centos/7/`uname -m`/rethinkdb.repo \
        -O /etc/yum.repos.d/rethinkdb.repo && \
    yum install -y rethinkdb && \
    yum install -y curl wget nc && \
    yum clean all

# Setup RethinkDB to start
COPY docker/etc /etc
WORKDIR /app
COPY docker/start.sh .
COPY --from=0 /app/ .
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
