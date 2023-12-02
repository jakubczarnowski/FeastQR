create table "public"."categories_translation" (
    "category_id" uuid not null,
    "name" text not null,
    "language_id" uuid not null
);


alter table "public"."categories_translation" enable row level security;

alter table "public"."categories" drop column "name";

alter table "public"."menus" add column "default_language_id" uuid;

CREATE UNIQUE INDEX categories_translation_pkey ON public.categories_translation USING btree (category_id, language_id);

alter table "public"."categories_translation" add constraint "categories_translation_pkey" PRIMARY KEY using index "categories_translation_pkey";

alter table "public"."categories_translation" add constraint "categories_translation_category_id_fkey" FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE not valid;

alter table "public"."categories_translation" validate constraint "categories_translation_category_id_fkey";

alter table "public"."categories_translation" add constraint "categories_translation_language_id_fkey" FOREIGN KEY (language_id) REFERENCES languages(id) ON DELETE CASCADE not valid;

alter table "public"."categories_translation" validate constraint "categories_translation_language_id_fkey";

alter table "public"."menus" add constraint "menus_default_language_id_fkey" FOREIGN KEY (default_language_id) REFERENCES languages(id) ON DELETE SET NULL not valid;

alter table "public"."menus" validate constraint "menus_default_language_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, new.raw_user_meta_data->>'full_name', new.email);
  return new;
end;
$function$
;


