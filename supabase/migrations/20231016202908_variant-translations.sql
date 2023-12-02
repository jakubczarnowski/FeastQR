create table "public"."variant_translations" (
    "language_id" uuid not null,
    "dish_variant_id" uuid not null,
    "name" text not null,
    "description" text
);


alter table "public"."variant_translations" enable row level security;

alter table "public"."dish_variants" drop column "description";

alter table "public"."dish_variants" drop column "name";

CREATE UNIQUE INDEX variant_translations_pkey ON public.variant_translations USING btree (language_id, dish_variant_id);

alter table "public"."variant_translations" add constraint "variant_translations_pkey" PRIMARY KEY using index "variant_translations_pkey";

alter table "public"."variant_translations" add constraint "variant_translations_dish_variant_id_fkey" FOREIGN KEY (dish_variant_id) REFERENCES dish_variants(id) ON DELETE CASCADE not valid;

alter table "public"."variant_translations" validate constraint "variant_translations_dish_variant_id_fkey";

alter table "public"."variant_translations" add constraint "variant_translations_language_id_fkey" FOREIGN KEY (language_id) REFERENCES languages(id) ON DELETE CASCADE not valid;

alter table "public"."variant_translations" validate constraint "variant_translations_language_id_fkey";


