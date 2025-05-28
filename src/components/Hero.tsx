
import React, { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleJobSearch = () => {
    console.log('Searching for:', jobTitle, 'in', location);
    // Job search functionality would go here
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600 transform rotate-45 rounded-3xl"></div>
        <div className="absolute top-40 right-40 w-32 h-32 bg-pink-500 transform rotate-12 rounded-2xl"></div>
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-blue-400 transform -rotate-12 rounded-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find the most 
              <span className="text-blue-600"> exciting</span>
              <br />
              <span className="text-pink-500">startup jobs</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover opportunities that match your skills and passion. Connect with innovative companies and build your dream career.
            </p>
          </div>

          {/* Job Search Form */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Job Title or keyword"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-blue-500"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-blue-500"
                />
              </div>
              <Button 
                onClick={handleJobSearch}
                className="h-12 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Search className="mr-2 h-5 w-5" />
                Find Job
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-gray-600">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500">500+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600">Job Seekers</div>
            </div>
          </div>
        </div>

        {/* Right Content - Professional Image */}
        <div className="relative animate-scale-in">
          <div className="relative z-10">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=600&fit=crop&crop=face"
              alt="Professional using mobile device"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
