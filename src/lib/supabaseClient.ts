
import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uqjekcdrybwklyotxfha.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxamVrY2RyeWJ3a2x5b3R4ZmhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTgwNjMsImV4cCI6MjA2NTU5NDA2M30.nwiBSlylD_0gPdCfzGeK2MvQKd6EZzh5fKBHXxdi3e0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
