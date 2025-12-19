import { useState } from "react";
import { 
  FaUsers, 
  FaChartLine, 
  FaBullhorn, 
  FaEnvelope, 
  FaComments, 
  FaBell,
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
  FaChevronRight,
  FaPlay,
  FaCheckCircle
} from "react-icons/fa";
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

  // HR team photo
  const hrTeamPhoto = "https://i.pinimg.com/1200x/17/13/6b/17136bebb40d0faf881cfb44bb4badc1.jpg";
  
  // Analytics page image
  const analyticsImage = "https://i.pinimg.com/1200x/53/70/6b/53706b66b9b1f4753e14df0990779300.jpg";

  const [activeSection, setActiveSection] = useState('attendance');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Sample data for metrics
  const engagementMetrics = [
    { 
      label: "Employee Satisfaction", 
      value: "92%", 
      change: "+5%", 
      icon: FaHeart, 
      color: "from-emerald-400 to-emerald-600",
      description: "Overall employee happiness score"
    },
    { 
      label: "Participation Rate", 
      value: "87%", 
      change: "+8%", 
      icon: FaUsers, 
      color: "from-blue-400 to-blue-600",
      description: "Active engagement in programs"
    },
    { 
      label: "Response Time", 
      value: "2.4h", 
      change: "-1.2h", 
      icon: FaClock, 
      color: "from-purple-400 to-purple-600",
      description: "Average feedback response"
    },
    { 
      label: "Training Completion", 
      value: "94%", 
      change: "+12%", 
      icon: FaGraduationCap, 
      color: "from-orange-400 to-orange-600",
      description: "Completed learning modules"
    },
  ];

  // Attendance & Leave Features
  const attendanceFeatures = [
    {
      title: "Daily, Weekly & Monthly Tracking",
      description: "Comprehensive attendance tracking across all timeframes with visual dashboards",
      icon: FaCalendarAlt,
      features: ["Real-time tracking", "Custom reporting periods", "Automated alerts"],
      animation: "animate-feature-reveal card-animation-delay-1"
    },
    {
      title: "AI-Powered Downloadable Reports",
      description: "Generate intelligent reports with insights and recommendations",
      icon: FaDownload,
      features: ["PDF/Excel exports", "Trend analysis", "Predictive insights"],
      animation: "animate-feature-reveal card-animation-delay-2"
    },
    {
      title: "Easy Leave Application",
      description: "Streamlined leave request process for all staff members",
      icon: FaCheckCircle,
      features: ["Mobile-friendly", "Multi-level approvals", "Calendar integration"],
      animation: "animate-feature-reveal card-animation-delay-3"
    },
    {
      title: "Leave Management Dashboard",
      description: "Centralized control panel for HR teams to manage all leave requests",
      icon: FaChartBar,
      features: ["Bulk approvals", "Leave balance tracking", "Policy enforcement"],
      animation: "animate-feature-reveal card-animation-delay-4"
    }
  ];

  // Performance Management Features
  const performanceFeatures = [
    {
      title: "Custom Institutional Metrics",
      description: "Define and track performance based on your organization's specific goals",
      icon: FaBullhorn,
      features: ["Custom KPIs", "Goal alignment", "Department-specific metrics"],
      animation: "animate-feature-reveal card-animation-delay-1"
    },
    {
      title: "Standard Performance Metrics",
      description: "Industry-standard metrics for comprehensive performance evaluation",
      icon: FaChartLine,
      features: ["360-degree feedback", "Competency assessment", "Productivity tracking"],
      animation: "animate-feature-reveal card-animation-delay-2"
    },
    {
      title: "Personalized Insights",
      description: "AI-generated personalized feedback and development suggestions",
      icon: FaRobot,
      features: ["Individual reports", "Growth recommendations", "Skill gap analysis"],
      animation: "animate-feature-reveal card-animation-delay-3"
    },
    {
      title: "Automated Penalty System",
      description: "Automated enforcement of policies based on performance metrics",
      icon: FaTrophy,
      features: ["Rule-based automation", "Fair policy application", "Documentation trail"],
      animation: "animate-feature-reveal card-animation-delay-4"
    }
  ];

  // Employee Engagement Features
  const engagementFeatures = [
    {
      title: "Automated Emailing Services",
      description: "Personalized email campaigns for recognition, updates, and celebrations",
      icon: FaEnvelope,
      features: ["Birthday wishes", "Work anniversaries", "Achievement recognition"],
      animation: "animate-feature-reveal card-animation-delay-1"
    },
    {
      title: "Direct Messaging & Notifications",
      description: "Real-time communication platform for instant collaboration",
      icon: FaComments,
      features: ["Team channels", "Direct messages", "Push notifications"],
      animation: "animate-feature-reveal card-animation-delay-2"
    },
    {
      title: "AI Performance Insights",
      description: "Intelligent analytics providing actionable engagement insights",
      icon: FaChartLine,
      features: ["Sentiment analysis", "Engagement scoring", "Trend identification"],
      animation: "animate-feature-reveal card-animation-delay-3"
    },
    {
      title: "Webinars & Training",
      description: "Continuous learning opportunities and professional development",
      icon: FaVideo,
      features: ["Live sessions", "Recorded training", "Skill certification"],
      animation: "animate-feature-reveal card-animation-delay-4"
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

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/20 via-white to-teal-50/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 animate-gradient">
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
              Transform your workplace with comprehensive tools for attendance, performance management, 
              and meaningful engagement that drives productivity and satisfaction.
            </p>
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
        <div className="mb-16">
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

        {/* Navigation Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-buttons-stagger">
            {[
              { id: 'attendance', label: 'Attendance & Leave', icon: FaCalendarAlt },
              { id: 'performance', label: 'Performance Management', icon: FaChartLine },
              { id: 'engagement', label: 'Employee Engagement', icon: FaHeart }
            ].map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 transform-gpu ${
                  activeSection === tab.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg scale-105 animate-pulse-glow'
                    : 'bg-white text-gray-600 border border-emerald-200 hover:border-emerald-300 hover:shadow-md hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <tab.icon className={activeSection === tab.id ? 'animate-spin-slow' : ''} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Attendance & Leave Section */}
          {activeSection === 'attendance' && (
            <div className="animate-slide-in-up">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse-border">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 animate-text-reveal">Attendance & Leave Management</h3>
                    <div className="space-y-6">
                      {attendanceFeatures.map((feature, index) => (
                        <div 
                          key={index} 
                          className={`flex items-start gap-4 p-4 bg-emerald-50/50 rounded-lg hover:bg-emerald-50 transition-all duration-300 transform-gpu hover:scale-[1.02] ${feature.animation}`}
                          onMouseEnter={() => setHoveredCard(10 + index)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-lg animate-pulse-glow">
                            <feature.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                            <p className="text-gray-600 mb-3">{feature.description}</p>
                            <ul className="space-y-1">
                              {feature.features.map((item, idx) => (
                                <li 
                                  key={idx} 
                                  className="flex items-center text-sm text-gray-500 hover:text-emerald-700 transition-colors duration-300"
                                >
                                  <FaChevronRight className="h-3 w-3 text-emerald-500 mr-2 animate-pulse" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative animate-slide-in-right">
                    <img 
                      src={hrTeamPhoto} 
                      alt="HR Team Managing Attendance" 
                      className="rounded-xl shadow-lg w-full h-full object-cover animate-pulse-border"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 animate-feature-tag">
                      <h4 className="font-bold text-gray-800 mb-2">Real-time Dashboard</h4>
                      <p className="text-sm text-gray-600">HR teams can monitor attendance patterns and manage leave requests efficiently</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Performance Management Section */}
          {activeSection === 'performance' && (
            <div className="animate-slide-in-up">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse-border">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div className="relative animate-slide-in-left">
                    <img 
                      src={analyticsImage} 
                      alt="Performance Analytics Dashboard" 
                      className="rounded-xl shadow-lg w-full h-full object-cover animate-pulse-border"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg animate-feature-tag">
                      Live Analytics
                    </div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg animate-pulse-glow">
                      AI-Powered
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 animate-text-reveal">Performance Management</h3>
                    <div className="space-y-6">
                      {performanceFeatures.map((feature, index) => (
                        <div 
                          key={index} 
                          className={`flex items-start gap-4 p-4 bg-blue-50/50 rounded-lg hover:bg-blue-50 transition-all duration-300 transform-gpu hover:scale-[1.02] ${feature.animation}`}
                          onMouseEnter={() => setHoveredCard(20 + index)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg animate-pulse-glow">
                            <feature.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                            <p className="text-gray-600 mb-3">{feature.description}</p>
                            <ul className="space-y-1">
                              {feature.features.map((item, idx) => (
                                <li 
                                  key={idx} 
                                  className="flex items-center text-sm text-gray-500 hover:text-blue-700 transition-colors duration-300"
                                >
                                  <FaChevronRight className="h-3 w-3 text-blue-500 mr-2 animate-pulse" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Employee Engagement Section */}
          {activeSection === 'engagement' && (
            <div className="animate-slide-in-up">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse-border">
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 animate-text-reveal">Employee Engagement Tools</h3>
                      <div className="space-y-6">
                        {engagementFeatures.map((feature, index) => (
                          <div 
                            key={index} 
                            className={`flex items-start gap-4 p-4 bg-purple-50/50 rounded-lg hover:bg-purple-50 transition-all duration-300 transform-gpu hover:scale-[1.02] ${feature.animation}`}
                            onMouseEnter={() => setHoveredCard(30 + index)}
                            onMouseLeave={() => setHoveredCard(null)}
                          >
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg animate-pulse-glow">
                              <feature.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                              <p className="text-gray-600 mb-3">{feature.description}</p>
                              <ul className="space-y-1">
                                {feature.features.map((item, idx) => (
                                  <li 
                                    key={idx} 
                                    className="flex items-center text-sm text-gray-500 hover:text-purple-700 transition-colors duration-300"
                                  >
                                    <FaChevronRight className="h-3 w-3 text-purple-500 mr-2 animate-pulse" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
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
                      
                      <div className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white animate-pulse-glow">
                        <h4 className="text-xl font-bold mb-2 animate-text-reveal">Direct Messaging Platform</h4>
                        <p className="mb-4 animate-fade-in-delay">Connect instantly with your team through our integrated messaging system</p>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex -space-x-2">
                            {avatarUrls.slice(0, 4).map((avatar, idx) => (
                              <img 
                                key={idx} 
                                src={avatar} 
                                alt={`User ${idx + 1}`} 
                                className="w-8 h-8 rounded-full border-2 border-white animate-float"
                                style={{ animationDelay: `${idx * 0.5}s` }}
                              />
                            ))}
                          </div>
                          <span className="text-sm animate-pulse-text">45+ active conversations</span>
                        </div>
                        <button className="w-full bg-white text-emerald-600 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 hover:scale-105 hover:animate-bounce">
                          Open Chat Platform
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Notification & Email Features */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 animate-feature-card">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg animate-spin-slow">
                          <FaBell className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Real-time Notifications</h4>
                          <p className="text-sm text-gray-600">Stay updated with instant alerts</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {['Leave approvals', 'Performance reviews', 'Training reminders', 'Announcements'].map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700 hover:text-blue-600 transition-colors duration-300">
                            <FaCheckCircle className="h-4 w-4 text-blue-500 mr-2 animate-improvement-pulse" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 animate-feature-card" style={{animationDelay: '0.2s'}}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg animate-spin-slow">
                          <FaEnvelope className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Automated Emailing</h4>
                          <p className="text-sm text-gray-600">Personalized communication at scale</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {['Birthday wishes', 'Work anniversaries', 'Monthly newsletters', 'Event invitations'].map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700 hover:text-purple-600 transition-colors duration-300">
                            <FaCheckCircle className="h-4 w-4 text-purple-500 mr-2 animate-improvement-pulse" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
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
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 rounded-2xl p-8 text-center text-white animate-pulse-glow">
          <div className="max-w-3xl mx-auto">
            <FaTrophy className="text-4xl mx-auto mb-4 animate-float" />
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