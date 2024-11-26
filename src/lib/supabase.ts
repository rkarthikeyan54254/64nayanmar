import { createClient } from '@supabase/supabase-js';

// Provide default values for development (replace with your actual Supabase project details)
const supabaseUrl = 'https://jqlvlnayjkdyyojxdajn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxbHZsbmF5amtkeXlvanhkYWpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2Mzg0NTMsImV4cCI6MjA0ODIxNDQ1M30.0nlPUCiWzvSwO5Ptv0h5rGahhSYpyzv_0p5qP4awa3w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);