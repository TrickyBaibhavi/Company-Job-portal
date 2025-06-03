
import React from 'react';
import { Briefcase, Mail, Phone, MapPin, Linkedin, Github, Code, Send, Heart, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@johndoe.dev', href: 'mailto:hello@johndoe.dev' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/johndoe', label: 'LinkedIn', followers: '2.5K+' },
    { icon: Github, href: 'https://github.com/johndoe', label: 'GitHub', followers: '1.8K+' },
    { icon: Code, href: '#', label: 'Portfolio', followers: '500+' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Enhanced Brand Section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight">Job Portal</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Passionate developer creating innovative solutions and helping businesses 
              achieve their digital goals through cutting-edge technology.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Follow Me</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-700/50"
                  >
                    <div className="flex items-center space-x-3">
                      <social.icon className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
                      <span className="font-medium">{social.label}</span>
                    </div>
                    <span className="text-sm text-gray-400">{social.followers}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Quick Links</h3>
            <nav className="space-y-4">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 transform text-lg"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span>{link.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Enhanced Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Contact Info</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="group flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-700/50"
                >
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                    <contact.icon className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Newsletter */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
              <p className="text-gray-300 text-lg">
                Get notified about new projects and opportunities.
              </p>
            </div>
            
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700/50 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-white placeholder:text-gray-400 text-lg"
              />
              <Button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <Send className="w-5 h-5 mr-2" />
                Subscribe
              </Button>
            </div>

            {/* Stats Card */}
            <div className="p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-2xl font-bold text-white">4.9</span>
                </div>
                <div className="text-gray-300">Client Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {currentYear} Job Portal. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span>by passionate developers</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors duration-300 hover:underline">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300 hover:underline">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300 hover:underline">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300 hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
