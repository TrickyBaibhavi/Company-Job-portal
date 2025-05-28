
import React from 'react';
import { Code, Palette, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 }
      ]
    },
    {
      icon: Globe,
      title: "Frontend Frameworks",
      skills: [
        { name: "React", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "Next.js", level: 90 },
        { name: "Angular", level: 75 }
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 85 }
      ]
    },
    {
      icon: Palette,
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 80 },
        { name: "Adobe XD", level: 75 },
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="h-6 w-6 text-pink-500" />
            <span className="text-pink-500 font-medium">Skills & Expertise</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-pink-500 rounded-xl flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-medium">{skill.name}</span>
                      <span className="text-gray-600 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-pink-500 rounded-full transition-all duration-1000 ease-out hover:from-pink-500 hover:to-blue-600"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
