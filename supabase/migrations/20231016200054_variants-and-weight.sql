create table "public"."dish_variants" (
    "id" uuid not null,
    "name" text not null,
    "description" text,
    "price" integer,
    "dish_id" uuid not null,
    "created_at" timestamp with time zone default now()
);


alter table "public"."dish_variants" enable row level security;

alter table "public"."dishes" add column "weight" integer;

CREATE UNIQUE INDEX dish_variants_pkey ON public.dish_variants USING btree (id);

alter table "public"."dish_variants" add constraint "dish_variants_pkey" PRIMARY KEY using index "dish_variants_pkey";

alter table "public"."dish_variants" add constraint "dish_variants_dish_id_fkey" FOREIGN KEY (dish_id) REFERENCES dishes(id) ON DELETE CASCADE not valid;

alter table "public"."dish_variants" validate constraint "dish_variants_dish_id_fkey";


