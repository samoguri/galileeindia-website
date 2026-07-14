-- Run this once in the Supabase SQL Editor (Project > SQL Editor > New query).
-- Right now contacts and prayer_requests have no Row Level Security, so the
-- public anon key (shipped in the site's JS bundle) can read and delete every
-- visitor's name, phone, email, and prayer request. This locks it down so:
--   - anyone can still submit the Join Us form (INSERT)
--   - only signed-in admin users can read the submissions (SELECT)

alter table contacts enable row level security;
alter table prayer_requests enable row level security;

create policy "Public can submit contact" on contacts
  for insert to anon
  with check (true);

create policy "Public can submit prayer request" on prayer_requests
  for insert to anon
  with check (true);

create policy "Admins can view contacts" on contacts
  for select to authenticated
  using (true);

create policy "Admins can view prayer requests" on prayer_requests
  for select to authenticated
  using (true);
