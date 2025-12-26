import { 
  FaRegArrowAltCircleRight, 
  FaChevronDown, 
  FaUsers, 
  FaChartLine, 
  FaFileAlt, 
  FaLightbulb, 
  FaHandshake, 
  FaShieldAlt, 
  FaUserTie, 
  FaCalendarAlt, 
  FaMoneyBillWave, 
  FaGraduationCap,
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaSpinner,
  FaRegLightbulb
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavLogo from "../../../assets/full_logo.png";
import { useState, type ReactNode, useRef, useEffect } from "react";

interface navProps {
  title: string;
  href: string;
  dropdown?: DropdownItem[];
}

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// Dropdown data remains the same
const platformItems: DropdownItem[] = [
  { 
    title: "HR Analytics Dashboard", 
    description: "Real-time workforce insights & metrics", 
    href: "/hr_analytics", 
    icon: <FaChartLine className="text-emerald-500 size-5" />
  },
  { 
    title: "Employee Lifecycle Management", 
    description: "From hiring to retirement tracking", 
    href: "/hrm_ai", 
    icon: <FaUsers className="text-blue-500 size-5" />
  },
  { 
    title: "Compliance & Documentation", 
    description: "Stay compliant with labor laws", 
    href: "/compliance", 
    icon: <FaFileAlt className="text-purple-500 size-5" />
  },
  { 
    title: "AI-Powered HR Assistant", 
    description: "Smart automation for HR tasks", 
    href: "/hrm_ai", 
    icon: <FaLightbulb className="text-amber-500 size-5" />
  }
];

const solutionsItems: DropdownItem[] = [
  { 
    title: "Recruitment & Onboarding", 
    description: "Streamlined hiring process", 
    href: "/recruitment", 
    icon: <FaHandshake className="text-green-500 size-5" />
  },
  { 
    title: "Performance Management", 
    description: "Goal setting & performance reviews", 
    href: "/hr_analytics", 
    icon: <FaChartLine className="text-red-500 size-5" />
  },
  { 
    title: "Employee Engagement", 
    description: "Boost productivity & satisfaction", 
    href: "/employee_engagement", 
    icon: <FaUsers className="text-indigo-500 size-5" />
  },
  { 
    title: "HR Compliance Suite", 
    description: "Legal compliance made simple", 
    href: "/compliance", 
    icon: <FaShieldAlt className="text-cyan-500 size-5" />
  }
];

const resourcesItems: DropdownItem[] = [
  { 
    title: "HRM Whitepapers", 
    description: "Latest HR trends & research", 
    href: "/blogs", 
    icon: <FaFileAlt className="text-emerald-600 size-5" />
  },
  { 
    title: "HR Case Studies", 
    description: "Success stories from clients", 
    href: "/blogs/#all-resources", 
    icon: <FaLightbulb className="text-amber-600 size-5" />
  },
  { 
    title: "HR Compliance Guides", 
    description: "Stay updated with labor laws", 
    href: "/compliance", 
    icon: <FaShieldAlt className="text-blue-600 size-5" />
  },
  { 
    title: "Webinars & Training", 
    description: "HR professional development", 
    href: "/events", 
    icon: <FaGraduationCap className="text-purple-600 size-5" />
  }
];

const hrmFeaturesItems: DropdownItem[] = [
  { 
    title: "Talent Acquisition", 
    description: "Smart recruitment & applicant tracking", 
    href: "/recruitment", 
    icon: <FaUserTie className="text-emerald-500 size-5" />
  },
  { 
    title: "Attendance & Leave Management", 
    description: "Automated tracking & approvals", 
    href: "/hrm_ai", 
    icon: <FaCalendarAlt className="text-blue-500 size-5" />
  },
  { 
    title: "Payroll Processing", 
    description: "Automated salary & tax calculations", 
    href: "/pricing/#payroll", 
    icon: <FaMoneyBillWave className="text-green-500 size-5" />
  },
  { 
    title: "Learning Management", 
    description: "Employee training & development", 
    href: "/events", 
    icon: <FaGraduationCap className="text-purple-500 size-5" />
  }
];

const navList: navProps[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { 
    title: "Platform", 
    href: "#",
    dropdown: platformItems
  },
  { 
    title: "Solutions", 
    href: "#",
    dropdown: solutionsItems
  },
  { 
    title: "HRM Features", 
    href: "#",
    dropdown: hrmFeaturesItems
  },
  { 
    title: "Resources", 
    href: "#",
    dropdown: resourcesItems
  },
  { title: "Pricing", href: "/pricing" }
];

// AI Assistant Configuration
const SAMPLE_HR_QUESTIONS = [
  "How do I apply for annual leave?",
  "What's the process for onboarding new employees?",
  "Can you explain our maternity leave policy?",
  "How do I check my remaining sick leave?",
  "What documents are needed for background verification?"
];

const NavbarComponent = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [aiMessages, setAiMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your OnTap HRM AI Assistant. I can help you with leave management, policy information, onboarding support, and other HR-related questions. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // =================== SCROLL RESET FUNCTIONS ===================
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
    
    setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    }, 10);
  };

  // Enhanced navigation handler with scroll reset
  const handleNavigation = (href: string) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    // Scroll to top FIRST (before navigation)
    scrollToTop();
    
    // Close all dropdowns
    setActiveDropdown(null);
    
    // Navigate programmatically
    navigate(href);
    
    // Additional scroll check after navigation
    setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    }, 50);
  };

  // Handle logo click with scroll reset
  const handleLogoClick = () => {
    scrollToTop();
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const toggleDropdown = (title: string) => {
    if (activeDropdown === title) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(title);
    }
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  // AI Assistant Functions
  const getDemoResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("leave") && lowerMessage.includes("apply")) {
      return `To apply for annual leave:

1. **Submit Request**: Log into the HR portal and navigate to "Leave Management"
2. **Select Dates**: Choose your preferred start and end dates
3. **Choose Type**: Select "Annual Leave" from the dropdown
4. **Submit**: Click submit and await manager approval

You'll receive a notification once approved. Most requests are processed within 2 business days.`;
    }
    
    if (lowerMessage.includes("onboard") || lowerMessage.includes("new employee")) {
      return `**New Employee Onboarding Process**:

📋 **Pre-arrival (1-2 days before)**:
- Digital paperwork sent via email
- System access credentials provided
- Equipment setup initiated

🏢 **First Day**:
- Welcome meeting with HR (9:00 AM)
- Team introduction session
- System training

📚 **First Week**:
- Compliance training completion
- Mentor assignment
- Initial goal setting

The complete process typically takes 3-5 business days.`;
    }
    
    if (lowerMessage.includes("maternity") || lowerMessage.includes("paternity")) {
      return `**Parental Leave Policy**:

🤰 **Maternity Leave**:
- Duration: 26 weeks fully paid
- Application: Submit Form HR-12 + medical certificate
- Timeline: Apply at least 30 days in advance

👨‍👦 **Paternity Leave**:
- Duration: 2 weeks fully paid
- Application: Submit Form HR-13
- Timeline: Can be taken within 6 months of birth

📋 **Required Documents**:
1. Medical certificate (for maternity)
2. Birth certificate
3. Completed leave application form

Need help with the forms? I can guide you through them!`;
    }
    
    if (lowerMessage.includes("sick") || lowerMessage.includes("medical")) {
      return `**Sick Leave Information**:

🏥 **Entitlement**: 12 days per calendar year
📅 **Carry Over**: Up to 5 days can be carried to next year
📋 **Process**:
1. Notify your manager immediately
2. Submit medical certificate if absent > 3 days
3. Log absence in HR portal within 48 hours of return

💊 **Medical Certificate Required**:
- For absences exceeding 3 consecutive days
- From registered medical practitioner
- Must include diagnosis period

Need to check your current sick leave balance? I can help with that!`;
    }
    
    const defaultResponses = [
      "I understand you're asking about HR matters. For detailed policy information, I recommend checking the employee handbook or contacting your HR representative directly.",
      "That's a great question about HR processes. The specific procedure may vary by department, so I suggest reaching out to your line manager or HR business partner for the most accurate information.",
      "I can help with various HR topics including leave management, policy queries, and onboarding. Could you provide more specific details about what you need assistance with?",
      "For comprehensive guidance on that HR matter, please refer to section 4.2 of the employee handbook or submit a query through the HR helpdesk portal for personalized assistance."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const simulateAiResponse = async (userMessage: string) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    const response = getDemoResponse(userMessage);
    setIsTyping(false);
    return response;
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;
    const userMessage = inputText.trim();
    setInputText("");
    
    const userMsg: Message = {
      role: "user",
      content: userMessage,
      timestamp: new Date()
    };
    
    setAiMessages(prev => [...prev, userMsg]);
    setIsLoading(true);
    const aiResponse = await simulateAiResponse(userMessage);
    
    const aiMsg: Message = {
      role: "assistant",
      content: aiResponse,
      timestamp: new Date()
    };
    
    setAiMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
    
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setAiMessages([
      {
        role: "assistant",
        content: "Hello! I'm your OnTap HRM AI Assistant. I can help you with leave management, policy information, onboarding support, and other HR-related questions. How can I assist you today?",
        timestamp: new Date()
      }
    ]);
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [aiMessages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isAssistantOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isAssistantOpen]);

  return (
    <>
      {/* AI Assistant Floating Button */}
      <button
        onClick={() => setIsAssistantOpen(true)}
        className="fixed left-6 bottom-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 group flex items-center justify-center animate-pulse-glow"
        aria-label="Open HRM AI Assistant"
      >
        <FaRobot className="text-white size-6 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/30 to-teal-500/30 animate-ping opacity-70"></div>
        
        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
          <div className="flex items-center space-x-2">
            <FaRobot className="size-3 text-emerald-300" />
            <span>Ask me anything about HR</span>
          </div>
          <div className="text-xs text-emerald-200 mt-1 font-medium">HRM AI Assistant</div>
          <div className="absolute top-1/2 right-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-gray-900"></div>
        </div>
      </button>

      {/* Navigation Bar */}
      <nav className="w-full fixed flex justify-between items-center px-6 py-3 border-b border-gray-200/50 bg-white/95 backdrop-blur-sm z-50 shadow-md drop-shadow-gray-400">
        
        {/* Logo Container */}
        <div className="flex items-center space-x-3">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-teal-600 rounded-full animate-pulse-slow opacity-70"></div>
            
            <div className="relative flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-br from-white via-emerald-50 to-teal-50 shadow-lg">
              <div className="absolute top-0 left-1/4 w-2 h-4 bg-white/50 blur-sm transform -rotate-45"></div>
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.3)_0%,_transparent_70%)]"></div>
              
              {/* Logo */}
              <button
                onClick={handleLogoClick}
                className="focus:outline-none bg-transparent border-none p-0 cursor-pointer"
                aria-label="Go to homepage"
              >
                <img 
                  src={NavLogo} 
                  alt="Navigation Logo" 
                  className="w-16 h-16 object-contain relative z-10 p-1.5 transition-transform duration-300 group-hover:scale-105" 
                  style={{
                    filter: `
                      drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))
                      drop-shadow(0 4px 8px rgba(255, 255, 255, 0.5))
                      drop-shadow(0 0 12px rgba(255, 255, 255, 0.3))
                      brightness(1.05)
                      contrast(1.1)
                    `
                  }}
                />
              </button>
              
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-300 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-teal-300 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 relative">
          {navList.map((item, index) => (
            <div 
              key={index}
              className="relative"
            >
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className="text-gray-700 hover:text-emerald-600 font-medium text-sm tracking-wide transition-colors duration-200 relative group flex items-center space-x-1"
                  >
                    <span>{item.title}</span>
                    <FaChevronDown className={`size-3 transition-transform duration-300 ${
                      activeDropdown === item.title ? 'rotate-180' : ''
                    }`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 group-hover:w-full transition-all duration-300"></span>
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.title && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 animate-fadeIn z-50 overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 border-b border-gray-100">
                        <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.title === "HRM Features" 
                            ? "Comprehensive HR management tools" 
                            : `Explore our ${item.title.toLowerCase()} features`}
                        </p>
                      </div>

                      <div className="p-3">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleNavigation(dropdownItem.href)}
                            className="w-full flex items-start p-3 rounded-lg hover:bg-emerald-50/50 transition-all duration-200 group border-b border-gray-100 last:border-b-0 text-left bg-transparent border-none"
                          >
                            <div className="mr-3 flex items-center justify-center size-10 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                              {dropdownItem.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors">
                                  {dropdownItem.title}
                                </h4>
                                <FaRegArrowAltCircleRight className="size-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                              </div>
                              <p className="text-sm text-gray-500 mt-1">{dropdownItem.description}</p>
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="bg-gray-50 p-4 border-t border-gray-100">
                        <button
                          onClick={() => handleNavigation(item.dropdown?.[0]?.href || '#')}
                          className="w-full flex items-center justify-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors py-2 px-4 rounded-lg bg-white hover:bg-emerald-50 border border-emerald-100"
                        >
                          View all {item.title.toLowerCase()} features
                          <FaRegArrowAltCircleRight className="size-4 ml-2" />
                        </button>
                      </div>

                      <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-100"></div>
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => handleNavigation(item.href)}
                  className="text-gray-700 hover:text-emerald-600 font-medium text-sm tracking-wide transition-colors duration-200 relative group bg-transparent border-none p-0 cursor-pointer"
                >
                  <span>{item.title}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => handleNavigation("/get-started")}
            className="hidden md:flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#17ae9e]/80 to-[#0f766e]/70 text-white font-semibold text-sm hover:shadow-md hover:shadow-teal-300/70 transition-all duration-300 group"
          >
            <span>Get Started</span>
            <FaRegArrowAltCircleRight className="size-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button 
            onClick={() => handleNavigation("/get-started")}
           className="hidden md:flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r bg-white text-gray-800 font-semibold text-sm border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 group"
          >
            <span> Sign In </span>
            <FaRegArrowAltCircleRight className="size-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 relative z-50"
          >
            <div className={`space-y-1 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`}>
              <div className={`w-5 h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? 'rotate-90 translate-y-1.5' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? '-rotate-90 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>
      </nav>

      {/* AI Assistant Chat Modal */}
      {isAssistantOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fade-in-up"
            onClick={() => setIsAssistantOpen(false)}
          />
          
          <div className="fixed left-6 bottom-24 z-50 w-96 max-w-[calc(100vw-3rem)] animate-slide-in-up">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col max-h-[70vh]">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-t-2xl p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <FaRobot className="text-white size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">OnTap HRM AI Assistant</h3>
                    <p className="text-emerald-100 text-sm">Ask me about HR policies & procedures</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsAssistantOpen(false)}
                  className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Close assistant"
                >
                  <FaTimes className="size-4" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="space-y-4">
                  {aiMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl p-3 ${
                          message.role === "user"
                            ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-br-none"
                            : "bg-gray-100 text-gray-800 rounded-bl-none"
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.role === "assistant" && (
                            <FaRobot className={`size-4 mt-0.5 flex-shrink-0 ${
                              message.role === "assistant" ? "text-emerald-500" : "text-white"
                            }`} />
                          )}
                          <div className="flex-1">
                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                            <div className={`text-xs mt-2 ${
                              message.role === "user" ? "text-emerald-100" : "text-gray-500"
                            }`}>
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none p-3">
                        <div className="flex items-center space-x-2">
                          <FaRobot className="size-4 text-emerald-500" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <FaRegLightbulb className="size-3" />
                    <span>Try asking:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SAMPLE_HR_QUESTIONS.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs rounded-full hover:bg-emerald-100 transition-colors border border-emerald-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 p-4 bg-white">
                <div className="flex items-center space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about HR policies, leave, onboarding..."
                    className="flex-1 px-4 py-3 bg-gray-50 rounded-xl border border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isLoading}
                    className={`p-3 rounded-xl transition-all ${
                      inputText.trim() && !isLoading
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-300/50"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                    aria-label="Send message"
                  >
                    {isLoading ? (
                      <FaSpinner className="size-4 animate-spin" />
                    ) : (
                      <FaPaperPlane className="size-4" />
                    )}
                  </button>
                </div>
                
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    Demo assistant • Responses are simulated
                  </div>
                  <button
                    onClick={clearChat}
                    className="text-xs text-gray-500 hover:text-emerald-600 transition-colors px-2 py-1 hover:bg-emerald-50 rounded"
                  >
                    Clear chat
                  </button>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45 border-b border-r border-gray-200"></div>
          </div>
        </>
      )}

      {/* Mobile Dropdown Menu - FIXED WITH ANCHOR TAGS */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu Content */}
          <div className="md:hidden fixed top-22 left-0 right-0 bg-white z-50 max-h-[calc(100vh-50px)] overflow-y-auto shadow-xl">
            <div className="px-6 py-6">
              {navList.map((item, index) => (
                <div key={index} className="mb-3">
                  {item.dropdown ? (
                    <div className="mb-3">
                      <button
                        onClick={() => toggleDropdown(item.title)}
                        className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 hover:from-emerald-50/30 hover:to-emerald-50/10 transition-all duration-300 border border-gray-200 hover:border-emerald-200"
                      >
                        <div className="flex items-center">
                          <span className="font-semibold text-gray-800 text-base">{item.title}</span>
                          {activeDropdown === item.title && (
                            <span className="ml-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                              Open
                            </span>
                          )}
                        </div>
                        <FaChevronDown className={`size-4 text-gray-500 transition-transform duration-300 ${
                          activeDropdown === item.title ? 'rotate-180 text-emerald-600' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.title && (
                        <div className="mt-3 ml-3 space-y-3 border-l-2 border-emerald-300 pl-4">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <a
                              key={idx}
                              href={dropdownItem.href}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(dropdownItem.href);
                              }}
                              className="block w-full"
                            >
                              <div className="flex items-start p-3 rounded-lg hover:bg-emerald-50/70 transition-all duration-200 border border-transparent hover:border-emerald-100">
                                <div className="mr-3 mt-1">
                                  {dropdownItem.icon}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium text-gray-800 text-sm">{dropdownItem.title}</h4>
                                  <p className="text-xs text-gray-600 mt-1">{dropdownItem.description}</p>
                                </div>
                                <FaRegArrowAltCircleRight className="size-4 text-gray-400 ml-2 mt-0.5" />
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }}
                      className="block"
                    >
                      <div className="w-full p-4 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-gray-800 text-left border border-transparent hover:border-gray-200">
                        {item.title}
                      </div>
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="mt-8 space-y-4">
                <button
                  onClick={() => {
                    handleNavigation("/get-started");
                  }}
                  className="w-full flex items-center justify-center space-x-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-base hover:shadow-lg hover:shadow-emerald-300/50 transition-all duration-300"
                >
                  <span>Get Started Free</span>
                  <FaRegArrowAltCircleRight className="size-5" />
                </button>
                
                <button
                  onClick={() => {
                    handleNavigation("/get-started");
                  }}
                  className="w-full flex items-center justify-center space-x-3 px-6 py-3.5 rounded-full bg-white text-gray-800 font-semibold text-base border-2 border-emerald-300 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300"
                >
                  <span>Sign In</span>
                  <FaRegArrowAltCircleRight className="size-5" />
                </button>
              </div>
              
              {/* AI Assistant Button in Mobile Menu */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsAssistantOpen(true);
                  }}
                  className="w-full flex items-center justify-center space-x-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold text-base hover:shadow-lg hover:shadow-emerald-400/50 transition-all duration-300"
                >
                  <FaRobot className="size-5" />
                  <span>Open HRM AI Assistant</span>
                </button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Get instant answers to HR questions
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Click outside to close dropdowns */}
      {(activeDropdown && !isMobileMenuOpen) || isAssistantOpen ? (
        <div 
          className="fixed inset-0 z-30"
          onClick={() => {
            setActiveDropdown(null);
            if (isAssistantOpen) setIsAssistantOpen(false);
          }}
        />
      ) : null}
    </>
  );
};

export default NavbarComponent;