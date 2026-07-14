import { supabase } from "../lib/supabase";

export interface PrayerRequestRow {
  prayer_uuid: string;
  prayer_request: string;
  created_at: string;
}

export interface ContactWithPrayers {
  contact_uuid: string;
  full_name: string;
  email: string | null;
  phone: string | null;
  created_at: string;
  prayer_requests: PrayerRequestRow[];
}

export async function signIn(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function fetchContactsWithPrayers(): Promise<
  ContactWithPrayers[]
> {
  const { data, error } = await supabase
    .from("contacts")
    .select(
      "contact_uuid, full_name, email, phone, created_at, prayer_requests(prayer_uuid, prayer_request, created_at)"
    )
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data ?? [];
}
