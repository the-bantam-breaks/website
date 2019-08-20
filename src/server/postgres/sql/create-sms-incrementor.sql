-- SEQUENCE: public.sms_sub_id_incrementor
-- DROP SEQUENCE public.sms_sub_id_incrementor;
CREATE SEQUENCE IF NOT EXISTS public.sms_sub_id_incrementor
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;
