import { useState } from "react";
import { 
  FaBrain, 
  FaChartLine, 
  FaUsers, 
  FaUserPlus, 
  FaTasks, 
  FaBullseye,
  FaMoneyBillWave,
  FaGraduationCap,
  FaRobot,
  FaLightbulb,
  FaDatabase,
  FaClock,
  FaShieldAlt,
  FaStar,
  FaRocket,
  FaChartPie,
  FaUserCheck,
  FaSync,
  FaCogs,
  FaPlay,
  FaArrowRight,
  FaCalendarAlt,
  FaCalendarCheck,
  FaCalendarTimes,
  FaCalendarPlus,
  FaCheckCircle,
  FaFileAlt,
  FaBell,
  FaChartBar,
  FaMobileAlt,
  FaCloudUploadAlt
} from "react-icons/fa";
import FooterComponent from "../../components/layout/footer/FooterComponent";

const AiTalentManagementPage = () => {
  const [activeLifecycleStage, setActiveLifecycleStage] = useState('recruitment');
  const [activeAttendanceTab, setActiveAttendanceTab] = useState('employee');

  // Hero Metrics
  const heroMetrics = [
    { value: "47%", label: "Faster Hiring", description: "Reduced time-to-hire with AI matching" },
    { value: "92%", label: "Retention Rate", description: "Improved employee satisfaction" },
    { value: "63%", label: "Productivity Boost", description: "AI-optimized task allocation" },
    { value: "85%", label: "Accuracy", description: "Predictive performance analytics" },
  ];

  // Real-time Data Analysis Benefits
  const realtimeBenefits = [
    {
      icon: FaChartLine,
      title: "Predictive Analytics",
      description: "Forecast staffing needs and identify turnover risks before they happen",
      features: ["Trend analysis", "Risk prediction", "Capacity planning"]
    },
    {
      icon: FaClock,
      title: "Real-time Monitoring",
      description: "Monitor workforce metrics and productivity in real-time",
      features: ["Live dashboards", "Performance tracking", "Instant alerts"]
    },
    {
      icon: FaDatabase,
      title: "Data-Driven Decisions",
      description: "Make informed staffing decisions based on comprehensive analytics",
      features: ["Historical data", "Comparative analysis", "Scenario modeling"]
    },
    {
      icon: FaShieldAlt,
      title: "Compliance Tracking",
      description: "Automatically monitor and ensure compliance with labor regulations",
      features: ["Regulatory updates", "Audit trails", "Policy enforcement"]
    }
  ];

  // AI Analytics Insights
  const aiInsights = [
    {
      category: "Performance",
      insights: [
        "Identify top performers and potential leaders",
        "Detect performance decline patterns early",
        "Predict optimal team compositions",
        "Analyze skill gaps and training needs"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      category: "Engagement",
      insights: [
        "Measure employee sentiment and satisfaction",
        "Predict engagement levels and burnout risks",
        "Optimize work-life balance recommendations",
        "Track collaboration patterns and team dynamics"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Growth",
      insights: [
        "Personalized career path recommendations",
        "Skill development roadmaps",
        "Succession planning analytics",
        "Learning opportunity matching"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Employee Lifecycle Stages
  const lifecycleStages = [
    {
      id: 'recruitment',
      title: 'Recruitment',
      icon: FaUserPlus,
      description: 'AI-powered candidate sourcing and screening',
      features: [
        'Intelligent resume parsing',
        'Skill-based candidate matching',
        'Bias-free screening',
        'Automated interview scheduling'
      ],
      image: 'https://i.pinimg.com/1200x/31/16/e4/3116e48922773387557adda34bba5b83.jpg'
    },
    {
      id: 'onboarding',
      title: 'Onboarding',
      icon: FaRocket,
      description: 'Streamlined employee integration process',
      features: [
        'Personalized onboarding plans',
        'Automated documentation',
        'Mentor matching',
        'Progress tracking'
      ],
      image: 'https://i.pinimg.com/736x/8f/6c/37/8f6c377bd46c9af1dd5bcd3099dd6515.jpg'
    },
    {
      id: 'taskManagement',
      title: 'Task Management',
      icon: FaTasks,
      description: 'AI-optimized task allocation and tracking',
      features: [
        'Smart workload distribution',
        'Priority-based task assignment',
        'Progress monitoring',
        'Resource optimization'
      ],
      image: 'https://plus.unsplash.com/premium_photo-1661292088304-718ce6552b11?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'performance',
      title: 'Performance Insights',
      icon: FaBullseye,
      description: 'Continuous performance monitoring and feedback',
      features: [
        'Real-time performance metrics',
        '360-degree feedback analysis',
        'Goal tracking automation',
        'Development recommendations'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800'
    },
    {
      id: 'payroll',
      title: 'Payroll Processing',
      icon: FaMoneyBillWave,
      description: 'Automated, accurate compensation management',
      features: [
        'Automated salary calculations',
        'Tax compliance automation',
        'Benefits administration',
        'Real-time payroll analytics'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800'
    },
    {
      id: 'development',
      title: 'Development',
      icon: FaGraduationCap,
      description: 'Continuous learning and career growth',
      features: [
        'Personalized training plans',
        'Skill gap analysis',
        'Career path recommendations',
        'Certification tracking'
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800'
    }
  ];

  // AI Support Features
  const aiSupportFeatures = [
    {
      stage: 'Recruitment',
      aiSupport: 'AI matches candidates to roles based on skills, culture fit, and predicted success',
      impact: 'Reduces hiring time by 40% and improves quality of hire'
    },
    {
      stage: 'Onboarding',
      aiSupport: 'Personalizes onboarding experience and predicts integration success',
      impact: 'Increases new hire productivity by 60% in first 90 days'
    },
    {
      stage: 'Performance',
      aiSupport: 'Continuous performance monitoring with predictive analytics',
      impact: 'Identifies high-potential employees with 85% accuracy'
    },
    {
      stage: 'Retention',
      aiSupport: 'Predicts turnover risks and recommends intervention strategies',
      impact: 'Reduces voluntary turnover by 35%'
    }
  ];

  // Attendance & Leave Management Features
  const attendanceEmployeeFeatures = [
    {
      icon: FaMobileAlt,
      title: "Mobile Leave Application",
      description: "Apply for leave anytime, anywhere with our mobile-friendly interface",
      benefits: ["Instant submission", "Real-time status updates", "Document upload"]
    },
    {
      icon: FaCalendarPlus,
      title: "One-Click Requests",
      description: "Quick apply for common leave types with pre-filled information",
      benefits: ["Sick leave", "Vacation", "Personal time", "Emergency leave"]
    },
    {
      icon: FaCalendarCheck,
      title: "Leave Balance Tracking",
      description: "Always know your available leave days with real-time updates",
      benefits: ["Accrual tracking", "Balance notifications", "Usage history"]
    },
    {
      icon: FaBell,
      title: "Automated Notifications",
      description: "Get instant updates on your leave request status and approvals",
      benefits: ["Approval alerts", "Reminders", "Calendar integration"]
    }
  ];

  const attendanceHRFeatures = [
    {
      icon: FaChartBar,
      title: "AI-Powered Analytics Dashboard",
      description: "Comprehensive view of attendance patterns and leave trends",
      benefits: ["Real-time metrics", "Pattern recognition", "Forecasting"]
    },
    {
      icon: FaCheckCircle,
      title: "Automated Approval Workflow",
      description: "Streamlined approval process with AI-assisted decision making",
      benefits: ["Multi-level approvals", "Conflict detection", "Policy compliance"]
    },
    {
      icon: FaCalendarTimes,
      title: "Leave Conflict Management",
      description: "AI detects scheduling conflicts and suggests alternatives",
      benefits: ["Team coverage alerts", "Optimal scheduling", "Resource planning"]
    },
    {
      icon: FaFileAlt,
      title: "Compliance & Reporting",
      description: "Automated compliance checks and detailed attendance reports",
      benefits: ["Audit trails", "Regulatory compliance", "Custom reports"]
    }
  ];

  const attendanceStats = [
    { label: "Leave Approval Time", value: "2.4h", change: "-65%", icon: FaClock },
    { label: "Attendance Accuracy", value: "98.7%", change: "+12%", icon: FaCheckCircle },
    { label: "HR Processing Time", value: "71%", change: "-71%", icon: FaChartLine },
    { label: "Employee Satisfaction", value: "94%", change: "+18%", icon: FaStar },
  ];

  const attendanceAIInsights = [
    {
      title: "Predictive Attendance Analysis",
      description: "AI forecasts attendance patterns to optimize staffing",
      icon: FaBrain
    },
    {
      title: "Automated Fraud Detection",
      description: "Detects anomalies in attendance patterns in real-time",
      icon: FaShieldAlt
    },
    {
      title: "Intelligent Leave Balancing",
      description: "Optimizes leave allocation across teams for minimal disruption",
      icon: FaCalendarAlt
    },
    {
      title: "Real-time Compliance Monitoring",
      description: "Ensures attendance policies are followed automatically",
      icon: FaDatabase
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/20 transform-gpu overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 animate-gradient-flow">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6">
              <FaBrain className="h-4 w-4 sm:h-5 sm:w-5 text-white mr-2" />
              <span className="text-xs sm:text-sm font-semibold text-white">AI-Powered Talent Management</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">
              Transform Talent Management with
              <span className="block bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent mt-1 sm:mt-2">
                Real-time AI Insights
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-emerald-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Leverage cutting-edge AI analytics to optimize every stage of the employee lifecycle, 
              from recruitment to retirement, with data-driven precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-emerald-50 transform transition duration-300 hover:scale-105 text-sm sm:text-base">
                <FaPlay className="inline-block mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Watch AI in Action
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white/10 transform transition duration-300 hover:scale-105 text-sm sm:text-base">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {heroMetrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="font-semibold text-gray-800 text-sm sm:text-base mt-1 sm:mt-2">{metric.label}</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Real-time Data Analysis Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Real-time Data Analysis for
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Intelligent Staff Management
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Transform raw data into actionable insights with our advanced analytics platform
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {realtimeBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 mb-3 sm:mb-4">
                  <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{benefit.description}</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-500">
                      <FaStar className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* AI Analytics Insights Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              AI-Powered Insights for
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Strategic HR Decisions
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Our AI algorithms analyze patterns and predict outcomes to guide your talent strategy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {aiInsights.map((insight, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${insight.color} rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white`}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <FaChartPie className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold ml-3">{insight.category} Analytics</h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {insight.insights.map((item, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start text-sm sm:text-base"
                    >
                      <div className="mt-1.5 sm:mt-2 mr-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Automated Attendance & Leave Management Section - RESPONSIVE */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Automated Attendance & Leave Management
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Powered by AI Intelligence
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Streamline attendance tracking and leave management with intelligent automation
            </p>
          </div>

          {/* Attendance Stats - Responsive Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-12">
            {attendanceStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm">
                    <stat.icon className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-emerald-600" />
                  </div>
                  <span className={`text-xs sm:text-sm font-semibold ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tab Navigation - Responsive */}
          <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
            <div className="inline-flex rounded-full bg-gray-100 p-1 w-full sm:w-auto">
              <button
                onClick={() => setActiveAttendanceTab('employee')}
                className={`px-3 sm:px-4 lg:px-6 py-2 rounded-full font-medium text-xs sm:text-sm lg:text-base transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 w-1/2 sm:w-auto ${
                  activeAttendanceTab === 'employee'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <FaUserCheck className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="truncate">For Employees</span>
              </button>
              <button
                onClick={() => setActiveAttendanceTab('hr')}
                className={`px-3 sm:px-4 lg:px-6 py-2 rounded-full font-medium text-xs sm:text-sm lg:text-base transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 w-1/2 sm:w-auto ${
                  activeAttendanceTab === 'hr'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <FaUsers className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="truncate">For HR Teams</span>
              </button>
            </div>
          </div>

          {/* Tab Content - Responsive */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
            <div className="p-4 sm:p-6 lg:p-8">
              {activeAttendanceTab === 'employee' ? (
                <div>
                  {/* Employee Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white self-start sm:self-auto">
                      <FaMobileAlt className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1">Easy Leave Application for Employees</h3>
                      <p className="text-emerald-600 text-sm sm:text-base">Apply for leave in minutes, not hours</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {/* Mobile Features Column - Stacked */}
                    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                      {attendanceEmployeeFeatures.map((feature, index) => (
                        <div 
                          key={index}
                          className="p-3 sm:p-4 rounded-xl border border-emerald-100 bg-emerald-50/30 hover:bg-emerald-50 transition-all duration-300"
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm flex-shrink-0">
                              <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-1 truncate">{feature.title}</h4>
                              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">{feature.description}</p>
                              <div className="flex flex-wrap gap-1 sm:gap-2">
                                {feature.benefits.map((benefit, idx) => (
                                  <span 
                                    key={idx}
                                    className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white text-xs font-medium text-emerald-700 rounded-full border border-emerald-100 whitespace-nowrap"
                                  >
                                    {benefit}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Demo Preview - Mobile Responsive */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-teal-500/20 rounded-xl sm:rounded-2xl blur-xl"></div>
                      <div className="relative bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 h-full">
                        <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 h-full">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 sm:mb-4 lg:mb-6">
                            <h4 className="font-bold text-gray-800 text-sm sm:text-base">Leave Application Demo</h4>
                            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-medium rounded-full self-start sm:self-auto">
                              Live Preview
                            </span>
                          </div>
                          
                          <div className="space-y-3 sm:space-y-4">
                            {/* Leave Type */}
                            <div className="p-2 sm:p-3 bg-emerald-50 rounded-lg">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                                <span className="text-xs sm:text-sm font-medium text-gray-700">Leave Type</span>
                                <span className="text-emerald-600 text-xs sm:text-sm">✓ Auto-detected</span>
                              </div>
                              <select className="w-full p-2 text-sm border border-emerald-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                                <option className="text-sm">Sick Leave</option>
                                <option className="text-sm">Vacation</option>
                                <option className="text-sm">Personal Time</option>
                                <option className="text-sm">Emergency Leave</option>
                              </select>
                            </div>

                            {/* Dates */}
                            <div className="p-2 sm:p-3 bg-emerald-50 rounded-lg">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                                <span className="text-xs sm:text-sm font-medium text-gray-700">Dates</span>
                                <span className="text-emerald-600 text-xs sm:text-sm">AI Suggestions</span>
                              </div>
                              <div className="flex flex-col sm:flex-row gap-2">
                                <div className="flex-1">
                                  <label className="block text-xs text-gray-500 mb-1">From</label>
                                  <input 
                                    type="date" 
                                    className="w-full p-2 text-sm border border-emerald-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                  />
                                </div>
                                <div className="flex-1">
                                  <label className="block text-xs text-gray-500 mb-1">To</label>
                                  <input 
                                    type="date" 
                                    className="w-full p-2 text-sm border border-emerald-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Attachment */}
                            <div className="p-2 sm:p-3 bg-emerald-50 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs sm:text-sm font-medium text-gray-700">Attachment</span>
                                <FaCloudUploadAlt className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-600" />
                              </div>
                              <div className="border-2 border-dashed border-emerald-200 rounded-lg p-3 text-center cursor-pointer hover:border-emerald-300 transition-colors">
                                <p className="text-xs text-gray-500">Drag & drop or click to upload</p>
                                <p className="text-xs text-gray-400 mt-1">Max file size: 5MB</p>
                              </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
                              Submit Leave Request
                            </button>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
                              <div className="text-center">
                                <div className="text-xs font-bold text-emerald-600">2 min</div>
                                <div className="text-xs text-gray-500">Avg. time</div>
                              </div>
                              <div className="text-center">
                                <div className="text-xs font-bold text-emerald-600">98%</div>
                                <div className="text-xs text-gray-500">Approval rate</div>
                              </div>
                              <div className="text-center">
                                <div className="text-xs font-bold text-emerald-600">24/7</div>
                                <div className="text-xs text-gray-500">Availability</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {/* HR Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white self-start sm:self-auto">
                      <FaUsers className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1">AI-Powered Attendance Management for HR</h3>
                      <p className="text-emerald-600 text-sm sm:text-base">Manage all staff attendance with intelligent automation</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {/* HR Features - Takes 2 columns on desktop, full width on mobile */}
                    <div className="lg:col-span-2 space-y-3 sm:space-y-4 lg:space-y-6">
                      {attendanceHRFeatures.map((feature, index) => (
                        <div 
                          key={index}
                          className="p-3 sm:p-4 rounded-xl border border-blue-100 bg-blue-50/30 hover:bg-blue-50 transition-all duration-300"
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm flex-shrink-0">
                              <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-1 truncate">{feature.title}</h4>
                              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">{feature.description}</p>
                              <div className="flex flex-wrap gap-1 sm:gap-2">
                                {feature.benefits.map((benefit, idx) => (
                                  <span 
                                    key={idx}
                                    className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white text-xs font-medium text-emerald-700 rounded-full border border-blue-100 whitespace-nowrap"
                                  >
                                    {benefit}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* AI Insights Sidebar - Full width on mobile, sticky on desktop */}
                    <div className="relative">
                      <div className="lg:sticky lg:top-6">
                        <div className="bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-white">
                          <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">AI Attendance Insights</h4>
                          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                            {attendanceAIInsights.map((insight, index) => (
                              <div 
                                key={index}
                                className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg"
                              >
                                <div className="flex items-start gap-2 sm:gap-3">
                                  <insight.icon className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm sm:text-base mb-0.5 truncate">{insight.title}</div>
                                    <div className="text-xs sm:text-sm text-blue-100 line-clamp-2">{insight.description}</div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Real-time Analysis Badge */}
                          <div className="mt-3 sm:mt-4 lg:mt-6 pt-2 sm:pt-3 lg:pt-4 border-t border-white/20">
                            <div className="text-center">
                              <div className="inline-flex items-center px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-white/20 backdrop-blur-sm rounded-lg text-xs sm:text-sm">
                                <FaSync className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 animate-spin-slow" />
                                <span>Real-time Analysis</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Quick Stats Card */}
                        <div className="mt-3 sm:mt-4 bg-white rounded-xl shadow-lg p-3 sm:p-4">
                          <h5 className="font-semibold text-gray-800 text-sm sm:text-base mb-2 sm:mb-3">Weekly Overview</h5>
                          <div className="space-y-1.5 sm:space-y-2">
                            <div>
                              <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-gray-600">Leave Requests</span>
                                <span className="font-semibold text-emerald-600">24</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                <div className="bg-emerald-500 h-1.5 rounded-full w-3/4"></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-gray-600">Approved</span>
                                <span className="font-semibold text-emerald-600">22</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                <div className="bg-emerald-500 h-1.5 rounded-full w-11/12"></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-gray-600">Processing</span>
                                <span className="font-semibold text-amber-600">2</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                <div className="bg-amber-500 h-1.5 rounded-full w-1/12"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Employee Lifecycle Section - Responsive */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Complete Employee
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Lifecycle Management
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Seamlessly manage every stage of the employee journey with intelligent automation
            </p>
          </div>

          {/* Lifecycle Stage Selector - Responsive */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-12">
            {lifecycleStages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveLifecycleStage(stage.id)}
                className={`px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full font-medium text-xs sm:text-sm lg:text-base transition-all duration-300 flex items-center gap-1 sm:gap-2 ${
                  activeLifecycleStage === stage.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 border border-emerald-200 hover:border-emerald-300 hover:shadow-md'
                }`}
              >
                <stage.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="truncate">{stage.title}</span>
              </button>
            ))}
          </div>

          {/* Lifecycle Stage Details - Responsive */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
            {lifecycleStages
              .filter(stage => stage.id === activeLifecycleStage)
              .map((stage) => (
                <div key={stage.id} className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white self-start sm:self-auto">
                        <stage.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1">{stage.title}</h3>
                        <p className="text-emerald-600 text-sm sm:text-base">{stage.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 lg:mb-8">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800">Key Features</h4>
                      {stage.features.map((feature, index) => (
                        <div 
                          key={index}
                          className="flex items-center p-2 sm:p-3 bg-emerald-50/50 rounded-lg"
                        >
                          <FaArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-500 mr-2 sm:mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 sm:p-6 rounded-xl">
                      <div className="flex items-center mb-2 sm:mb-3">
                        <FaRobot className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mr-2" />
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">AI Enhancement</h4>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Our AI algorithms optimize this stage by analyzing historical data, 
                        predicting outcomes, and automating routine tasks for maximum efficiency.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-teal-500/20 rounded-xl sm:rounded-2xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 h-full">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                        <img 
                          src={stage.image}
                          alt={stage.title}
                          className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                        />
                        <div className="p-3 sm:p-4">
                          <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">AI-Powered Stage</div>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-800 text-sm sm:text-base">Success Rate</span>
                            <span className="text-emerald-600 font-bold text-sm sm:text-base">94%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mt-2">
                            <div 
                              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1.5 sm:h-2 rounded-full"
                              style={{ width: '94%' }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* AI Support Section - Responsive */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              How AI Enhances the
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Employee Lifecycle
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Artificial intelligence transforms traditional HR processes into intelligent, predictive systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              {aiSupportFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
                      <FaLightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="ml-3 sm:ml-4 flex-1">
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg mb-1">{feature.stage}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm mb-2">{feature.aiSupport}</p>
                    </div>
                  </div>
                  <div className="pl-10 sm:pl-12">
                    <div className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-medium">
                      <FaChartLine className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                      Impact: {feature.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="lg:sticky lg:top-6">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <FaBrain className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">AI Intelligence Core</h3>
                      <p className="text-emerald-100 text-sm sm:text-base">Continuous Learning System</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 lg:mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm">Data Processing</span>
                        <span className="font-bold text-sm sm:text-base">24/7</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2">
                        <div className="bg-white h-1.5 sm:h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm">Pattern Recognition</span>
                        <span className="font-bold text-sm sm:text-base">94% Accuracy</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2">
                        <div className="bg-white h-1.5 sm:h-2 rounded-full w-11/12"></div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm">Prediction Models</span>
                        <span className="font-bold text-sm sm:text-base">85% Success Rate</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2">
                        <div className="bg-white h-1.5 sm:h-2 rounded-full w-5/6"></div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-lg text-xs sm:text-sm">
                      <FaSync className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 animate-spin-slow" />
                      <span>Real-time Model Updates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Responsive */}
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6">
              <FaCogs className="h-4 w-4 sm:h-5 sm:w-5 text-white mr-2" />
              <span className="text-xs sm:text-sm font-semibold text-white">Ready to Transform?</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Start Your AI Talent Management Journey
            </h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              Join forward-thinking organizations that have revolutionized their HR processes 
              with AI-powered talent management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-emerald-50 transform transition duration-300 hover:scale-105 text-sm sm:text-base">
                <FaPlay className="inline-block mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Schedule a Demo
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white/10 transform transition duration-300 hover:scale-105 text-sm sm:text-base">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/20 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>
    </div>
    <FooterComponent/>
    </>
  );
};

export default AiTalentManagementPage;