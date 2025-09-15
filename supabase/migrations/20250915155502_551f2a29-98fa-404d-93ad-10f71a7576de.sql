-- Create jobs table for job search functionality
CREATE TABLE public.jobs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'Full-time',
  salary TEXT NOT NULL,
  description TEXT NOT NULL,
  posted_days INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (jobs are public)
CREATE POLICY "Jobs are viewable by everyone" 
ON public.jobs 
FOR SELECT 
USING (true);

-- Insert comprehensive job data covering various industries and locations
INSERT INTO public.jobs (title, company, location, type, salary, description, posted_days) VALUES
-- Tech Jobs
('Senior Frontend Developer', 'TechFlow Inc.', 'San Francisco, CA', 'Full-time', '$120,000 - $160,000', 'Lead frontend development using React, TypeScript, and modern web technologies. Work on cutting-edge user interfaces and collaborate with design teams.', 1),
('Full Stack Engineer', 'StartupHub', 'Remote', 'Full-time', '$100,000 - $140,000', 'Build scalable web applications using React, Node.js, and cloud platforms. Join a fast-paced startup environment with growth opportunities.', 2),
('React Developer', 'Digital Innovations', 'New York, NY', 'Contract', '$80 - $100/hour', 'Develop complex React applications with state management, hooks, and modern development practices. 6-month contract with extension possibility.', 1),
('Software Engineer', 'BigTech Solutions', 'Seattle, WA', 'Full-time', '$130,000 - $180,000', 'Work on distributed systems and web applications. Experience with React, microservices, and cloud technologies required.', 3),
('UI/UX Developer', 'Creative Studios', 'Los Angeles, CA', 'Full-time', '$90,000 - $120,000', 'Combine design and development skills to create beautiful user experiences. Work with React, Figma, and design systems.', 2),
('Backend Developer', 'DataTech Corp', 'Austin, TX', 'Full-time', '$95,000 - $125,000', 'Develop robust APIs and backend systems using Node.js, PostgreSQL, and cloud technologies. Some React experience preferred.', 4),
('DevOps Engineer', 'CloudFirst', 'Denver, CO', 'Full-time', '$110,000 - $150,000', 'Manage CI/CD pipelines, containerization, and cloud infrastructure. Experience with AWS, Docker, and Kubernetes required.', 2),
('Mobile App Developer', 'AppGenius', 'Miami, FL', 'Full-time', '$85,000 - $115,000', 'Develop cross-platform mobile applications using React Native. Work on consumer-facing apps with millions of users.', 1),

-- Healthcare Jobs
('Registered Nurse', 'City General Hospital', 'Chicago, IL', 'Full-time', '$65,000 - $85,000', 'Provide direct patient care in medical-surgical unit. BSN required, 2+ years experience preferred. Excellent benefits package.', 1),
('Physical Therapist', 'Wellness Rehab Center', 'Phoenix, AZ', 'Full-time', '$75,000 - $95,000', 'Treat patients with movement disorders and injuries. DPT required, experience with sports medicine preferred.', 3),
('Medical Assistant', 'Family Care Clinic', 'Portland, OR', 'Full-time', '$40,000 - $50,000', 'Support physicians in patient care, maintain medical records, and assist with clinical procedures. Certification required.', 2),
('Healthcare Data Analyst', 'MedTech Analytics', 'Boston, MA', 'Full-time', '$70,000 - $90,000', 'Analyze healthcare data to improve patient outcomes. Experience with SQL, Python, and healthcare systems required.', 1),

-- Education Jobs
('Elementary School Teacher', 'Riverside Elementary', 'San Diego, CA', 'Full-time', '$50,000 - $70,000', 'Teach 3rd grade students in innovative learning environment. Teaching credential and experience with technology integration preferred.', 2),
('Software Training Instructor', 'TechEd Academy', 'Atlanta, GA', 'Full-time', '$60,000 - $80,000', 'Teach coding bootcamp students web development skills including React, JavaScript, and full-stack development.', 1),
('University Professor - Computer Science', 'State University', 'College Park, MD', 'Full-time', '$80,000 - $120,000', 'Teach undergraduate computer science courses and conduct research. PhD in Computer Science required.', 5),

-- Finance Jobs
('Financial Analyst', 'Global Finance Corp', 'New York, NY', 'Full-time', '$75,000 - $100,000', 'Analyze financial data, create reports, and support investment decisions. CFA preferred, Excel and SQL skills required.', 1),
('Investment Advisor', 'Wealth Management Group', 'San Francisco, CA', 'Full-time', '$80,000 - $120,000 + Commission', 'Provide financial planning services to high-net-worth clients. Series 7 and 66 licenses required.', 3),
('Accounting Manager', 'Manufacturing Solutions', 'Detroit, MI', 'Full-time', '$70,000 - $90,000', 'Oversee accounting operations, financial reporting, and tax preparation. CPA preferred, 5+ years experience required.', 2),

-- Marketing & Design Jobs
('Digital Marketing Manager', 'Growth Marketing Co', 'Remote', 'Full-time', '$70,000 - $95,000', 'Lead digital marketing campaigns across multiple channels. Experience with SEO, SEM, social media, and analytics required.', 1),
('Graphic Designer', 'Creative Agency Plus', 'Los Angeles, CA', 'Full-time', '$55,000 - $75,000', 'Create visual designs for digital and print media. Proficiency in Adobe Creative Suite and web design required.', 2),
('Content Marketing Specialist', 'Brand Builders', 'Austin, TX', 'Full-time', '$50,000 - $70,000', 'Develop content marketing strategies and create engaging content across platforms. Writing and social media skills required.', 1),

-- Sales Jobs
('Sales Representative', 'Tech Solutions Inc', 'Dallas, TX', 'Full-time', '$60,000 - $100,000 + Commission', 'Sell software solutions to enterprise clients. B2B sales experience and technical knowledge preferred.', 2),
('Account Manager', 'Business Services Corp', 'Charlotte, NC', 'Full-time', '$65,000 - $85,000 + Bonus', 'Manage existing client relationships and identify growth opportunities. Account management experience required.', 1),
('Sales Development Representative', 'StartupSales', 'Remote', 'Full-time', '$45,000 - $65,000 + Commission', 'Generate qualified leads and support sales team. Great entry-level opportunity with training provided.', 1),

-- Operations & Management Jobs
('Operations Manager', 'Logistics Leader', 'Memphis, TN', 'Full-time', '$75,000 - $100,000', 'Oversee daily operations and optimize processes. Supply chain or logistics experience preferred.', 3),
('Project Manager', 'Construction Plus', 'Las Vegas, NV', 'Full-time', '$80,000 - $110,000', 'Manage construction projects from planning to completion. PMP certification and construction experience required.', 2),
('Human Resources Manager', 'People First Corp', 'Minneapolis, MN', 'Full-time', '$70,000 - $95,000', 'Lead HR initiatives including recruitment, training, and employee relations. HR degree and SHRM certification preferred.', 1),

-- Customer Service & Support
('Customer Success Manager', 'SaaS Solutions', 'Remote', 'Full-time', '$60,000 - $80,000', 'Ensure customer satisfaction and drive product adoption. SaaS experience and strong communication skills required.', 1),
('Technical Support Specialist', 'Software Support Co', 'Raleigh, NC', 'Full-time', '$45,000 - $60,000', 'Provide technical support for software products. Programming knowledge and customer service skills required.', 2),
('Call Center Supervisor', 'Service Excellence', 'Tampa, FL', 'Full-time', '$50,000 - $65,000', 'Supervise customer service team and ensure quality standards. Call center experience and leadership skills required.', 1),

-- Remote-First Opportunities
('Remote Content Writer', 'Digital Content Hub', 'Remote', 'Full-time', '$50,000 - $70,000', 'Create engaging content for various industries. Excellent writing skills and SEO knowledge required.', 1),
('Virtual Assistant', 'Remote Support Services', 'Remote', 'Part-time', '$25 - $35/hour', 'Provide administrative support to executives. Strong organizational and communication skills required.', 1),
('Online Tutor', 'EduTech Platform', 'Remote', 'Part-time', '$30 - $50/hour', 'Tutor students in various subjects online. Teaching experience and subject expertise required.', 2);