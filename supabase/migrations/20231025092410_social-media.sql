alter table "public"."menus" add column "facebook_url" text;

alter table "public"."menus" add column "google_review_url" text;

alter table "public"."menus" add column "instagram_url" text;

CREATE INDEX idx_menus_slug ON public.menus USING btree (slug);


