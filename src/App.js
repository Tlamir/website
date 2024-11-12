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
      title: "OpenGL Bouncing DVD Logo",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanNlY3FwanZvaW51eDZobmQyaXp2bTF3Y3VseGUwNnl1dzZ5MjhsZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P0N8Ghf7nfc87He749/giphy.gif",
      description: "C++ application showcases a classic DVD logo bouncing around the screen, using OpenGL for graphics rendering",
      link: "https://github.com/Tlamir/OpenGL_DVD_Logo"
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
        <h1>Yigithan Guven</h1>
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
              <span className="highlight">Software Engineer</span>
            </div>
          </div>
          
          <div className="about-content">
            <p className="intro-text">
            I'm a Software Engineer 💻 with a focus on creating well-rounded, optimized software solutions. My main skills are in C++, C#, and Unity, and I handle everything from developing core software and crafting user interfaces to optimizing performance—whatever's necessary to bring a project to life ✨. With a strong foundation in computer engineering, I also bring full-stack web development skills 🌐, working with tools like .NET, Angular, and SQL. Driven by curiosity, I’m always exploring new technologies to keep expanding my expertise!
            </p>
            
            <h3>Skills</h3>
            <p>Proficient in C++, C#, and Unity; experienced with .NET, Angular, SQL, and Python; familiar with JavaScript, MongoDB, and React Native. Strong command of Git, Linux, and optimization techniques, with additional knowledge in UI/UX design and performance tuning.</p>
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
    </div>
  );
}

export default App;
