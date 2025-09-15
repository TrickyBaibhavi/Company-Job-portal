
import { supabase } from '@/integrations/supabase/client'
import type { Database } from '@/integrations/supabase/types'

type Job = Database['public']['Tables']['jobs']['Row']

export const jobService = {
  // Search jobs with filters
  async searchJobs(title?: string, location?: string): Promise<Job[]> {
    console.log('Searching jobs in Supabase:', { title, location })
    
    let query = supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false })

    // Add filters if provided
    if (title && title.trim()) {
      query = query.ilike('title', `%${title.trim()}%`)
    }
    
    if (location && location.trim()) {
      query = query.ilike('location', `%${location.trim()}%`)
    }

    const { data, error } = await query

    if (error) {
      console.error('Error searching jobs:', error)
      throw new Error('Failed to search jobs')
    }

    console.log('Found jobs:', data)
    return data || []
  },

  // Get all jobs
  async getAllJobs(): Promise<Job[]> {
    console.log('Fetching all jobs from Supabase')
    
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching jobs:', error)
      throw new Error('Failed to fetch jobs')
    }

    return data || []
  },

  // Add a new job (for testing)
  async addJob(job: Omit<Job, 'id' | 'created_at'>): Promise<Job> {
    console.log('Adding job to Supabase:', job)
    
    const { data, error } = await supabase
      .from('jobs')
      .insert([job])
      .select()
      .single()

    if (error) {
      console.error('Error adding job:', error)
      throw new Error('Failed to add job')
    }

    console.log('Job added successfully:', data)
    return data
  }
}
