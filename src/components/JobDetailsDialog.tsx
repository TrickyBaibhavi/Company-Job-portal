
import React from 'react';
import { MapPin, Briefcase, Clock, DollarSign, Building2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Job } from '../lib/supabase';

interface JobDetailsDialogProps {
  job: Job | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const JobDetailsDialog = ({ job, open, onOpenChange }: JobDetailsDialogProps) => {
  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {job.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Company Info */}
          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
            <Building2 className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold text-blue-600">{job.company}</h3>
              <p className="text-gray-600">Company</p>
            </div>
          </div>

          {/* Job Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <MapPin className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">{job.location}</p>
                <p className="text-sm text-gray-600">Location</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Briefcase className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">{job.type}</p>
                <p className="text-sm text-gray-600">Job Type</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <DollarSign className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-green-600">{job.salary}</p>
                <p className="text-sm text-gray-600">Salary</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Clock className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">{job.posted_days} days ago</p>
                <p className="text-sm text-gray-600">Posted</p>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h4>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {job.description}
              </p>
            </div>
          </div>

          {/* Additional Details */}
          <div className="border-t pt-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Additional Information</h4>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-medium">Job ID:</span> #{job.id}</p>
              {job.created_at && (
                <p><span className="font-medium">Listed on:</span> {new Date(job.created_at).toLocaleDateString()}</p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailsDialog;
