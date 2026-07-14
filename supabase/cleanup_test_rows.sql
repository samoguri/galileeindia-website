-- Run this once in the Supabase SQL Editor to remove the __TEST__ rows
-- created while verifying the RLS policies. Deletes prayer_requests first
-- since it has a foreign key referencing contacts.contact_uuid.

delete from prayer_requests
where contact_uuid in (
  select contact_uuid from contacts where full_name ilike '__TEST__%'
);

delete from contacts
where full_name ilike '__TEST__%';
