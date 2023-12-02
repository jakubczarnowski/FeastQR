create type "public"."continents" as enum ('Africa', 'Antarctica', 'Asia', 'Europe', 'Oceania', 'North America', 'South America');

create table "public"."languages" (
    "id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "iso_code" text not null
);


alter table "public"."languages" enable row level security;

alter table "public"."dishes" alter column "price" set data type real using "price"::real;

CREATE UNIQUE INDEX languages_pkey ON public.languages USING btree (id);

alter table "public"."languages" add constraint "languages_pkey" PRIMARY KEY using index "languages_pkey";


