#!/bin/bash

RETHINKDB_HOST=${RETHINKDB_HOST:-localhost}

# echo "Waiting for RethinkDB to become available"
while ! nc -z $RETHINKDB_HOST 28015; do sleep 3; done

# Let's sleep 10 seconds to wait for the DB to be ready
# sleep 10

echo "Starting NodeJS server"
yarn start
