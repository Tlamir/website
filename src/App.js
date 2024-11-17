import './App.css';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Trigger observer when 50% of section is visible
        rootMargin: '0px 0px -40% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

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
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "OpenGL Bouncing DVD Logo",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanNlY3FwanZvaW51eDZobmQyaXp2bTF3Y3VseGUwNnl1dzZ5MjhsZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P0N8Ghf7nfc87He749/giphy.gif",
      description: "C++ application showcases a classic DVD logo bouncing around the screen, using OpenGL for graphics rendering",
      link: "https://github.com/Tlamir/OpenGL_DVD_Logo"
    },
    {
      title: "Optimization for Everyone",
      image: "https://i.imgur.com/3bsVE75.jpeg",
      description: "Optimization for Everyone is a powerful tool for comparing meta-heuristic algorithms, designed for easy experimentation and analysis. Users can adjust algorithm parameters and visualize convergence rates of up to three algorithms simultaneously in a single graph.",
      link: "https://github.com/Optimization-for-Everyone/OptimizationForEveryone"
    },
    {
      title: "Sprite Sheet Generator",
      image: "https://i.imgur.com/1yrKd4Y.png",
      description: "This WPF application allows you to easily load multiple images, arrange them into a sprite sheet, and export the result in either PNG or JSON format",
      link: "https://github.com/Tlamir/SpriteSheetGenerator"
    }
    ,
    {
      title: "Crafted",
      image: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3VtdGJ4YWxnNDY0OG1hcDN2aXczYm50ZmlraW43ZnBtbTFjbWxidyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MPnRSluqDvOwnnevep/giphy-downsized-large.gif",
      description: "Crafted is a Unity project designed to showcase a flexible and dynamic inventory system with features like item swapping, adjustable slot sizes, and gamepad support.",
      link: "https://github.com/Tlamir/Crafted"
    }
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Yigithan Guven</h1>
        <div className="nav-links">
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('projects');
            }}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
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
              <span className="highlight">Software Engineer</span>
            </div>
          </div>
          
          <div className="about-content">
            <p className="intro-text">
            I'm a Software Engineer 💻 with a focus on creating well-rounded, optimized software solutions. My main skills are in C++, C#, and Unity, and I handle everything from developing core software and crafting user interfaces to optimizing performance—whatever's necessary to bring a project to life ✨. With a strong foundation in computer engineering, I also bring full-stack web development skills 🌐, working with tools like .NET, React, and SQL. Driven by curiosity, I’m always exploring new technologies to keep expanding my expertise!
            </p>
            
            <h3>Skills</h3>
            <p>Proficient in C++, C#, and Unity; experienced with .NET, React, SQL, and Python; familiar with JavaScript, MongoDB, and React Native. Strong command of Git, Linux, and optimization techniques, with additional knowledge in UI/UX design and performance tuning.</p>
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
          <a href="mailto:yigithanguven@gmail.com" className="contact-button">
            <HiMail className="contact-icon" />
            <span>Email</span>
          </a>
          <a href="https://github.com/tlamir" target="_blank" rel="noopener noreferrer" className="contact-button">
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/yigithanguven" target="_blank" rel="noopener noreferrer" className="contact-button">
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>Yigithan Guven</p>
        <p>yigithanguvenn@gmail.com</p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
