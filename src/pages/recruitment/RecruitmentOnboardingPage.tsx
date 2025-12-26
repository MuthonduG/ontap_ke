import { useState, useEffect, useRef, type ReactElement } from "react";
import { useLocation } from "react-router-dom";
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
  FaComments,
  FaVideo,
  FaCalendar,
  FaTasks,
  FaSlack,
  FaGoogle,
  FaMicrosoft,
  FaBell,
  FaCheckDouble,
  FaExchangeAlt,
  FaChevronRight,
  FaChevronDown,
  FaMobileAlt,
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

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  icon: ReactElement;
  color: string;
  features: string[];
  integrations?: string[];
  stats?: { label: string; value: string }[];
  isExpanded?: boolean;
}

const RecruitmentOnboardingPage = () => {
  const location = useLocation();
  
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

  // New feature cards state
  const [featureCards, setFeatureCards] = useState<FeatureCard[]>([
    {
      id: 1,
      title: "Internal Chats, Messages & Calls",
      description: "Secure internal communication with one-on-one and group chats, voice calls, and video meetings. Integrated directly with tasks, projects, and employee profiles - eliminating reliance on external tools like Slack or Zoom.",
      icon: <FaComments />,
      color: "from-emerald-500 to-teal-500",
      features: [
        "One-on-one & group chats",
        "Voice & video calls",
        "Screen sharing",
        "File sharing",
        "Message reactions",
        "Read receipts"
      ],
      integrations: ["Slack", "Zoom", "Microsoft Teams"],
      stats: [
        { label: "Real-time sync", value: "99.9%" },
        { label: "Reduced external tools", value: "80%" },
        { label: "Response time", value: "< 2min" }
      ],
      isExpanded: false
    },
    {
      id: 2,
      title: "Unified Smart Calendar",
      description: "A single intelligent calendar that unifies tasks, meetings, shifts, approvals, payroll deadlines, and compliance events. Integrates with Google Calendar, Microsoft Outlook, and other platforms while keeping Ontap as the source of truth—preventing conflicts and missed deadlines.",
      icon: <FaCalendar />,
      color: "from-emerald-600 to-teal-600",
      features: [
        "Task integration",
        "Meeting scheduling",
        "Shift planning",
        "Deadline tracking",
        "Conflict detection",
        "Smart reminders"
      ],
      integrations: ["Google Calendar", "Microsoft Outlook", "Apple Calendar"],
      stats: [
        { label: "Conflict reduction", value: "95%" },
        { label: "Time saved", value: "12 hrs/week" },
        { label: "Missed events", value: "Reduced 90%" }
      ],
      isExpanded: false
    },
    {
      id: 3,
      title: "Task & Workflow Automation",
      description: "Automate task assignments, approvals, reminders, and escalations across HR, finance, projects, and compliance workflows. Tasks are role-driven, context-aware, and outcome-focused ensuring accountability and faster execution without micromanagement.",
      icon: <FaTasks />,
      color: "from-emerald-700 to-teal-700",
      features: [
        "Automated assignments",
        "Approval workflows",
        "Smart reminders",
        "Escalation rules",
        "Progress tracking",
        "Analytics & reporting"
      ],
      integrations: ["Jira", "Asana", "Trello", "Monday.com"],
      stats: [
        { label: "Process speed", value: "3x faster" },
        { label: "Manual work", value: "Reduced 70%" },
        { label: "Error reduction", value: "85%" }
      ],
      isExpanded: false
    }
  ]);

  // Toggle feature card expansion
  const toggleFeatureCard = (id: number) => {
    setFeatureCards(prev =>
      prev.map(card =>
        card.id === id ? { ...card, isExpanded: !card.isExpanded } : card
      )
    );
  };

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

  // Quick Navigation Sections for this page
  const quickNavSections = [
    { id: 'process-overview', label: 'Process Overview', icon: FaClipboardCheck },
    { id: 'collaboration-features', label: 'Collaboration', icon: FaComments },
    { id: 'ai-capabilities', label: 'AI Capabilities', icon: FaRobot },
    { id: 'customization', label: 'Customization', icon: FaCogs },
    { id: 'testimonials', label: 'Testimonials', icon: FaQuoteLeft },
    { id: 'cta', label: 'Get Started', icon: FaRocket },
  ];

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
      {/* Quick Navigation (Fixed) */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-2 border border-gray-200">
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
      <section id="ai_top" className="relative h-[1500px] md:h-[800px] overflow-hidden">
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
        <div className="relative z-10 h-full flex items-center py-24">
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
                  Automate employee onboarding and offboarding with structured checklists, role-based 
                  approvals, asset allocation and recovery, document signing, and compliance confirmations.
                  Ontap ensures every hire is productive from day one and every exit is compliant, auditable, and
                  risk-free. 
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 animate-buttons-stagger">
                  <button 
                    onClick={() => scrollToSection('process-overview')}
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-200/50 transition-all hover:scale-105 active:scale-95 transform-gpu hover:animate-pulse-slow"
                  >
                    Explore Features
                  </button>
                  <button 
                    onClick={() => scrollToSection('cta')}
                    className="px-8 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-emerald-500/20 transition-all hover:scale-105 active:scale-95 transform-gpu border border-emerald-300/30 hover:border-emerald-400/50"
                  >
                    Get Started
                  </button>
                </div>

                {/* Quick jump links */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {quickNavSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full hover:bg-white/30 transition-all flex items-center gap-2"
                    >
                      <section.icon className="size-3" />
                      {section.label}
                    </button>
                  ))}
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
      <section id="process-overview" className="scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-3 sm:mb-4">
              <FaLeaf className="text-emerald-600 size-3 sm:size-4" />
              <span className="text-xs sm:text-sm font-semibold text-emerald-600">
                END-TO-END PROCESS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Seamless <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Talent Management</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2">
              A complete journey from candidate discovery to productive team member
            </p>
          </div>

          {/* Process Tabs */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-buttons-stagger">
              <button
                onClick={() => setActiveTab('recruitment')}
                className={`px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all transform-gpu hover:scale-105 active:scale-95 ${
                  activeTab === 'recruitment'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-300 hover:border-emerald-300 hover:text-emerald-600'
                }`}
              >
                Recruitment Process
              </button>
              <button
                onClick={() => setActiveTab('onboarding')}
                className={`px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all transform-gpu hover:scale-105 active:scale-95 ${
                  activeTab === 'onboarding'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-300 hover:border-emerald-300 hover:text-emerald-600'
                }`}
              >
                Onboarding Process
              </button>
            </div>

            {/* Process Steps */}
            <div className="relative">
              {/* Connection Line - Hidden on mobile, shown on medium+ */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200 -translate-y-1/2 hidden md:block animate-flow-line" />
              
              {/* Mobile Steps - Stacked */}
              <div className="md:hidden space-y-6">
                {(activeTab === 'recruitment' ? recruitmentSteps : onboardingSteps).map((step, index) => (
                  <div
                    key={step.id}
                    className="relative group bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                    onMouseEnter={() => setHoveredCard(step.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Step Number for Mobile */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                    
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${step.color} text-white shadow-md flex-shrink-0`}>
                        {step.icon}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-gray-800 mb-1 line-clamp-1">
                          {step.title}
                        </h3>
                        
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                          {step.description}
                        </p>
                        
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <FaClock className="size-3" />
                            <span>{step.time}</span>
                          </div>
                          
                          <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            step.time.includes('Days') 
                              ? 'bg-emerald-100 text-emerald-600'
                              : 'bg-teal-100 text-teal-600'
                          }`}>
                            {step.time.includes('Days') ? 'Processing' : 'Active'}
                          </div>
                        </div>
                        
                        {/* AI Features or Tasks - Collapsed by default */}
                        <div className="mt-2 pt-2 border-t border-gray-100">
                          <div className="text-xs font-semibold text-gray-700 mb-1">
                            {activeTab === 'recruitment' ? 'AI Features' : 'Key Tasks'}:
                          </div>
                          <div className="space-y-1">
                            {(activeTab === 'recruitment' 
                              ? (step as RecruitmentStep).aiFeatures 
                              : (step as OnboardingStep).tasks
                            ).slice(0, 2).map((feature: string, idx: number) => (
                              <div 
                                key={idx} 
                                className="flex items-center gap-1.5 text-xs text-gray-600"
                              >
                                <FaCheckCircle className="text-emerald-500 size-2 flex-shrink-0" />
                                <span className="line-clamp-1">{feature}</span>
                              </div>
                            ))}
                            {(activeTab === 'recruitment' 
                              ? (step as RecruitmentStep).aiFeatures.length > 2
                              : (step as OnboardingStep).tasks.length > 2
                            ) && (
                              <button className="text-xs text-emerald-600 font-medium">
                                + More
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Steps - Grid */}
              <div className="hidden md:grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
                {(activeTab === 'recruitment' ? recruitmentSteps : onboardingSteps).map((step, index) => (
                  <div
                    key={step.id}
                    className="relative group"
                    onMouseEnter={() => setHoveredCard(step.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 ${
                      hoveredCard === step.id ? 'scale-105 border-emerald-300' : ''
                    }`}>
                      {/* Step Number */}
                      <div className="absolute -top-3 lg:-top-4 -left-3 lg:-left-4 w-8 lg:w-12 h-8 lg:h-12 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white flex items-center justify-center font-bold text-sm lg:text-lg shadow-lg">
                        {index + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className={`mb-3 lg:mb-4 p-2 lg:p-4 rounded-lg lg:rounded-xl bg-gradient-to-r ${step.color} text-white shadow-md inline-block`}>
                        {step.icon}
                      </div>
                      
                      <h3 className="text-base lg:text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                        {step.title}
                      </h3>
                      
                      <p className="text-xs lg:text-sm text-gray-600 mb-3">
                        {step.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm text-gray-500">
                          <FaClock className="size-3" />
                          <span>{step.time}</span>
                        </div>
                        
                        <div className={`px-2 lg:px-3 py-0.5 lg:py-1 rounded-full text-xs font-medium ${
                          step.time.includes('Days') 
                            ? 'bg-emerald-100 text-emerald-600'
                            : 'bg-teal-100 text-teal-600'
                        }`}>
                          {step.time.includes('Days') ? 'Processing' : 'Active'}
                        </div>
                      </div>
                      
                      {/* AI Features or Tasks */}
                      <div className="mt-3 lg:mt-4 pt-3 border-t border-gray-100">
                        <div className="text-xs lg:text-sm font-semibold text-gray-700 mb-2">
                          {activeTab === 'recruitment' ? 'AI Features:' : 'Key Tasks:'}
                        </div>
                        <div className="space-y-1 lg:space-y-1.5">
                          {(activeTab === 'recruitment' 
                            ? (step as RecruitmentStep).aiFeatures 
                            : (step as OnboardingStep).tasks
                          ).map((feature: string, idx: number) => (
                            <div 
                              key={idx} 
                              className="flex items-center gap-1.5 lg:gap-2 text-xs lg:text-sm text-gray-600"
                            >
                              <FaCheckCircle className="text-emerald-500 size-2 lg:size-3 flex-shrink-0" />
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

      {/* Collaboration Features Section - FULLY RESPONSIVE */}
      <section id="collaboration-features" className="scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Notice */}
          <div className="lg:hidden flex items-center justify-center mb-6 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
            <div className="flex items-center gap-2">
              <FaMobileAlt className="text-emerald-600 size-4" />
              <span className="text-sm font-medium text-emerald-700">Tap cards to expand features</span>
            </div>
          </div>

          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-3 sm:mb-4">
              <FaNetworkWired className="text-emerald-600 size-3 sm:size-4" />
              <span className="text-xs sm:text-sm font-semibold text-emerald-600">
                INTEGRATED COLLABORATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
              Unified <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Workplace Tools</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2 sm:px-0">
              Everything your team needs to communicate, collaborate, and execute—all in one platform
            </p>
          </div>

          {/* Mobile Layout - Stacked Cards */}
          <div className="lg:hidden space-y-4 sm:space-y-6">
            {featureCards.map((card, index) => (
              <div
                key={card.id}
                className={`bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
                  card.isExpanded ? 'ring-2 ring-emerald-200' : ''
                }`}
              >
                {/* Mobile Card Header */}
                <button
                  onClick={() => toggleFeatureCard(card.id)}
                  className="w-full p-4 sm:p-5 text-left focus:outline-none"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`p-2.5 sm:p-3 rounded-lg bg-gradient-to-r ${card.color} text-white shadow-md flex-shrink-0`}>
                      {card.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 line-clamp-1">
                            {card.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                            {card.description}
                          </p>
                        </div>
                        <div className={`p-1.5 sm:p-2 rounded-full bg-emerald-100 text-emerald-600 flex-shrink-0 transition-transform ${
                          card.isExpanded ? 'rotate-180' : ''
                        }`}>
                          <FaChevronDown className="size-3 sm:size-4" />
                        </div>
                      </div>
                      
                      {/* Mobile Integration Badges - Horizontal Scroll */}
                      {card.integrations && (
                        <div className="mt-3">
                          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
                            {card.integrations.map((integration, idx) => (
                              <div
                                key={idx}
                                className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200 flex items-center gap-1.5 whitespace-nowrap flex-shrink-0"
                              >
                                {integration === 'Slack' && <FaSlack className="size-3" />}
                                {integration === 'Zoom' && <FaVideo className="size-3" />}
                                {integration === 'Google Calendar' && <FaGoogle className="size-3" />}
                                {integration === 'Microsoft Outlook' && <FaMicrosoft className="size-3" />}
                                <span className="max-w-[80px] truncate">{integration}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </button>

                {/* Mobile Expandable Content */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  card.isExpanded ? 'max-h-[800px]' : 'max-h-0'
                }`}>
                  <div className="p-4 sm:p-5 pt-0 border-t border-gray-100">
                    
                    {/* Features List - Single Column */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base flex items-center gap-1.5">
                        <FaCheckDouble className="text-emerald-500 size-3 sm:size-4" />
                        Key Features
                      </h4>
                      <div className="space-y-2">
                        {card.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 p-2.5 rounded-lg bg-gray-50"
                          >
                            <FaChevronRight className="text-emerald-400 text-xs mt-0.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats - Horizontal Scrollable Cards */}
                    {card.stats && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base flex items-center gap-1.5">
                          <FaChartLine className="text-emerald-500 size-3 sm:size-4" />
                          Performance Impact
                        </h4>
                        <div className="overflow-x-auto">
                          <div className="flex gap-3 pb-2 min-w-min">
                            {card.stats.map((stat, idx) => (
                              <div
                                key={idx}
                                className="min-w-[120px] p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 flex-shrink-0"
                              >
                                <div className="text-base sm:text-lg font-bold text-emerald-600 mb-1">
                                  {stat.value}
                                </div>
                                <div className="text-xs text-gray-600 line-clamp-2">
                                  {stat.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Mobile Demo Preview */}
                    <div className="mt-4 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex items-start gap-2">
                          <FaLightbulb className="text-emerald-600 size-4 sm:size-5 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-emerald-700 text-sm">
                              Real-time Integration
                            </div>
                            <p className="text-xs text-emerald-600">
                              Seamlessly connects with your workflow tools
                            </p>
                          </div>
                        </div>
                        <button className="px-3 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm rounded-lg hover:shadow-md transition-all mt-2 sm:mt-0">
                          Try Demo
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Quick Stats Bar */}
                  <div className={`px-4 py-2 bg-gradient-to-r ${card.color.replace('from-', 'from-').replace('to-', 'to-')} bg-opacity-5 border-t border-gray-100 flex items-center justify-between text-xs ${
                    card.isExpanded ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">
                      <span className="flex items-center gap-1 text-emerald-600 whitespace-nowrap">
                        <FaBell className="size-2" />
                        Real-time
                      </span>
                      <span className="flex items-center gap-1 text-teal-600 whitespace-nowrap">
                        <FaSync className="size-2" />
                        Auto sync
                      </span>
                      <span className="flex items-center gap-1 text-emerald-700 whitespace-nowrap">
                        <FaExchangeAlt className="size-2" />
                        Bi-directional
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full flex-shrink-0">
                      ACTIVE
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout - Original Design */}
          <div className="hidden lg:block space-y-6">
            {featureCards.map((card, index) => (
              <div
                key={card.id}
                className={`bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  hoveredCard === card.id + 200 ? 'border-emerald-300 scale-[1.02]' : ''
                } ${
                  card.isExpanded ? 'ring-2 ring-emerald-200' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(card.id + 200)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Header */}
                <button
                  onClick={() => toggleFeatureCard(card.id)}
                  className="w-full p-6 text-left focus:outline-none group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${card.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 mt-1 max-w-3xl">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* Integration Badges */}
                      {card.integrations?.map((integration, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 flex items-center gap-1.5"
                        >
                          {integration === 'Slack' && <FaSlack className="text-xs" />}
                          {integration === 'Zoom' && <FaVideo className="text-xs" />}
                          {integration === 'Google Calendar' && <FaGoogle className="text-xs" />}
                          {integration === 'Microsoft Outlook' && <FaMicrosoft className="text-xs" />}
                          {integration}
                        </div>
                      ))}
                      <div className={`p-2 rounded-full bg-emerald-100 text-emerald-600 transition-transform duration-300 ${
                        card.isExpanded ? 'rotate-180' : ''
                      }`}>
                        <FaChevronDown />
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expandable Content */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  card.isExpanded ? 'max-h-[500px]' : 'max-h-0'
                }`}>
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Features List */}
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <FaCheckDouble className="text-emerald-500" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {card.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-emerald-50 transition-colors duration-200 group"
                            >
                              <FaChevronRight className="text-emerald-400 text-xs group-hover:translate-x-1 transition-transform" />
                              <span className="text-sm text-gray-700 group-hover:text-emerald-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <FaChartLine className="text-emerald-500" />
                          Performance Impact
                        </h4>
                        <div className="space-y-3">
                          {card.stats?.map((stat, idx) => (
                            <div
                              key={idx}
                              className="p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100"
                            >
                              <div className="text-lg font-bold text-emerald-600 mb-1">
                                {stat.value}
                              </div>
                              <div className="text-sm text-gray-600">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Interactive Demo Preview */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FaLightbulb className="text-emerald-600 animate-pulse" />
                          <div>
                            <div className="font-semibold text-emerald-700">
                              Real-time Integration
                            </div>
                            <p className="text-sm text-emerald-600">
                              Seamlessly connects with your existing workflow tools
                            </p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all">
                          Try Live Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats Bar */}
                <div className={`px-6 py-3 bg-gradient-to-r ${card.color.replace('from-', 'from-').replace('to-', 'to-')} bg-opacity-5 border-t border-gray-100 flex items-center justify-between transition-all duration-300 ${
                  card.isExpanded ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5 text-emerald-600">
                      <FaBell className="text-xs" />
                      Real-time notifications
                    </span>
                    <span className="flex items-center gap-1.5 text-teal-600">
                      <FaSync className="text-xs animate-spin-slow" />
                      Automatic sync
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <FaExchangeAlt className="text-xs" />
                      Bidirectional integration
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                    ACTIVE
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats - Fully Responsive */}
          <div className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-emerald-100 text-center transition-all duration-300 hover:shadow-md">
              <div className="text-lg sm:text-xl lg:text-3xl font-bold text-emerald-600 mb-1 sm:mb-2">100%</div>
              <div className="text-gray-700 font-semibold text-xs sm:text-sm">Platform Integration</div>
              <p className="text-gray-600 text-xs mt-0.5 sm:mt-1">No external tools</p>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-emerald-100 text-center transition-all duration-300 hover:shadow-md">
              <div className="text-lg sm:text-xl lg:text-3xl font-bold text-emerald-600 mb-1 sm:mb-2">24/7</div>
              <div className="text-gray-700 font-semibold text-xs sm:text-sm">Real-time Sync</div>
              <p className="text-gray-600 text-xs mt-0.5 sm:mt-1">Always updated</p>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-emerald-100 text-center transition-all duration-300 hover:shadow-md">
              <div className="text-lg sm:text-xl lg:text-3xl font-bold text-emerald-600 mb-1 sm:mb-2">Zero</div>
              <div className="text-gray-700 font-semibold text-xs sm:text-sm">Setup Complexity</div>
              <p className="text-gray-600 text-xs mt-0.5 sm:mt-1">Plug and play</p>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-emerald-100 text-center transition-all duration-300 hover:shadow-md">
              <div className="text-lg sm:text-xl lg:text-3xl font-bold text-emerald-600 mb-1 sm:mb-2">10x</div>
              <div className="text-gray-700 font-semibold text-xs sm:text-sm">Faster Execution</div>
              <p className="text-gray-600 text-xs mt-0.5 sm:mt-1">Reduced switching</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities - Responsive */}
      <section id="ai-capabilities" className="scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-3 sm:mb-4">
              <FaRobot className="text-emerald-600 size-3 sm:size-4" />
              <span className="text-xs sm:text-sm font-semibold text-emerald-600">
                AI-POWERED INTELLIGENCE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              How AI Enhances Your <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Talent Journey</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2">
              Advanced artificial intelligence capabilities that revolutionize recruitment and onboarding
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Recruitment AI */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                  <FaUsers />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Recruitment AI</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {aiRecruitmentCapabilities.map((capability) => (
                  <div
                    key={capability.id}
                    className="p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${capability.color} text-white flex-shrink-0`}>
                        {capability.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-1">
                            {capability.title}
                          </h4>
                          <div className="px-2 py-1 bg-emerald-100 text-emerald-600 text-xs font-semibold rounded whitespace-nowrap">
                            {capability.accuracy} accuracy
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm mb-2 line-clamp-2">
                          {capability.description}
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {capability.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full truncate max-w-[120px] sm:max-w-none"
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
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                  <FaUserCheck />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Onboarding AI</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {aiOnboardingCapabilities.map((capability) => (
                  <div
                    key={capability.id}
                    className="p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${capability.color} text-white flex-shrink-0`}>
                        {capability.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-1">
                            {capability.title}
                          </h4>
                          <div className="px-2 py-1 bg-teal-100 text-teal-600 text-xs font-semibold rounded whitespace-nowrap">
                            {capability.efficiency}
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm mb-2 line-clamp-2">
                          {capability.description}
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {capability.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-full truncate max-w-[120px] sm:max-w-none"
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

      {/* Customization Section - Responsive */}
      <section id="customization" className="scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Tailor Your <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Process Flow</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2">
              Customize every aspect of your recruitment and onboarding process to match your organization's unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Customization Options */}
            <div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2">
                  <FaCogs className="text-emerald-600" />
                  Customization Options
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {customizationOptions.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-sm transition-all duration-300"
                    >
                      <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-600 flex-shrink-0">
                        {option.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{option.title}</h4>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-xs sm:text-sm text-emerald-600 font-semibold">Customizable</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process Customization */}
            <div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2">
                  <FaSeedling className="text-emerald-600" />
                  Process Steps Customization
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                  Enable or disable specific steps to create your perfect recruitment workflow
                </p>
                
                <div className="space-y-3">
                  {customizedSteps.map((step) => (
                    <div
                      key={step.id}
                      className="flex items-center justify-between p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-sm transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                          step.enabled 
                            ? 'bg-emerald-500' 
                            : 'bg-gray-300'
                        }`} />
                        <span className={`font-medium text-sm sm:text-base ${
                          step.enabled ? 'text-gray-800' : 'text-gray-400'
                        }`}>
                          {step.name}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => toggleStep(step.id)}
                        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                          step.enabled
                            ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {step.enabled ? 'Enabled' : 'Disabled'}
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl border border-emerald-100">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <FaLightbulb className="text-emerald-600 size-4 sm:size-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-emerald-700 text-sm sm:text-base">AI Recommendation</div>
                      <p className="text-emerald-600 text-xs sm:text-sm mt-0.5">
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

      {/* Enhanced Testimonials Section - Responsive */}
      <section id="testimonials" className="scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-3 sm:mb-4">
              <FaTrophy className="text-emerald-600 size-3 sm:size-4" />
              <span className="text-xs sm:text-sm font-semibold text-emerald-600">
                TRUSTED BY INDUSTRY LEADERS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              HR Success <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2">
              See how top companies are transforming their talent acquisition and onboarding experiences
            </p>
          </div>
          
          {/* Mobile Testimonials - Stacked */}
          <div className="lg:hidden space-y-4 sm:space-y-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-100 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-emerald-200"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <FaStar className="text-white size-1.5 sm:size-2" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div>
                        <div className="font-bold text-gray-800 text-sm sm:text-base truncate">{testimonial.name}</div>
                        <div className="text-emerald-600 text-xs sm:text-sm font-medium">{testimonial.role}</div>
                        <div className="text-gray-600 text-xs">{testimonial.company}</div>
                      </div>
                      <div className="text-2xl">{testimonial.logo}</div>
                    </div>
                    
                    <p className="text-gray-700 text-sm italic mb-3 line-clamp-3">"{testimonial.quote}"</p>
                    
                    {/* Achievement Badges - Scrollable */}
                    <div className="mb-3 overflow-x-auto">
                      <div className="flex gap-1 pb-2 min-w-min">
                        {testimonial.achievements.map((achievement, aIdx) => (
                          <span
                            key={aIdx}
                            className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200 whitespace-nowrap"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Stats Badge */}
                    <div className="p-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                      <div className="flex items-center gap-1.5">
                        <FaAward className="text-emerald-600 size-3 sm:size-4" />
                        <span className="font-bold text-emerald-700 text-xs sm:text-sm">{testimonial.stats}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Desktop Testimonials - Grid */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 border-2 border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform-gpu group"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  {testimonial.logo}
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-4 border-emerald-200"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <FaStar className="text-white size-2" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg">{testimonial.name}</div>
                    <div className="text-emerald-600 font-medium">{testimonial.role}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
                
                <p className="text-gray-700 italic mb-4 text-lg">"{testimonial.quote}"</p>
                
                <div className="mb-4 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                  <div className="flex items-center gap-2">
                    <FaAward className="text-emerald-600" />
                    <span className="font-bold text-emerald-700">{testimonial.stats}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {testimonial.achievements.map((achievement, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Stats - Responsive */}
          <div className="mt-8 sm:mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-emerald-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600 mb-1 sm:mb-2">500+</div>
                <div className="text-gray-700 font-semibold text-sm sm:text-base">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600 mb-1 sm:mb-2">94%</div>
                <div className="text-gray-700 font-semibold text-sm sm:text-base">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600 mb-1 sm:mb-2">40%</div>
                <div className="text-gray-700 font-semibold text-sm sm:text-base">Avg. Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600 mb-1 sm:mb-2">85%</div>
                <div className="text-gray-700 font-semibold text-sm sm:text-base">Retention Boost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section id="cta" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 p-4 sm:p-6 lg:p-8 md:p-12 text-center relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Ready to Revolutionize Your Talent Journey?
              </h2>
              <p className="text-emerald-100 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto">
                Join 1000+ organizations that have transformed their recruitment and onboarding with AI-powered automation
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white text-emerald-600 font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all shadow-md">
                  Start 30-Day Free Trial
                </button>
                <button className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-emerald-700 text-white font-semibold text-sm sm:text-base hover:bg-emerald-800 transition-all border border-emerald-600 shadow-md">
                  Book a Personalized Demo
                </button>
              </div>
              <p className="text-emerald-200 text-xs sm:text-sm mt-4 sm:mt-6">
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