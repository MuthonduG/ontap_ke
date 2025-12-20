import { FaRegArrowAltCircleRight, FaChevronDown, FaUsers, FaChartLine, FaFileAlt, FaLightbulb, FaHandshake, FaShieldAlt, FaUserTie, FaCalendarAlt, FaMoneyBillWave, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import NavLogo from "../../../assets/full_logo.png";
import { useState, type ReactNode } from "react";

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
    href: "#", 
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
    href: "#", 
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
    href: "#", 
    icon: <FaFileAlt className="text-emerald-600 size-5" />
  },
  { 
    title: "HR Case Studies", 
    description: "Success stories from clients", 
    href: "#", 
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
    href: "#", 
    icon: <FaCalendarAlt className="text-blue-500 size-5" />
  },
  { 
    title: "Payroll Processing", 
    description: "Automated salary & tax calculations", 
    href: "#", 
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

const NavbarComponent = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <>
      {/* Navigation Bar */}
      <nav className="w-full fixed flex justify-between items-center px-6 py-3 border-b border-gray-200/50 bg-white/95 backdrop-blur-sm z-50 shadow-md drop-shadow-gray-400">
        
        {/* Enhanced Logo Container */}
        <div className="flex items-center space-x-3">
          <div className="relative group">
            
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>

            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-teal-600 rounded-full animate-pulse-slow opacity-70"></div>
            
            <div className="relative flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-br from-white via-emerald-50 to-teal-50 shadow-lg">
              
              <div className="absolute top-0 left-1/4 w-2 h-4 bg-white/50 blur-sm transform -rotate-45"></div>
              
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.3)_0%,_transparent_70%)]"></div>
              
              {/* Logo with enhanced effects */}
              <Link to="/" onClick={closeAllDropdowns}>
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
              </Link>
              
              {/* Floating particles effect */}
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
                      {/* Dropdown header */}
                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 border-b border-gray-100">
                        <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.title === "HRM Features" 
                            ? "Comprehensive HR management tools" 
                            : `Explore our ${item.title.toLowerCase()} features`}
                        </p>
                      </div>

                      {/* Dropdown items */}
                      <div className="p-3">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            to={dropdownItem.href}
                            onClick={closeAllDropdowns}
                            className="flex items-start p-3 rounded-lg hover:bg-emerald-50/50 transition-all duration-200 group border-b border-gray-100 last:border-b-0"
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
                          </Link>
                        ))}
                      </div>

                      {/* Dropdown footer */}
                      <div className="bg-gray-50 p-4 border-t border-gray-100">
                        <a
                          href="#"
                          onClick={closeAllDropdowns}
                          className="flex items-center justify-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors py-2 px-4 rounded-lg bg-white hover:bg-emerald-50 border border-emerald-100"
                        >
                          View all {item.title.toLowerCase()} features
                          <FaRegArrowAltCircleRight className="size-4 ml-2" />
                        </a>
                      </div>

                      {/* Arrow pointer */}
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-100"></div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  onClick={closeAllDropdowns}
                  className="text-gray-700 hover:text-emerald-600 font-medium text-sm tracking-wide transition-colors duration-200 relative group"
                >
                  <span>{item.title}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/get-started"
            onClick={closeAllDropdowns}
            className="hidden md:flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#17ae9e]/80 to-[#0f766e]/70 text-white font-semibold text-sm hover:shadow-md hover:shadow-teal-300/70 transition-all duration-300 group"
          >
            <span>Get Started</span>
            <FaRegArrowAltCircleRight className="size-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
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

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-sm z-40 overflow-y-auto">
          <div className="px-6 py-4">
            {navList.map((item, index) => (
              <div key={index} className="mb-2">
                {item.dropdown ? (
                  <div className="mb-2">
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-semibold text-gray-800">{item.title}</span>
                      <FaChevronDown className={`size-4 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeDropdown === item.title && (
                      <div className="mt-2 ml-4 space-y-2 border-l-2 border-emerald-200 pl-4">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            to={dropdownItem.href}
                            onClick={closeAllDropdowns}
                            className="flex items-start p-3 rounded-lg hover:bg-emerald-50 transition-colors"
                          >
                            <div className="mr-3 mt-1">
                              {dropdownItem.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">{dropdownItem.title}</h4>
                              <p className="text-sm text-gray-600 mt-1">{dropdownItem.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={closeAllDropdowns}
                    className="block p-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-gray-800"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA Button */}
            <Link
              to="/get-started"
              onClick={closeAllDropdowns}
              className="w-full mt-6 flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#17ae9e]/80 to-[#0f766e]/70 text-white font-semibold text-sm"
            >
              <span>Get Started Free</span>
              <FaRegArrowAltCircleRight className="size-5" />
            </Link>
          </div>
        </div>
      )}

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40"
          onClick={closeAllDropdowns}
        />
      )}
    </>
  );
};

export default NavbarComponent;