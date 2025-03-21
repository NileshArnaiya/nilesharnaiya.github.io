'use client';
import React, { useState } from 'react';
 // Adjust the path as necessary

// Define the Slide type
interface Slide {
  title: string;
  subtitle?: string;
  content?: Array<{ text: string; amount?: string }> | string[];
  logo?: boolean;
  icon?: string;
  background: string;
  footer?: string;
}

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides: Slide[] = [
    // Slide 1: Title
    {
      title: "BIBBY AI",
      subtitle: "The Cursor for Researchers",
      logo: true,
      background: "bg-gradient-to-br from-blue-900 to-indigo-900"
    },
    
    // Slide 2: Founder
    {
      title: "NILESH JAIN",
      subtitle: "Founder & CEO",
      content: ["Researcher at Yale University"],
      background: "bg-gradient-to-br from-gray-900 to-gray-800"
    },
    
    // Slide 3: The Problem
    {
      title: "THE PROBLEM",
      content: [
        "Learning LaTeX syntax is unnecessarily difficult",
        "Compilation errors derail productive writing sessions",
        "Document structure management is cumbersome",
        "Collaboration with non-technical colleagues is challenging",
        "Version control is messy and error-prone"
      ],
      icon: "problem",
      background: "bg-gradient-to-br from-red-900 to-red-800"
    },
    
    // Slide 4: Solution
    {
      title: "OUR SOLUTION",
      subtitle: "A \"Cursor for LaTeX\" approach",
      content: [
        "Live AI assistance for LaTeX without requiring deep technical knowledge",
        "Automatically resolves compilation errors before they happen",
        "Offers intelligent document structure management",
        "Enables collaboration between technical and non-technical team members",
        "Integrates modern version control"
      ],
      icon: "solution",
      background: "bg-gradient-to-br from-emerald-900 to-green-800"
    },
    
    // Slide 5: Market Opportunity
    {
      title: "MARKET OPPORTUNITY",
      subtitle: "$500M and growing",
      content: [
        "8M+ researchers worldwide need better tools",
        "Universities spend millions on these solutions",
        "Current leaders (Overleaf, Jenni.ai) solve only portions of the problem",
        "Researchers are actively seeking better alternatives"
      ],
      icon: "market",
      background: "bg-gradient-to-br from-blue-900 to-sky-800"
    },
    
    // Slide 6: Business Model
    {
      title: "BUSINESS MODEL",
      content: [
        "Individual researcher subscription",
        "University-wide licenses: Custom pricing",
        "Target: $10M ARR within first 2 years"
      ],
      icon: "business",
      background: "bg-gradient-to-br from-violet-900 to-purple-800"
    },
    
    // Slide 7: Go-to-Market
    {
      title: "GO-TO-MARKET STRATEGY",
      content: [
        "Initial Focus: Target computer science and engineering departments",
        "Early Adopters: Build relationships with influential research labs",
        "University Expansion: Secure university-wide agreements",
        "Geographic Expansion: Start with US/Europe, expand to Asia"
      ],
      icon: "strategy",
      background: "bg-gradient-to-br from-indigo-900 to-blue-800"
    },
    
    // Slide 8: Team
    {
      title: "TEAM",
      content: [
        "Nilesh Jain (Founder & CEO): Technical background with research writing experience",
        "Seeking: Technical co-founder with ML/NLP expertise",
        "Current hiring: Engineering and sales intern to support development"
      ],
      icon: "team",
      background: "bg-gradient-to-br from-slate-900 to-slate-800"
    },
    
    // Slide 9: Funding
    {
      title: "FUNDING NEEDS",
      subtitle: "Initial MVP: $3,000-$3,500",
      content: [
        { text: "Infrastructure and API costs (3-4 months)", amount: "$1,000" },
        { text: "Intern and marketing (3 months)", amount: "$1,000" },
        { text: "Customer discovery, product design, co-founder search", amount: "$1,000" },
        { text: "Local travel", amount: "$500" }
      ],
      footer: "Future Seed Round: $100,000",
      icon: "funding",
      background: "bg-gradient-to-br from-amber-900 to-amber-800"
    },
    
    // Slide 10: My Story
    {
      title: "MY STORY",
      content: [
        "Personally struggled with writing research papers",
        "Wasted 3 weeks learning LaTeX and fixing compilation errors",
        "Found collaboration with fellow researchers was unorganized",
        "It's time for an intuitive experience with AI built from scratch"
      ],
      icon: "story",
      background: "bg-gradient-to-br from-orange-900 to-orange-800"
    },
    
    // Slide 11: Vision
    {
      title: "VISION",
      subtitle: "Creating the most powerful and collaborative writing tool for researchers worldwide",
      icon: "vision",
      background: "bg-gradient-to-br from-blue-900 to-indigo-900"
    },
    
    // Slide 12: Contact
    {
      title: "CONTACT",
      subtitle: "Nilesh Jain",
      content: [
        "Researcher at Yale",
        "nilesh.jain@yale.edu"
      ],
      icon: "contact",
      background: "bg-gradient-to-br from-gray-900 to-gray-800"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'problem':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12" y2="16" />
          </svg>
        );
      case 'solution':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'market':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'business':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'strategy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'team':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'funding':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'story':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'vision':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'contact':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  };
  
  const renderLogo = () => {
    return (
      <div className="flex items-center justify-center mb-6">
        <img src={"/images/bibby-logo.png"} alt="Bibby Logo" className="h-20 w-20 rounded-full" />
      </div>
    );
  };
  
  const renderSlide = (slide: Slide) => {
    return (
      <div className={`h-full w-full flex flex-col ${slide.background} text-white p-4 md:p-8 rounded-lg shadow-xl overflow-auto`}>
        <div className="absolute top-4 right-4 text-xs font-medium bg-green-500 bg-opacity-20 px-2 py-1 rounded">
          {currentSlide + 1}/{slides.length}
        </div>
        
        {slide.logo && renderLogo()}
        
        <div className="flex items-center mb-6">
          {slide.icon && 
            <div className="mr-4 hidden md:block">
              {renderIcon(slide.icon)}
            </div>
          }
          <div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-wider">{slide.title}</h1>
            {slide.subtitle && 
              <h2 className="text-lg md:text-2xl mt-2 font-light text-white text-opacity-90">{slide.subtitle}</h2>
            }
          </div>
        </div>
        
        {slide.content && Array.isArray(slide.content) && (
          <ul className="text-base md:text-xl space-y-3 md:space-y-4 flex-grow max-w-3xl">
            {slide.content.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-blue-300">•</span>
                <span className="leading-relaxed">{typeof item === 'string' ? item : item.text}</span>
              </li>
            ))}
          </ul>
        )}
        
        {slide.content && Array.isArray(slide.content) && (
          <div className="space-y-4 flex-grow max-w-3xl">
            {slide.content.map((item, index) => (
              <div key={index} className="flex justify-between items-center bg-black bg-opacity-20 p-3 rounded">
                {typeof item === 'string' ? (
                  <span className="text-base md:text-xl">{item}</span>
                ) : (
                  <>
                    <span className="text-base md:text-xl">{item.text}</span>
                    <span className="text-base md:text-xl font-bold text-amber-300">{item.amount}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
        
        {slide.footer && 
          <div className="mt-6 p-3 bg-black bg-opacity-30 rounded text-xl text-center">
            {slide.footer}
          </div>
        }
      </div>
    );
  };
  
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-2 md:p-4 bg-gray-900">
      <div className="w-full max-w-5xl h-full max-h-screen md:max-h-196 mb-4 relative">
        {renderSlide(slides[currentSlide])}
      </div>
      
      <div className="flex space-x-4 mb-4">
        <button 
          onClick={prevSlide}
          className="px-3 md:px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-200 flex items-center shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous
        </button>
        <button 
          onClick={nextSlide}
          className="px-3 md:px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition duration-200 flex items-center shadow-lg"
        >
          Next
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PitchDeck;