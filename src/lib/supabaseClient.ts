
import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase: SupabaseClient

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  console.error("Supabase environment variables not found. The app will run, but form submissions will fail until the Supabase connection is established. Please try refreshing the page.");

  // Create a mock client to prevent the app from crashing.
  // The functions will return an error that will be caught by react-query.
  const mockSupabaseClient = {
    from: () => ({
      select: () => Promise.resolve({ error: { message: 'Supabase not configured.' } }),
      insert: () => Promise.resolve({ error: { message: 'Supabase not configured.' } }),
      update: () => Promise.resolve({ error: { message: 'Supabase not configured.' } }),
      delete: () => Promise.resolve({ error: { message: 'Supabase not configured.' } }),
    }),
    functions: {
      invoke: () => Promise.resolve({ error: { message: 'Supabase not configured. Please try refreshing the page.' } })
    },
  };

  supabase = mockSupabaseClient as any;
}

export { supabase }
