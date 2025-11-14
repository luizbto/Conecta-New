import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://lrwzxowwdxipjrzapbjc.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxyd3p4b3d3ZHhpcGpyemFwYmpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0NTMxODUsImV4cCI6MjA3NzAyOTE4NX0.50TFQRMFzmxXQSDeUCuJiesSgWJRypAmusp22ctUXhI'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
