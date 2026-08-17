-- Run this once in the Supabase SQL Editor to remove test/debug rows.
-- Deletes prayer_requests first since it has a foreign key referencing
-- contacts.contact_uuid.

delete from prayer_requests
where contact_uuid in (
  select contact_uuid from contacts
  where full_name ilike '__TEST__%' or full_name = 'erere'
);

delete from contacts
where full_name ilike '__TEST__%' or full_name = 'erere';
