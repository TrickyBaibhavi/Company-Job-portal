
import React from 'react';
import { MapPin, Briefcase, Clock, DollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Job } from '../lib/supabase';
import JobApplicationForm from './JobApplicationForm';

interface JobResultsProps {
  jobs: Job[];
  searchQuery: {
    jobTitle: string;
    location: string;
  };
}

const JobResults = ({ jobs, searchQuery }: JobResultsProps) => {
  if (jobs.length === 0) {
    return (
      <div className="mt-8 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="text-center">
          <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
          <p className="text-gray-600">
            No jobs match your search criteria for "{searchQuery.jobTitle}" in "{searchQuery.location}". 
            Try adjusting your search terms or check back later for new opportunities.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Found {jobs.length} jobs for "{searchQuery.jobTitle}"
        </h3>
        <p className="text-gray-600">in {searchQuery.location}</p>
      </div>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h4>
                <p className="text-lg font-semibold text-blue-600 mb-2">{job.company}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">{job.salary}</div>
                <div className="text-sm text-gray-500 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {job.posted_days} days ago
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4 text-gray-600">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Briefcase className="w-4 h-4 mr-1" />
                {job.type}
              </div>
            </div>

            <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>

            <div className="flex space-x-3">
              <JobApplicationForm job={job}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Apply Now
                </Button>
              </JobApplicationForm>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobResults;
