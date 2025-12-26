import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { 
  FaUsers, 
  FaRocket, 
  FaChartLine, 
  FaAward, 
  FaHandshake, 
  FaGlobeAmericas,
  FaHeart,
  FaLightbulb,
  FaShieldAlt,
  FaArrowRight,
  FaQuoteLeft,
  FaPlay,
  FaPause,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaStar,
  FaCrown,
  FaGem,
  FaHome,
  FaBook,
  FaRoad,
  FaHeartbeat,
  FaUser,
  FaUsersCog,
  FaEnvelope,
} from "react-icons/fa";
import { FiTarget, FiTrendingUp, FiZap } from "react-icons/fi";
import FooterComponent from "../../components/layout/footer/FooterComponent";
import max_image from "../../assets/max.jpeg";
import peter_image from "../../assets/peter_tech.jpeg";
import victor_image from "../../assets/victor.jpeg";
import owen_image from "../../assets/owen.jpeg";
import mildred_image from "../../assets/mildred.jpeg";
import john_image from "../../assets/john.jpeg";
import ceo_image from "../../assets/ceo.jpeg";
import { ImUsers } from "react-icons/im";

const AboutusPage = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeValue, setActiveValue] = useState<number | null>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [heroInView, setHeroInView] = useState(true);
  const [storyInView, setStoryInView] = useState(false);
  const [timelineInView, setTimelineInView] = useState(false);
  const [valuesInView, setValuesInView] = useState(false);
  const [ceoInView, setCeoInView] = useState(false);
  const [teamInView, setTeamInView] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  
  // New states for hero animation control
  const [hasHeroAnimated, setHasHeroAnimated] = useState(false);
  const [isHeroInViewport, setIsHeroInViewport] = useState(false);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  // Scroll to section based on hash when component mounts or location changes
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        // Small delay to ensure page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 300);
      }
    }
  }, [location]);

  // Scroll to section programmatically
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without page reload
      window.history.pushState({}, '', `#${sectionId}`);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quick Navigation Links
  const quickNavSections = [
    { id: 'hero', label: 'Home', icon: FaHome },
    { id: 'story', label: 'Our Story', icon: FaBook },
    { id: 'timeline', label: 'Timeline', icon: FaRoad },
    { id: 'values', label: 'Values', icon: FaHeartbeat },
    { id: 'ceo', label: 'CEO Story', icon: FaUser },
    { id: 'team', label: 'Our Team', icon: FaUsersCog },
    { id: 'cta', label: 'Contact', icon: FaEnvelope },
  ];

  // Track scroll progress for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero section animations trigger immediately on page load
  useEffect(() => {
    setHeroInView(true);
  }, []);

  // Intersection Observer for hero section (for typewriter animation)
  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasHeroAnimated) {
            setIsHeroInViewport(true);
            setHasHeroAnimated(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (heroSectionRef.current) {
      heroObserver.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        heroObserver.unobserve(heroSectionRef.current);
      }
    };
  }, [hasHeroAnimated]);

  // Avatar URLs for team section
  const avatarUrls = [ mildred_image, peter_image, john_image, victor_image, max_image, owen_image, ceo_image ];

  // Stats with enhanced animation data
  const stats = [
    { 
      value: "500+", 
      label: "Happy Clients", 
      icon: <FaUsers />, 
      color: "from-emerald-500 to-teal-500",
      delay: 0,
      description: "Organizations transformed"
    },
    { 
      value: "99.8%", 
      label: "Uptime", 
      icon: <FaChartLine />, 
      color: "from-blue-500 to-purple-500",
      delay: 0.1,
      description: "Reliability guaranteed"
    },
    { 
      value: "24/7", 
      label: "Support", 
      icon: <FaShieldAlt />, 
      color: "from-amber-500 to-orange-500",
      delay: 0.2,
      description: "Always available"
    },
    { 
      value: "50+", 
      label: "Countries", 
      icon: <FaGlobeAmericas />, 
      color: "from-purple-500 to-pink-500",
      delay: 0.3,
      description: "Global reach"
    },
  ];

  // Values with enhanced interactions
  const values = [
    {
      title: "Innovation First",
      description: "Constantly pushing boundaries in workforce management technology",
      icon: <FaLightbulb />,
      color: "bg-gradient-to-r from-emerald-500/80 to-teal-500/70",
      hoverEffect: "bg-gradient-to-r from-emerald-500/20 to-teal-500/10",
      pulseColor: "emerald"
    },
    {
      title: "Customer Success",
      description: "Your growth is our success. We're committed to your journey",
      icon: <FaHeart />,
      color: "bg-gradient-to-r from-pink-500/80 to-rose-500/70",
      hoverEffect: "bg-gradient-to-r from-pink-500/20 to-rose-500/10",
      pulseColor: "pink"
    },
    {
      title: "Integrity",
      description: "Transparent, honest, and ethical in everything we do",
      icon: <FaHandshake />,
      color: "bg-gradient-to-r from-blue-500/80 to-indigo-500/70",
      hoverEffect: "bg-gradient-to-r from-blue-500/20 to-indigo-500/10",
      pulseColor: "blue"
    },
    {
      title: "Excellence",
      description: "Striving for perfection in every feature and interaction",
      icon: <FaAward />,
      color: "bg-gradient-to-r from-amber-500/80 to-orange-500/70",
      hoverEffect: "bg-gradient-to-r from-amber-500/20 to-orange-500/10",
      pulseColor: "amber"
    },
  ];

  // Timeline with enhanced animations
  const timeline = [
    {
      year: "2018",
      title: "Foundation",
      description: "Founded with a vision to revolutionize workforce management",
      icon: <FaRocket />,
      delay: 0,
      bounce: true
    },
    {
      year: "2019",
      title: "First Product",
      description: "Launched our core workforce management platform",
      icon: <FiTarget />,
      delay: 0.1,
      bounce: true
    },
    {
      year: "2020",
      title: "Growth",
      description: "Expanded to serve 100+ enterprise clients globally",
      icon: <FiTrendingUp />,
      delay: 0.2,
      bounce: true
    },
    {
      year: "2023",
      title: "Innovation",
      description: "Introduced AI-powered analytics and predictive scheduling",
      icon: <FaLightbulb />,
      delay: 0.3,
      bounce: true
    },
  ];

  // Team Stories
  const teamStories = [
    {
      quote: "We started with a simple idea: make workforce management intuitive and powerful for everyone.",
      author: "Alex Johnson",
      role: "CEO & Founder",
      emoji: "🚀"
    },
    {
      quote: "Our mission is to give managers back their most valuable resource: time.",
      author: "Sarah Chen",
      role: "Head of Product",
      emoji: "⏰"
    },
    {
      quote: "Every line of code we write is aimed at simplifying complex workforce challenges.",
      author: "Marcus Rivera",
      role: "Lead Engineer",
      emoji: "💻"
    },
  ];

  // CEO's credentials and story
  const ceoStory = {
    name: "Thaddeus Onindi",
    title: "CEO & Founder",
    credentials: [
      "Full-Stack Software Developer Certification",
    ],
    story: "Thaddeus Onindi is a Tech entrepreneur, Founder and CEO of Belfor Tech Consultants, Ontap Global Workspace, and GlowCare360. A seasoned product leader and project manager, he has guided startups from concept to scale across Africa, the UAE, and North America. With deep expertise in product strategy, market fit, and technology leadership, he helps founders build purpose-driven companies that grow sustainably and make a lasting impact.",
    avatar: ceo_image,
    stats: [
      { value: "8 Years", label: "Accounting Experience", icon: <FaGraduationCap /> },
      { value: "5 Years", label: "Software Development", icon: <FaCode /> },
      { value: "3 Products", label: "Successfully Launched", icon: <FaRocket /> }
    ]
  };

  // Team Members with enhanced animation data
  const teamMembers = [
    {
      name: "Mildred Nanjala",
      role: "HR Manager",
      expertise: "Human Resource Management",
      story: "Lead and developed HR Teams for over 10+ companies",
      avatar: avatarUrls[0],
      icon: <ImUsers />,
      color: "from-emerald-400 to-teal-400",
      delay: 0
    },
    {
      name: "Peter Shikuku",
      role: "Software Engineer",
      expertise: "Full-Stack Development & Architecture",
      story: "Built scalable systems for enterprise clients",
      avatar: avatarUrls[1],
      icon: <FaCode />,
      color: "from-blue-400 to-purple-400",
      delay: 0.1
    },
    {
      name: "John Thuku",
      role: "CTO",
      expertise: "Full-Stack Development and Team Lead",
      story: "Lead Tech Teams for multiple products",
      avatar: avatarUrls[2],
      icon: <FaLightbulb />,
      color: "from-amber-400 to-orange-400",
      delay: 0.2
    },
    {
      name: "Victor Emefo",
      role: "Product Design",
      expertise: "Product design & UI/UX",
      story: "Keen eye to detail with an understanding of custoer needs",
      avatar: avatarUrls[3],
      icon: <FaBriefcase />,
      color: "from-purple-400 to-pink-400",
      delay: 0.3
    },
    {
      name: "Maxwell Githinji",
      role: "Sofware Engineer",
      expertise: "Software Engineer",
      story: "Full-stack Developer with an experience with AI and Automation",
      avatar: avatarUrls[4],
      icon: <FaCode />,
      color: "from-emerald-500 to-blue-500",
      delay: 0.4
    },
    {
      name: "Ownen Imbukwa",
      role: "Frontend Engineer",
      expertise: "Sofwtware Engineer",
      story: "Frontend Full-stack Developer with an experience with UI/UX",
      avatar: avatarUrls[5],
      icon: <FaCode />,
      color: "from-emerald-500 to-blue-500",
      delay: 0.4
    }
  ];

  // Auto-play for stories
  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setActiveStoryIndex((prev) => (prev + 1) % teamStories.length);
      }, 4000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, teamStories.length]);

  // Intersection Observers for each section (excluding hero)
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const storyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStoryInView(true);
          }
        });
      },
      observerOptions
    );

    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimelineInView(true);
          }
        });
      },
      observerOptions
    );

    const valuesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setValuesInView(true);
          }
        });
      },
      observerOptions
    );

    const ceoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCeoInView(true);
          }
        });
      },
      observerOptions
    );

    const teamObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTeamInView(true);
          }
        });
      },
      observerOptions
    );

    const ctaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCtaInView(true);
          }
        });
      },
      observerOptions
    );

    // Observe each section
    const storySection = document.getElementById('story');
    const timelineSection = document.getElementById('timeline');
    const valuesSection = document.getElementById('values');
    const ceoSection = document.getElementById('ceo');
    const teamSection = document.getElementById('team');
    const ctaSection = document.getElementById('cta');

    if (storySection) storyObserver.observe(storySection);
    if (timelineSection) timelineObserver.observe(timelineSection);
    if (valuesSection) valuesObserver.observe(valuesSection);
    if (ceoSection) ceoObserver.observe(ceoSection);
    if (teamSection) teamObserver.observe(teamSection);
    if (ctaSection) ctaObserver.observe(ctaSection);

    return () => {
      if (storySection) storyObserver.unobserve(storySection);
      if (timelineSection) timelineObserver.unobserve(timelineSection);
      if (valuesSection) valuesObserver.unobserve(valuesSection);
      if (ceoSection) ceoObserver.unobserve(ceoSection);
      if (teamSection) teamObserver.unobserve(teamSection);
      if (ctaSection) ctaObserver.unobserve(ctaSection);
    };
  }, []);

  // Helper for scroll animations
  const scrollAnimation = (delay: number, isVisible: boolean) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `all 0.6s ease-out ${delay}s`
  });

  // Hero animations (trigger immediately)
  const heroAnimation = (delay: number) => ({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? 'translateY(0)' : 'translateY(20px)',
    transition: `all 0.8s ease-out ${delay}s`
  });

  // Parallax effect for background elements
  const parallaxStyle = (speed: number) => ({
    transform: `translateY(${scrollProgress * speed}px)`
  });

  // Floating animation
  const floatAnimation = (delay: number) => ({
    animation: `float 3s ease-in-out ${delay}s infinite`
  });

  // Typewriter effect for text - Updated with hero control
  const TypewriterText = ({ 
    text, 
    delay = 0, 
    isHero = false 
  }: { 
    text: string; 
    delay?: number; 
    isHero?: boolean 
  }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
      if (isHero) {
        // For hero section, only animate when in viewport
        setShouldAnimate(isHeroInViewport);
      } else {
        // For other sections, wait until section is in view
        setShouldAnimate(true);
      }
    }, [isHero, isHeroInViewport]);

    useEffect(() => {
      if (shouldAnimate && currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 50 + delay * 100);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text, shouldAnimate, delay]);

    return <span>{displayedText}</span>;
  };

  return (
    <>
    <div ref={aboutRef} className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-10 overflow-hidden relative">
      {/* Quick Navigation (Fixed) */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-2 border border-emerald-200">
          <div className="space-y-2">
            {quickNavSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-emerald-50 transition-colors group relative"
                aria-label={`Jump to ${section.label}`}
              >
                <section.icon className="size-4 text-gray-600 group-hover:text-emerald-600" />
                <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {section.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              i % 3 === 0 ? 'bg-emerald-200/20' : 
              i % 3 === 1 ? 'bg-blue-200/20' : 'bg-purple-200/20'
            }`}
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section - Now with ref for intersection observer */}
      <section ref={heroSectionRef} id="hero" className="scroll-mt-24 relative overflow-hidden pt-20 pb-32">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-300/10 to-teal-300/10 rounded-full blur-3xl animate-pulse-slow"
            style={parallaxStyle(0.2)}
          />
          <div 
            className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse-slow"
            style={parallaxStyle(0.1)}
          />
          {/* Floating Elements */}
          <div className="absolute top-40 right-40 animate-float">
            <FaGem className="text-emerald-300/30 size-16" />
          </div>
          <div className="absolute bottom-40 left-40 animate-float" style={floatAnimation(1)}>
            <FaCrown className="text-amber-300/30 size-12" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float" style={floatAnimation(2)}>
            <FaStar className="text-blue-300/30 size-10" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4 animate-pulse-glow"
              style={heroAnimation(0.2)}
            >
              <FiZap className="mr-2 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                🚀 ABOUT US
              </span>
            </div>
            
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={heroAnimation(0.3)}
            >
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Revolutionizing
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Workforce Management
              </span>
            </h1>
            
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              style={heroAnimation(0.4)}
            >
              We're on a mission to transform how organizations manage, engage, and empower their workforce through innovative technology
            </p>

            {/* Quick jump links */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {quickNavSections.slice(1).map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="px-3 py-1.5 bg-emerald-500/10 backdrop-blur-sm text-emerald-700 text-sm rounded-full hover:bg-emerald-500/20 transition-all flex items-center gap-2 border border-emerald-200"
                >
                  <section.icon className="size-3" />
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Animated Stats Grid - Hero animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group"
                style={heroAnimation(0.5 + index * 0.1)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative rounded-2xl p-6 bg-gradient-to-br from-white to-gray-50 border-2 ${
                  hoveredCard === index 
                    ? 'border-emerald-300 shadow-2xl scale-105' 
                    : 'border-gray-200 shadow-lg'
                } transition-all duration-300 group-hover:scale-105`}>
                  {/* Animated Background */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className={`absolute -top-4 left-6 p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-lg ${
                    hoveredCard === index ? 'animate-bounce' : ''
                  }`}>
                    {stat.icon}
                  </div>
                  <div className="pt-8">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section - Only animates when scrolled into view */}
      <section id="story" className="scroll-mt-24 py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Our <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Story</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div style={scrollAnimation(0.2, storyInView)}>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2018, OnTap began as a simple idea: to make workforce management accessible, intuitive, and powerful for organizations of all sizes. We saw the challenges businesses faced with outdated systems and knew there had to be a better way.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, we serve hundreds of organizations worldwide, helping them streamline operations, boost productivity, and create better workplaces. Our platform continues to evolve, driven by our commitment to innovation and customer success.
              </p>
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-200/50 transition-all flex items-center gap-2 group hover:scale-105 active:scale-95">
                <span>Read Our Full Story</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            {/* Enhanced Team Stories Carousel */}
            <div 
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white to-emerald-50/30 border-2 border-emerald-100 p-8 shadow-xl"
              style={scrollAnimation(0.4, storyInView)}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <FaQuoteLeft className="text-emerald-400" />
                  Team Insights
                </h3>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-3 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-600 hover:scale-110 transition-transform hover:shadow-lg"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </div>

              <div className="relative h-48 overflow-hidden">
                {teamStories.map((story, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === activeStoryIndex
                        ? 'opacity-100 transform translate-x-0'
                        : 'opacity-0 transform translate-x-full'
                    }`}
                  >
                    <div className="text-2xl mb-4 animate-bounce">{story.emoji}</div>
                    <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                      "{story.quote}"
                    </p>
                    <div className="space-y-1">
                      <div className="font-semibold text-gray-800">{story.author}</div>
                      <div className="text-gray-600 text-sm">{story.role}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Story Indicators */}
              <div className="flex gap-2 mt-8">
                {teamStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStoryIndex(index)}
                    className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                      index === activeStoryIndex
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 scale-110'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section id="timeline" className="scroll-mt-24 py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Our <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Journey</span>
            </h2>
          </div>

          <div className="relative">
            {/* Animated Curved Dotted Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-64 pointer-events-none hidden md:block">
              <svg className="w-full h-full" viewBox="0 0 300 800" preserveAspectRatio="none">
                <path
                  d="M150,0 C180,100 120,200 150,300 C180,400 120,500 150,600 C180,700 120,800 150,800"
                  stroke="url(#timeline-gradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,8"
                  className="transition-all duration-1000"
                  style={{
                    strokeDashoffset: -scrollProgress * 5
                  }}
                />
                <defs>
                  <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="25%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="75%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#0d9488" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Timeline Items */}
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative mb-16 md:mb-20 ${
                    isEven ? 'md:pr-1/2 md:pl-12' : 'md:pl-1/2 md:pr-12'
                  }`}
                  style={scrollAnimation(0.3 + index * 0.1, timelineInView)}
                  onMouseEnter={() => setHoveredCard(index + 10)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`relative ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    {/* Year Badge with Animation */}
                    <div className={`absolute top-0 ${isEven ? 'md:left-0' : 'md:right-0'} z-10`}>
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 shadow-md transition-all duration-300 ${
                        hoveredCard === index + 10 ? 'scale-110 shadow-lg' : ''
                      }`}>
                        <span className="text-sm font-semibold text-emerald-700">{item.year}</span>
                      </div>
                    </div>

                    {/* Animated Card */}
                    <div className={`mt-10 rounded-2xl p-6 border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-500 ${
                      isEven ? 'md:mr-12' : 'md:ml-12'
                    } ${
                      hoveredCard === index + 10 
                        ? 'hover:shadow-2xl hover:border-emerald-300 hover:scale-105' 
                        : 'hover:shadow-xl hover:border-emerald-300'
                    }`}>
                      {/* Icon Connection Point */}
                      <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                        isEven ? 'md:-right-12' : 'md:-left-12'
                      } hidden md:block`}>
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
                          hoveredCard === index + 10 ? 'scale-125 animate-pulse' : ''
                        }`}>
                          {item.icon}
                        </div>
                        <div className={`absolute top-1/2 w-12 h-0.5 bg-gradient-to-r transition-all duration-500 ${
                          isEven 
                            ? 'from-emerald-300 to-emerald-500 left-full' 
                            : 'from-teal-500 to-emerald-300 right-full'
                        } ${hoveredCard === index + 10 ? 'w-16' : ''}`}></div>
                      </div>

                      {/* Card Content */}
                      <div className="text-center md:text-left">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white md:hidden ${
                          hoveredCard === index + 10 ? 'animate-bounce' : ''
                        }`}>
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 transition-all duration-300">
                          {item.description}
                        </p>
                      </div>

                      {/* Animated Corner */}
                      <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} transform ${
                        isEven ? 'translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 -translate-y-1/2'
                      } transition-all duration-300 ${hoveredCard === index + 10 ? 'scale-150' : ''}`}>
                        <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-ping opacity-75"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section id="values" className="scroll-mt-24 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Our <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative group"
                style={scrollAnimation(0.3 + index * 0.1, valuesInView)}
                onMouseEnter={() => setActiveValue(index)}
                onMouseLeave={() => setActiveValue(null)}
              >
                <div className={`relative rounded-2xl p-8 border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-500 ${
                  activeValue === index 
                    ? 'scale-105 shadow-2xl border-emerald-300' 
                    : 'hover:shadow-xl hover:border-emerald-300'
                }`}>
                  {/* Animated Icon Background */}
                  <div className={`absolute -top-5 left-6 p-4 rounded-xl ${value.color} ${
                    activeValue === index ? 'animate-pulse scale-110' : 'animate-pulse-glow'
                  } transition-all duration-300`}>
                    <div className={`text-2xl transition-transform duration-300 ${
                      activeValue === index ? 'scale-125' : ''
                    }`}>
                      {value.icon}
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 transition-all duration-300">
                      {value.title}
                    </h3>
                    <p className={`text-gray-600 transition-all duration-500 ${
                      activeValue === index ? 'opacity-100 translate-y-0' : 'opacity-90'
                    }`}>
                      {value.description}
                    </p>
                  </div>
                  
                  {/* Animated Hover Effect */}
                  <div className={`absolute inset-0 rounded-2xl ${value.hoverEffect} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Floating Particles */}
                  {activeValue === index && (
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute rounded-full bg-${value.pulseColor}-400/20 animate-spread`}
                          style={{
                            width: '4px',
                            height: '4px',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO's Story Section */}
      <section id="ceo" className="scroll-mt-24 py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-4xl font-bold text-gray-800">
              From <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Spreadsheets</span> to{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Software</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CEO Image & Credentials */}
            <div className="relative" style={scrollAnimation(0.3, ceoInView)}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={ceoStory.avatar}
                  alt={ceoStory.name}
                  className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{ceoStory.name}</h3>
                  <p className="text-emerald-300 font-medium">{ceoStory.title}</p>
                </div>
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full animate-float">
                  Founder
                </div>
              </div>
              
              {/* Animated Credentials */}
              <div className="mt-6 space-y-3">
                {ceoStory.credentials.map((credential, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                    style={scrollAnimation(0.4 + index * 0.1, ceoInView)}
                  >
                    <FaGraduationCap className="text-emerald-600 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Story Content */}
            <div style={scrollAnimation(0.5, ceoInView)}>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-300 to-teal-100 mb-4 animate-pulse-glow">
                  <FaBriefcase className="text-emerald-600 animate-spin" style={{ animationDuration: '4s' }} />
                  <span className="text-sm font-semibold text-emerald-600">Career Transformation</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  The Accountant Who <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Coded a Revolution</span>
                </h3>
              </div>

              <div className="space-y-6 mb-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {ceoStory.story}
                </p>
                <div className="relative p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
                  <FaQuoteLeft className="absolute -top-2 -left-2 text-emerald-400 text-2xl" />
                  <p className="text-gray-700 italic">
                    “Great companies aren’t built by chasing trends - they’re built by understanding people, validating ideas early, and scaling with intention. From Africa to North America, I’ve learned that sustainable growth comes from aligning vision, market fit, and technology - no matter the geography.”
                  </p>
                </div>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {ceoStory.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-emerald-300 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                    style={scrollAnimation(0.6 + index * 0.1, ceoInView)}
                  >
                    <div className="text-emerald-500 mb-2 group-hover:scale-125 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-200/50 transition-all flex items-center gap-2 group hover:scale-105 active:scale-95">
                <span>Read Full Interview</span>
                <FaArrowRight className="group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section id="team" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Meet Our <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Dream Team</span>
            </h2>
          </div>
          
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto" style={scrollAnimation(0.3, teamInView)}>
            Experts from diverse backgrounds united by a common mission: transform workforce management
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative group"
                style={scrollAnimation(0.4 + index * 0.1, teamInView)}
                onMouseEnter={() => setHoveredCard(index + 20)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative rounded-2xl p-6 border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-500 ${
                  hoveredCard === index + 20 
                    ? 'scale-105 shadow-2xl border-emerald-300' 
                    : 'hover:shadow-xl hover:border-emerald-300'
                }`}>
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-white shadow-lg">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className={`absolute bottom-0 right-1/4 transform translate-x-1/2 p-3 rounded-full bg-gradient-to-r ${member.color} text-white shadow-lg transition-all duration-300 ${
                      hoveredCard === index + 20 ? 'scale-125 rotate-12' : ''
                    }`}>
                      {member.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-sm font-medium mb-4">
                      {member.expertise}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.story}</p>
                  </div>

                  {/* Animated Hover Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${member.color.replace('400', '100')} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Connection Lines */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-300 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-emerald-300 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-emerald-300 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-300 rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Animated Team Stats */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 p-8 shadow-lg" style={scrollAnimation(0.8, teamInView)}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "50+", label: "Combined Years Experience", color: "from-emerald-600 to-teal-500" },
                { value: "15+", label: "Industries Served", color: "from-blue-600 to-purple-500" },
                { value: "24/7", label: "Team Collaboration", color: "from-amber-600 to-orange-500" },
                { value: "100%", label: "Remote First Team", color: "from-purple-600 to-pink-500" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section id="cta" className="scroll-mt-24 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div 
            className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-8 md:p-12 text-center relative overflow-hidden shadow-2xl"
            style={scrollAnimation(0.3, ctaInView)}
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white rounded-full animate-spin"
                  style={{
                    width: `${Math.random() * 80 + 40}px`,
                    height: `${Math.random() * 80 + 40}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 10 + 10}s`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 left-4 animate-float">
              <FaStar className="text-white/30 size-8" />
            </div>
            <div className="absolute bottom-4 right-4 animate-float" style={{ animationDelay: '1s' }}>
              <FaCrown className="text-white/30 size-8" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-pulse">
                Join Thousands of Organizations
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Ready to transform your workforce management? Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 rounded-xl bg-white text-emerald-600 font-semibold hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl group">
                  <span className="flex items-center gap-2">
                    <span>Start Free Trial</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="px-8 py-3 rounded-xl bg-emerald-600/20 backdrop-blur-sm text-white font-semibold hover:bg-emerald-600/30 hover:scale-105 active:scale-95 transition-all border border-white/20 shadow-lg hover:shadow-xl group">
                  <span className="flex items-center gap-2">
                    <span>Schedule a Demo</span>
                    <FaPlay className="group-hover:scale-110 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <FooterComponent/>
    </>
  );
};

export default AboutusPage;