import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { 
  FaUsers, 
  FaChartLine, 
  FaBullhorn, 
  FaEnvelope, 
  FaComments, 
  FaVideo,
  FaGraduationCap,
  FaCalendarAlt,
  FaClock,
  FaDownload,
  FaRobot,
  FaTrophy,
  FaChartBar,
  FaHeart,
  FaStar,
  FaPlay,
  FaCheckCircle,
  FaBullseye,
  FaRocket,
  FaCommentsDollar,
  FaMedal,
  FaHandshake,
  FaChartPie,
  FaProjectDiagram,
  FaIdCard,
  FaDatabase,
  FaNetworkWired,
  FaQrcode,
  FaUserCheck,
  FaTasks,
  FaGlobe,
  FaFileContract,
} from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
import FooterComponent from "../../components/layout/footer/FooterComponent";

const EmployeeEngagementPage = () => {
  // Avatar URLs
  const avatarUrls = [
    "https://i.pinimg.com/736x/fc/e6/93/fce693e4be192e6943e4a0fc3957a005.jpg",
    "https://i.pinimg.com/1200x/31/c9/ce/31c9ce479d7c5763f6b620d4370b96c8.jpg",
    "https://i.pinimg.com/736x/a5/05/e2/a505e2e8e6e4e5b0607a7a438b8984c6.jpg",
    "https://i.pinimg.com/736x/88/a5/23/88a523523f21ed102bd68d2add317ed5.jpg",
    "https://i.pinimg.com/736x/10/f9/49/10f94912ec553621e064716ae3026447.jpg",
    "https://i.pinimg.com/736x/ee/96/af/ee96afc0635e1f531db8ec9ec181fcc3.jpg"
  ];

  // Image URLs
  const hrTeamPhoto = "https://i.pinimg.com/1200x/17/13/6b/17136bebb40d0faf881cfb44bb4badc1.jpg";
  const analyticsImage = "https://i.pinimg.com/1200x/29/1f/c2/291fc21a6bb02500736b7b8725639525.jpg";
  const projectManagementImage = "https://i.pinimg.com/1200x/bd/ac/ab/bdacabe2d668eaaabe913fed1e874fc5.jpg";
  const digitalIdImage = "https://i.pinimg.com/1200x/af/54/17/af5417b9254151fbb632a8f29ae90843.jpg";
  const crmImage = "https://i.pinimg.com/1200x/8a/73/41/8a73411546fae570050db532fe20ce16.jpg";

  // State Management
  const [activeSection, setActiveSection] = useState('attendance');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [projectProgress, setProjectProgress] = useState(75);
  const [activeFeatureTab, setActiveFeatureTab] = useState('attendance');
  const location = useLocation();

  // Update quick nav sections
  const quickNavSections = [
    { id: 'hero', label: 'Top', icon: FaRocket },
    { id: 'metrics', label: 'Metrics', icon: FaChartPie },
    { id: 'core-features', label: 'Core Features', icon: FaBullseye },
    { id: 'advanced-features', label: 'Advanced Features', icon: FaProjectDiagram },
    { id: 'testimonials', label: 'Testimonials', icon: FaCommentsDollar },
    { id: 'cta', label: 'Get Started', icon: FaMedal },
  ];

  // Scroll to section based on hash when component mounts or location changes
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
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
      window.history.pushState({}, '', `#${sectionId}`);
    }
  };

  // Animate project progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectProgress(prev => {
        if (prev < 75) return prev + 1;
        if (prev > 75) return prev - 1;
        return prev;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Sample data for metrics
  const engagementMetrics = [
    { 
      label: "Employee Satisfaction", 
      value: "92%", 
      change: "+5%", 
      icon: FaHeart, 
      color: "from-emerald-400 to-teal-600",
      description: "Overall employee happiness score"
    },
    { 
      label: "Participation Rate", 
      value: "87%", 
      change: "+8%", 
      icon: FaUsers, 
      color: "from-emerald-500 to-teal-600",
      description: "Active engagement in programs"
    },
    { 
      label: "Response Time", 
      value: "2.4h", 
      change: "-1.2h", 
      icon: FaClock, 
      color: "from-emerald-600 to-teal-600",
      description: "Average feedback response"
    },
    { 
      label: "Training Completion", 
      value: "94%", 
      change: "+12%", 
      icon: FaGraduationCap, 
      color: "from-emerald-700 to-teal-600",
      description: "Completed learning modules"
    },
  ];

  // Attendance & Leave Features
  const attendanceFeatures = [
    {
      title: "Daily, Weekly & Monthly Tracking",
      description: "Comprehensive attendance tracking across all timeframes with visual dashboards",
      icon: FaCalendarAlt,
      color: "from-emerald-500 to-teal-500",
      features: ["Real-time tracking", "Custom reporting periods", "Automated alerts"],
      stats: "100% accuracy"
    },
    {
      title: "AI-Powered Downloadable Reports",
      description: "Generate intelligent reports with insights and recommendations",
      icon: FaDownload,
      color: "from-emerald-600 to-teal-600",
      features: ["PDF/Excel exports", "Trend analysis", "Predictive insights"],
      stats: "85% time saved"
    },
    {
      title: "Easy Leave Application",
      description: "Streamlined leave request process for all staff members",
      icon: FaCheckCircle,
      color: "from-emerald-700 to-teal-700",
      features: ["Mobile-friendly", "Multi-level approvals", "Calendar integration"],
      stats: "3x faster"
    },
    {
      title: "Leave Management Dashboard",
      description: "Centralized control panel for HR teams to manage all leave requests",
      icon: FaChartBar,
      color: "from-emerald-800 to-teal-800",
      features: ["Bulk approvals", "Leave balance tracking", "Policy enforcement"],
      stats: "95% efficiency"
    }
  ];

  // Performance Management Features
  const performanceFeatures = [
    {
      title: "Custom Institutional Metrics",
      description: "Define and track performance based on your organization's specific goals",
      icon: FaBullhorn,
      color: "from-emerald-500 to-teal-500",
      features: ["Custom KPIs", "Goal alignment", "Department-specific metrics"],
      stats: "100% customizable"
    },
    {
      title: "Standard Performance Metrics",
      description: "Industry-standard metrics for comprehensive performance evaluation",
      icon: FaChartLine,
      color: "from-emerald-600 to-teal-600",
      features: ["360-degree feedback", "Competency assessment", "Productivity tracking"],
      stats: "50+ metrics"
    },
    {
      title: "Personalized Insights",
      description: "AI-generated personalized feedback and development suggestions",
      icon: FaRobot,
      color: "from-emerald-700 to-teal-700",
      features: ["Individual reports", "Growth recommendations", "Skill gap analysis"],
      stats: "AI-powered"
    },
    {
      title: "Automated Penalty System",
      description: "Automated enforcement of policies based on performance metrics",
      icon: FaTrophy,
      color: "from-emerald-800 to-teal-800",
      features: ["Rule-based automation", "Fair policy application", "Documentation trail"],
      stats: "Zero errors"
    }
  ];

  // Employee Engagement Features
  const engagementFeatures = [
    {
      title: "Automated Emailing Services",
      description: "Personalized email campaigns for recognition, updates, and celebrations",
      icon: FaEnvelope,
      color: "from-emerald-500 to-teal-500",
      features: ["Birthday wishes", "Work anniversaries", "Achievement recognition"],
      stats: "Auto-scheduled"
    },
    {
      title: "Direct Messaging & Notifications",
      description: "Real-time communication platform for instant collaboration",
      icon: FaComments,
      color: "from-emerald-600 to-teal-600",
      features: ["Team channels", "Direct messages", "Push notifications"],
      stats: "Instant delivery"
    },
    {
      title: "AI Performance Insights",
      description: "Intelligent analytics providing actionable engagement insights",
      icon: FaChartLine,
      color: "from-emerald-700 to-teal-700",
      features: ["Sentiment analysis", "Engagement scoring", "Trend identification"],
      stats: "Real-time insights"
    },
    {
      title: "Webinars & Training",
      description: "Continuous learning opportunities and professional development",
      icon: FaVideo,
      color: "from-emerald-800 to-teal-800",
      features: ["Live sessions", "Recorded training", "Skill certification"],
      stats: "500+ courses"
    }
  ];

  // Project Management Features
  const projectFeatures = [
    {
      title: "End-to-End Project Management",
      description: "Complete project lifecycle management from initiation to delivery",
      icon: FaProjectDiagram,
      color: "from-emerald-500 to-teal-500",
      features: ["Team assignments", "Budget tracking", "Timeline management", "Priority setting"],
      stats: "98% completion rate"
    },
    {
      title: "Real-time Execution Intelligence",
      description: "AI-powered insights and predictive analytics for project success",
      icon: TbDeviceAnalytics,
      color: "from-emerald-600 to-teal-600",
      features: ["Progress tracking", "Risk prediction", "Performance insights", "Bottleneck detection"],
      stats: "40% faster delivery"
    },
    {
      title: "Scalable Architecture",
      description: "Built to support organizations with 500+ employees and complex projects",
      icon: FaNetworkWired,
      color: "from-emerald-700 to-teal-700",
      features: ["Enterprise-grade", "High availability", "Data security", "Global collaboration"],
      stats: "500+ employees scale"
    }
  ];

  // Digital ID Features
  const digitalIdFeatures = [
    {
      title: "Secure Digital Employee IDs",
      description: "Fully encrypted digital IDs linked to employee profiles and permissions",
      icon: FaIdCard,
      color: "from-emerald-500 to-teal-500",
      features: ["Biometric integration", "QR code access", "Multi-factor auth", "Role-based permissions"],
      stats: "100% secure"
    },
    {
      title: "Borderless Verification",
      description: "Remote identity verification supporting modern, distributed workforces",
      icon: FaGlobe,
      color: "from-emerald-600 to-teal-600",
      features: ["Geolocation tracking", "Activity logs", "Remote validation", "Cross-border support"],
      stats: "24/7 access"
    },
    {
      title: "Smart Integration",
      description: "Seamlessly connects with assets, attendance, and access systems",
      icon: FaUserCheck,
      color: "from-emerald-700 to-teal-700",
      features: ["Asset linking", "Attendance sync", "Access control", "Single sign-on"],
      stats: "15+ integrations"
    }
  ];

  // CRM Features
  const crmFeatures = [
    {
      title: "Talent & Recruitment Pipeline",
      description: "Manage complete recruitment lifecycle and talent acquisition",
      icon: FaUsers,
      color: "from-emerald-500 to-teal-500",
      features: ["Candidate tracking", "Talent pools", "Interview scheduling", "Offer management"],
      stats: "65% faster hiring"
    },
    {
      title: "Vendor & Freelancer Management",
      description: "Centralized system for external resource management and collaboration",
      icon: FaFileContract,
      color: "from-emerald-600 to-teal-600",
      features: ["Contract management", "Payment tracking", "Performance reviews", "Compliance"],
      stats: "300+ vendors"
    },
    {
      title: "Operational Workflow Integration",
      description: "Connect people and partners directly into business processes",
      icon: FaTasks,
      color: "from-emerald-700 to-teal-700",
      features: ["Workflow automation", "Approval chains", "Reporting dashboards", "Audit trails"],
      stats: "95% efficiency"
    }
  ];

  // Sample webinar data
  const upcomingWebinars = [
    {
      title: "Building Resilience in the Workplace",
      date: "Mar 15, 2024",
      time: "2:00 PM EST",
      speaker: "Dr. Sarah Johnson",
      attendees: 45,
      capacity: 100,
      category: "Wellness"
    },
    {
      title: "Effective Remote Collaboration",
      date: "Mar 22, 2024",
      time: "11:00 AM EST",
      speaker: "Michael Chen",
      attendees: 28,
      capacity: 75,
      category: "Productivity"
    },
    {
      title: "Mindfulness at Work",
      date: "Mar 29, 2024",
      time: "3:30 PM EST",
      speaker: "Emma Rodriguez",
      attendees: 62,
      capacity: 80,
      category: "Wellness"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "HR Manager",
      company: "TechCorp Inc.",
      content: "The engagement platform has transformed how we connect with our distributed teams. The AI insights help us proactively address concerns.",
      avatar: avatarUrls[0],
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "Team Lead",
      company: "Innovate Solutions",
      content: "Real-time notifications and direct messaging have improved our team collaboration by 40%. Everyone feels more connected.",
      avatar: avatarUrls[1],
      rating: 4
    },
    {
      name: "David Kim",
      role: "CEO",
      company: "StartUp Ventures",
      content: "The performance management tools have given us unprecedented visibility into team dynamics and individual growth.",
      avatar: avatarUrls[2],
      rating: 5
    }
  ];

  // Stats with animations
  const statsData = [
    { number: "2,500+", label: "Organizations Transformed", animation: "animate-count-up animate-pulse-number" },
    { number: "98%", label: "Satisfaction Rate", animation: "animate-count-up animate-pulse-number" },
    { number: "45%", label: "Productivity Increase", animation: "animate-count-up animate-pulse-number" },
    { number: "120+", label: "Countries Served", animation: "animate-count-up animate-pulse-number" }
  ];

  // Feature categories for core features
  const coreFeatureCategories = [
    { id: 'attendance', label: 'Attendance & Leave', icon: FaCalendarAlt },
    { id: 'performance', label: 'Performance Management', icon: FaChartLine },
    { id: 'engagement', label: 'Employee Engagement', icon: FaHeart }
  ];

  // Feature categories for advanced features
  const advancedFeatureCategories = [
    { id: 'projects', label: 'Projects & Execution', icon: FaProjectDiagram },
    { id: 'digital', label: 'Digital ID & Cards', icon: FaIdCard },
    { id: 'crm', label: 'CRM Suite', icon: FaDatabase }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/20 via-white to-teal-50/20">
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

      {/* Hero Section */}
      <div id="hero" className="scroll-mt-24 relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 animate-gradient">
        <div className="absolute inset-0 animate-pulse-orb">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-300/10 rounded-full animate-pulse-orb"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-300/10 rounded-full animate-pulse-orb" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-in-up">
              Employee Engagement <span className="block text-emerald-100 animate-pulse-text">Reimagined</span>
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
              Manage attendance, shifts, and leave policies in one system. Supports partial leave usage,
              approvals, holiday calendars, and real-time balance tracking. Every action is logged with a full
              audit trail, ensuring transparency, fairness, and labor law compliance 
            </p>

            {/* Quick jump links */}
            <div className="flex flex-wrap justify-center gap-2 mt-6 mb-8 animate-buttons-stagger">
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

            <div className="animate-buttons-stagger">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transform transition duration-300 hover:scale-105 mr-4 hover:animate-bounce">
                <FaPlay className="inline-block mr-2 h-5 w-5" />
                Watch Demo
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transform transition duration-300 hover:scale-105 animate-pulse-border">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Banner */}
        <div className="mb-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 animate-gradient-flow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="text-center text-white"
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.animation}`}>{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Dashboard */}
        <div id="metrics" className="scroll-mt-24 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-text-reveal">
            Engagement <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Metrics</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementMetrics.map((metric, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform-gpu animate-stats-card ${
                  hoveredCard === index ? 'animate-card-lift' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${metric.color} mb-4 animate-pulse-glow`}>
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1 animate-growth">{metric.value}</div>
                <div className="text-gray-600 mb-2">{metric.label}</div>
                <div className={`text-sm font-semibold ${metric.change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                  {metric.change} from last month
                </div>
                <div className="text-xs text-gray-400 mt-2">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Features Section */}
        <div id="core-features" className="scroll-mt-24 mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 mb-4 animate-pulse-glow">
              <FaBullseye className="text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-600">CORE FEATURES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Essential <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Employee Tools</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools for attendance, performance management, and employee engagement
            </p>
          </div>

          {/* Core Feature Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-buttons-stagger">
            {coreFeatureCategories.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFeatureTab(tab.id);
                  setActiveSection(tab.id);
                  scrollToSection('core-features');
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 transform-gpu ${
                  activeFeatureTab === tab.id && activeSection === tab.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg scale-105 animate-pulse-glow'
                    : 'bg-white text-gray-600 border border-emerald-200 hover:border-emerald-300 hover:shadow-md hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <tab.icon className={activeFeatureTab === tab.id && activeSection === tab.id ? 'animate-spin-slow' : ''} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Attendance & Leave Section */}
          {activeFeatureTab === 'attendance' && activeSection === 'attendance' && (
            <section className="scroll-mt-24 mb-20 animate-slide-in-up">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse-border">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white animate-pulse-glow">
                        <FaCalendarAlt className="size-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">Attendance & Leave Management</h3>
                        <p className="text-emerald-600 font-medium">Comprehensive tracking and management</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {attendanceFeatures.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-4 p-4 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-[1.02] animate-stagger-card"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white animate-pulse-glow`}>
                            <feature.icon className="size-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-gray-800">{feature.title}</h4>
                              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-semibold animate-pulse">
                                {feature.stats}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {feature.features.map((item, idx) => (
                                <span 
                                  key={idx}
                                  className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-100 animate-feature-tag"
                                  style={{ animationDelay: `${idx * 0.05}s` }}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative animate-slide-in-right">
                    <img 
                      src={hrTeamPhoto} 
                      alt="HR Team Managing Attendance" 
                      className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg animate-feature-tag">
                      Live Dashboard
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 animate-slide-in-up">
                      <h4 className="font-bold text-gray-800 mb-2">Real-time Analytics</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-emerald-600">99.8%</div>
                          <div className="text-xs text-gray-600">Accuracy Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-emerald-600">2.3s</div>
                          <div className="text-xs text-gray-600">Processing Time</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Performance Management Section */}
          {activeFeatureTab === 'performance' && activeSection === 'performance' && (
            <section className="scroll-mt-24 mb-20 animate-slide-in-up">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse-border">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div className="relative animate-slide-in-left">
                    <img 
                      src={analyticsImage} 
                      alt="Performance Analytics Dashboard" 
                      className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg animate-feature-tag">
                      Live Analytics
                    </div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg animate-pulse-glow">
                      AI-Powered
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white animate-pulse-glow">
                        <FaChartLine className="size-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">Performance Management</h3>
                        <p className="text-emerald-600 font-medium">Comprehensive evaluation and insights</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {performanceFeatures.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-4 p-4 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-[1.02] animate-stagger-card"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white animate-pulse-glow`}>
                            <feature.icon className="size-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-gray-800">{feature.title}</h4>
                              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-semibold animate-pulse">
                                {feature.stats}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {feature.features.map((item, idx) => (
                                <span 
                                  key={idx}
                                  className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-100 animate-feature-tag"
                                  style={{ animationDelay: `${idx * 0.05}s` }}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Employee Engagement Section */}
          {activeFeatureTab === 'engagement' && activeSection === 'engagement' && (
            <section className="scroll-mt-24 mb-20 animate-slide-in-up">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse-border">
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white animate-pulse-glow">
                          <FaHeart className="size-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">Employee Engagement Tools</h3>
                          <p className="text-emerald-600 font-medium">Connect, communicate, and collaborate</p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        {engagementFeatures.map((feature, index) => (
                          <div 
                            key={index} 
                            className="flex items-start gap-4 p-4 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-[1.02] animate-stagger-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white animate-pulse-glow`}>
                              <feature.icon className="size-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-gray-800">{feature.title}</h4>
                                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-semibold animate-pulse">
                                  {feature.stats}
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {feature.features.map((item, idx) => (
                                  <span 
                                    key={idx}
                                    className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-100 animate-feature-tag"
                                    style={{ animationDelay: `${idx * 0.05}s` }}
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 animate-text-reveal">Upcoming Webinars</h3>
                      <div className="space-y-4">
                        {upcomingWebinars.map((webinar, index) => (
                          <div 
                            key={index} 
                            className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-xl border border-emerald-100 hover:border-emerald-200 transition-all duration-300 transform-gpu hover:scale-[1.02] animate-stagger-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="font-bold text-gray-800">{webinar.title}</h4>
                                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded mt-1 inline-block">
                                  {webinar.category}
                                </span>
                              </div>
                              <span className="text-xs bg-emerald-500 text-white px-2 py-1 rounded animate-pulse-slow">
                                {webinar.date}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                              <FaClock className="inline mr-1 h-3 w-3 animate-spin-slow" /> {webinar.time}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Hosted by {webinar.speaker}</span>
                              <div className="flex items-center gap-2">
                                <FaUsers className="h-4 w-4 text-gray-400 animate-bounce-slow" />
                                <span className="text-sm font-medium">{webinar.attendees}/{webinar.capacity}</span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
                              <div 
                                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full animate-flow-line"
                                style={{ width: `${(webinar.attendees / webinar.capacity) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Advanced Features Section */}
        <div id="advanced-features" className="scroll-mt-24 mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 mb-4 animate-pulse-glow">
              <FaProjectDiagram className="text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-600">ADVANCED FEATURES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Enterprise <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Platform Capabilities</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for modern workforce management, identity, and relationship management
            </p>
          </div>

          {/* Advanced Feature Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-buttons-stagger">
            {advancedFeatureCategories.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFeatureTab(tab.id);
                  setActiveSection(tab.id);
                  scrollToSection('advanced-features');
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 transform-gpu ${
                  activeFeatureTab === tab.id && activeSection === tab.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg scale-105 animate-pulse-glow'
                    : 'bg-white text-gray-600 border border-emerald-200 hover:border-emerald-300 hover:shadow-md hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <tab.icon className={activeFeatureTab === tab.id && activeSection === tab.id ? 'animate-spin-slow' : ''} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects & Execution Intelligence Section */}
          {activeFeatureTab === 'projects' && activeSection === 'projects' && (
            <section className="scroll-mt-24 mb-20 animate-slide-in-up">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse-border">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white animate-pulse-glow">
                        <FaProjectDiagram className="size-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">Projects & Execution Intelligence</h3>
                        <p className="text-emerald-600 font-medium">Built to scale for 500+ employees</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-8 text-lg">
                      Manage projects end-to-end with defined teams, budgets, timelines, priorities, and delivery
                      milestones. Ontap provides real-time execution intelligence, progress tracking, and performance
                      insights—built to scale for organizations with 500+ employees.
                    </p>

                    {/* Interactive Project Progress */}
                    <div className="mb-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-gray-800">Active Project Progress</h4>
                        <span className="text-2xl font-bold text-emerald-600 animate-pulse-number">{projectProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${projectProgress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>12 Projects Active</span>
                        <span>8 Teams Involved</span>
                        <span>$2.4M Budget</span>
                      </div>
                    </div>

                    {/* Project Features */}
                    <div className="space-y-6">
                      {projectFeatures.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-4 p-4 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-[1.02] animate-stagger-card"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white animate-pulse-glow`}>
                            <feature.icon className="size-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-gray-800">{feature.title}</h4>
                              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-semibold animate-pulse">
                                {feature.stats}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {feature.features.map((item, idx) => (
                                <span 
                                  key={idx}
                                  className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-100 animate-feature-tag"
                                  style={{ animationDelay: `${idx * 0.05}s` }}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Visual Dashboard */}
                  <div className="relative animate-slide-in-right">
                    <img 
                      src={projectManagementImage} 
                      alt="Project Management Dashboard" 
                      className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg animate-feature-tag">
                      Live Dashboard
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 animate-slide-in-up">
                      <h4 className="font-bold text-gray-800 mb-2">Real-time Intelligence</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-emerald-600 animate-pulse-number">98%</div>
                          <div className="text-xs text-gray-600">On-time Delivery</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-emerald-600 animate-pulse-number">$1.2M</div>
                          <div className="text-xs text-gray-600">Budget Saved</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Digital ID & Borderless Employee Cards Section */}
          {activeFeatureTab === 'digital' && activeSection === 'digital' && (
            <section className="scroll-mt-24 mb-20 animate-slide-in-up">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse-border">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div className="relative animate-slide-in-left">
                    <img 
                      src={digitalIdImage} 
                      alt="Digital ID Interface" 
                      className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg animate-feature-tag">
                      Secure ID
                    </div>
                    <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center animate-pulse-glow">
                      <FaQrcode className="text-white size-8" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg animate-pulse">
                      QR Enabled
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white animate-pulse-glow">
                        <FaIdCard className="size-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">Digital ID & Borderless Employee Cards</h3>
                        <p className="text-emerald-600 font-medium">Supporting modern remote workforces</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-8 text-lg">
                      Issue secure digital employee IDs linked to profiles, assets, attendance, and access permissions.
                      Enable identity verification, QR-based validation, and activity tracking—supporting modern,
                      borderless, and remote workforces.
                    </p>

                    {/* Digital ID Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-emerald-600 mb-1">99.9%</div>
                        <div className="text-sm text-gray-600">Verification Accuracy</div>
                      </div>
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-emerald-600 mb-1">0.5s</div>
                        <div className="text-sm text-gray-600">Avg. Scan Time</div>
                      </div>
                    </div>

                    {/* Digital ID Features */}
                    <div className="space-y-6">
                      {digitalIdFeatures.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-4 p-4 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-[1.02] animate-stagger-card"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white animate-pulse-glow`}>
                            <feature.icon className="size-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-gray-800">{feature.title}</h4>
                              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-semibold animate-pulse">
                                {feature.stats}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {feature.features.map((item, idx) => (
                                <span 
                                  key={idx}
                                  className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-100 animate-feature-tag"
                                  style={{ animationDelay: `${idx * 0.05}s` }}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CRM (Talent, Employee & Vendor) Section */}
          {activeFeatureTab === 'crm' && activeSection === 'crm' && (
            <section className="scroll-mt-24 mb-20 animate-slide-in-up">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse-border">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white animate-pulse-glow">
                        <FaDatabase className="size-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">CRM Suite</h3>
                        <p className="text-emerald-600 font-medium">Talent, Employee & Vendor Management</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-8 text-lg">
                      A built-in CRM to manage recruitment pipelines, talent pools, freelancers, and vendors. Track
                      engagements, contracts, payments, and performance—connecting people and partners to your
                      operational workflows.
                    </p>

                    {/* CRM Dashboard Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-8">
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-emerald-600">1.5K</div>
                        <div className="text-xs text-gray-600">Talent Pool</div>
                      </div>
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-emerald-600">320</div>
                        <div className="text-xs text-gray-600">Active Vendors</div>
                      </div>
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-emerald-600">95%</div>
                        <div className="text-xs text-gray-600">Engagement Rate</div>
                      </div>
                    </div>

                    {/* CRM Features */}
                    <div className="space-y-6">
                      {crmFeatures.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-4 p-4 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-[1.02] animate-stagger-card"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white animate-pulse-glow`}>
                            <feature.icon className="size-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-gray-800">{feature.title}</h4>
                              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-semibold animate-pulse">
                                {feature.stats}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {feature.features.map((item, idx) => (
                                <span 
                                  key={idx}
                                  className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-100 animate-feature-tag"
                                  style={{ animationDelay: `${idx * 0.05}s` }}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - CRM Dashboard Visual */}
                  <div className="relative animate-slide-in-right">
                    <img 
                      src={crmImage} 
                      alt="CRM Dashboard" 
                      className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg animate-feature-tag">
                      Integrated CRM
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 animate-slide-in-up">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-gray-800">Pipeline Overview</h4>
                        <span className="text-sm text-emerald-600 font-semibold animate-pulse">Live Data</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Recruitment</span>
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Vendor Payments</span>
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Contract Renewals</span>
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="scroll-mt-24 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-text-reveal">
            What <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Our Users</span> Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform-gpu hover:scale-[1.02] animate-stagger-card group"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredCard(40 + index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 border-2 border-emerald-100 group-hover:animate-testimonial-bounce"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-500 fill-current animate-pulse-slow' : 'text-gray-300'}`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div id="cta" className="scroll-mt-24 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 rounded-2xl p-8 text-center text-white animate-pulse-glow">
          <div className="max-w-3xl mx-auto">
            <FaHandshake className="text-4xl mx-auto mb-4 animate-float" />
            <h2 className="text-3xl font-bold mb-4 animate-text-reveal">
              Ready to Transform Employee Engagement?
            </h2>
            <p className="mb-6 animate-fade-in-delay">
              Join thousands of organizations that have improved their workplace culture and productivity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-buttons-stagger">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transform transition duration-300 hover:scale-105 hover:animate-bounce">
                <FaPlay className="inline-block mr-2 h-5 w-5 animate-spin" />
                Schedule a Demo
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transform transition duration-300 hover:scale-105 animate-pulse-border">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/20 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 15}s`
            }}
          />
        ))}
        {/* Orbital elements */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-emerald-300/30 rounded-full animate-spin-orb"></div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-teal-300/20 rounded-full animate-spin-orb" style={{animationDuration: '40s'}}></div>
      </div>
    </div>
    <FooterComponent/>
    </>
  );
};

export default EmployeeEngagementPage;