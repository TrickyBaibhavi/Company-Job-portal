
import React, { useState } from 'react';
import { Code, Palette, Database, Globe, Server, Smartphone, Brain, Award, Sparkles, TrendingUp } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript", level: 95, experience: "5+ years" },
        { name: "TypeScript", level: 90, experience: "3+ years" },
        { name: "Python", level: 85, experience: "4+ years" },
        { name: "Java", level: 80, experience: "3+ years" }
      ]
    },
    {
      icon: Globe,
      title: "Frontend Frameworks",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React", level: 95, experience: "4+ years" },
        { name: "Vue.js", level: 85, experience: "2+ years" },
        { name: "Next.js", level: 90, experience: "3+ years" },
        { name: "Angular", level: 75, experience: "2+ years" }
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90, experience: "4+ years" },
        { name: "Express", level: 85, experience: "3+ years" },
        { name: "MongoDB", level: 80, experience: "3+ years" },
        { name: "PostgreSQL", level: 85, experience: "4+ years" }
      ]
    },
    {
      icon: Palette,
      title: "Design & Tools",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Figma", level: 80, experience: "2+ years" },
        { name: "Adobe XD", level: 75, experience: "2+ years" },
        { name: "Git", level: 95, experience: "5+ years" },
        { name: "Docker", level: 80, experience: "2+ years" }
      ]
    }
  ];

  const achievements = [
    { icon: Award, title: "Certified React Developer", org: "Meta", year: "2023" },
    { icon: Award, title: "AWS Solutions Architect", org: "Amazon", year: "2022" },
    { icon: Award, title: "Google Cloud Professional", org: "Google", year: "2023" }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-gradient-to-l from-purple-400/20 via-pink-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-3xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-br from-emerald-200/40 to-cyan-200/40 rounded-2xl -rotate-12"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-white/30 shadow-lg mb-8">
            <Code className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-600 font-semibold text-sm">Skills & Expertise</span>
            <Sparkles className="w-4 h-4 text-yellow-500 ml-2 fill-current animate-pulse" />
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[0.85] tracking-tight">
            <span className="block">Technical</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-pulse">
              Excellence
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            A comprehensive showcase of technical expertise across modern technologies, 
            backed by years of hands-on experience and continuous learning.
          </p>
        </div>

        {/* Modern Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`group flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl transform scale-105 shadow-purple-500/25`
                    : 'bg-white/80 backdrop-blur-md text-gray-700 hover:bg-white hover:shadow-xl border border-white/40 hover:scale-105'
                }`}
              >
                <IconComponent className="w-6 h-6" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Enhanced Skills Display */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Active Category Skills */}
          <div className="space-y-10 animate-fade-in">
            <div className="flex items-center space-x-6 mb-12">
              <div className={`w-20 h-20 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                {React.createElement(skillCategories[activeCategory].icon, { className: "h-10 w-10 text-white" })}
              </div>
              <div>
                <h3 className="text-4xl font-black text-gray-900 mb-2">{skillCategories[activeCategory].title}</h3>
                <p className="text-gray-600 text-lg font-medium">Proficiency & Experience</p>
              </div>
            </div>
            
            <div className="space-y-8">
              {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="group p-8 bg-white/90 backdrop-blur-md rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-black text-gray-900">{skill.name}</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-bold rounded-full">
                        {skill.experience}
                      </span>
                    </div>
                    <span className="text-3xl font-black text-gray-900">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Stats */}
          <div className="space-y-10 animate-scale-in">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-black text-gray-900 mb-4">Achievements</h3>
              <p className="text-gray-600 text-lg">Professional recognition and continuous learning</p>
            </div>

            <div className="space-y-8">
              {achievements.map((achievement, index) => {
                const AchievementIcon = achievement.icon;
                return (
                  <div key={index} className="group p-8 bg-white/90 backdrop-blur-md rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-3">
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <AchievementIcon className="h-10 w-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-black text-gray-900 mb-2">{achievement.title}</h4>
                        <div className="flex items-center space-x-3 text-gray-600 text-lg">
                          <span className="font-semibold">{achievement.org}</span>
                          <span>•</span>
                          <span>{achievement.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Summary Card */}
            <div className="p-10 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="text-5xl font-black mb-4">500+</div>
                  <div className="text-2xl font-bold mb-3">Projects Completed</div>
                  <div className="text-purple-100 text-lg">Across various industries and technologies</div>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-purple-400/30">
                  <div className="text-center">
                    <div className="text-3xl font-black mb-2">15+</div>
                    <div className="text-sm text-purple-100 font-medium">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black mb-2">50+</div>
                    <div className="text-sm text-purple-100 font-medium">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black mb-2">3</div>
                    <div className="text-sm text-purple-100 font-medium">Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
