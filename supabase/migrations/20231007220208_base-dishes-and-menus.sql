create table "public"."categories" (
    "id" uuid not null default uuid_generate_v4 (),
    "name" text not null,
    "menu_id" uuid not null,
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."categories" enable row level security;

create table "public"."dishes" (
    "id" uuid not null default uuid_generate_v4 (),
    "name" text not null,
    "description" text not null,
    "price" numeric not null,
    "picture_url" text,
    "created_at" timestamp with time zone not null default now(),
    "menu_id" uuid not null,
    "category_id" uuid
);


alter table "public"."dishes" enable row level security;

create table "public"."menus" (
    "id" uuid not null default uuid_generate_v4(),
    "name" text not null,
    "user_id" uuid not null,
    "slug" text not null,
    "background_image_url" text,
    "city" text not null,
    "address" text not null,
    "is_published" boolean not null default false,
    "updated_at" timestamp with time zone not null default now(),
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."menus" enable row level security;

CREATE UNIQUE INDEX categories_pkey ON public.categories USING btree (id);

CREATE UNIQUE INDEX dishes_pkey ON public.dishes USING btree (id);

CREATE UNIQUE INDEX menu_pkey ON public.menus USING btree (id);

CREATE UNIQUE INDEX menu_slug_key ON public.menus USING btree (slug);

alter table "public"."categories" add constraint "categories_pkey" PRIMARY KEY using index "categories_pkey";

alter table "public"."dishes" add constraint "dishes_pkey" PRIMARY KEY using index "dishes_pkey";

alter table "public"."menus" add constraint "menu_pkey" PRIMARY KEY using index "menu_pkey";

alter table "public"."categories" add constraint "categories_menu_id_fkey" FOREIGN KEY (menu_id) REFERENCES menus(id) ON DELETE CASCADE not valid;

alter table "public"."categories" validate constraint "categories_menu_id_fkey";

alter table "public"."dishes" add constraint "dishes_categories_id_fkey" FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL not valid;

alter table "public"."dishes" validate constraint "dishes_categories_id_fkey";

alter table "public"."dishes" add constraint "dishes_menu_id_fkey" FOREIGN KEY (menu_id) REFERENCES menus(id) ON DELETE CASCADE not valid;

alter table "public"."dishes" validate constraint "dishes_menu_id_fkey";

alter table "public"."menus" add constraint "menu_slug_key" UNIQUE using index "menu_slug_key";

alter table "public"."menus" add constraint "menus_user_id_fkey" FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE not valid;

alter table "public"."menus" validate constraint "menus_user_id_fkey";


