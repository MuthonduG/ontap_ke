import { useState, useEffect, useRef, type ReactElement } from "react";
import {
  FaUsers,
  FaClipboardCheck,
  FaUserCheck,
  FaCalendarAlt,
  FaRobot,
  FaBrain,
  FaMagic,
  FaChartLine,
  FaShieldAlt,
  FaCogs,
  FaSync,
  FaSearch,
  FaFilter,
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaPause,
  FaCheckCircle,
  FaClock,
  FaChartBar,
  FaUserFriends,
  FaIdCard,
  FaFileSignature,
  FaGraduationCap,
  FaHandshake,
  FaStar,
  FaRocket,
  FaQuoteLeft,
  FaLightbulb,
  FaNetworkWired,
  FaLeaf,
  FaSeedling,
  FaTree,
  FaAward,
  FaTrophy,
} from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import FooterComponent from "../../components/layout/footer/FooterComponent";

// Define types for better TypeScript support
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: ReactElement;
  color: string;
  time: string;
}

interface RecruitmentStep extends ProcessStep {
  aiFeatures: string[];
}

interface OnboardingStep extends ProcessStep {
  tasks: string[];
}

interface AICapability {
  id: number;
  title: string;
  description: string;
  icon: ReactElement;
  color: string;
  accuracy?: string;
  efficiency?: string;
  features: string[];
}

const RecruitmentOnboardingPage = () => {
  // Avatar URLs
  const avatarUrls = [
    "https://i.pinimg.com/736x/fc/e6/93/fce693e4be192e6943e4a0fc3957a005.jpg",
    "https://i.pinimg.com/1200x/31/c9/ce/31c9ce479d7c5763f6b620d4370b96c8.jpg",
    "https://i.pinimg.com/736x/a5/05/e2/a505e2e8e6e4e5b0607a7a438b8984c6.jpg",
    "https://i.pinimg.com/736x/88/a5/23/88a523523f21ed102bd68d2add317ed5.jpg",
    "https://i.pinimg.com/736x/10/f9/49/10f94912ec553621e064716ae3026447.jpg",
    "https://i.pinimg.com/736x/ee/96/af/ee96afc0635e1f531db8ec9ec181fcc3.jpg"
  ];

  // Carousel images - using professional recruitment/onboarding themed images
  const carouselImages = [
    "https://images.unsplash.com/photo-1551836026-d5c2c0b0b4a1?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
  ];

  // State management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<'recruitment' | 'onboarding'>('recruitment');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [animatedValues, setAnimatedValues] = useState({
    timeToHire: 0,
    costPerHire: 0,
    qualityOfHire: 0,
    candidateSatisfaction: 0
  });
  const [customizedSteps, setCustomizedSteps] = useState([
    { id: 1, name: 'Job Requisition', enabled: true },
    { id: 2, name: 'Sourcing', enabled: true },
    { id: 3, name: 'Screening', enabled: true },
    { id: 4, name: 'Interview', enabled: true },
    { id: 5, name: 'Assessment', enabled: false },
    { id: 6, name: 'Background Check', enabled: true },
    { id: 7, name: 'Offer', enabled: true },
    { id: 8, name: 'Onboarding', enabled: true }
  ]);

  const carouselRef = useRef<number | null>(null);

  // Target values for animation
  const targetValues = {
    timeToHire: 28,
    costPerHire: 3200,
    qualityOfHire: 92,
    candidateSatisfaction: 4.8
  };

  // Animation for counting numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues(prev => ({
        timeToHire: Math.min(targetValues.timeToHire, prev.timeToHire + (targetValues.timeToHire - prev.timeToHire) * 0.1),
        costPerHire: Math.min(targetValues.costPerHire, prev.costPerHire + (targetValues.costPerHire - prev.costPerHire) * 0.1),
        qualityOfHire: Math.min(targetValues.qualityOfHire, prev.qualityOfHire + (targetValues.qualityOfHire - prev.qualityOfHire) * 0.1),
        candidateSatisfaction: Math.min(targetValues.candidateSatisfaction, prev.candidateSatisfaction + (targetValues.candidateSatisfaction - prev.candidateSatisfaction) * 0.1)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      carouselRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 4000);
    }

    return () => {
      if (carouselRef.current) {
        window.clearInterval(carouselRef.current);
      }
    };
  }, [isAutoPlaying, carouselImages.length]);

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    if (carouselRef.current) {
      window.clearInterval(carouselRef.current);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    if (carouselRef.current) {
      window.clearInterval(carouselRef.current);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (carouselRef.current) {
      window.clearInterval(carouselRef.current);
    }
  };

  // Toggle step customization
  const toggleStep = (id: number) => {
    setCustomizedSteps(prev =>
      prev.map(step =>
        step.id === id ? { ...step, enabled: !step.enabled } : step
      )
    );
  };

  // Recruitment Process Steps
  const recruitmentSteps: RecruitmentStep[] = [
    {
      id: 1,
      title: "Job Requisition & Planning",
      description: "Define role requirements, responsibilities, and qualifications with AI-powered job analysis.",
      icon: <FaClipboardCheck />,
      color: "from-emerald-500 to-teal-500",
      time: "1-2 days",
      aiFeatures: ["Smart JD Generator", "Competency Mapping", "Market Salary Analysis"]
    },
    {
      id: 2,
      title: "Candidate Sourcing",
      description: "Multi-channel candidate sourcing using AI-powered talent discovery and matching.",
      icon: <FaSearch />,
      color: "from-emerald-600 to-teal-600",
      time: "3-5 days",
      aiFeatures: ["AI Talent Matching", "Passive Candidate Discovery", "Social Media Sourcing"]
    },
    {
      id: 3,
      title: "Screening & Assessment",
      description: "Automated resume screening and AI-powered candidate assessment for initial filtering.",
      icon: <FaFilter />,
      color: "from-emerald-700 to-teal-700",
      time: "2-3 days",
      aiFeatures: ["Resume Parsing", "Skill Assessment", "Cultural Fit Analysis"]
    },
    {
      id: 4,
      title: "Interview Process",
      description: "Structured interviews with AI assistance for better candidate evaluation.",
      icon: <FaUserFriends />,
      color: "from-emerald-800 to-teal-800",
      time: "5-7 days",
      aiFeatures: ["Interview Scheduling", "Bias Detection", "Response Analysis"]
    },
    {
      id: 5,
      title: "Selection & Offer",
      description: "Final candidate selection and offer negotiation with AI-powered insights.",
      icon: <FaHandshake />,
      color: "from-emerald-900 to-teal-900",
      time: "2-3 days",
      aiFeatures: ["Offer Analytics", "Acceptance Prediction", "Negotiation Support"]
    }
  ];

  // Onboarding Process Steps
  const onboardingSteps: OnboardingStep[] = [
    {
      id: 1,
      title: "Pre-boarding",
      description: "Prepare for new hire arrival with automated welcome kits and documentation.",
      icon: <FaCalendarAlt />,
      color: "from-emerald-500 to-teal-500",
      time: "Before Day 1",
      tasks: ["Document Collection", "System Access Setup", "Welcome Package"]
    },
    {
      id: 2,
      title: "First Day Orientation",
      description: "Comprehensive introduction to company culture, policies, and team members.",
      icon: <FaIdCard />,
      color: "from-emerald-600 to-teal-600",
      time: "Day 1",
      tasks: ["Company Introduction", "Team Meet & Greet", "Policy Review"]
    },
    {
      id: 3,
      title: "Documentation & Compliance",
      description: "Complete all legal and compliance documentation with electronic signatures.",
      icon: <FaFileSignature />,
      color: "from-emerald-700 to-teal-700",
      time: "Week 1",
      tasks: ["Contract Signing", "Tax Forms", "Compliance Training"]
    },
    {
      id: 4,
      title: "Training & Development",
      description: "Role-specific training and development plan for skill enhancement.",
      icon: <FaGraduationCap />,
      color: "from-emerald-800 to-teal-800",
      time: "First 30 Days",
      tasks: ["Role Training", "Mentor Assignment", "Skill Development"]
    },
    {
      id: 5,
      title: "Integration & Support",
      description: "Ongoing support and integration into team and company culture.",
      icon: <FaUserCheck />,
      color: "from-emerald-900 to-teal-900",
      time: "First 90 Days",
      tasks: ["Regular Check-ins", "Performance Goals", "Culture Integration"]
    }
  ];

  // AI Capabilities for Recruitment
  const aiRecruitmentCapabilities: AICapability[] = [
    {
      id: 1,
      title: "Intelligent Candidate Matching",
      description: "AI algorithms analyze resumes and match candidates with job requirements based on skills, experience, and cultural fit.",
      icon: <FaBrain />,
      color: "from-emerald-500 to-teal-500",
      accuracy: "95%",
      features: ["Skill-based Matching", "Experience Analysis", "Cultural Fit Scoring"]
    },
    {
      id: 2,
      title: "Predictive Hiring Analytics",
      description: "Forecast candidate success and retention rates using historical data and machine learning models.",
      icon: <FaChartLine />,
      color: "from-emerald-600 to-teal-600",
      accuracy: "92%",
      features: ["Success Prediction", "Retention Forecasting", "Performance Analytics"]
    },
    {
      id: 3,
      title: "Automated Screening",
      description: "Natural language processing to screen resumes and identify top candidates based on predefined criteria.",
      icon: <FaRobot />,
      color: "from-emerald-700 to-teal-700",
      accuracy: "98%",
      features: ["Resume Parsing", "Keyword Analysis", "Qualification Verification"]
    },
    {
      id: 4,
      title: "Bias-Free Recruitment",
      description: "AI-powered tools to eliminate unconscious bias in the recruitment process for diverse hiring.",
      icon: <FaShieldAlt />,
      color: "from-emerald-800 to-teal-800",
      accuracy: "99%",
      features: ["Bias Detection", "Diversity Scoring", "Fair Evaluation"]
    }
  ];

  // AI Capabilities for Onboarding
  const aiOnboardingCapabilities: AICapability[] = [
    {
      id: 1,
      title: "Personalized Onboarding Plans",
      description: "AI creates customized onboarding journeys based on role, department, and individual needs.",
      icon: <FaMagic />,
      color: "from-emerald-500 to-teal-500",
      efficiency: "60% faster",
      features: ["Role-specific Plans", "Learning Path Customization", "Progress Tracking"]
    },
    {
      id: 2,
      title: "Automated Task Management",
      description: "Smart workflows automate administrative tasks and ensure nothing is missed during onboarding.",
      icon: <FaCogs />,
      color: "from-emerald-600 to-teal-600",
      efficiency: "70% time saved",
      features: ["Task Automation", "Deadline Management", "Document Routing"]
    },
    {
      id: 3,
      title: "Real-time Progress Monitoring",
      description: "Track onboarding progress in real-time with AI-powered analytics and insights.",
      icon: <FaSync />,
      color: "from-emerald-700 to-teal-700",
      efficiency: "85% completion rate",
      features: ["Progress Analytics", "Bottleneck Detection", "Success Metrics"]
    },
    {
      id: 4,
      title: "Predictive Engagement",
      description: "AI predicts and prevents onboarding drop-off by identifying engagement patterns and risks.",
      icon: <FaChartBar />,
      color: "from-emerald-800 to-teal-800",
      efficiency: "40% higher retention",
      features: ["Engagement Scoring", "Risk Prediction", "Intervention Alerts"]
    }
  ];

  // Customization Options
  const customizationOptions = [
    {
      id: 1,
      title: "Process Stages",
      description: "Add, remove, or reorder recruitment and onboarding stages to match your organization's workflow.",
      icon: <FaCogs />,
      customizable: true
    },
    {
      id: 2,
      title: "Approval Workflows",
      description: "Define custom approval hierarchies and decision-making processes for hiring managers.",
      icon: <FaClipboardCheck />,
      customizable: true
    },
    {
      id: 3,
      title: "Communication Templates",
      description: "Create personalized email and message templates for different stages of the process.",
      icon: <FaFileSignature />,
      customizable: true
    },
    {
      id: 4,
      title: "Integration Points",
      description: "Connect with existing HR systems, background check providers, and assessment tools.",
      icon: <FaNetworkWired />,
      customizable: true
    }
  ];

  // Statistics
  const recruitmentStats = [
    { label: "Time to Hire", value: `${animatedValues.timeToHire.toFixed(0)} days`, improvement: "-35%" },
    { label: "Cost per Hire", value: `$${animatedValues.costPerHire.toFixed(0)}`, improvement: "-42%" },
    { label: "Quality of Hire", value: `${animatedValues.qualityOfHire.toFixed(0)}%`, improvement: "+28%" },
    { label: "Candidate Satisfaction", value: `${animatedValues.candidateSatisfaction.toFixed(1)}/5`, improvement: "+40%" }
  ];

  // Enhanced Testimonials with company logos and achievements
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "HR Director",
      company: "TechCorp Inc.",
      quote: "This platform reduced our time-to-hire by 40% while improving candidate quality significantly.",
      avatar: avatarUrls[0],
      stats: "92% retention rate",
      logo: "🏆",
      achievements: ["Fortune 500", "Best Workplace 2023"]
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Talent Acquisition Lead",
      company: "RetailPlus Global",
      quote: "Customizable workflows perfectly adapted to our organization's needs with 65% faster onboarding.",
      avatar: avatarUrls[1],
      stats: "65% faster onboarding",
      logo: "🚀",
      achievements: ["10,000+ employees", "Global Expansion"]
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Onboarding Manager",
      company: "HealthCare Innovations",
      quote: "The automated process ensured 100% compliance and made new hires productive from day one.",
      avatar: avatarUrls[2],
      stats: "100% compliance",
      logo: "⚕️",
      achievements: ["HIPAA Certified", "Patient Safety Award"]
    },
    {
      id: 4,
      name: "David Wilson",
      role: "VP of Human Resources",
      company: "FinTech Solutions",
      quote: "AI-driven insights helped us reduce hiring bias by 80% and increase diversity by 45%.",
      avatar: avatarUrls[3],
      stats: "45% more diverse hires",
      logo: "💳",
      achievements: ["FinTech Leader", "Innovation Award"]
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Chief People Officer",
      company: "EcoTech Enterprises",
      quote: "Our employee satisfaction scores jumped from 3.8 to 4.7 within just 6 months of implementation.",
      avatar: avatarUrls[4],
      stats: "4.7/5 satisfaction",
      logo: "🌱",
      achievements: ["Carbon Neutral", "Green Workplace"]
    },
    {
      id: 6,
      name: "Robert Martinez",
      role: "Global HR Director",
      company: "Manufacturing Giants Ltd",
      quote: "Scaled our recruitment process to handle 300% growth without increasing HR headcount.",
      avatar: avatarUrls[5],
      stats: "300% growth managed",
      logo: "🏭",
      achievements: ["ISO Certified", "Safety Excellence"]
    }
  ];

  // Floating particles animation
  const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 5,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    left: Math.random() * 100,
    type: i % 4
  }));

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {floatingParticles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full animate-float-particle ${
              particle.type === 0 ? 'bg-emerald-200/20' : 
              particle.type === 1 ? 'bg-teal-200/20' : 
              particle.type === 2 ? 'bg-green-200/20' : 'bg-emerald-300/10'
            }`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${Math.random() * 100}%`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Header Carousel */}
      <section className="relative h-[800px] overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-300/10 rounded-full animate-pulse-orb" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-300/5 rounded-full animate-spin-slow" />
        </div>

        {/* Carousel Images */}
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Recruitment slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-teal-900/60 to-transparent" />
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-emerald-500/20 backdrop-blur-sm rounded-full hover:bg-emerald-500/30 transition-all hover:scale-110 active:scale-95 transform-gpu animate-slide-in-left"
        >
          <FaArrowLeft className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-emerald-500/20 backdrop-blur-sm rounded-full hover:bg-emerald-500/30 transition-all hover:scale-110 active:scale-95 transform-gpu animate-slide-in-right"
        >
          <FaArrowRight className="text-white" />
        </button>

        {/* Carousel Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all transform-gpu hover:scale-125 ${
                index === currentSlide
                  ? 'bg-emerald-400 scale-125 animate-pulse'
                  : 'bg-emerald-200/50 hover:bg-emerald-300'
              }`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute bottom-6 right-6 p-2 bg-emerald-500/20 backdrop-blur-sm rounded-full hover:bg-emerald-500/30 transition-all hover:scale-110 active:scale-95 animate-bounce-slow"
        >
          {isAutoPlaying ? (
            <FaPause className="text-emerald-200" />
          ) : (
            <FaPlay className="text-emerald-200" />
          )}
        </button>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="text-white animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-300/30 mb-6 backdrop-blur-sm animate-pulse-glow">
                  <FaRocket className="text-emerald-300 animate-spin-slow" />
                  <span className="text-sm font-semibold text-emerald-100">
                    AI-POWERED RECRUITMENT & ONBOARDING
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-text-reveal">
                  Transform Your
                  <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent py-2 animate-gradient-flow">
                    Talent Journey
                  </span>
                </h1>
                
                <p className="text-xl text-emerald-100 mb-8 max-w-xl animate-fade-in-delay">
                  From smart recruitment to seamless onboarding, our AI-powered platform 
                  revolutionizes how you attract, hire, and integrate top talent into your organization.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 animate-buttons-stagger">
                  <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-200/50 transition-all hover:scale-105 active:scale-95 transform-gpu hover:animate-pulse-slow">
                    Start Free Trial
                  </button>
                  <button className="px-8 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-emerald-500/20 transition-all hover:scale-105 active:scale-95 transform-gpu border border-emerald-300/30 hover:border-emerald-400/50">
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Right Side - Stats Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-200/20 animate-slide-in-up">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <IoIosTrendingUp className="text-emerald-300 animate-pulse" />
                  Recruitment Impact
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {recruitmentStats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-emerald-500/5 rounded-xl p-4 backdrop-blur-sm border border-emerald-300/10 hover:bg-emerald-500/10 transition-all hover:scale-105 transform-gpu animate-stats-card"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-2xl font-bold text-emerald-300 mb-1 animate-count-up">
                        {stat.value}
                      </div>
                      <div className="text-sm text-emerald-100 mb-1">{stat.label}</div>
                      <div className="text-xs text-emerald-400 font-semibold animate-improvement-pulse">
                        {stat.improvement} improvement
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-300/30 animate-pulse-border">
                  <div className="flex items-center gap-3">
                    <FaBrain className="text-emerald-300 text-xl animate-pulse-glow" />
                    <div>
                      <div className="text-sm font-semibold text-emerald-100">AI Success Rate</div>
                      <div className="text-2xl font-bold text-emerald-300 animate-pulse-number">94%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4 animate-pulse-glow">
              <FaLeaf className="text-emerald-600 animate-spin-slow" />
              <span className="text-sm font-semibold text-emerald-600">
                END-TO-END PROCESS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Seamless <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Talent Management</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A complete journey from candidate discovery to productive team member
            </p>
          </div>

          {/* Process Tabs */}
          <div className="mb-12">
            <div className="flex justify-center gap-4 mb-8 animate-buttons-stagger">
              <button
                onClick={() => setActiveTab('recruitment')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all transform-gpu hover:scale-105 active:scale-95 ${
                  activeTab === 'recruitment'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg animate-pulse-glow'
                    : 'bg-white text-gray-600 border border-gray-300 hover:border-emerald-300 hover:text-emerald-600'
                }`}
              >
                Recruitment Process
              </button>
              <button
                onClick={() => setActiveTab('onboarding')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all transform-gpu hover:scale-105 active:scale-95 ${
                  activeTab === 'onboarding'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg animate-pulse-glow'
                    : 'bg-white text-gray-600 border border-gray-300 hover:border-emerald-300 hover:text-emerald-600'
                }`}
              >
                Onboarding Process
              </button>
            </div>

            {/* Process Steps */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200 -translate-y-1/2 hidden lg:block animate-flow-line" />
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {(activeTab === 'recruitment' ? recruitmentSteps : onboardingSteps).map((step, index) => (
                  <div
                    key={step.id}
                    className="relative group animate-stagger-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => setHoveredCard(step.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 ${
                      hoveredCard === step.id ? 'scale-105 border-emerald-300 shadow-2xl animate-card-lift' : ''
                    }`}>
                      {/* Step Number */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white flex items-center justify-center font-bold text-lg shadow-lg animate-pulse-glow">
                        {index + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className={`mb-4 p-4 rounded-xl bg-gradient-to-r ${step.color} text-white shadow-lg inline-block ${
                        hoveredCard === step.id ? 'animate-bounce' : 'animate-pulse-glow'
                      }`}>
                        {step.icon}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors animate-text-reveal">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {step.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <FaClock className="animate-pulse" />
                          <span>{step.time}</span>
                        </div>
                        
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          step.time.includes('Days') 
                            ? 'bg-emerald-100 text-emerald-600 animate-pulse'
                            : 'bg-teal-100 text-teal-600 animate-pulse'
                        }`}>
                          {step.time.includes('Days') ? 'Processing' : 'Active'}
                        </div>
                      </div>
                      
                      {/* AI Features or Tasks */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="text-sm font-semibold text-gray-700 mb-2">
                          {activeTab === 'recruitment' ? 'AI Features:' : 'Key Tasks:'}
                        </div>
                        <div className="space-y-1">
                          {(activeTab === 'recruitment' 
                            ? (step as RecruitmentStep).aiFeatures 
                            : (step as OnboardingStep).tasks
                          ).map((feature: string, idx: number) => (
                            <div 
                              key={idx} 
                              className="flex items-center gap-2 text-sm text-gray-600 animate-feature-reveal"
                              style={{ animationDelay: `${idx * 0.05}s` }}
                            >
                              <FaCheckCircle className="text-emerald-500 text-xs animate-pulse" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4 animate-pulse-glow">
              <FaRobot className="text-emerald-600 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-600">
                AI-POWERED INTELLIGENCE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How AI Enhances Your <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Talent Journey</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced artificial intelligence capabilities that revolutionize recruitment and onboarding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Recruitment AI */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform-gpu animate-slide-in-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white animate-pulse-glow">
                  <FaUsers />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Recruitment AI</h3>
              </div>
              
              <div className="space-y-6">
                {aiRecruitmentCapabilities.map((capability, idx) => (
                  <div
                    key={capability.id}
                    className="group p-4 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 animate-feature-card"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${capability.color} text-white group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                        {capability.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">
                            {capability.title}
                          </h4>
                          <div className="px-2 py-1 bg-emerald-100 text-emerald-600 text-xs font-semibold rounded animate-pulse">
                            {capability.accuracy} accuracy
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{capability.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {capability.features.map((feature, featureIdx) => (
                            <span
                              key={featureIdx}
                              className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full animate-feature-tag"
                              style={{ animationDelay: `${featureIdx * 0.05}s` }}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Onboarding AI */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform-gpu animate-slide-in-right">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white animate-pulse-glow">
                  <FaUserCheck />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Onboarding AI</h3>
              </div>
              
              <div className="space-y-6">
                {aiOnboardingCapabilities.map((capability, idx) => (
                  <div
                    key={capability.id}
                    className="group p-4 rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all duration-300 animate-feature-card"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${capability.color} text-white group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                        {capability.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
                            {capability.title}
                          </h4>
                          <div className="px-2 py-1 bg-teal-100 text-teal-600 text-xs font-semibold rounded animate-pulse">
                            {capability.efficiency}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{capability.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {capability.features.map((feature, featureIdx) => (
                            <span
                              key={featureIdx}
                              className="px-3 py-1 bg-teal-50 text-teal-700 text-xs rounded-full animate-feature-tag"
                              style={{ animationDelay: `${featureIdx * 0.05}s` }}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tailor Your <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Process Flow</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Customize every aspect of your recruitment and onboarding process to match your organization's unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Customization Options */}
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FaCogs className="text-emerald-600 animate-spin-slow" />
                  Customization Options
                </h3>
                <div className="space-y-6">
                  {customizationOptions.map((option, idx) => (
                    <div
                      key={option.id}
                      className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 hover:scale-105 transform-gpu animate-stagger-card"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-600 animate-pulse">
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-800">{option.title}</h4>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-sm text-emerald-600 font-semibold">Customizable</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process Customization */}
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FaSeedling className="text-emerald-600 animate-growth" />
                  Process Steps Customization
                </h3>
                <p className="text-gray-600 mb-6">
                  Enable or disable specific steps to create your perfect recruitment workflow
                </p>
                
                <div className="space-y-4">
                  {customizedSteps.map((step, idx) => (
                    <div
                      key={step.id}
                      className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-sm transition-all duration-300 hover:scale-105 transform-gpu animate-stagger-card"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          step.enabled 
                            ? 'bg-emerald-500 animate-pulse-glow' 
                            : 'bg-gray-300'
                        }`} />
                        <span className={`font-medium ${
                          step.enabled ? 'text-gray-800' : 'text-gray-400'
                        }`}>
                          {step.name}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => toggleStep(step.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-110 active:scale-95 ${
                          step.enabled
                            ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200 animate-pulse'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {step.enabled ? 'Enabled' : 'Disabled'}
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100 animate-pulse-border">
                  <div className="flex items-center gap-3">
                    <FaLightbulb className="text-emerald-600 animate-pulse-glow" />
                    <div>
                      <div className="font-semibold text-emerald-700">AI Recommendation</div>
                      <p className="text-sm text-emerald-600">
                        Based on your industry and company size, we recommend enabling all steps for optimal results
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4 animate-pulse-glow">
              <FaTrophy className="text-emerald-600 animate-bounce" />
              <span className="text-sm font-semibold text-emerald-600">
                TRUSTED BY INDUSTRY LEADERS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              HR Success <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how top companies are transforming their talent acquisition and onboarding experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 border-2 border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform-gpu group animate-stagger-card hover:animate-testimonial-bounce"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(testimonial.id + 100)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Company Logo Badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg animate-pulse-glow">
                  {testimonial.logo}
                </div>
                
                {/* Achievement Badges */}
                <div className="absolute -top-2 left-4 flex gap-1">
                  {testimonial.achievements.map((achievement, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mb-4 mt-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-4 border-emerald-200 group-hover:border-emerald-400 transition-colors duration-300 animate-pulse"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <FaStar className="text-white text-xs" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg group-hover:text-emerald-600 transition-colors">{testimonial.name}</div>
                    <div className="text-sm font-semibold text-emerald-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
                
                <p className="text-gray-700 italic mb-4 text-lg">"{testimonial.quote}"</p>
                
                {/* Stats Badge */}
                <div className="mb-4 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                  <div className="flex items-center gap-2">
                    <FaAward className="text-emerald-600" />
                    <span className="font-bold text-emerald-700">{testimonial.stats}</span>
                  </div>
                </div>
                
                {/* Quote Icon */}
                <FaQuoteLeft className="absolute bottom-4 right-4 text-emerald-200 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              </div>
            ))}
          </div>
          
          {/* Additional Stats */}
          <div className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
                <div className="text-gray-700 font-semibold">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">94%</div>
                <div className="text-gray-700 font-semibold">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">40%</div>
                <div className="text-gray-700 font-semibold">Avg. Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">85%</div>
                <div className="text-gray-700 font-semibold">Retention Boost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div 
            className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 p-8 md:p-12 text-center relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 animate-pulse-border"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white rounded-full animate-spin-orb"
                  style={{
                    width: `${Math.random() * 60 + 30}px`,
                    height: `${Math.random() * 60 + 30}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 15 + 10}s`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 left-4 animate-float">
              <FaUsers className="text-white/30 size-8" />
            </div>
            <div className="absolute bottom-4 right-4 animate-float" style={{ animationDelay: '1s' }}>
              <FaRobot className="text-white/30 size-8" />
            </div>
            <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
              <FaTree className="text-white/30 size-6" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-pulse-text">
                Ready to Revolutionize Your Talent Journey?
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto animate-fade-in-delay">
                Join 1000+ organizations that have transformed their recruitment and onboarding with AI-powered automation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-buttons-stagger">
                <button className="px-8 py-3 rounded-xl bg-white text-emerald-600 font-semibold hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl transform-gpu hover:animate-pulse-slow">
                  Start 30-Day Free Trial
                </button>
                <button className="px-8 py-3 rounded-xl bg-emerald-700 text-white font-semibold hover:bg-emerald-800 hover:scale-105 active:scale-95 transition-all border border-emerald-600 shadow-lg hover:shadow-xl transform-gpu hover:animate-pulse-slow">
                  Book a Personalized Demo
                </button>
              </div>
              <p className="text-emerald-200 text-sm mt-6 animate-fade-in-delay">
                No credit card required • Full platform access • Expert onboarding support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <FooterComponent/>
    </>
  );
};

export default RecruitmentOnboardingPage;