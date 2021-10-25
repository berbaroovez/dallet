import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_DB_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export { supabase };
