import { supabase } from "../lib/supabase";

export interface LookupItem {
  code: string;
  description: string;
}

export async function getHowHeard(): Promise<LookupItem[]> {
  const { data, error } = await supabase
    .from("how_heard")
    .select("heard_code, description")
    .order("display_order");

  if (error) {
    throw error;
  }

  return (data ?? []).map((item) => ({
    code: item.heard_code,
    description: item.description,
  }));
}