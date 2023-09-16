import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://iajdicjucmnllpiflzzg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhamRpY2p1Y21ubGxwaWZsenpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkyMjc3MjAsImV4cCI6MjAwNDgwMzcyMH0.hSFA2ii477mJwnabsdyj3hwEe6BjsRP5rDyEwNB1KdA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
