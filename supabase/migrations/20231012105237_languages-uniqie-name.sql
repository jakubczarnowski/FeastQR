CREATE UNIQUE INDEX languages_name_key ON public.languages USING btree (name);

alter table "public"."languages" add constraint "languages_name_key" UNIQUE using index "languages_name_key";


