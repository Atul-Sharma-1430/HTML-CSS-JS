const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://ndadpmrhmwdvmoodwame.supabase.co";
const supabasAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kYWRwbXJobXdkdm1vb2R3YW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3NTI0ODgsImV4cCI6MjA3MzMyODQ4OH0.EhY-FjSW-Vc4KRruVAvQghV1tARSWCFVTtqQGX2OLqA";

const supabase = createClient(supabaseUrl, supabasAnonKey);
module.exports = supabase;
