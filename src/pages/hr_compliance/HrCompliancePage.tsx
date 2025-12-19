import { useState } from "react";
import { 
  FaBook, 
  FaFileContract, 
  FaShieldAlt, 
  FaClipboardCheck, 
  FaBalanceScale,
  FaLock,
  FaSearch,
  FaDownload,
  FaClock,
  FaCalendarAlt,
  FaBell,
  FaExclamationTriangle,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaGraduationCap,
  FaCertificate,
  FaPlay,
  FaFileAlt,
  FaFolderOpen,
  FaRegCalendarCheck,
  FaRegFilePdf,
  FaRegFileWord,
  FaRegFileExcel
} from "react-icons/fa";
import FooterComponent from "../../components/layout/footer/FooterComponent";

const HrCompliancePage = () => {
  // Avatar URLs
  const avatarUrls = [
    "https://i.pinimg.com/736x/fc/e6/93/fce693e4be192e6943e4a0fc3957a005.jpg",
    "https://i.pinimg.com/1200x/31/c9/ce/31c9ce479d7c5763f6b620d4370b96c8.jpg",
    "https://i.pinimg.com/736x/a5/05/e2/a505e2e8e6e4e5b0607a7a438b8984c6.jpg",
    "https://i.pinimg.com/736x/88/a5/23/88a523523f21ed102bd68d2add317ed5.jpg",
    "https://i.pinimg.com/736x/10/f9/49/10f94912ec553621e064716ae3026447.jpg",
    "https://i.pinimg.com/736x/ee/96/af/ee96afc0635e1f531db8ec9ec181fcc3.jpg"
  ];

  const [activeSection, setActiveSection] = useState('suite');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Compliance Suite Features
  const complianceSuiteFeatures = [
    {
      title: "Regulatory Monitoring",
      description: "Automated tracking of federal, state, and local employment law changes",
      icon: FaBell,
      features: ["Real-time updates", "Jurisdiction-specific alerts", "Change impact analysis"],
      color: "from-emerald-500 to-teal-500",
      stats: "500+ regulations tracked"
    },
    {
      title: "Policy Management",
      description: "Centralized policy creation, distribution, and acknowledgment tracking",
      icon: FaFileContract,
      features: ["Version control", "Employee acknowledgment", "Automated reminders"],
      color: "from-blue-500 to-cyan-500",
      stats: "100% compliance rate"
    },
    {
      title: "Audit Preparedness",
      description: "Comprehensive audit trails and documentation management",
      icon: FaClipboardCheck,
      features: ["Document retention", "Audit trail logging", "Compliance reporting"],
      color: "from-purple-500 to-pink-500",
      stats: "Zero audit failures"
    },
    {
      title: "Risk Assessment",
      description: "AI-powered risk identification and mitigation recommendations",
      icon: FaShieldAlt,
      features: ["Risk scoring", "Mitigation plans", "Compliance gap analysis"],
      color: "from-orange-500 to-amber-500",
      stats: "85% risk reduction"
    }
  ];

  // Compliance Guides
  const complianceGuides = [
    {
      category: "Employment Law",
      title: "Fair Labor Standards Act (FLSA) Compliance",
      description: "Complete guide to wage and hour compliance, overtime rules, and recordkeeping requirements",
      icon: FaBalanceScale,
      pages: 42,
      lastUpdated: "Jan 2024",
      downloads: "1,245",
      urgency: "high"
    },
    {
      category: "Workplace Safety",
      title: "OSHA Compliance Handbook",
      description: "Comprehensive guide to workplace safety standards, reporting requirements, and inspections",
      icon: FaShieldAlt,
      pages: 38,
      lastUpdated: "Dec 2023",
      downloads: "987",
      urgency: "medium"
    },
    {
      category: "Discrimination",
      title: "EEOC & ADA Compliance Guide",
      description: "Understanding anti-discrimination laws and reasonable accommodation requirements",
      icon: FaUsers,
      pages: 56,
      lastUpdated: "Feb 2024",
      downloads: "1,532",
      urgency: "high"
    },
    {
      category: "Benefits",
      title: "ERISA & ACA Compliance Manual",
      description: "Guide to employee benefits compliance and healthcare reform requirements",
      icon: FaFileContract,
      pages: 48,
      lastUpdated: "Nov 2023",
      downloads: "843",
      urgency: "medium"
    }
  ];

  // Documentation Features
  const documentationFeatures = [
    {
      title: "Document Templates",
      description: "Ready-to-use templates for all compliance documentation needs",
      icon: FaFileAlt,
      items: [
        { name: "Employee Handbooks", format: "DOCX", count: 15 },
        { name: "Policy Templates", format: "PDF", count: 42 },
        { name: "Contract Templates", format: "DOCX", count: 28 }
      ]
    },
    {
      title: "Record Keeping",
      description: "Automated record retention and expiration management",
      icon: FaFolderOpen,
      items: [
        { name: "I-9 Forms", retention: "3 years", status: "Compliant" },
        { name: "Payroll Records", retention: "4 years", status: "Active" },
        { name: "Training Records", retention: "5 years", status: "Monitored" }
      ]
    },
    {
      title: "Compliance Calendar",
      description: "Never miss a deadline with automated compliance reminders",
      icon: FaRegCalendarCheck,
      items: [
        { name: "Form 5500 Filing", due: "Jul 31, 2024", priority: "High" },
        { name: "OSHA 300A Posting", due: "Feb 1 - Apr 30", priority: "Medium" },
        { name: "EEO-1 Reporting", due: "Mar 31, 2024", priority: "High" }
      ]
    }
  ];

  // Compliance Statistics
  const complianceStats = [
    { number: "99.8%", label: "Audit Success Rate", icon: FaCheckCircle, change: "+2.3%" },
    { number: "24/7", label: "Compliance Monitoring", icon: FaClock, change: "Real-time" },
    { number: "500+", label: "Legal Templates", icon: FaFileAlt, change: "+45 this year" },
    { number: "50+", label: "Jurisdictions Covered", icon: FaBalanceScale, change: "All 50 states" }
  ];

  // Upcoming Deadlines
  const upcomingDeadlines = [
    { title: "Form W-2 Distribution", date: "Jan 31, 2024", status: "upcoming", priority: "high" },
    { title: "OSHA 300A Posting", date: "Feb 1, 2024", status: "current", priority: "medium" },
    { title: "First Quarter Payroll Reports", date: "Apr 30, 2024", status: "upcoming", priority: "high" },
    { title: "EEO-1 Component 1 Filing", date: "May 31, 2024", status: "upcoming", priority: "critical" }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Compliance Director",
      company: "Global Enterprises Inc.",
      content: "The compliance suite saved us from potential violations during our last audit. The automated tracking is invaluable.",
      avatar: avatarUrls[0],
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "HR Manager",
      company: "TechStart Solutions",
      content: "The documentation templates alone are worth the investment. We've standardized all our HR processes.",
      avatar: avatarUrls[1],
      rating: 5
    },
    {
      name: "Emily Chen",
      role: "Legal Counsel",
      company: "Financial Services Group",
      content: "As legal counsel, I appreciate the accuracy and depth of the compliance guides. They're always up-to-date.",
      avatar: avatarUrls[2],
      rating: 4
    }
  ];

  // Training Modules
  const trainingModules = [
    { title: "Anti-Harassment Training", duration: "60 min", completion: "92%", certified: true },
    { title: "Workplace Safety", duration: "45 min", completion: "87%", certified: true },
    { title: "Data Privacy Compliance", duration: "30 min", completion: "78%", certified: false },
    { title: "Ethics & Conduct", duration: "50 min", completion: "95%", certified: true }
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-6 animate-feature-tag">
              <FaLock className="animate-spin-slow" />
              <span className="text-sm font-semibold">SECURE & COMPLIANT</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-in-up">
              HR Compliance <span className="block text-emerald-100">Suite</span>
            </h1>
            
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
              Stay ahead of regulations with comprehensive compliance tools, expert guides, 
              and automated documentation for complete HR legal protection.
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
        {/* Navigation Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-buttons-stagger">
            {[
              { id: 'suite', label: 'HR Compliance Suite', icon: FaShieldAlt },
              { id: 'guides', label: 'Compliance Guides', icon: FaBook },
              { id: 'docs', label: 'Documentation', icon: FaFileAlt }
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

          {/* HR Compliance Suite Section */}
          {activeSection === 'suite' && (
            <div className="animate-slide-in-up">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse-border">
                <div className="p-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-text-reveal">
                      Complete <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Compliance Suite</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
                      All-in-one platform for managing HR compliance across regulations, policies, audits, and risk management
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {complianceSuiteFeatures.map((feature, index) => (
                      <div 
                        key={index}
                        className={`bg-gradient-to-br ${feature.color} rounded-xl p-6 text-white transform-gpu hover:scale-105 transition-all duration-500 animate-stagger-card ${
                          hoveredCard === index ? 'animate-card-lift' : ''
                        }`}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="bg-white/20 p-3 rounded-lg inline-block mb-4 animate-pulse-glow">
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-emerald-100 mb-4 text-sm">{feature.description}</p>
                        <ul className="space-y-1 mb-4">
                          {feature.features.map((item, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <FaCheckCircle className="h-3 w-3 mr-2 animate-improvement-pulse" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="text-xs bg-white/20 rounded px-2 py-1 inline-block animate-pulse-slow">
                          {feature.stats}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Compliance Statistics */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center animate-text-reveal">
                      Compliance <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Metrics</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {complianceStats.map((stat, index) => (
                        <div 
                          key={index} 
                          className="bg-white rounded-xl shadow-lg p-6 text-center border border-emerald-100 animate-stats-card"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <stat.icon className={`h-8 w-8 mx-auto mb-3 ${
                            stat.icon === FaCheckCircle ? 'text-emerald-500' :
                            stat.icon === FaClock ? 'text-blue-500' :
                            stat.icon === FaFileAlt ? 'text-purple-500' : 'text-orange-500'
                          } animate-pulse`} />
                          <div className="text-3xl font-bold text-gray-800 mb-1 animate-growth">{stat.number}</div>
                          <div className="text-gray-600 mb-2">{stat.label}</div>
                          <div className="text-sm font-semibold text-emerald-600">{stat.change}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Deadlines */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 animate-feature-card">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                          <FaExclamationTriangle className="text-amber-600 animate-pulse" />
                          Upcoming Compliance Deadlines
                        </h3>
                        <p className="text-gray-600 text-sm">Critical dates requiring attention</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-amber-600 animate-spin-slow" />
                        <span className="text-sm font-semibold text-amber-700">Live Updates</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {upcomingDeadlines.map((deadline, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between p-3 bg-white rounded-lg border border-amber-100 hover:border-amber-300 transition-colors duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${
                              deadline.priority === 'critical' ? 'bg-red-100 text-red-600' :
                              deadline.priority === 'high' ? 'bg-amber-100 text-amber-600' :
                              'bg-blue-100 text-blue-600'
                            }`}>
                              <FaCalendarAlt className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-800">{deadline.title}</div>
                              <div className="text-sm text-gray-500">{deadline.date}</div>
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            deadline.priority === 'critical' ? 'bg-red-100 text-red-700' :
                            deadline.priority === 'high' ? 'bg-amber-100 text-amber-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {deadline.priority.toUpperCase()}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                      View Full Calendar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Compliance Guides Section */}
          {activeSection === 'guides' && (
            <div className="animate-slide-in-up">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse-border">
                <div className="p-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-text-reveal">
                      Expert <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Compliance Guides</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
                      Comprehensive, up-to-date guides written by HR legal experts and continuously monitored for regulation changes
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Guides List */}
                    <div>
                      <div className="space-y-6">
                        {complianceGuides.map((guide, index) => (
                          <div 
                            key={index}
                            className="bg-white rounded-xl border border-emerald-100 shadow-sm hover:shadow-lg transition-all duration-500 transform-gpu hover:scale-[1.02] animate-stagger-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                  <div className={`p-3 rounded-lg bg-gradient-to-r ${
                                    guide.category === 'Employment Law' ? 'from-emerald-500 to-teal-500' :
                                    guide.category === 'Workplace Safety' ? 'from-blue-500 to-cyan-500' :
                                    guide.category === 'Discrimination' ? 'from-purple-500 to-pink-500' :
                                    'from-orange-500 to-amber-500'
                                  }`}>
                                    <guide.icon className="h-5 w-5 text-white" />
                                  </div>
                                  <div>
                                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                                      guide.urgency === 'high' ? 'bg-red-100 text-red-700' :
                                      guide.urgency === 'medium' ? 'bg-amber-100 text-amber-700' :
                                      'bg-blue-100 text-blue-700'
                                    }`}>
                                      {guide.category}
                                    </span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm text-gray-500">Updated {guide.lastUpdated}</div>
                                  <div className="text-xs text-gray-400">{guide.downloads} downloads</div>
                                </div>
                              </div>
                              
                              <h3 className="text-lg font-bold text-gray-800 mb-2">{guide.title}</h3>
                              <p className="text-gray-600 mb-4">{guide.description}</p>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <FaFileAlt className="h-4 w-4" />
                                    {guide.pages} pages
                                  </span>
                                  <span className={`flex items-center gap-1 ${
                                    guide.urgency === 'high' ? 'text-red-600' :
                                    guide.urgency === 'medium' ? 'text-amber-600' :
                                    'text-blue-600'
                                  }`}>
                                    <FaExclamationTriangle className="h-4 w-4" />
                                    {guide.urgency === 'high' ? 'Critical Update' : 'Updated'}
                                  </span>
                                </div>
                                <button className="flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700">
                                  <FaDownload className="h-4 w-4 animate-bounce-slow" />
                                  Download Guide
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Training & Certification */}
                    <div>
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white mb-6 animate-pulse-glow">
                        <h3 className="text-xl font-bold mb-2 animate-text-reveal">Compliance Certification</h3>
                        <p className="text-emerald-100 mb-4">
                          Get certified in HR compliance with our expert-led training programs
                        </p>
                        <div className="flex items-center gap-3 mb-4">
                          <FaCertificate className="h-8 w-8 text-emerald-200 animate-float" />
                          <div>
                            <div className="font-bold">Professional HR Compliance Certification</div>
                            <div className="text-sm text-emerald-200">Recognized by SHRM & HRCI</div>
                          </div>
                        </div>
                        <button className="w-full bg-white text-emerald-600 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-300 hover:scale-105">
                          View Certification Program
                        </button>
                      </div>

                      {/* Training Modules */}
                      <div className="bg-white rounded-xl border border-emerald-100 p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <FaGraduationCap className="text-emerald-600 animate-pulse" />
                          Training Modules
                        </h3>
                        <div className="space-y-4">
                          {trainingModules.map((module, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-emerald-50/50 rounded-lg">
                              <div>
                                <div className="font-medium text-gray-800">{module.title}</div>
                                <div className="text-sm text-gray-500">{module.duration}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold text-emerald-600">{module.completion} completion</div>
                                <div className="text-xs">
                                  {module.certified ? (
                                    <span className="text-emerald-600 flex items-center gap-1">
                                      <FaCheckCircle className="h-3 w-3" />
                                      Certified
                                    </span>
                                  ) : (
                                    <span className="text-gray-500">In Progress</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compliance Alert */}
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200 animate-feature-card">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-3 rounded-lg">
                        <FaExclamationTriangle className="h-6 w-6 text-red-600 animate-pulse" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Compliance Alert: New Regulations</h3>
                        <p className="text-gray-600 mb-3">
                          Recent updates to state-level paid leave laws require immediate attention. 
                          Review our updated guide for compliance requirements in your jurisdiction.
                        </p>
                        <div className="flex items-center gap-4">
                          <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300">
                            Review Updates
                          </button>
                          <button className="px-4 py-2 bg-white text-red-600 font-semibold rounded-lg border border-red-200 hover:bg-red-50 transition-colors duration-300">
                            Set Reminder
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Documentation Section */}
          {activeSection === 'docs' && (
            <div className="animate-slide-in-up">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse-border">
                <div className="p-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-text-reveal">
                      Compliance <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Documentation</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
                      Automated document management, retention tracking, and deadline monitoring for complete compliance
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {documentationFeatures.map((feature, index) => (
                      <div 
                        key={index}
                        className="bg-white rounded-xl border border-emerald-100 p-6 shadow-sm hover:shadow-lg transition-all duration-500 transform-gpu hover:scale-[1.02] animate-feature-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-lg inline-block mb-4 animate-pulse-glow">
                          <feature.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
                        
                        <div className="space-y-3">
                          {feature.items.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2 bg-emerald-50/50 rounded">
                              <div className="text-sm font-medium text-gray-700">{item.name}</div>
                              <div className="text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-700">
                                {('format' in item) ? item.format : 
                                 ('retention' in item) ? item.retention : 
                                 item.due}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* File Types & Downloads */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 animate-text-reveal">
                      Document <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Library</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { icon: FaRegFilePdf, type: "PDF", count: "245", color: "from-red-500 to-pink-500" },
                        { icon: FaRegFileWord, type: "DOCX", count: "189", color: "from-blue-500 to-cyan-500" },
                        { icon: FaRegFileExcel, type: "XLSX", count: "142", color: "from-emerald-500 to-teal-500" },
                        { icon: FaFileAlt, type: "Other", count: "76", color: "from-purple-500 to-pink-500" }
                      ].map((file, index) => (
                        <div 
                          key={index} 
                          className="bg-white rounded-xl p-4 border border-gray-200 text-center hover:shadow-md transition-shadow duration-300 animate-stagger-card"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className={`bg-gradient-to-r ${file.color} p-3 rounded-lg inline-block mb-3`}>
                            <file.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-lg font-bold text-gray-800">{file.count}</div>
                          <div className="text-gray-600">{file.type} Files</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Document Search */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                    <div className="flex items-center gap-3 mb-4">
                      <FaSearch className="h-6 w-6 text-emerald-600 animate-pulse" />
                      <h3 className="text-xl font-bold text-gray-800">Search Compliance Documents</h3>
                    </div>
                    <div className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Search for documents, policies, or regulations..."
                        className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-300"
                      />
                      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                        <FaSearch className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Employee Handbook', 'I-9 Forms', 'OSHA Records', 'EEO Reporting', 'FMLA', 'ADA Accommodations'].map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-white border border-emerald-200 text-emerald-700 rounded-full text-sm hover:bg-emerald-50 cursor-pointer transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
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
            Trusted by <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Compliance Leaders</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform-gpu hover:scale-[1.02] animate-stagger-card group"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredCard(100 + index)}
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
            <FaShieldAlt className="text-4xl mx-auto mb-4 animate-float" />
            <h2 className="text-3xl font-bold mb-4 animate-text-reveal">
              Ensure Complete HR Compliance
            </h2>
            <p className="mb-6 animate-fade-in-delay">
              Join thousands of organizations that trust our platform for comprehensive compliance management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-buttons-stagger">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transform transition duration-300 hover:scale-105 hover:animate-bounce">
                <FaPlay className="inline-block mr-2 h-5 w-5 animate-spin" />
                Schedule Demo
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transform transition duration-300 hover:scale-105 animate-pulse-border">
                Get Started Free
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
              animationDuration: `${15 + Math.random() * 15}s`
            }}
          />
        ))}
        {/* Orbital elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-emerald-300/30 rounded-full animate-spin-orb"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-teal-300/20 rounded-full animate-spin-orb" style={{animationDuration: '40s'}}></div>
      </div>
    </div>
    <FooterComponent/>
    </>
  );
};

export default HrCompliancePage;