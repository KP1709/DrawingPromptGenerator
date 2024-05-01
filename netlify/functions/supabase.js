import dotenv from 'dotenv'
dotenv.config()
const {
    VITE_APP_SUPABASE_API_KEY
} = process.env;

// Connect to Supabase
import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://whaftqpyevfgxqxdfixi.supabase.co", VITE_APP_SUPABASE_API_KEY);

// Serverless function
export default async event => {

  let { data, error } = await supabase
    .from('DrawingPrompts')
    .select('*')

    return Response.json({data})
  
}