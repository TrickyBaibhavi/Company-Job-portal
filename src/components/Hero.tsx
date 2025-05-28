import React, { useState } from 'react';
import { Search, MapPin, Briefcase, ArrowRight, Play, Star } from 'lucide-react';
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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-10 blur-2xl animate-pulse delay-500"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-200 rounded-3xl transform rotate-12 opacity-60"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl transform -rotate-12 opacity-80"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-blue-100 rounded-full opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Enhanced Left Content */}
        <div className="space-y-10 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-blue-100 shadow-sm">
            <Star className="w-4 h-4 text-yellow-500 mr-2 fill-current" />
            <span className="text-sm font-medium text-gray-700">#1 Job Portal Platform</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight">
              Find your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                dream job
              </span>
              <span className="block text-4xl lg:text-5xl font-bold text-gray-700 mt-2">
                with ease
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
              Connect with top companies, explore exciting opportunities, and take your career to the next level with our AI-powered job matching.
            </p>
          </div>

          {/* Enhanced Search Form */}
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="relative group">
                <Briefcase className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  placeholder="Job title, skills, or company"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="pl-12 h-14 border-gray-200 rounded-xl text-lg placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>
              <div className="relative group">
                <MapPin className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  placeholder="City, state, or remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-12 h-14 border-gray-200 rounded-xl text-lg placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleJobSearch}
                className="flex-1 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <Search className="mr-3 h-5 w-5" />
                Search Jobs
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="h-14 px-8 border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 rounded-xl font-semibold transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center group cursor-pointer">
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                50K+
              </div>
              <div className="text-gray-600 font-medium text-lg">Active Jobs</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                2K+
              </div>
              <div className="text-gray-600 font-medium text-lg">Companies</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                100K+
              </div>
              <div className="text-gray-600 font-medium text-lg">Success Stories</div>
            </div>
          </div>
        </div>

        {/* Enhanced Right Content */}
        <div className="relative animate-scale-in">
          {/* Main Image Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl transform scale-105"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-2 border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop"
                alt="Professional workspace with laptop and modern technology"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Floating Achievement Cards */}
          <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 animate-pulse">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">98% Match</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 animate-pulse delay-1000">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">24/7</div>
                <div className="text-gray-600 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
