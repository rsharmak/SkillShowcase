import { useEffect } from "react";
import MatrixRain from "../components/MatrixRain";
import TerminalWindow from "../components/TerminalWindow";
import NavigationDots from "../components/NavigationDots";
import GlassCard from "../components/GlassCard";
import SkillTag from "../components/SkillTag";
import ContactForm from "../components/ContactForm";
import { useScrollSpy } from "../hooks/useScrollSpy";

const skills = {
  languages: ["Java", "JavaScript", "SQL", "Shell Scripting"],
  frameworks: ["Spring Boot", "Spring Core", "Spring MVC", "Spring Data JPA", "NodeJS", "ReactJS"],
  cloudDevOps: ["AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Maven"],
  databases: ["MySQL", "MongoDB", "Vertica", "Apache Kafka"],
  testing: ["JUnit 5", "Mockito", "Jest", "PowerMock", "Snyk", "Newrelic"],
  architecture: ["Microservices", "RESTful APIs", "Cloud-Native", "Agile/Scrum"]
};

const experiences = [
  {
    title: "Associate – Java Developer",
    company: "MassMutual India",
    duration: "October 2021 – Present",
    location: "Hyderabad, Telangana, India",
    achievements: [
      "Engineered 10+ scalable Spring Boot microservices with advanced authorization",
      "Delivered 10+ secure Node.js APIs with OAuth authorization",
      "Migrated 12+ legacy services to AWS, enhancing scalability by 30%",
      "Integrated Apache Kafka reducing latency by 20%",
      "Handled deployments using Docker, Kubernetes, and Jenkins"
    ]
  },
  {
    title: "Product Consultant",
    company: "Digicides",
    duration: "September 2020 - April 2021",
    location: "Remote",
    achievements: [
      "Delivered robust Spring Boot APIs with validation and database connectivity",
      "Achieved optimal unit test coverage using JUnit 5 and Mockito",
      "Reduced bugs by 25% through comprehensive testing",
      "Conducted thorough requirement analysis and bug research"
    ]
  }
];

const projects = [
  {
    type: "Insurance Domain",
    title: "Annuity Fund Transfer",
    description: "Comprehensive fund transfer system enabling users to transfer percentages of their annuity fund value to other funds with robust security and compliance features.",
    highlights: [
      "Developed Fund-Transfer-API using Node.js with OAuth authorization",
      "Achieved 90% code coverage using Jest testing framework",
      "Built Kafka consumer microservice for efficient message processing",
      "Created DLQ Reprocess microservice for failed transaction recovery",
      "Automated deployment with Docker and Kubernetes on AWS"
    ],
    technologies: ["Node.js", "OAuth", "Kafka", "Docker", "AWS"]
  },
  {
    type: "Innovative Solution",
    title: "DLQ Reprocess System",
    description: "Innovative Spring Boot microservice designed to automatically reprocess failed Kafka messages, ensuring message reliability and preventing data loss in distributed systems.",
    highlights: [
      "Designed Spring Boot microservice for failed message recovery",
      "Integrated scheduling for automated reprocessing",
      "Achieved 90% unit test coverage with JUnit 5 and Mockito",
      "Implemented email notifications for affected parties",
      "S3 integration for secure failed message storage"
    ],
    technologies: ["Spring Boot", "Kafka", "JUnit 5", "AWS S3", "Scheduling"]
  },
  {
    type: "Automation Solution",
    title: "API Inventory System",
    description: "Automated shell script solution for comprehensive API and microservices inventory management, streamlining documentation and tracking across enterprise systems.",
    highlights: [
      "Automated API listing and documentation export to Excel",
      "Seamless SharePoint integration for centralized storage",
      "Jenkins integration for single-click execution",
      "Vault integration for secure credential management",
      "Enhanced functionality with embedded Python scripting"
    ],
    technologies: ["Shell Script", "Python", "Jenkins", "Vault", "SharePoint"]
  }
];

const awards = [
  {
    title: "GEMS",
    organization: "MassMutual India",
    description: "Recognized for outstanding contributions to project delivery",
    year: "2023",
    icon: "🏆"
  },
  {
    title: "PAT ON BACK",
    organization: "MassMutual India", 
    description: "Awarded twice for exceptional teamwork and innovative problem-solving",
    year: "2022 & 2023",
    icon: "👏"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    description: "Professional certification demonstrating cloud computing knowledge",
    year: "2022",
    icon: "☁️"
  }
];

export default function Portfolio() {
  const activeSection = useScrollSpy([
    "hero",
    "about", 
    "skills",
    "experience",
    "projects",
    "awards",
    "contact"
  ]);

  useEffect(() => {
    document.title = "Rakesh Kumar Sharma - Java Developer Portfolio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Passionate Java Developer with 4+ years of experience building scalable microservices, cloud-native applications, and innovative solutions. Expertise in Spring Boot, AWS, Docker, and Kubernetes.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Passionate Java Developer with 4+ years of experience building scalable microservices, cloud-native applications, and innovative solutions. Expertise in Spring Boot, AWS, Docker, and Kubernetes.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Background Effects */}
      <MatrixRain />
      
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)'
          }}
        />
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(0, 170, 255, 0.1) 0%, transparent 50%)'
          }}
        />
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(170, 0, 255, 0.1) 0%, transparent 50%)'
          }}
        />
      </div>

      {/* Navigation */}
      <NavigationDots activeSection={activeSection} />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <TerminalWindow />
          
          <div className="text-center mt-12">
            <h1 className="text-6xl font-bold gradient-text mb-6">
              Rakesh Kumar Sharma
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Passionate Java Developer with expertise in building scalable microservices, 
              cloud-native applications, and innovative solutions that drive business growth.
            </p>
            <div className="flex justify-center gap-6 mt-8">
              <a 
                href="#contact" 
                className="glass-card px-8 py-3 rounded-full text-[var(--accent-green)] border-[var(--accent-green)] hover:bg-[var(--accent-green)] hover:text-[var(--bg-primary)] transition-all duration-300"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="glass-card px-8 py-3 rounded-full text-[var(--text-primary)] hover:text-[var(--accent-blue)] transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-[10%] left-[10%] text-4xl opacity-10 floating">☕</div>
        <div className="absolute top-[20%] right-[15%] text-4xl opacity-10 floating" style={{animationDelay: '2s'}}>🚀</div>
        <div className="absolute bottom-[30%] left-[20%] text-4xl opacity-10 floating" style={{animationDelay: '4s'}}>⚡</div>
        <div className="absolute bottom-[10%] right-[10%] text-4xl opacity-10 floating" style={{animationDelay: '1s'}}>💻</div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <GlassCard className="p-8 floating">
              <h3 className="text-2xl font-bold text-[var(--accent-green)] mb-6 font-mono">Professional Summary</h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
                Java Developer with 4+ years of experience designing scalable microservices and APIs using 
                Spring Boot and NodeJS, improving system efficiency by 30%. Expertise in deploying robust 
                solutions using Docker, Kubernetes, and AWS, reducing deployment times by 20%.
              </p>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                Proficient in Kafka, achieving a 20% improvement in message processing speed. Passionate 
                about creating innovative solutions and driving business growth through technology.
              </p>
            </GlassCard>
            
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-[var(--accent-blue)] mb-6 font-mono">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-[var(--accent-orange)] mr-3">📍</span>
                  <span className="text-[var(--text-primary)]">Hyderabad, Telangana, India</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[var(--accent-orange)] mr-3">💼</span>
                  <span className="text-[var(--text-primary)]">Associate Java Developer at MassMutual India</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[var(--accent-orange)] mr-3">🎓</span>
                  <span className="text-[var(--text-primary)]">Bachelor of Computer Applications</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[var(--accent-orange)] mr-3">🏆</span>
                  <span className="text-[var(--text-primary)]">AWS Certified Cloud Practitioner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[var(--accent-orange)] mr-3">📧</span>
                  <span className="text-[var(--text-primary)]">rsharmak634@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[var(--accent-orange)] mr-3">📱</span>
                  <span className="text-[var(--text-primary)]">+91 9853349829</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Core Competencies</h2>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-[var(--accent-green)] mb-6 font-mono">💻 Languages</h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-[var(--accent-blue)] mb-6 font-mono">🚀 Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-[var(--accent-purple)] mb-6 font-mono">☁️ Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-3">
                {skills.cloudDevOps.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-[var(--accent-orange)] mb-6 font-mono">🗄️ Databases</h3>
              <div className="flex flex-wrap gap-3">
                {skills.databases.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-[var(--accent-green)] mb-6 font-mono">🧪 Testing & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skills.testing.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-[var(--accent-blue)] mb-6 font-mono">🏗️ Architecture</h3>
              <div className="flex flex-wrap gap-3">
                {skills.architecture.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Professional Experience</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[var(--accent-green)] to-[var(--accent-blue)]"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-20 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12 pr-8">
                  <GlassCard className={`p-8 ${index % 2 === 1 ? 'text-left' : 'text-right'}`}>
                    <h3 className="text-2xl font-bold text-[var(--accent-blue)] mb-2 font-mono">{exp.title}</h3>
                    <h4 className="text-xl text-[var(--accent-green)] font-semibold mb-3">{exp.company}</h4>
                    <p className="text-[var(--text-muted)] font-mono mb-4">{exp.duration}</p>
                    <ul className={`text-[var(--text-secondary)] space-y-2 ${index % 2 === 1 ? 'text-left' : 'text-left'}`}>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="text-[var(--accent-orange)] mr-2">▶</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
                
                {/* Timeline Dot */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 z-10"
                  style={{
                    background: index === 0 ? 'var(--accent-green)' : 'var(--accent-blue)',
                    borderColor: 'var(--bg-primary)',
                    boxShadow: index === 0 ? '0 0 20px var(--accent-green)' : '0 0 20px var(--accent-blue)'
                  }}
                ></div>
                
                <div className="w-5/12 pl-8">
                  <div className={`text-[var(--text-muted)] font-mono ${index % 2 === 1 ? 'text-right' : ''}`}>
                    <span className="text-[var(--accent-green)]">Location:</span> {exp.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <GlassCard key={index} className="p-8 relative overflow-hidden">
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: index === 0 
                      ? 'linear-gradient(to right, var(--accent-green), var(--accent-blue), var(--accent-purple))'
                      : index === 1
                      ? 'linear-gradient(to right, var(--accent-blue), var(--accent-purple), var(--accent-green))'
                      : 'linear-gradient(to right, var(--accent-purple), var(--accent-green), var(--accent-orange))'
                  }}
                />
                
                <div className="mb-4">
                  <span 
                    className="inline-block text-white px-4 py-1 rounded-full text-sm font-mono"
                    style={{
                      background: index === 0
                        ? 'linear-gradient(to right, var(--accent-purple), var(--accent-blue))'
                        : index === 1
                        ? 'linear-gradient(to right, var(--accent-green), var(--accent-blue))'
                        : 'linear-gradient(to right, var(--accent-orange), var(--accent-purple))'
                    }}
                  >
                    {project.type}
                  </span>
                </div>
                
                <h3 
                  className="text-2xl font-bold mb-4 font-mono"
                  style={{
                    color: index === 0 ? 'var(--accent-green)' : index === 1 ? 'var(--accent-blue)' : 'var(--accent-purple)'
                  }}
                >
                  {project.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start">
                      <span className="text-[var(--accent-orange)] mr-2 mt-1">
                        {['🚀', '🧪', '⚡', '🔄', '🐳', '🔧', '📅', '✅', '📧', '🗂️', '📝', '📤', '🔐', '🐍'][hIndex] || '🔹'}
                      </span>
                      <span className="text-[var(--text-primary)]">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-[var(--bg-secondary)] px-3 py-1 rounded-full text-xs font-mono"
                      style={{
                        color: index === 0 ? 'var(--accent-green)' : index === 1 ? 'var(--accent-blue)' : 'var(--accent-purple)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}


          </div>
        </div>
      </section>

      {/* Awards & Achievements Section */}
      <section id="awards" className="min-h-screen py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Awards & Achievements</h2>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <GlassCard key={index} className="p-8 text-center relative overflow-hidden">
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: index === 0 ? 
                      'linear-gradient(to right, var(--accent-green), var(--accent-blue))' :
                      index === 1 ?
                      'linear-gradient(to right, var(--accent-blue), var(--accent-purple))' :
                      'linear-gradient(to right, var(--accent-purple), var(--accent-orange))'
                  }}
                />
                
                <div className="text-6xl mb-6 floating" style={{animationDelay: `${index * 0.5}s`}}>
                  {award.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 font-mono"
                    style={{
                      color: index === 0 ? 'var(--accent-green)' : 
                             index === 1 ? 'var(--accent-blue)' : 'var(--accent-purple)'
                    }}>
                  {award.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {award.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-[var(--accent-orange)] font-mono font-semibold">
                    {award.organization}
                  </p>
                  <p className="text-[var(--text-muted)] text-sm font-mono">
                    {award.year}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-[var(--accent-green)] mb-6 font-mono">Let's Connect</h3>
              <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations. Whether you're looking for a Java developer or want to 
                explore cutting-edge solutions, let's start a conversation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-[var(--accent-blue)] text-xl mr-4">📧</span>
                  <div>
                    <p className="text-[var(--text-muted)] text-sm">Email</p>
                    <a 
                      href="mailto:rsharmak634@gmail.com" 
                      className="text-[var(--accent-green)] hover:text-[var(--accent-blue)] transition-colors"
                    >
                      rsharmak634@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-[var(--accent-blue)] text-xl mr-4">📱</span>
                  <div>
                    <p className="text-[var(--text-muted)] text-sm">Phone</p>
                    <a 
                      href="tel:+919853349829" 
                      className="text-[var(--accent-green)] hover:text-[var(--accent-blue)] transition-colors"
                    >
                      +91 9853349829
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-[var(--accent-blue)] text-xl mr-4">💼</span>
                  <div>
                    <p className="text-[var(--text-muted)] text-sm">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/rakesh-sharma-818786222" 
                      className="text-[var(--accent-green)] hover:text-[var(--accent-blue)] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/rakesh-sharma-818786222
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            <ContactForm />
          </div>
          
          {/* Footer */}
          <div className="text-center mt-16 pt-8" style={{borderTop: '1px solid var(--border-color)'}}>
            <p className="text-[var(--text-muted)] font-mono">
              © 2024 Rakesh Kumar Sharma. Built with passion and innovation.
            </p>
            <p className="text-[var(--text-muted)] font-mono mt-2">
              <span className="text-[var(--accent-green)]">const</span>{' '}
              <span className="text-[var(--accent-blue)]">developer</span> = {' '}
              <span className="text-[var(--accent-purple)]">"passionate about creating amazing solutions"</span>;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
