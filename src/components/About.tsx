import React from 'react';
import { User, Briefcase, Code, Users, Award, Target, Heart, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const About = () => {
  const highlights = [{
    icon: Briefcase,
    title: "5+ Years Experience", 
    description: "Professional software development across various industries",
    color: "from-blue-500 to-cyan-500"
  }, {
    icon: Code,
    title: "Full Stack Developer",
    description: "Expertise in both frontend and backend technologies",
    color: "from-purple-500 to-pink-500"
  }, {
    icon: Users,
    title: "Team Leadership",
    description: "Experience leading development teams and mentoring junior developers",
    color: "from-green-500 to-emerald-500"
  }];

  const values = [{
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering high-quality solutions"
  }, {
    icon: Target,
    title: "Innovation",
    description: "Always exploring new technologies and approaches"
  }, {
    icon: Heart,
    title: "Passion",
    description: "Genuinely love what I do and it shows in my work"
  }];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume file in the public folder
    link.download = 'John_Doe_Resume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPortfolio = () => {
    window.open('https://devspace-baibhavi.lovable.app/', '_blank');
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-200 rounded-2xl rotate-45 opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <span className="text-blue-600 font-semibold text-lg">About Me</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Passionate Developer &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Problem Solver
                </span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>I'm a dedicated full-stack developer with a passion for creating innovative solutions that make a real impact. </p>
                <p>Although I'm a fresher in the industry, my projects reflect a solid foundation in both frontend and backend technologies, and a keen interest in solving real-world problems through code. I'm always eager to learn, collaborate, and contribute to impactful tech solutions.</p>
              </div>
            </div>

            {/* Enhanced Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => <div key={index} className="group relative">
                  
                </div>)}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={handleDownloadResume}
                className="h-14 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                onClick={handleViewPortfolio}
                variant="outline" 
                className="h-14 px-8 border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Enhanced Right Content */}
          <div className="relative animate-scale-in">
            {/* Main Profile Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl transform scale-105"></div>
              <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-3 border border-white/30 shadow-2xl">
                <img src="https://i.ibb.co/qM1Jn9RZ/WhatsApp-Image-2025-05-28-at-12-34-01-2b27a1ed.jpg" alt="Professional Profile" className="w-full h-auto rounded-2xl shadow-xl" />
              </div>
            </div>

            {/* Floating Value Cards */}
            {values.map((value, index) => <div key={index} className={`absolute bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 animate-pulse ${index === 0 ? '-top-6 -left-6' : index === 1 ? 'top-1/2 -right-8' : '-bottom-6 left-8'}`} style={{
            animationDelay: `${index * 500}ms`
          }}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{value.title}</div>
                    <div className="text-gray-600 text-sm">{value.description}</div>
                  </div>
                </div>
              </div>)}

            {/* Background Decorations */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-5 transform rotate-3"></div>
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-pink-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
