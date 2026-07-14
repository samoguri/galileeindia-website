-- Run this once in the Supabase SQL Editor.
-- secure_contacts.sql enabled RLS with only INSERT (public) and SELECT (admin)
-- policies, so Studio's Table Editor now blocks all deletes -- no DELETE
-- policy exists for any role, including the dashboard. This adds one so
-- signed-in admins (both Studio and the app's /admin panel) can delete rows.

create policy "Admins can delete contacts" on contacts
  for delete to authenticated
  using (true);

create policy "Admins can delete prayer requests" on prayer_requests
  for delete to authenticated
  using (true);
