alter table "public"."dishes" drop constraint "dishes_categories_id_fkey";

create table "public"."dishes_translation" (
    "id" uuid not null default uuid_generate_v4(),
    "dish_id" uuid not null,
    "language_id" uuid not null,
    "name" text not null,
    "description" text not null
);


create table "public"."menu_languages" (
    "menu_id" uuid not null,
    "language_id" uuid not null
);


alter table "public"."menu_languages" enable row level security;

alter table "public"."dishes" drop column "description";

alter table "public"."dishes" drop column "name";

CREATE UNIQUE INDEX dishes_translation_pkey ON public.dishes_translation USING btree (id, dish_id, language_id);

CREATE UNIQUE INDEX menu_languages_pkey ON public.menu_languages USING btree (menu_id, language_id);

alter table "public"."dishes_translation" add constraint "dishes_translation_pkey" PRIMARY KEY using index "dishes_translation_pkey";

alter table "public"."menu_languages" add constraint "menu_languages_pkey" PRIMARY KEY using index "menu_languages_pkey";

alter table "public"."dishes" add constraint "dishes_category_id_fkey" FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL not valid;

alter table "public"."dishes" validate constraint "dishes_category_id_fkey";

alter table "public"."dishes_translation" add constraint "dishes_translation_dish_id_fkey" FOREIGN KEY (dish_id) REFERENCES dishes(id) ON DELETE CASCADE not valid;

alter table "public"."dishes_translation" validate constraint "dishes_translation_dish_id_fkey";

alter table "public"."dishes_translation" add constraint "dishes_translation_language_id_fkey" FOREIGN KEY (language_id) REFERENCES languages(id) ON DELETE CASCADE not valid;

alter table "public"."dishes_translation" validate constraint "dishes_translation_language_id_fkey";

alter table "public"."menu_languages" add constraint "menu_languages_language_id_fkey" FOREIGN KEY (language_id) REFERENCES languages(id) ON DELETE CASCADE not valid;

alter table "public"."menu_languages" validate constraint "menu_languages_language_id_fkey";

alter table "public"."menu_languages" add constraint "menu_languages_menu_id_fkey" FOREIGN KEY (menu_id) REFERENCES menus(id) ON DELETE CASCADE not valid;

alter table "public"."menu_languages" validate constraint "menu_languages_menu_id_fkey";


