alter table "public"."dishes_translation" drop constraint "dishes_translation_pkey";

drop index if exists "public"."dishes_translation_pkey";

alter table "public"."dishes_translation" drop column "id";

alter table "public"."dishes_translation" enable row level security;

CREATE UNIQUE INDEX dishes_translation_pkey ON public.dishes_translation USING btree (dish_id, language_id);

alter table "public"."dishes_translation" add constraint "dishes_translation_pkey" PRIMARY KEY using index "dishes_translation_pkey";


