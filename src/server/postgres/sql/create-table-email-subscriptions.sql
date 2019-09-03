-- Table: public.email_subscriptions
-- DROP TABLE public.email_subscriptions;
CREATE TABLE IF NOT EXISTS public.email_subscriptions
(
    id bigint NOT NULL DEFAULT nextval('email_sub_id_incrementor'::regclass),
    email text COLLATE pg_catalog."default" NOT NULL,
    hash character varying(32) COLLATE pg_catalog."default" NOT NULL,
    active boolean NOT NULL DEFAULT false,
    CONSTRAINT email_subscriptions_pkey PRIMARY KEY (id),
    CONSTRAINT unique_email UNIQUE (email)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE UNIQUE INDEX idx_email_unique
   ON public.email_subscriptions (lower(email));
