-- Table: public.sms_subscriptions
-- DROP TABLE public.sms_subscriptions;
CREATE TABLE IF NOT EXISTS public.sms_subscriptions
(
    id bigint NOT NULL DEFAULT nextval('sms_sub_id_incrementor'::regclass),
    mobile_number text COLLATE pg_catalog."default" NOT NULL,
    hash character varying(32) COLLATE pg_catalog."default" NOT NULL,
    active boolean NOT NULL DEFAULT false,
    CONSTRAINT sms_subscriptions_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE UNIQUE INDEX idx_sms_unique
   ON public.sms_subscriptions (mobile_number);
