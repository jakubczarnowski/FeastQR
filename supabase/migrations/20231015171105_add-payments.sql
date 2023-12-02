create table "public"."subscriptions" (
    "profile_id" uuid not null,
    "update_payment_url" text not null,
    "renews_at" timestamp with time zone not null,
    "ends_at" timestamp with time zone,
    "status" text not null,
    "created_at" timestamp with time zone,
    "lemon_squeezy_id" text not null,
    "json_data" jsonb not null
);


CREATE UNIQUE INDEX subscriptions_pkey ON public.subscriptions USING btree (profile_id);

alter table "public"."subscriptions" add constraint "subscriptions_pkey" PRIMARY KEY using index "subscriptions_pkey";

alter table "public"."subscriptions" add constraint "subscriptions_profile_id_fkey" FOREIGN KEY (profile_id) REFERENCES profiles(id) not valid;

alter table "public"."subscriptions" validate constraint "subscriptions_profile_id_fkey";


