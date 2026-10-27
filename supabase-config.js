
const SUPABASE_URL = "https://fepeabjugntokoxcoqdm.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_kd4-TnRCdS7oBjKhwzaByQ_QOXFVsmU";

window.parkSupabase = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;
