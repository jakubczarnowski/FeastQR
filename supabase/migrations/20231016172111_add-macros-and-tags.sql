create type "public"."tag_type" as enum ('keto', 'vegan', 'vegetarian', 'low_carb', 'sugar_free', 'low_fat', 'high_protein', 'high_fiber', 'organic', 'gluten_free', 'lactose_free');

create table "public"."dishes_tag" (
    "dish_id" uuid,
    "tag_name" tag_type not null
);


alter table "public"."dishes_tag" enable row level security;

alter table "public"."dishes" add column "carbohydrates" integer;

alter table "public"."dishes" add column "fats" integer;

alter table "public"."dishes" add column "kcal" integer;

alter table "public"."dishes" add column "protein" integer;

CREATE UNIQUE INDEX dishes_tag_pkey ON public.dishes_tag USING btree (tag_name);

alter table "public"."dishes_tag" add constraint "dishes_tag_pkey" PRIMARY KEY using index "dishes_tag_pkey";

alter table "public"."dishes_tag" add constraint "dishes_tag_dish_id_fkey" FOREIGN KEY (dish_id) REFERENCES dishes(id) ON DELETE CASCADE not valid;

alter table "public"."dishes_tag" validate constraint "dishes_tag_dish_id_fkey";


