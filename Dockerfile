FROM node:10

ADD . /usr/src/app
WORKDIR /usr/src/app
COPY docker/start.sh start.sh
RUN yarn install && \
    apt-get update -y -qq && \
    apt-get -y -qq install netcat && \
    apt-get clean

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
CMD [ "yarn", "start" ]
