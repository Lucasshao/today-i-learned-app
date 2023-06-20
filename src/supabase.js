import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gfijxnihrinkgrerqmoi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmaWp4bmlocmlua2dyZXJxbW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1MzE0NjgsImV4cCI6MjAwMjEwNzQ2OH0.zMgG75AL42-0G9IYWsJvY2i7UQOU9CQ6GCom-lq6sYM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
