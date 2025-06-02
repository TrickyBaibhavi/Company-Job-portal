
export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  postedDays: number;
  skills: string[];
}

export const mockJobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    description: "We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user-facing web applications using React, TypeScript, and modern web technologies.",
    postedDays: 2,
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $130,000",
    description: "Join our dynamic startup as a Full Stack Developer. Work with cutting-edge technologies including React, Node.js, and cloud platforms to build scalable web applications.",
    postedDays: 1,
    skills: ["React", "Node.js", "JavaScript", "MongoDB", "AWS"]
  },
  {
    id: 3,
    title: "React Developer",
    company: "Digital Solutions",
    location: "New York, NY",
    type: "Contract",
    salary: "$70 - $90/hour",
    description: "Seeking an experienced React Developer for a 6-month contract position. Must have strong experience with React hooks, state management, and modern development practices.",
    postedDays: 3,
    skills: ["React", "Redux", "JavaScript", "Jest", "Git"]
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "BigTech Corp",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$110,000 - $160,000",
    description: "Software Engineer position focusing on web development and distributed systems. Experience with React, microservices, and cloud technologies preferred.",
    postedDays: 5,
    skills: ["React", "Java", "Python", "Kubernetes", "Docker"]
  },
  {
    id: 5,
    title: "UI/UX Developer",
    company: "Creative Agency",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$75,000 - $100,000",
    description: "UI/UX Developer role combining design and development skills. Work on creating beautiful, user-friendly interfaces using React and modern design tools.",
    postedDays: 4,
    skills: ["React", "Figma", "CSS", "JavaScript", "Design Systems"]
  },
  {
    id: 6,
    title: "Backend Developer",
    company: "DataFlow Systems",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$85,000 - $115,000",
    description: "Backend Developer position working with Node.js, databases, and API development. Some frontend experience with React is a plus.",
    postedDays: 6,
    skills: ["Node.js", "PostgreSQL", "API", "React", "Express"]
  }
];

export const searchJobs = (jobTitle: string, location: string): Job[] => {
  if (!jobTitle && !location) return [];
  
  const jobTitleLower = jobTitle.toLowerCase().trim();
  const locationLower = location.toLowerCase().trim();
  
  return mockJobs.filter(job => {
    const titleMatch = !jobTitleLower || 
      job.title.toLowerCase().includes(jobTitleLower) ||
      job.skills.some(skill => skill.toLowerCase().includes(jobTitleLower)) ||
      job.description.toLowerCase().includes(jobTitleLower);
    
    const locationMatch = !locationLower || 
      job.location.toLowerCase().includes(locationLower) ||
      job.location.toLowerCase() === 'remote';
    
    return titleMatch && locationMatch;
  });
};
