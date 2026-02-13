import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fganghgfheknzpkdedjn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnYW5naGdmaGVrbnpwa2RlZGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2MDI3NzQsImV4cCI6MjA4NTE3ODc3NH0.3WPgOHgvLGA7nWyYGfd7HYKmtoCqNaa19tPApNv6xRs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
