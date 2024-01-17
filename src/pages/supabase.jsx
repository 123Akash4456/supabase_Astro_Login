
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ielhdisimdtgarjkgazl.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbGhkaXNpbWR0Z2FyamtnYXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxMzUyNTIsImV4cCI6MjAyMDcxMTI1Mn0.EtZh_CXZTiJpBWTusp_p9oAKPqWhcwrX-u0Jf9IzkJE"
export const supabase = createClient(supabaseUrl, supabaseKey)

