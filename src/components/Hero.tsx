import React, { useState } from 'react';
import { Search, MapPin, Briefcase, ArrowRight, Play, Star, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import JobResults from './JobResults';
import { jobService } from '../services/jobService';
import { Job } from '../lib/supabase';
const Hero = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [searchResults, setSearchResults] = useState<Job[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleJobSearch = async () => {
    if (!jobTitle.trim() && !location.trim()) {
      return;
    }
    setIsSearching(true);
    setError(null);
    console.log('Searching for:', jobTitle, 'in', location);
    try {
      const results = await jobService.searchJobs(jobTitle, location);
      setSearchResults(results);
      setHasSearched(true);
      console.log('Search results:', results);
    } catch (err) {
      console.error('Search error:', err);
      setError('Failed to search jobs. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleJobSearch();
    }
  };
  return <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced gradient meshes */}
        <div className="absolute top-0 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-400/20 via-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-blue-200/60 to-purple-200/60 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute top-1/3 right-16 w-12 h-12 bg-gradient-to-br from-pink-200/60 to-red-200/60 rounded-xl -rotate-12"></div>
        <div className="absolute bottom-1/3 left-16 w-16 h-16 bg-gradient-to-br from-emerald-200/60 to-cyan-200/60 rounded-full"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
            <Sparkles className="w-5 h-5 text-yellow-500 mr-2 fill-current animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">✨ #1 AI-Powered Job Platform</span>
            <TrendingUp className="w-4 h-4 text-green-500 ml-2" />
          </div>

          {/* Modern Typography */}
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-[0.85] tracking-tight">
              <span className="block">Discover</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse">
                Your Future
              </span>
              <span className="block text-4xl lg:text-6xl font-bold text-gray-700 mt-4">
                Career Today
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
              Connect with leading companies worldwide. Powered by AI to match your skills with perfect opportunities and accelerate your career growth.
            </p>
          </div>

          {/* Modern Search Form */}
          <div className="bg-white/90 backdrop-blur-xl p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/40 max-w-3xl mx-auto">
            {error && <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-xl text-red-700">
                {error}
              </div>}
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Briefcase className="h-6 w-6 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                </div>
                <Input placeholder="Job title, skills, or company" value={jobTitle} onChange={e => setJobTitle(e.target.value)} onKeyPress={handleKeyPress} className="pl-14 h-16 border-2 border-gray-200 rounded-2xl text-lg placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 font-medium" />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <MapPin className="h-6 w-6 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                </div>
                <Input placeholder="City, state, or remote" value={location} onChange={e => setLocation(e.target.value)} onKeyPress={handleKeyPress} className="pl-14 h-16 border-2 border-gray-200 rounded-2xl text-lg placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 font-medium" />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleJobSearch} disabled={isSearching || !jobTitle.trim() && !location.trim()} className="flex-1 h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg">
                <Search className="mr-3 h-6 w-6" />
                {isSearching ? 'Searching...' : 'Find Dream Jobs'}
                {!isSearching && <ArrowRight className="ml-3 h-6 w-6" />}
              </Button>
              
            </div>
          </div>

          {/* Enhanced Stats with Modern Cards */}
          <div className="grid grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                50K+
              </div>
              <div className="text-gray-600 font-semibold text-base">Active Jobs</div>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                2K+
              </div>
              <div className="text-gray-600 font-semibold text-base">Companies</div>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-green-600 to-emerald-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                100K+
              </div>
              <div className="text-gray-600 font-semibold text-base">Success Stories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Search Results */}
      {hasSearched && <JobResults jobs={searchResults} searchQuery={{
      jobTitle,
      location
    }} />}
    </section>;
};
export default Hero;