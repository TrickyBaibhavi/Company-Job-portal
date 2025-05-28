
import React from 'react';
import { User, Briefcase, Code, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "5+ Years Experience",
      description: "Professional software development across various industries"
    },
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Expertise in both frontend and backend technologies"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Experience leading development teams and mentoring junior developers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <User className="h-6 w-6 text-blue-600" />
                <span className="text-blue-600 font-medium">About Me</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Passionate Developer & Problem Solver
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a dedicated full-stack developer with a passion for creating innovative 
                solutions that make a real impact. With over 5 years of experience in the 
                tech industry, I specialize in building scalable web applications and 
                leading development teams to success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey began with a Computer Science degree, and I've since worked 
                with startups and established companies, always focused on delivering 
                high-quality solutions that exceed expectations.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                alt="Professional Profile"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Background Decorations */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-pink-500 rounded-2xl opacity-10 transform rotate-2"></div>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-pink-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-600 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
