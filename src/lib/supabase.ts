
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dkmunrrigqixhpkhneth.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrbXVucnJpZ3FpeGhwa2huZXRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NDkzOTksImV4cCI6MjA2NDUyNTM5OX0.5SfIImfL1_yDZY4BpzpyGq6M4LlgMhCMDR5lcOrPXZk'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Job = {
  id: number
  title: string
  company: string
  location: string
  type: string
  salary: string
  description: string
  posted_days: number
  created_at?: string
}
