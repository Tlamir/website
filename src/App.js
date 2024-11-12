import './App.css';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -50% 0px', // Adjusts the trigger point
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll('.project-button');
    
    buttons.forEach(button => {
      button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
      });
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const projects = [
    {
      title: "AI-Powered Task Manager",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      description: "A smart task management application that uses machine learning to prioritize and categorize tasks. Built with React, Node.js, and TensorFlow.js.",
      link: "https://github.com/yourusername/project"
    },
    {
      title: "Crypto Portfolio Tracker",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&q=80",
      description: "Real-time cryptocurrency portfolio tracker with price alerts and performance analytics. Utilizes WebSocket for live data and Chart.js for visualization.",
      link: "https://github.com/yourusername/project"
    },
    {
      title: "Smart Home IoT Dashboard",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
      description: "A comprehensive dashboard for managing IoT devices. Features real-time monitoring, automation rules, and energy consumption analytics.",
      link: "https://github.com/yourusername/project"
    }
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Your Name</h1>
        <div className="nav-links">
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleNavClick('about')}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => handleNavClick('projects')}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </a>
        </div>
      </nav>

      <section id="about" className="section">
        <div className="about-container">
          <div className="about-header">
            <h2>About Me</h2>
            <div className="about-title">
              <span className="highlight">Full Stack Developer</span>
              <span className="location">📍 San Francisco, CA</span>
            </div>
          </div>
          
          <div className="about-content">
            <p className="intro-text">
              Hey there! 👋 I'm a passionate software engineer with 5+ years of experience 
              in building modern web applications. Specializing in full-stack development 
              with React, Node.js, and cloud technologies.
            </p>
            
            <p className="about-description">
              Currently focused on developing scalable solutions and exploring emerging 
              technologies in AI and cloud computing. I bring expertise in React, TypeScript, 
              Node.js, and AWS, with a strong foundation in system design and best practices.
            </p>

            <div className="expertise-areas">
              <div className="expertise-item">
                <span className="expertise-title">Frontend Development</span>
                <p>React · Next.js · TypeScript · Modern CSS</p>
              </div>
              <div className="expertise-item">
                <span className="expertise-title">Backend Development</span>
                <p>Node.js · Python · AWS · Microservices</p>
              </div>
              <div className="expertise-item">
                <span className="expertise-title">Tools & Practices</span>
                <p>CI/CD · Docker · Git · Agile Methodologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-link">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  <span>Details</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="button-icon"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <div className="contact-links">
          <a href="mailto:your.email@example.com" className="contact-button">
            <HiMail className="contact-icon" />
            <span>Email</span>
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-button">
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-button">
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
