'use client';
import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe, 
  Briefcase, 
  BookOpen, 
  Music, 
  Heart, 
  Code, 
  User, 
  MessageSquare,
  Lightbulb,
  Coffee,
  BookMarked,
  Video,
  Star,
  Feather,
  MapPin
} from 'lucide-react';




// Custom hook for scroll-based animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};

// Main component
const PersonalWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-black bg-opacity-80 backdrop-blur-sm p-4 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Nilesh Jain <span className="text-blue-400">/ Arnaiya</span></div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6">
            {['home', 'journey', 'projects', 'writings', 'talks', 'recommendations', 'dating'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`hover:text-blue-400 transition ${activeSection === section ? 'text-blue-400 font-bold' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 mt-4 p-4 rounded">
            {['home', 'journey', 'projects', 'writings', 'talks', 'recommendations', 'dating'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left py-2 hover:text-blue-400 transition ${activeSection === section ? 'text-blue-400 font-bold' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-20 flex items-center justify-center">
        <HeroSection />
      </section>

      {/* Journey Section */}
      <section id="journey" className="min-h-screen py-20">
        <JourneySection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20">
        <ProjectsSection />
      </section>

      {/* Writings Section */}
      <section id="writings" className="min-h-screen py-20">
        <WritingsSection />
      </section>

      {/* Talks Section */}
      <section id="talks" className="min-h-screen py-20">
        <TalksSection />
      </section>

      {/* Recommendations Section */}
      <section id="recommendations" className="min-h-screen py-20">
        <RecommendationsSection />
      </section>

      {/* Dating Section */}
      <section id="dating" className="min-h-screen py-20">
        <DatingSection />
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-4">Stay Connected 📱</h3>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://twitter.com/nilesharnaiya" className="hover:text-blue-400 transition">Twitter</a>
            <a href="https://linkedin.com/in/nilesharnaiya" className="hover:text-blue-400 transition">LinkedIn</a>
            <a href="https://instagram.com/NotSoHuman.AI" className="hover:text-blue-400 transition">Instagram</a>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Nilesh Jain / Arnaiya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div ref={ref} className={`max-w-6xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to My World 🌍</h1>
          <h2 className="text-3xl text-blue-400 mb-6">I'm Nilesh Jain / Arnaiya</h2>
          <p className="text-xl mb-8">Research Associate at Yale University & Founder of multiple tech ventures including Pybooks and Bibby AI.</p>
          <div className="flex space-x-4">
            <button onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition">My Story</button>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-400 hover:border-transparent font-bold py-3 px-6 rounded-full transition">See My Work</button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Placeholder for profile image */}
            <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold">NJ</div>
            <div className="absolute -top-4 -right-4 bg-blue-600 rounded-full p-3">
              <Briefcase size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-600 rounded-full p-3">
              <Globe size={24} />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-purple-600 rounded-full p-3">
              <Code size={24} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-center">What I'm Up To</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition">
            <div className="text-blue-400 mb-4"><MapPin size={32} /></div>
            <h4 className="text-xl font-bold mb-2">Yale University</h4>
            <p>Heading to Yale as a research associate 🎓</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition">
            <div className="text-green-400 mb-4"><Briefcase size={32} /></div>
            <h4 className="text-xl font-bold mb-2">The Residency</h4>
            <p>Running The Residency in Bangalore</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition">
            <div className="text-purple-400 mb-4"><User size={32} /></div>
            <h4 className="text-xl font-bold mb-2">Mentoring</h4>
            <p>Mentoring on Topmate and Mentorcruise</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition">
            <div className="text-orange-400 mb-4"><MessageSquare size={32} /></div>
            <h4 className="text-xl font-bold mb-2">IndabaX</h4>
            <p>Helping organize IndabaX, spreading AI knowledge across Africa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Journey Section Component
const JourneySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const journeyItems = [
    {
      year: "Ages 1-17",
      title: "The Beginning",
      description: "I was just a regular kid without early exposure to coding or tech. Late by today's standards, I began my programming journey at 17, sparking a lifelong passion for learning."
    },
    {
      year: "The Education Phase",
      title: "Self-taught Explorer",
      description: "After failing 12th grade, I bounced back by teaching myself through platforms like edX, Udacity, and Coursera when they were just starting! I pursued internships and built my tech skills independently."
    },
    {
      year: "The Bangalore Years",
      title: "Tech Community Immersion",
      description: "Bangalore became my second home, where I soaked up knowledge, collected swag, and ate a lot of free pizza at tech meetups. This period shaped my networking skills and technical foundation."
    },
    {
      year: "Career Experiments",
      title: "Professional Shapeshifter",
      description: "I've held various roles – some successful, others not so much. From teaching to full-stack development, Android apps to data science, each experience shaped my path."
    },
    {
      year: "South Africa",
      title: "Teaching & Learning",
      description: "I taught for a semester in South Africa while pursuing my Master's degree, an experience that broadened my global perspective and reinforced my passion for education."
    },
    {
      year: "Present Day",
      title: "Founder & Researcher",
      description: "Now heading to Yale as a research associate while running multiple tech ventures including Pybooks, Bibby AI, and others. Constantly seeking new challenges and ways to make an impact."
    }
  ];
  
  return (
    <div ref={ref} className={`max-w-6xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-4xl font-bold mb-2 text-center">My Journey 🚀</h2>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">A winding path of learning, failing, adapting, and growing</p>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-500"></div>
        
        {/* Timeline items */}
        {journeyItems.map((item, index) => (
          <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-10 md:text-right md:self-end' : 'md:pl-10 md:text-left md:self-start'} md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
            <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
              <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-gray-900"></div>
              <span className="bg-blue-600 text-white py-1 px-3 rounded-full text-sm font-bold">{item.year}</span>
            </div>
            <div className={`bg-gray-800 bg-opacity-50 p-6 rounded-lg border-l-4 border-blue-500 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6">Things I Love 💡</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover:bg-gray-700 transition">
            <h4 className="text-xl font-bold mb-4 text-blue-400">Hobbies</h4>
            <ul className="space-y-2">
              <li className="flex items-center"><Star size={16} className="mr-2 text-blue-400" /> Yoga</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-blue-400" /> Reading</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-blue-400" /> AI Art</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-blue-400" /> Astronomy</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-blue-400" /> Public Speaking</li>
            </ul>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover:bg-gray-700 transition">
            <h4 className="text-xl font-bold mb-4 text-green-400">Activities</h4>
            <ul className="space-y-2">
              <li className="flex items-center"><Star size={16} className="mr-2 text-green-400" /> Traveling (solo & with friends)</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-green-400" /> Mentoring</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-green-400" /> Volunteering</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-green-400" /> Cricket</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-green-400" /> Rafting</li>
            </ul>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover:bg-gray-700 transition">
            <h4 className="text-xl font-bold mb-4 text-purple-400">Passions</h4>
            <ul className="space-y-2">
              <li className="flex items-center"><Star size={16} className="mr-2 text-purple-400" /> Teaching</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-purple-400" /> Content Creation</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-purple-400" /> Gift-Giving</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-purple-400" /> Cycling</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-purple-400" /> Learning new skills</li>
            </ul>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover:bg-gray-700 transition">
            <h4 className="text-xl font-bold mb-4 text-orange-400">Interests</h4>
            <ul className="space-y-2">
              <li className="flex items-center"><Star size={16} className="mr-2 text-orange-400" /> Human Behavior</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-orange-400" /> Economics</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-orange-400" /> Neuroscience</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-orange-400" /> Education innovation</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-orange-400" /> Cultural diversity</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6">Random Fun Facts 🎉</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <p className="mb-0 flex items-start">
              <Coffee className="mr-2 text-yellow-400 flex-shrink-0 mt-1" size={20} />
              <span>I change accents based on where I am.</span>
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <p className="mb-0 flex items-start">
              <Coffee className="mr-2 text-yellow-400 flex-shrink-0 mt-1" size={20} />
              <span>I'm terrible at cooking but love gifting food to others.</span>
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <p className="mb-0 flex items-start">
              <Coffee className="mr-2 text-yellow-400 flex-shrink-0 mt-1" size={20} />
              <span>I was once scared to take my first flight – now I'm a serial conference traveler.</span>
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <p className="mb-0 flex items-start">
              <Coffee className="mr-2 text-yellow-400 flex-shrink-0 mt-1" size={20} />
              <span>I have stopped sugar completely for 30 days.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const projects = [
    {
      title: "Upcourse.io",
      icon: <Lightbulb size={32} className="text-yellow-400" />,
      description: "Interactive education labs to learn anything. A platform that transforms traditional educational content into interactive, hands-on learning experiences.",
      tags: ["Education", "EdTech", "Interactive Learning"]
    },
    {
      title: "Pybooks.com",
      icon: <Code size={32} className="text-blue-400" />,
      description: "Jupyter notebooks for teachers. Making computational tools accessible to educators with ready-to-use templates and resources.",
      tags: ["EdTech", "Python", "Data Science"]
    },
    {
      title: "CodeUpLab",
      icon: <BookOpen size={32} className="text-green-400" />,
      description: "Helping students learn programming and data science through structured, project-based curricula and personalized guidance.",
      tags: ["Education", "Programming", "Mentoring"]
    },
    {
      title: "NavalNow",
      icon: <Feather size={32} className="text-purple-400" />,
      description: "Naval Ravikant's wisdom distilled. A curated collection of insights and principles from one of tech's most thoughtful philosophers.",
      tags: ["Knowledge", "Philosophy", "Wisdom"]
    },
    {
      title: "1Kitchen POS",
      icon: <Coffee size={32} className="text-orange-400" />,
      description: "Restaurant management software designed to streamline operations and enhance customer experience in food service establishments.",
      tags: ["SaaS", "Hospitality", "Management"]
    },
    {
      title: "Bibby AI",
      icon: <Briefcase size={32} className="text-red-400" />,
      description: "Leveraging artificial intelligence to transform knowledge management and information retrieval in educational contexts.",
      tags: ["AI", "Education", "Knowledge Management"]
    }
  ];
  
  return (
    <div ref={ref} className={`max-w-6xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-4xl font-bold mb-2 text-center">My Projects</h2>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">A collection of ventures and initiatives I've founded or contributed to</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:transform hover:scale-105 transition duration-300">
            <div className="p-6">
              <div className="mb-4">
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-blue-900 bg-opacity-50 text-blue-300 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition">
          View All Projects
        </button>
      </div>
    </div>
  );
};

// Writings Section Component
const WritingsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const articles = [
    {
      title: "The Multilingual Mind: Cognitive Benefits of Speaking Multiple Languages",
      excerpt: "Exploring how my journey through Hindi, Marwari, Gujarati and other languages has shaped my neural pathways and cognitive flexibility.",
      date: "February 15, 2025",
      category: "Neuroscience"
    },
    {
      title: "From Teaching to Tech: Lessons from a Non-Linear Career Path",
      excerpt: "How embracing diverse professional experiences creates a unique perspective when approaching complex problems.",
      date: "January 22, 2025",
      category: "Career"
    },
    {
      title: "Building Educational Tech That Actually Works",
      excerpt: "Insights from creating Pybooks and other educational platforms that truly enhance learning outcomes.",
      date: "December 10, 2024",
      category: "EdTech"
    },
    {
      title: "The Future of Learning: AI-Assisted Education",
      excerpt: "How artificial intelligence is transforming the educational landscape and what it means for students and teachers.",
      date: "November 5, 2024",
      category: "AI & Education"
    },
    {
      title: "Cultural Intelligence: What Working Across Continents Taught Me",
      excerpt: "Reflections on adapting to different cultural contexts from Mumbai to Johannesburg to New Haven.",
      date: "October 18, 2024",
      category: "Culture"
    }
  ];
  
  return (
    <div ref={ref} className={`max-w-6xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-4xl font-bold mb-2 text-center">My Writings</h2>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">Thoughts, insights, and explorations on technology, education, and human behavior</p>
      
      <div className="space-y-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden hover:bg-gray-700 transition duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">{article.category}</span>
                <span className="text-gray-400 text-sm">{article.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-300 mb-4">{article.excerpt}</p>
              <button className="text-blue-400 hover:text-blue-300 transition flex items-center">
                Read more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-transparent hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-400 hover:border-transparent font-bold py-3 px-8 rounded-full transition">
          View All Articles
        </button>
      </div>
    </div>
  );
};

// Talks Section Component
const TalksSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const talks = [
    {
      title: "The Future of AI in Education",
      event: "EdTech Summit",
      location: "Bangalore, India",
      year: "2024",
      description: "Discussed how artificial intelligence is revolutionizing educational methodologies and accessibility."
    },
    {
      title: "Cross-Cultural Software Development",
      event: "Developer Conference",
      location: "Cape Town, South Africa",
      year: "2023",
      description: "Shared insights on building global teams and creating software that works across cultural contexts."
    },
    {
      title: "From Student to Founder: The Entrepreneurship Journey",
      event: "Yale University",
      location: "New Haven, USA",
      year: "2024",
      description: "A personal account of transitioning from academic studies to building multiple tech ventures."
    },
    {
      title: "Democratizing Data Science Education",
      event: "DataCon Africa",
      location: "Johannesburg, South Africa",
      year: "2023",
      description: "Presented strategies for making data science education more accessible to students from diverse backgrounds."
    },
    {
      title: "Building Educational Technology for Global Impact",
      event: "Global EdTech Forum",
      location: "Virtual",
      year: "2022",
      description: "Explored how educational technology can bridge gaps in access to quality education worldwide."
    }
  ];
  
  return (
    <div ref={ref} className={`max-w-6xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-4xl font-bold mb-2 text-center">My Talks</h2>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">Conference presentations, keynotes, and workshops I've delivered around the world</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {talks.map((talk, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
            <div className="flex justify-between items-start mb-4">
              <MessageSquare size={24} className="text-purple-400 flex-shrink-0" />
              <span className="bg-purple-900 bg-opacity-50 text-purple-300 text-xs px-3 py-1 rounded-full">{talk.year}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{talk.title}</h3>
            <div className="flex items-center mb-4 text-gray-400">
              <span className="mr-4">{talk.event}</span>
              <span>{talk.location}</span>
            </div>
            <p className="text-gray-300">{talk.description}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition">
          View All Presentations
        </button>
      </div>
    </div>
  );
};

// Recommendations Section Component
const RecommendationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const tabs = [
    { id: 'books', label: 'Books', icon: <BookMarked size={20} /> },
    { id: 'movies', label: 'Movies', icon: <Video size={20} /> }
  ];
  
  const [activeTab, setActiveTab] = useState('books');
  
  const books = [
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      description: "A fascinating exploration of two systems that drive the way we think. Changed how I understand decision-making and cognitive biases.",
      genre: "Psychology"
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      description: "This book transformed my understanding of human history and our place in the world. Essential reading for anyone curious about humanity's journey.",
      genre: "History"
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      description: "The best book on startups and innovation I've read. Thiel's contrarian thinking pushed me to reconsider conventional wisdom about business.",
      genre: "Business"
    },
    {
      title: "The Brain: The Story of You",
      author: "David Eagleman",
      description: "An accessible yet profound look at neuroscience that inspired my interest in how the brain shapes our experiences and reality.",
      genre: "Neuroscience"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      description: "Practical strategies for forming good habits and breaking bad ones. I've applied these principles to transform my productivity and learning.",
      genre: "Self-Improvement"
    }
  ];
  
  const movies = [
    {
      title: "The Social Network",
      director: "David Fincher",
      description: "More than just the Facebook origin story - it's a masterclass in ambition, betrayal, and the birth of the modern tech industry.",
      genre: "Drama"
    },
    {
      title: "Taare Zameen Par",
      director: "Aamir Khan",
      description: "A beautiful film about neurodiversity and the power of empathetic teaching. Makes me emotional every time I watch it.",
      genre: "Drama"
    },
    {
      title: "Arrival",
      director: "Denis Villeneuve",
      description: "A thought-provoking exploration of language, time, and communication. The kind of sci-fi that makes you see the world differently.",
      genre: "Science Fiction"
    },
    {
      title: "The Pursuit of Happyness",
      director: "Gabriele Muccino",
      description: "An inspiring true story of perseverance and determination. Reminds me that entrepreneurship is about resilience as much as innovation.",
      genre: "Biographical Drama"
    },
    {
      title: "3 Idiots",
      director: "Rajkumar Hirani",
      description: "A film that critiques traditional education while celebrating curiosity and passion. Has shaped my views on educational reform.",
      genre: "Comedy-Drama"
    }
  ];
  
  return (
    <div ref={ref} className={`max-w-6xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-4xl font-bold mb-2 text-center">My Recommendations</h2>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">Books and movies that have shaped my thinking and perspectives</p>
      
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-800 rounded-full p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-2 rounded-full transition ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === 'books' &&
          books.map((book, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
              <div className="flex justify-between items-start mb-4">
                <BookMarked size={24} className="text-blue-400" />
                <span className="bg-blue-900 bg-opacity-50 text-blue-300 text-xs px-3 py-1 rounded-full">{book.genre}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{book.title}</h3>
              <p className="text-gray-400 text-sm mb-4">by {book.author}</p>
              <p className="text-gray-300">{book.description}</p>
            </div>
          ))}
        
        {activeTab === 'movies' &&
          movies.map((movie, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
              <div className="flex justify-between items-start mb-4">
                <Video size={24} className="text-red-400" />
                <span className="bg-red-900 bg-opacity-50 text-red-300 text-xs px-3 py-1 rounded-full">{movie.genre}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{movie.title}</h3>
              <p className="text-gray-400 text-sm mb-4">Directed by {movie.director}</p>
              <p className="text-gray-300">{movie.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

// Dating Section Component
const DatingSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const reasons = [
    {
      title: "The Multilingual Nomad",
      icon: <Globe className="text-blue-600" size={48} />,
      content: [
        "Mumbai, Bangalore, Ahmedabad, Johannesburg, Cape Town, and now the USA - my passport is basically a world tour diary.",
        "Language skills: Hindi, Marwari, Gujarati, broken Marathi, a sprinkle of Kannada, and enough Spanish to order tapas. Think United Nations, but with more chai.",
        "Neuroscience fun fact: Each language you learn creates new neural pathways, essentially giving your brain a cognitive workout. My brain's basically an Olympic gymnast at this point."
      ],
      anecdote: "Once tried explaining quantum physics in Marwari. Spoiler: It didn't go well, but hey, at least my brain tried!"
    },
    {
      title: "Professional Shapeshifter",
      icon: <Briefcase className="text-purple-600" size={48} />,
      content: [
        "Resumes are for amateurs. I prefer to call my career path a 'professional adventure'.",
        "From teaching to full-stack development, Android apps to data science, and now a researcher at Yale University.",
        "Marwari business mindset: Always hustling, even when the 'hustle' looks like deep neuroscience research."
      ],
      anecdote: "My LinkedIn profile looks like I'm either incredibly talented or suffering from severe career ADHD. Why choose?"
    },
    {
      title: "The Bookworm Surfer",
      icon: <BookOpen className="text-green-600" size={48} />,
      content: [
        "Book collector extraordinaire. Some I read, some I collect, some exist in a quantum state of 'maybe later'.",
        "Recent passion: Surfing! Turns out riding waves is surprisingly similar to navigating my multi-hyphenate career.",
        "Brain research tip: Reading is like cross-training for your neural networks. Each book is basically a software update for your mind."
      ],
      anecdote: "My bookshelf is less a library, more a 'potential knowledge museum'."
    },
    {
      title: "Cultural Curator",
      icon: <Music className="text-red-600" size={48} />,
      content: [
        "Ukulele player (yes, really). Data visualization artist. South Indian dance enthusiast.",
        "Can wake up at 4:30 AM for cricket, but will also cry during 'Taare Zameen Par'.",
        "Emotional range: From analyzing complex datasets to getting misty-eyed during movies about human connections."
      ],
      anecdote: "My playlist is a wild mix of cricket commentary, neuroscience podcasts, and Ganpati songs. Diversity is my middle name."
    },
    {
      title: "The Real Deal",
      icon: <Heart className="text-pink-600" size={48} />,
      content: [
        "Looking for a partner who's curious, kind, and has ambitions beyond social media validation.",
        "One relationship, two one-sided loves, multiple heartbreaks - but still believing in connection.",
        "Virgo. Dog person. Lover of rain, Mumbai's chaos, and meaningful conversations."
      ],
      anecdote: "Not seeking perfection, just someone who finds my neuroscience jokes funny and doesn't mind my incomplete book collection."
    }
  ];
  
  const [activeReason, setActiveReason] = useState(0);
  
  const nextReason = () => {
    setActiveReason((prev) => (prev + 1) % reasons.length);
  };
  
  const prevReason = () => {
    setActiveReason((prev) => (prev - 1 + reasons.length) % reasons.length);
  };
  
  return (
    <div ref={ref} className={`max-w-6xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-4xl font-bold mb-2 text-center">Why You Should Date Me</h2>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">A slightly tongue-in-cheek but mostly honest pitch</p>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl">
          <div className="p-6">
            <div className="flex justify-center mb-6">
              {reasons[activeReason].icon}
            </div>
            
            <h3 className="text-3xl font-bold text-center mb-6">
              {reasons[activeReason].title}
            </h3>
            
            {reasons[activeReason].content.map((paragraph, index) => (
              <p key={index} className="mb-4 text-lg text-gray-300">
                {paragraph}
              </p>
            ))}
            
            <div className="italic text-gray-400 mt-8 border-l-4 border-blue-500 pl-4">
              💬 Anecdote: {reasons[activeReason].anecdote}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button onClick={prevReason} className="bg-transparent hover:bg-gray-700 text-white font-bold py-2 px-6 border border-gray-600 rounded-full transition">
            Previous
          </button>
          <button onClick={nextReason} className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-full transition">
            Next
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-6">
          {reasons.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveReason(index)}
              className={`w-3 h-3 rounded-full ${
                activeReason === index ? 'bg-pink-600' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalWebsite;