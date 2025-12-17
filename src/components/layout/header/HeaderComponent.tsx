import { FaCheckCircle, FaUsers, FaRocket, FaCalendarAlt, FaClock, FaUserCheck, FaEllipsisH, FaMoneyBillWave, FaTasks, FaUserPlus, FaArrowRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const HeaderComponent = () => {
  const [activeFeature, setActiveFeature] = useState("attendance");
  const [isScrolled, setIsScrolled] = useState(false);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  
  // Avatar URLs
  const avatarUrls = [
    "https://i.pinimg.com/736x/fc/e6/93/fce693e4be192e6943e4a0fc3957a005.jpg",
    "https://i.pinimg.com/1200x/31/c9/ce/31c9ce479d7c5763f6b620d4370b96c8.jpg",
    "https://i.pinimg.com/736x/a5/05/e2/a505e2e8e6e4e5b0607a7a438b8984c6.jpg",
    "https://i.pinimg.com/736x/88/a5/23/88a523523f21ed102bd68d2add317ed5.jpg",
    "https://i.pinimg.com/736x/10/f9/49/10f94912ec553621e064716ae3026447.jpg",
    "https://i.pinimg.com/736x/ee/96/af/ee96afc0635e1f531db8ec9ec181fcc3.jpg"
  ];
  
  // Sample attendance data with avatar URLs
  const attendanceData = [
    { id: 1, name: "Sarah Johnson", role: "HR Manager", timeIn: "08:45 AM", timeOut: "05:30 PM", status: "present", avatar: avatarUrls[0] },
    { id: 2, name: "Michael Chen", role: "Frontend Dev", timeIn: "09:15 AM", timeOut: "06:00 PM", status: "present", avatar: avatarUrls[1] },
    { id: 3, name: "Priya Sharma", role: "Backend Dev", timeIn: "09:30 AM", timeOut: "-", status: "late", avatar: avatarUrls[2] },
    { id: 4, name: "David Wilson", role: "UX Designer", timeIn: "08:55 AM", timeOut: "05:45 PM", status: "present", avatar: avatarUrls[3] },
    { id: 5, name: "Emma Rodriguez", role: "Product Mgr", timeIn: "-", timeOut: "-", status: "absent", avatar: avatarUrls[4] },
    { id: 6, name: "James Miller", role: "QA Engineer", timeIn: "09:05 AM", timeOut: "05:55 PM", status: "present", avatar: avatarUrls[5] },
  ];

  // Feature data for animation
  const features = [
    {
      id: "attendance",
      title: "Attendance Tracking",
      icon: <FaCalendarAlt />,
      description: "Real-time employee monitoring",
      color: "emerald"
    },
    {
      id: "payroll",
      title: "Payroll Processing",
      icon: <FaMoneyBillWave />,
      description: "Automated salary calculations",
      color: "blue"
    },
    {
      id: "tasks",
      title: "Task Management",
      icon: <FaTasks />,
      description: "Team collaboration & tracking",
      color: "purple"
    },
    {
      id: "recruitment",
      title: "Recruitment",
      icon: <FaUserPlus />,
      description: "Streamlined hiring process",
      color: "amber"
    }
  ];

  // Rotate features automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => {
        const currentIndex = features.findIndex(f => f.id === prev);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Scroll detection for floating entries
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current || !dashboardRef.current) return;
      
      const headerBottom = headerRef.current.getBoundingClientRect().bottom;
      const dashboardTop = dashboardRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // If user has scrolled past header and dashboard is in view
      if (headerBottom < 100 && dashboardTop < windowHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeFeatureData = features.find(f => f.id === activeFeature);
  
  // Select two entries for floating animation
  const floatingEntries = attendanceData.slice(0, 2);

  return (
    <>
      {/* Custom CSS for animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes slideIn {
            from { 
              opacity: 0;
              transform: translateX(-100px) translateY(50px);
            }
            to { 
              opacity: 1;
              transform: translateX(0) translateY(0);
            }
          }
          
          @keyframes slideOut {
            from { 
              opacity: 1;
              transform: translateX(0) translateY(0);
            }
            to { 
              opacity: 0;
              transform: translateX(-100px) translateY(50px);
            }
          }
          
          @keyframes slideToDashboard {
            from { 
              opacity: 1;
              transform: translateX(0) translateY(0);
            }
            to { 
              opacity: 0;
              transform: translateX(calc(50vw - 50%)) translateY(calc(50vh - 50%));
            }
          }
          
          @keyframes slideFromDashboard {
            from { 
              opacity: 0;
              transform: translateX(calc(50vw - 50%)) translateY(calc(50vh - 50%));
            }
            to { 
              opacity: 1;
              transform: translateX(0) translateY(0);
            }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-gradient {
            background-size: 200% auto;
            animation: gradient 3s ease-in-out infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          .floating-entry {
            transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.2; }
          }
        `}
      </style>
    
      <header 
        ref={headerRef}
        className="w-full flex flex-col justify-center items-center bg-gradient-to-b from-white via-emerald-50/30 to-teal-50/20 pt-12 pb-16 px-4 overflow-hidden relative"
      >
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        
        {/* Floating Entries (Visible when not scrolled) */}
        {!isScrolled && (
          <>
            {/* Left side floating entry */}
            <div 
              className={`fixed top-1/4 left-4 z-40 floating-entry`}
              style={{
                animation: 'slideIn 0.8s ease-out forwards',
                opacity: isScrolled ? 0 : 1,
                transform: isScrolled ? 'translateX(-100px) translateY(50px)' : 'translateX(0) translateY(0)'
              }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-emerald-200/50 border border-emerald-100 p-4 w-64 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img 
                      src={floatingEntries[0].avatar} 
                      alt={floatingEntries[0].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{floatingEntries[0].name}</p>
                    <p className="text-xs text-gray-500">{floatingEntries[0].role}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <FaClock className="size-3 text-emerald-500" />
                    <span className="text-gray-700">{floatingEntries[0].timeIn}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    floatingEntries[0].status === 'present' 
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {floatingEntries[0].status}
                  </span>
                </div>
              </div>
            </div>

            {/* Right side floating entry */}
            <div 
              className={`fixed top-1/3 right-4 z-40 floating-entry`}
              style={{
                animation: 'slideIn 0.8s ease-out 0.2s forwards',
                opacity: isScrolled ? 0 : 1,
                transform: isScrolled ? 'translateX(100px) translateY(50px)' : 'translateX(0) translateY(0)'
              }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-emerald-200/50 border border-emerald-100 p-4 w-64 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img 
                      src={floatingEntries[1].avatar} 
                      alt={floatingEntries[1].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{floatingEntries[1].name}</p>
                    <p className="text-xs text-gray-500">{floatingEntries[1].role}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <FaClock className="size-3 text-emerald-500" />
                    <span className="text-gray-700">{floatingEntries[1].timeIn}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    floatingEntries[1].status === 'present' 
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {floatingEntries[1].status}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
        
        {/* Main Content */}
        <div className="w-full max-w-6xl flex flex-col justify-center items-center relative z-10">
          
          {/* Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50">
              <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                🎯 TRUSTED BY 500+ HR TEAMS WORLDWIDE
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-8 relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Manage Your Team
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-700 via-emerald-600 to-teal-500 bg-clip-text text-transparent animate-gradient">
                in One Platform
              </span>
            </h1>
            
            {/* Animated indicators showing entries can move */}
            {!isScrolled && (
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-sm text-emerald-600 animate-pulse">
                <span>👆 Scroll to see entries move</span>
                <FaArrowRight className="size-4" />
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-lg hover:shadow-xl hover:shadow-emerald-300/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 group">
              <span>Start Free Trial</span>
              <FaRocket className="size-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="px-8 py-4 rounded-full bg-white text-gray-800 font-semibold text-lg border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 group">
              <span>Book a Demo</span>
              <FaUsers className="size-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-5 animate-float">
          <div className="w-4 h-4 bg-emerald-300/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/3 right-8 animate-float delay-700">
          <div className="w-6 h-6 bg-teal-400/20 rounded-full"></div>
        </div>
      </header>

      {/* Full Width Dashboard Container */}
      <div 
        ref={dashboardRef}
        className="w-full relative z-10 px-4"
      >
        {/* Feature Navigation Tabs */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`px-5 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                  activeFeature === feature.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:text-gray-700'
                }`}
              >
                <span className="text-lg">{feature.icon}</span>
                <span className="font-medium">{feature.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Container */}
        <div className="w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-emerald-100/50 border border-emerald-100 overflow-hidden max-w-6xl mx-auto">
          
          {/* Feature Header with Animation */}
          <div className={`bg-gradient-to-r from-${activeFeatureData?.color}-50 to-${activeFeatureData?.color}-100 p-8 border-b border-emerald-100 transition-all duration-500`}>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-r from-${activeFeatureData?.color}-500 to-${activeFeatureData?.color}-600 text-white text-2xl`}>
                    {activeFeatureData?.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">{activeFeatureData?.title}</h2>
                    <p className="text-gray-600 mt-1">{activeFeatureData?.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Stats Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/80 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Active</p>
                      <p className="text-2xl font-bold text-emerald-600">24</p>
                    </div>
                    <FaUserCheck className="size-6 text-emerald-500/30" />
                  </div>
                </div>
                
                <div className="bg-white/80 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Pending</p>
                      <p className="text-2xl font-bold text-amber-500">8</p>
                    </div>
                    <FaClock className="size-6 text-amber-500/30" />
                  </div>
                </div>
                
                <div className="bg-white/80 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Completed</p>
                      <p className="text-2xl font-bold text-blue-500">42</p>
                    </div>
                    <FaCheckCircle className="size-6 text-blue-500/30" />
                  </div>
                </div>
                
                <div className="bg-white/80 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total</p>
                      <p className="text-2xl font-bold text-gray-700">74</p>
                    </div>
                    <FaUsers className="size-6 text-gray-400/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dynamic Content Based on Active Feature */}
          <div className="p-6">
            {/* Attendance Dashboard */}
            {activeFeature === "attendance" && (
              <div className="space-y-6">
                <div className="overflow-x-auto rounded-xl border border-gray-100">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Employee</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Role</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Time In</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Time Out</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {attendanceData.map((employee, index) => (
                        <tr 
                          key={employee.id} 
                          className="hover:bg-emerald-50/50 transition-colors relative"
                          style={{
                            animation: isScrolled && index < 2 
                              ? 'slideFromDashboard 0.8s ease-out forwards' 
                              : 'none'
                          }}
                        >
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="size-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                <img 
                                  src={employee.avatar} 
                                  alt={employee.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium text-gray-800">{employee.name}</p>
                                <p className="text-sm text-gray-500">ID: EMP{employee.id.toString().padStart(4, '0')}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-gray-700">{employee.role}</span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <FaClock className="size-3 text-gray-400" />
                              <span className={`font-medium ${employee.timeIn === '-' ? 'text-gray-400' : 'text-gray-700'}`}>
                                {employee.timeIn}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <FaClock className="size-3 text-gray-400" />
                              <span className={`font-medium ${employee.timeOut === '-' ? 'text-gray-400' : 'text-gray-700'}`}>
                                {employee.timeOut}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              employee.status === 'present' 
                                ? 'bg-emerald-100 text-emerald-700' 
                                : employee.status === 'late'
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-red-100 text-red-700'
                            }`}>
                              {employee.status === 'present' && <FaCheckCircle className="size-3 mr-1" />}
                              {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                              <FaEllipsisH />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Visual indicator for moving entries */}
                {isScrolled && (
                  <div className="text-center p-4 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-xl border border-emerald-100">
                    <p className="text-sm text-emerald-600 font-medium animate-pulse">
                      <FaArrowRight className="inline mr-2 size-4" />
                      Entries smoothly moved into table
                      <FaArrowRight className="inline ml-2 size-4 transform rotate-180" />
                    </p>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-xl border border-emerald-100">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-emerald-600">Attendance Summary:</span> 83% of employees are present today
                  </p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white text-emerald-600 text-sm font-medium rounded-lg border border-emerald-200 hover:bg-emerald-50 transition-colors">
                      Export Report
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all">
                      Mark All Present
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Other dashboard features (payroll, tasks, recruitment) */}
            {/* ... (rest of your existing code for other features) */}
          </div>
          
          {/* Dashboard Footer */}
          <div className="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 p-6 border-t border-emerald-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Experience all features</h3>
                <p className="text-gray-600 text-sm mt-1">Unlock complete HR management capabilities</p>
              </div>
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 group">
                <span>Explore All Features</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderComponent