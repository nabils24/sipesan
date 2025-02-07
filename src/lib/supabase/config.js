import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://sywwdvntdanzpvjdyexh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5d3dkdm50ZGFuenB2amR5ZXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MjI1NzMsImV4cCI6MjA1MTM5ODU3M30.jl3CRH5xvWO1aMXGNDzN7aMklnAcY079NHREge7GhdI'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;