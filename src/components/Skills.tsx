
import React, { useState } from 'react';
import { Code, Palette, Database, Globe, Server, Smartphone, Brain, Award } from 'lucide-react';

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
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-gradient-to-l from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-200 rounded-3xl rotate-12 opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-purple-600 font-semibold text-lg">Skills & Expertise</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Technical
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels across different technologies, 
            backed by years of hands-on experience.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`group flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-xl transform scale-105`
                  : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg border border-gray-200'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Enhanced Skills Display */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Active Category Skills */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-4 mb-8">
              <div className={`w-16 h-16 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                <skillCategories[activeCategory].icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{skillCategories[activeCategory].title}</h3>
                <p className="text-gray-600">Proficiency & Experience</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl font-bold text-gray-900">{skill.name}</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                        {skill.experience}
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="space-y-8 animate-scale-in">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Achievements & Certifications</h3>
              <p className="text-gray-600">Professional recognition and continuous learning</p>
            </div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{achievement.title}</h4>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <span>{achievement.org}</span>
                        <span>•</span>
                        <span>{achievement.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skill Summary Card */}
            <div className="p-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl text-white shadow-2xl">
              <div className="text-center">
                <div className="text-4xl font-black mb-4">500+</div>
                <div className="text-xl font-semibold mb-2">Projects Completed</div>
                <div className="text-purple-100">Across various industries and technologies</div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-purple-400">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-purple-100">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-purple-100">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-purple-100">Certifications</div>
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
