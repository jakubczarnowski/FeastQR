alter table "public"."menus" drop constraint "menus_default_language_id_fkey";

alter table "public"."menu_languages" add column "is_default" boolean not null default false;

alter table "public"."menus" drop column "default_language_id";


