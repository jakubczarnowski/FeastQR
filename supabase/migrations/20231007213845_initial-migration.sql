create table "public"."profiles" (
    "id" uuid not null,
    "updated_at" timestamp with time zone,
    "username" text,
    "full_name" text,
    "email" text not null
);


alter table "public"."profiles" enable row level security;

CREATE UNIQUE INDEX profiles_email_key ON public.profiles USING btree (email);

CREATE UNIQUE INDEX profiles_pkey ON public.profiles USING btree (id);

CREATE UNIQUE INDEX profiles_username_key ON public.profiles USING btree (username);

alter table "public"."profiles" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";

alter table "public"."profiles" add constraint "profiles_email_key" UNIQUE using index "profiles_email_key";

alter table "public"."profiles" add constraint "profiles_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."profiles" validate constraint "profiles_id_fkey";

alter table "public"."profiles" add constraint "profiles_username_key" UNIQUE using index "profiles_username_key";

alter table "public"."profiles" add constraint "username_length" CHECK ((char_length(username) >= 3)) not valid;

alter table "public"."profiles" validate constraint "username_length";

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

create policy "Public profiles are viewable by everyone."
on "public"."profiles"
as permissive
for select
to public
using (true);


create policy "Users can insert their own profile."
on "public"."profiles"
as permissive
for insert
to public
with check ((auth.uid() = id));


create policy "Users can update own profile."
on "public"."profiles"
as permissive
for update
to public
using ((auth.uid() = id));

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create policy "allow based on uid 176g1iq_0"
on "storage"."objects"
as permissive
for insert
to public
with check (((bucket_id = 'menus-files'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));

create policy "allow based on uid 176g1iq_1"
on "storage"."objects"
as permissive
for update
to public
using (((bucket_id = 'menus-files'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));

create policy "allow based on uid 176g1iq_2"
on "storage"."objects"
as permissive
for delete
to public
using (((bucket_id = 'menus-files'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));

create policy "allow select 176g1iq_0"
on "storage"."objects"
as permissive
for select
to public
using (((bucket_id = 'menus-files'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));


insert into storage.buckets (id, name)
  values ('menus-files', 'menus-files') ON CONFLICT DO NOTHING;
