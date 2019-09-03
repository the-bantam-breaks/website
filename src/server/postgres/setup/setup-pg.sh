#!/bin/bash
# TODO - ENV vars from other source.  ask Garrett
# ENV_PG_USER
# ENV_PG_HOST
# ENV_PG_PASSWORD
# ENV_PG_DATABASE
# ENV_PG_PORT
source ../../../../.env
PGPASSFILE=../../../../.pgpass

CREATE_DB=../sql/create-db.sql

EMAIL_INCREMENTOR=../sql/create-email-incrementor.sql
EMAIL_SUBSCRIPTIONS=../sql/create-table-email-subscriptions.sql

SMS_INCREMENTOR=../sql/create-sms-incrementor.sql
SMS_SUBSCRIBTIONS=../sql/create-table-sms-subscriptions.sql

# check if user role exists
if psql template1 -qt -c "\du"| cut -d \| -f 1 | grep -qw $ENV_PG_USER; then
    echo "user exists"
else
    echo "our user does not exist, let's create it"
    $(psql template1 -c "CREATE USER \"$ENV_PG_USER\"")
fi

# check if database exists
# psql -l list table of db
# -t flag removes headers and footers
# -q option suppresses any output written to the screen
# cut -d \| -f 1 selects field 1
if psql -lqt | cut -d \| -f 1 | grep -qw $ENV_PG_DATABASE; then
    echo "database exists"
else
    echo "no db, let's create it"
    # $(psql -w -h "$ENV_PG_HOST" -U "$ENV_PG_USER" -p "$ENV_PG_PORT" -f "$CREATE_DB")
    $(psql template1 -f "$CREATE_DB")
fi

# email subscriptions table
psql -d "$ENV_PG_DATABASE" -f "$EMAIL_INCREMENTOR"
psql -d "$ENV_PG_DATABASE" -c "ALTER SEQUENCE public.email_sub_id_incrementor OWNER TO \"$ENV_PG_USER\""
psql -d "$ENV_PG_DATABASE" -f "$EMAIL_SUBSCRIPTIONS"
psql -d "$ENV_PG_DATABASE" -c "ALTER TABLE public.email_subscriptions OWNER to \"$ENV_PG_USER\""

# sms subsciptions table
psql -d "$ENV_PG_DATABASE" -f "$SMS_INCREMENTOR"
psql -d "$ENV_PG_DATABASE" -c "ALTER SEQUENCE public.sms_sub_id_incrementor OWNER TO \"$ENV_PG_USER\""
psql -d "$ENV_PG_DATABASE" -f "$SMS_SUBSCRIBTIONS"
psql -d "$ENV_PG_DATABASE" -c "ALTER TABLE public.sms_subscriptions OWNER to \"$ENV_PG_USER\""
