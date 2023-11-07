import { createClient } from '@supabase/supabase-js';

const SUPABASEURL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASEKEY = process.env.NEXT_PUBLIC_ANNON_KEY!;

export const supabase = createClient(SUPABASEURL, SUPABASEKEY, {
  auth: {
    persistSession: false,
  },
});
