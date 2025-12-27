import { FaCheckCircle, FaUsers, FaRocket, FaCalendarAlt, FaClock, FaUserCheck, FaEllipsisH, FaMoneyBillWave, FaTasks, FaUserPlus, FaArrowRight, FaFileInvoice, FaRegCalendarCheck, FaPercentage, FaRegClock, FaStar, FaRegStar, FaComments, FaMoneyCheckAlt, FaChartLine, FaBusinessTime, FaBriefcase, FaGraduationCap, FaPhone, FaEnvelope, FaUserTie } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const HeaderComponent = () => {
  const [activeFeature, setActiveFeature] = useState("attendance");
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldSlideBack, setShouldSlideBack] = useState(false);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  
  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint in Tailwind
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Avatar URLs
  const avatarUrls = [
    "https://i.pinimg.com/736x/fc/e6/93/fce693e4be192e6943e4a0fc3957a005.jpg",
    "https://i.pinimg.com/1200x/31/c9/ce/31c9ce479d7c5763f6b620d4370b96c8.jpg",
    "https://i.pinimg.com/736x/a5/05/e2/a505e2e8e6e4e5b0607a7a438b8984c6.jpg",
    "https://i.pinimg.com/736x/88/a5/23/88a523523f21ed102bd68d2add317ed5.jpg",
    "https://i.pinimg.com/736x/10/f9/49/10f94912ec553621e064716ae3026447.jpg",
    "https://i.pinimg.com/736x/ee/96/af/ee96afc0635e1f531db8ec9ec181fcc3.jpg"
  ];

  // Additional avatar URLs for candidates
  const candidateAvatars = [
    "https://i.pinimg.com/736x/fc/e6/93/fce693e4be192e6943e4a0fc3957a005.jpg",
    "https://i.pinimg.com/1200x/31/c9/ce/31c9ce479d7c5763f6b620d4370b96c8.jpg",
    "https://i.pinimg.com/736x/a5/05/e2/a505e2e8e6e4e5b0607a7a438b8984c6.jpg",
    "https://i.pinimg.com/736x/88/a5/23/88a523523f21ed102bd68d2add317ed5.jpg",
    "https://i.pinimg.com/736x/10/f9/49/10f94912ec553621e064716ae3026447.jpg",
    "https://i.pinimg.com/736x/ee/96/af/ee96afc0635e1f531db8ec9ec181fcc3.jpg",
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

  // Task Management Data
  const taskManagementData = [
    { 
      id: 1, 
      title: "Design System Migration", 
      assignee: "David Wilson", 
      assigneeAvatar: avatarUrls[3],
      priority: "high", 
      status: "in-progress", 
      dueDate: "2024-12-15", 
      progress: 65,
      project: "UX Revamp",
      estimatedHours: 40,
      loggedHours: 26
    },
    { 
      id: 2, 
      title: "API Integration Testing", 
      assignee: "Priya Sharma", 
      assigneeAvatar: avatarUrls[2],
      priority: "medium", 
      status: "review", 
      dueDate: "2024-12-10", 
      progress: 90,
      project: "Backend Services",
      estimatedHours: 25,
      loggedHours: 22
    },
    { 
      id: 3, 
      title: "Mobile App Redesign", 
      assignee: "Michael Chen", 
      assigneeAvatar: avatarUrls[1],
      priority: "high", 
      status: "todo", 
      dueDate: "2024-12-20", 
      progress: 10,
      project: "Mobile Development",
      estimatedHours: 60,
      loggedHours: 6
    },
    { 
      id: 4, 
      title: "Q4 Performance Reviews", 
      assignee: "Sarah Johnson", 
      assigneeAvatar: avatarUrls[0],
      priority: "medium", 
      status: "in-progress", 
      dueDate: "2024-12-05", 
      progress: 40,
      project: "HR Operations",
      estimatedHours: 35,
      loggedHours: 14
    },
    { 
      id: 5, 
      title: "Database Optimization", 
      assignee: "James Miller", 
      assigneeAvatar: avatarUrls[5],
      priority: "low", 
      status: "done", 
      dueDate: "2024-11-30", 
      progress: 100,
      project: "Infrastructure",
      estimatedHours: 20,
      loggedHours: 18
    },
    { 
      id: 6, 
      title: "Marketing Campaign Analytics", 
      assignee: "Emma Rodriguez", 
      assigneeAvatar: avatarUrls[4],
      priority: "medium", 
      status: "in-progress", 
      dueDate: "2024-12-12", 
      progress: 75,
      project: "Marketing",
      estimatedHours: 30,
      loggedHours: 22
    },
  ];

  // Payroll Processing Data
  const payrollProcessingData = [
    {
      id: 1,
      employee: "Sarah Johnson",
      employeeAvatar: avatarUrls[0],
      department: "HR",
      basicSalary: 8500,
      bonuses: 1200,
      deductions: 450,
      netSalary: 9250,
      status: "processed",
      paymentDate: "2024-12-01",
      taxAmount: 2100,
      insurance: 300,
      retirement: 850
    },
    {
      id: 2,
      employee: "Michael Chen",
      employeeAvatar: avatarUrls[1],
      department: "Engineering",
      basicSalary: 7800,
      bonuses: 1500,
      deductions: 380,
      netSalary: 8920,
      status: "pending",
      paymentDate: "2024-12-01",
      taxAmount: 1950,
      insurance: 280,
      retirement: 750
    },
    {
      id: 3,
      employee: "Priya Sharma",
      employeeAvatar: avatarUrls[2],
      department: "Engineering",
      basicSalary: 8200,
      bonuses: 1000,
      deductions: 420,
      netSalary: 8780,
      status: "processed",
      paymentDate: "2024-12-01",
      taxAmount: 2050,
      insurance: 320,
      retirement: 800
    },
    {
      id: 4,
      employee: "David Wilson",
      employeeAvatar: avatarUrls[3],
      department: "Design",
      basicSalary: 7500,
      bonuses: 800,
      deductions: 350,
      netSalary: 7950,
      status: "processing",
      paymentDate: "2024-12-01",
      taxAmount: 1875,
      insurance: 250,
      retirement: 700
    },
    {
      id: 5,
      employee: "Emma Rodriguez",
      employeeAvatar: avatarUrls[4],
      department: "Product",
      basicSalary: 8800,
      bonuses: 900,
      deductions: 480,
      netSalary: 9220,
      status: "pending",
      paymentDate: "2024-12-01",
      taxAmount: 2200,
      insurance: 350,
      retirement: 900
    },
    {
      id: 6,
      employee: "James Miller",
      employeeAvatar: avatarUrls[5],
      department: "Quality",
      basicSalary: 7200,
      bonuses: 600,
      deductions: 320,
      netSalary: 7480,
      status: "processed",
      paymentDate: "2024-12-01",
      taxAmount: 1800,
      insurance: 220,
      retirement: 650
    },
  ];

  // Recruitment Data
  const recruitmentData = [
    {
      id: 1,
      candidate: "Alex Thompson",
      candidateAvatar: candidateAvatars[0],
      position: "Senior Frontend Developer",
      stage: "final-interview",
      status: "active",
      appliedDate: "2024-11-15",
      experience: "5 years",
      location: "Remote",
      skills: ["React", "TypeScript", "Next.js"],
      rating: 4.8,
      nextStep: "Reference Check",
      nextStepDate: "2024-12-05"
    },
    {
      id: 2,
      candidate: "Maria Garcia",
      candidateAvatar: candidateAvatars[1],
      position: "UX Researcher",
      stage: "technical-test",
      status: "active",
      appliedDate: "2024-11-20",
      experience: "4 years",
      location: "New York",
      skills: ["User Research", "Figma", "Analytics"],
      rating: 4.5,
      nextStep: "Team Interview",
      nextStepDate: "2024-12-03"
    },
    {
      id: 3,
      candidate: "Robert Kim",
      candidateAvatar: candidateAvatars[2],
      position: "DevOps Engineer",
      stage: "offer",
      status: "offer-sent",
      appliedDate: "2024-11-10",
      experience: "6 years",
      location: "San Francisco",
      skills: ["AWS", "Kubernetes", "Terraform"],
      rating: 4.9,
      nextStep: "Offer Acceptance",
      nextStepDate: "2024-12-07"
    },
    {
      id: 4,
      candidate: "Sophie Williams",
      candidateAvatar: candidateAvatars[3],
      position: "Product Manager",
      stage: "screening",
      status: "active",
      appliedDate: "2024-11-25",
      experience: "7 years",
      location: "Boston",
      skills: ["Product Strategy", "Agile", "Data Analysis"],
      rating: 4.3,
      nextStep: "Hiring Manager Review",
      nextStepDate: "2024-12-02"
    },
    {
      id: 5,
      candidate: "David Lee",
      candidateAvatar: candidateAvatars[4],
      position: "Data Scientist",
      stage: "interview",
      status: "on-hold",
      appliedDate: "2024-11-18",
      experience: "4 years",
      location: "Remote",
      skills: ["Python", "Machine Learning", "SQL"],
      rating: 4.6,
      nextStep: "Technical Assessment",
      nextStepDate: "2024-12-04"
    },
    {
      id: 6,
      candidate: "Lisa Anderson",
      candidateAvatar: candidateAvatars[5],
      position: "Marketing Specialist",
      stage: "rejected",
      status: "inactive",
      appliedDate: "2024-11-12",
      experience: "3 years",
      location: "Chicago",
      skills: ["Digital Marketing", "SEO", "Content Strategy"],
      rating: 3.8,
      nextStep: "None",
      nextStepDate: "2024-11-28"
    },
  ];

  // Feature data for animation
  const features = [
    {
      id: "attendance",
      title: "Attendance Tracking",
      icon: <FaCalendarAlt />,
      description: "Real-time employee monitoring with intelligent insights",
      color: "emerald",
      fullDescription: "Track employee attendance in real-time with automated reporting, geolocation verification, and predictive analytics to identify patterns."
    },
    {
      id: "payroll",
      title: "Payroll Processing",
      icon: <FaMoneyBillWave />,
      description: "Automated salary calculations & tax compliance",
      color: "blue",
      fullDescription: "Streamline payroll processing with automated calculations, tax compliance, direct deposits, and comprehensive reporting."
    },
    {
      id: "tasks",
      title: "Task Management",
      icon: <FaTasks />,
      description: "Team collaboration & project tracking",
      color: "purple",
      fullDescription: "Manage projects, assign tasks, track progress, and facilitate team collaboration with integrated communication tools."
    },
    {
      id: "recruitment",
      title: "Recruitment",
      icon: <FaUserPlus />,
      description: "Streamlined hiring process with AI screening",
      color: "amber",
      fullDescription: "Accelerate hiring with AI-powered candidate screening, interview scheduling, and collaborative hiring workflows."
    }
  ];

  // Simple scroll detection - Only for medium/large screens
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current || !dashboardRef.current || isAnimating || isMobile) return;
      
      const headerBottom = headerRef.current.getBoundingClientRect().bottom;
      const dashboardTop = dashboardRef.current.getBoundingClientRect().top;
      const dashboardHeight = dashboardRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // When header is out of view AND dashboard is in view, show table entries
      if (headerBottom < 100 && dashboardTop < windowHeight * 0.8) {
        if (!isDashboardVisible) {
          setIsAnimating(true);
          setIsDashboardVisible(true);
          setTimeout(() => setIsAnimating(false), 800);
        }
        
        // Check if we're halfway through the dashboard section
        const scrollPosition = window.scrollY;
        const dashboardStart = dashboardRef.current.offsetTop;
        const scrollProgress = scrollPosition - dashboardStart;
        
        // When user has scrolled through 50% of the dashboard, trigger slide back
        if (scrollProgress > dashboardHeight * 0.5 && !shouldSlideBack) {
          setShouldSlideBack(true);
          // Add a short delay before starting the slide animation
          setTimeout(() => {
            setIsAnimating(true);
            // The actual slide animation will be triggered by shouldSlideBack state
            setTimeout(() => setIsAnimating(false), 800);
          }, 300); // 300ms delay before sliding starts
        }
      } else {
        if (isDashboardVisible) {
          setIsAnimating(true);
          setIsDashboardVisible(false);
          setShouldSlideBack(false); // Reset when leaving dashboard
          setTimeout(() => setIsAnimating(false), 800);
        }
      }
    };

    if (!isMobile) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDashboardVisible, isAnimating, isMobile, shouldSlideBack]);

  const activeFeatureData = features.find(f => f.id === activeFeature);
  
  // Get stats for active feature
  const getFeatureStats = () => {
    switch(activeFeature) {
      case "attendance":
        return [
          { label: "Active", value: attendanceData.length, icon: <FaUserCheck />, color: "emerald" },
          { label: "Present", value: attendanceData.filter(e => e.status === 'present').length, icon: <FaCheckCircle />, color: "emerald" },
          { label: "Late", value: attendanceData.filter(e => e.status === 'late').length, icon: <FaClock />, color: "amber" },
          { label: "Absent", value: attendanceData.filter(e => e.status === 'absent').length, icon: <FaUsers />, color: "red" },
        ];
      case "tasks":
        return [
          { label: "Total Tasks", value: taskManagementData.length, icon: <FaTasks />, color: "purple" },
          { label: "In Progress", value: taskManagementData.filter(t => t.status === 'in-progress').length, icon: <FaRegClock />, color: "blue" },
          { label: "Completed", value: taskManagementData.filter(t => t.status === 'done').length, icon: <FaCheckCircle />, color: "emerald" },
          { label: "Avg Progress", value: `${Math.round(taskManagementData.reduce((acc, task) => acc + task.progress, 0) / taskManagementData.length)}%`, icon: <FaPercentage />, color: "purple" },
        ];
      case "payroll":
        return [
          { label: "Total Employees", value: payrollProcessingData.length, icon: <FaUsers />, color: "blue" },
          { label: "Processed", value: payrollProcessingData.filter(p => p.status === 'processed').length, icon: <FaCheckCircle />, color: "emerald" },
          { label: "Pending", value: payrollProcessingData.filter(p => p.status === 'pending').length, icon: <FaClock />, color: "amber" },
          { label: "Total Payout", value: `$${payrollProcessingData.reduce((acc, p) => acc + p.netSalary, 0).toLocaleString()}`, icon: <FaMoneyCheckAlt />, color: "blue" },
        ];
      case "recruitment":
        return [
          { label: "Active Candidates", value: recruitmentData.filter(r => r.status === 'active').length, icon: <FaUserPlus />, color: "amber" },
          { label: "Offers Sent", value: recruitmentData.filter(r => r.stage === 'offer').length, icon: <FaFileInvoice />, color: "emerald" },
          { label: "In Interviews", value: recruitmentData.filter(r => r.stage === 'interview' || r.stage === 'final-interview').length, icon: <FaBusinessTime />, color: "blue" },
          { label: "Avg Rating", value: `${(recruitmentData.reduce((acc, r) => acc + r.rating, 0) / recruitmentData.length).toFixed(1)}`, icon: <FaStar />, color: "amber" },
        ];
      default:
        return [];
    }
  };

  // Floating entry positions around the headline
  const floatingEntryPositions = [
    { top: "15%", left: "5%", rotation: -5 },
    { top: "25%", right: "5%", rotation: 5 },
    { top: "50%", left: "2%", rotation: -3 },
    { top: "60%", right: "2%", rotation: 3 },
    { top: "75%", left: "8%", rotation: -2 },
    { top: "85%", right: "8%", rotation: 2 },
  ];

  return (
    <>    
      {/* Hero Section */}
      <header 
        ref={headerRef}
        className="w-full flex flex-col justify-center items-center bg-gradient-to-b from-white via-emerald-50/30 to-teal-50/20 pt-8 md:pt-12 pb-16 md:pb-20 px-4 overflow-hidden relative min-h-screen md:min-h-[80vh]"
      >
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-48 md:w-72 h-48 md:h-72 bg-emerald-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        
        {/* All Floating Entries around the headline - Hidden on mobile */}
        {!isDashboardVisible && !isMobile && (
          <div className="absolute inset-0 z-30 pointer-events-none hidden md:block">
            {attendanceData.map((employee, index) => {
              const position = floatingEntryPositions[index];
              return (
                <div
                  key={employee.id}
                  className={`fixed floating-entry-card hidden lg:block`}
                  style={{
                    top: position.top,
                    left: position.left,
                    right: position.right,
                    '--start-rotation': `${position.rotation * 2}deg`,
                    '--end-rotation': `${position.rotation}deg`,
                    animation: shouldSlideBack 
                      ? `slideToDashboard 1s ease-out ${index * 0.1}s forwards`
                      : isDashboardVisible 
                      ? `floatOut 0.8s ease-out ${(attendanceData.length - index - 1) * 0.1}s forwards`
                      : `floatIn 0.8s ease-out ${index * 0.1}s forwards`,
                    opacity: shouldSlideBack ? 1 : (isDashboardVisible ? 0 : 1),
                    animationDelay: shouldSlideBack 
                      ? `${index * 0.1}s`
                      : isDashboardVisible 
                      ? `${(attendanceData.length - index - 1) * 0.1}s`
                      : `${index * 0.1}s`,
                  } as React.CSSProperties}
                >
                  <div 
                    className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-emerald-200/50 border border-emerald-100 p-4 w-56 transform hover:scale-105 hover:shadow-emerald-300/70 transition-all duration-300"
                    style={{
                      transform: `rotate(${position.rotation}deg)`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="size-10 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                        <img 
                          src={employee.avatar} 
                          alt={employee.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{employee.name}</p>
                        <p className="text-xs text-gray-500 truncate">{employee.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <FaClock className="size-3 text-emerald-500" />
                        <span className="text-gray-700">{employee.timeIn}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        employee.status === 'present' 
                          ? 'bg-emerald-100 text-emerald-700'
                          : employee.status === 'late'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {employee.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        {/* Main Content */}
        <div className="w-full max-w-6xl flex flex-col justify-center items-center relative z-40">
          
          {/* Badge */}
          <div className="mb-6 mt-6 md:mt-10 p-4">
            <div className="inline-flex items-center px-4 md:px-6 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50">
              <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                🎯 TRUSTED BY 500+ HR TEAMS WORLDWIDE
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-6 relative px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent block">
                AI-Powered Human Operations OS 
              </span>
              <span className="bg-gradient-to-r from-cyan-700 via-emerald-600 to-teal-500 bg-clip-text text-transparent animate-gradient block mt-2 md:mt-4">
                For Modern Teams
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-3xl leading-relaxed md:leading-10 px-4">
            Unify HR, payroll, tasks, projects, performance, digital ID, and smart calendar - so your
            company runs end-to-end in one intelligent workspace.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 px-4">
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-base md:text-xl hover:shadow-md hover:shadow-emerald-300/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 md:space-x-3 group relative overflow-hidden w-full sm:w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" 
                style={{ 
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s infinite linear'
                }}></div>
              <span className="relative">Start Free Trial</span>
              <FaRocket className="size-4 group-hover:translate-x-1 transition-transform duration-300 relative" />
            </button>
            
            <button className="px-4 py-2 rounded-full bg-white text-gray-800 font-semibold text-base md:text-lg border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 md:space-x-3 group w-full sm:w-auto">
              <span>Book a Demo</span>
              <FaUsers className="size-4 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Notice for Dashboard */}
          {isMobile && (
            <div className="mt-8 px-4 max-w-md">
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
                <p className="text-sm text-emerald-700 text-center">
                  <span className="font-semibold">📱 Dashboard View:</span> For the full interactive dashboard experience, please use a tablet or desktop device.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Decorative floating elements - Hidden on mobile */}
        {!isMobile && (
          <>
            <div className="absolute top-1/4 left-5 animate-float hidden md:block">
              <div className="w-4 h-4 bg-emerald-300/30 rounded-full"></div>
            </div>
            <div className="absolute bottom-1/3 right-8 animate-float delay-700 hidden md:block">
              <div className="w-6 h-6 bg-teal-400/20 rounded-full"></div>
            </div>
          </>
        )}
      </header>

      {/* Dashboard Section - Separate Section with Header */}
      <section 
        ref={dashboardRef}
        className={`w-full bg-gradient-to-b from-white to-gray-50/50 py-16 md:py-24 px-4 relative ${isMobile ? 'hidden' : ''}`}
      >
       
        {/* Section Header */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="text-center max-w-3xl mx-auto">
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 md:px-6 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-6">
              <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                🌟 LIVE DEMO DASHBOARD
              </span>
            </div>
            
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Experience Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Intelligent Dashboard
              </span>
            </h2>
            
            {/* Section Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed md:leading-9 max-w-2xl mx-auto">
              See how our AI-powered platform transforms HR operations in real-time. 
              <span className="font-medium text-emerald-600"> Explore interactive features</span> below to understand 
              how we streamline employee management for modern teams.
            </p>
          </div>
        </div>

        {/* Dashboard Container */}
        <div className="max-w-6xl mx-auto">
          {/* Feature Navigation Tabs */}
          <div className="mb-8 md:mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`px-4 md:px-5 py-2 md:py-3 rounded-full flex items-center gap-2 transition-all duration-300 text-sm md:text-base ${
                    activeFeature === feature.id
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200/50'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:text-gray-700 hover:shadow-md'
                  }`}
                >
                  <span className="text-base md:text-lg">{feature.icon}</span>
                  <span className="font-medium whitespace-nowrap">{feature.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Description */}
          <div className="mb-8 md:mb-10">
            <div className="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 rounded-2xl p-6 md:p-8 border border-emerald-100 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 md:gap-6">
                <div className={`p-3 md:p-4 rounded-xl bg-gradient-to-r from-${activeFeatureData?.color}-500 to-${activeFeatureData?.color}-600 text-white text-2xl md:text-3xl`}>
                  {activeFeatureData?.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{activeFeatureData?.title}</h3>
                  <p className="text-gray-600 md:text-lg leading-relaxed">
                    {activeFeatureData?.fullDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Container */}
          <div className="w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-emerald-100/50 border border-emerald-100 overflow-hidden">
            
            {/* Dashboard Header with Stats */}
            <div className={`bg-gradient-to-r from-${activeFeatureData?.color}-50 to-${activeFeatureData?.color}-100 p-6 md:p-8 border-b border-emerald-100 transition-all duration-500`}>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 md:gap-4 mb-3">
                    <div>
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Live Data Dashboard</h2>
                      <p className="text-gray-600 text-sm md:text-base mt-1">
                        Real-time monitoring and analytics for {activeFeatureData?.title.toLowerCase()}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Dynamic Stats Overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full lg:w-auto">
                  {getFeatureStats().map((stat, index) => (
                    <div 
                      key={index} 
                      className="bg-white/80 rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-100 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs md:text-sm text-gray-500">{stat.label}</p>
                          <p className={`text-lg md:text-2xl font-bold text-${stat.color}-600`}>
                            {stat.value}
                          </p>
                        </div>
                        <div className={`text-${stat.color}-500/30`}>
                          {stat.icon}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Dynamic Content Based on Active Feature */}
            <div className="p-4 md:p-6">
              
              {/* Attendance Dashboard */}
              {activeFeature === "attendance" && (
                <div className="space-y-4 md:space-y-6">
                  <div className="overflow-x-auto rounded-xl border border-gray-100 relative">
                    <table className="w-full min-w-[640px] md:min-w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Employee</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Role</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Time In</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Time Out</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Status</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {attendanceData.map((employee, index) => (
                          <tr 
                            key={employee.id} 
                            className="hover:bg-emerald-50/50 transition-colors duration-300"
                            style={{
                              animation: isDashboardVisible 
                                ? `slideIntoTable 0.8s ease-out ${index * 0.1}s forwards`
                                : `slideOutOfTable 0.8s ease-out ${(attendanceData.length - index - 1) * 0.1}s forwards`,
                              opacity: isDashboardVisible ? 1 : 0,
                              animationDelay: isDashboardVisible 
                                ? `${index * 0.1}s`
                                : `${(attendanceData.length - index - 1) * 0.1}s`,
                            }}
                          >
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <div className="flex items-center gap-2 md:gap-3">
                                <div className="size-8 md:size-10 rounded-full overflow-hidden border-2 border-white shadow-sm relative group">
                                  <img 
                                    src={employee.avatar} 
                                    alt={employee.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div>
                                  <p className="font-medium text-gray-800 text-sm md:text-base">{employee.name}</p>
                                  <p className="text-xs text-gray-500">ID: EMP{employee.id.toString().padStart(4, '0')}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <span className="text-gray-700 text-sm md:text-base">{employee.role}</span>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <div className="flex items-center gap-2">
                                <FaClock className="size-2 md:size-3 text-gray-400" />
                                <span className={`font-medium text-sm md:text-base ${employee.timeIn === '-' ? 'text-gray-400' : 'text-gray-700'}`}>
                                  {employee.timeIn}
                                </span>
                              </div>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <div className="flex items-center gap-2">
                                <FaClock className="size-2 md:size-3 text-gray-400" />
                                <span className={`font-medium text-sm md:text-base ${employee.timeOut === '-' ? 'text-gray-400' : 'text-gray-700'}`}>
                                  {employee.timeOut}
                                </span>
                              </div>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <span className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs font-medium ${
                                employee.status === 'present' 
                                  ? 'bg-emerald-100 text-emerald-700' 
                                  : employee.status === 'late'
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-red-100 text-red-700'
                              }`}>
                                {employee.status === 'present' && <FaCheckCircle className="size-2 md:size-3 mr-1" />}
                                <span className="capitalize">{employee.status}</span>
                              </span>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <button className="p-1 md:p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                                <FaEllipsisH className="size-3 md:size-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-lg md:rounded-xl border border-emerald-100">
                    <p className="text-xs md:text-sm text-gray-600 text-center sm:text-left">
                      <span className="font-semibold text-emerald-600">Attendance Summary:</span> {Math.round((attendanceData.filter(e => e.status === 'present').length / attendanceData.length) * 100)}% of employees are present today
                    </p>
                    <div className="flex gap-2 md:gap-3">
                      <button className="px-3 md:px-4 py-1.5 md:py-2 bg-white text-emerald-600 text-xs md:text-sm font-medium rounded-lg border border-emerald-200 hover:bg-emerald-50 transition-colors whitespace-nowrap">
                        Export Report
                      </button>
                      <button className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs md:text-sm font-medium rounded-lg hover:shadow-lg transition-all whitespace-nowrap">
                        Mark All Present
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Task Management Dashboard */}
              {activeFeature === "tasks" && (
                <div className="space-y-4 md:space-y-6">
                  <div className="overflow-x-auto rounded-xl border border-gray-100 relative">
                    <table className="w-full min-w-[640px] md:min-w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Task Title</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Assignee</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Priority</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Status</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Progress</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Due Date</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {taskManagementData.map((task, index) => (
                          <tr 
                            key={task.id} 
                            className="hover:bg-purple-50/50 transition-colors duration-300"
                          >
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <div>
                                <p className="font-medium text-gray-800 text-sm md:text-base">{task.title}</p>
                                <p className="text-xs text-gray-500">{task.project}</p>
                              </div>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <div className="flex items-center gap-2 md:gap-3">
                                <div className="size-8 md:size-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                  <img 
                                    src={task.assigneeAvatar} 
                                    alt={task.assignee}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <span className="text-gray-700 text-sm md:text-base">{task.assignee}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <span className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs font-medium ${
                                task.priority === 'high' 
                                  ? 'bg-red-100 text-red-700' 
                                  : task.priority === 'medium'
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-blue-100 text-blue-700'
                              }`}>
                                <span className="capitalize">{task.priority}</span>
                              </span>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <span className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs font-medium ${
                                task.status === 'done' 
                                  ? 'bg-emerald-100 text-emerald-700' 
                                  : task.status === 'in-progress'
                                  ? 'bg-blue-100 text-blue-700'
                                  : task.status === 'review'
                                  ? 'bg-purple-100 text-purple-700'
                                  : 'bg-gray-100 text-gray-700'
                              }`}>
                                <span className="capitalize">{task.status.replace('-', ' ')}</span>
                              </span>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <div className="flex items-center gap-3">
                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" 
                                    style={{ width: `${task.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium text-gray-700">{task.progress}%</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <div className="flex items-center gap-2">
                                <FaRegCalendarCheck className="size-2 md:size-3 text-gray-400" />
                                <span className="text-gray-700 text-sm md:text-base">{task.dueDate}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <button className="p-1 md:p-2 text-gray-400 hover:text-purple-600 transition-colors">
                                <FaEllipsisH className="size-3 md:size-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="p-4 md:p-6 bg-gradient-to-r from-purple-50/50 to-indigo-50/50 rounded-lg md:rounded-xl border border-purple-100">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaChartLine className="text-purple-600" />
                        Project Overview
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Total Hours Logged</span>
                          <span className="font-semibold text-gray-800">
                            {taskManagementData.reduce((acc, task) => acc + task.loggedHours, 0)} hrs
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Average Progress</span>
                          <span className="font-semibold text-purple-600">
                            {Math.round(taskManagementData.reduce((acc, task) => acc + task.progress, 0) / taskManagementData.length)}%
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 md:p-6 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-lg md:rounded-xl border border-emerald-100">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaComments className="text-emerald-600" />
                        Quick Actions
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <button className="px-3 py-1.5 bg-white text-purple-600 text-xs font-medium rounded-lg border border-purple-200 hover:bg-purple-50 transition-colors">
                          Create Task
                        </button>
                        <button className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-medium rounded-lg hover:shadow-lg transition-all">
                          Generate Report
                        </button>
                        <button className="px-3 py-1.5 bg-white text-gray-700 text-xs font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                          Assign Resources
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Payroll Processing Dashboard */}
              {activeFeature === "payroll" && (
                <div className="space-y-4 md:space-y-6">
                  <div className="overflow-x-auto rounded-xl border border-gray-100 relative">
                    <table className="w-full min-w-[640px] md:min-w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Employee</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Department</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Basic Salary</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Bonuses</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Deductions</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Net Salary</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Status</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {payrollProcessingData.map((payroll, index) => (
                          <tr 
                            key={payroll.id} 
                            className="hover:bg-blue-50/50 transition-colors duration-300"
                          >
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <div className="flex items-center gap-2 md:gap-3">
                                <div className="size-8 md:size-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                  <img 
                                    src={payroll.employeeAvatar} 
                                    alt={payroll.employee}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <span className="text-gray-700 text-sm md:text-base">{payroll.employee}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <span className="text-gray-700 text-sm md:text-base">{payroll.department}</span>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <span className="font-medium text-gray-800">${payroll.basicSalary.toLocaleString()}</span>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <span className="font-medium text-emerald-600">+${payroll.bonuses.toLocaleString()}</span>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <span className="font-medium text-red-600">-${payroll.deductions.toLocaleString()}</span>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <span className="font-bold text-gray-900">${payroll.netSalary.toLocaleString()}</span>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <span className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs font-medium ${
                                payroll.status === 'processed' 
                                  ? 'bg-emerald-100 text-emerald-700' 
                                  : payroll.status === 'processing'
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'bg-amber-100 text-amber-700'
                              }`}>
                                <span className="capitalize">{payroll.status}</span>
                              </span>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <button className="p-1 md:p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                <FaEllipsisH className="size-3 md:size-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                    <div className="p-4 md:p-6 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-lg md:rounded-xl border border-blue-100">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaMoneyCheckAlt className="text-blue-600" />
                        Total Payout
                      </h4>
                      <div className="text-3xl font-bold text-gray-900">
                        ${payrollProcessingData.reduce((acc, p) => acc + p.netSalary, 0).toLocaleString()}
                      </div>
                      <p className="text-sm text-gray-600 mt-2">This month's total payroll payout</p>
                    </div>
                    
                    <div className="p-4 md:p-6 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-lg md:rounded-xl border border-emerald-100">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaFileInvoice className="text-emerald-600" />
                        Tax Summary
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Total Taxes</span>
                          <span className="font-semibold text-red-600">
                            ${payrollProcessingData.reduce((acc, p) => acc + p.taxAmount, 0).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Retirement</span>
                          <span className="font-semibold text-blue-600">
                            ${payrollProcessingData.reduce((acc, p) => acc + p.retirement, 0).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 md:p-6 bg-gradient-to-r from-purple-50/50 to-indigo-50/50 rounded-lg md:rounded-xl border border-purple-100">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaBriefcase className="text-purple-600" />
                        Quick Actions
                      </h4>
                      <div className="flex flex-col gap-2">
                        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all">
                          Process Payroll
                        </button>
                        <button className="px-4 py-2 bg-white text-blue-600 text-sm font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                          Export Reports
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Recruitment Dashboard */}
              {activeFeature === "recruitment" && (
                <div className="space-y-4 md:space-y-6">
                  <div className="overflow-x-auto rounded-xl border border-gray-100 relative">
                    <table className="w-full min-w-[640px] md:min-w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Candidate</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Position</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Stage</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Experience</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Rating</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Next Step</th>
                          <th className="text-left py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-semibold text-gray-600">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {recruitmentData.map((candidate, index) => (
                          <tr 
                            key={candidate.id} 
                            className="hover:bg-amber-50/50 transition-colors duration-300"
                          >
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <div className="flex items-center gap-2 md:gap-3">
                                <div className="size-8 md:size-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                  <img 
                                    src={candidate.candidateAvatar} 
                                    alt={candidate.candidate}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-800 text-sm md:text-base">{candidate.candidate}</p>
                                  <p className="text-xs text-gray-500">{candidate.location}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <span className="text-gray-700 text-sm md:text-base">{candidate.position}</span>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <span className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs font-medium ${
                                candidate.stage === 'offer' 
                                  ? 'bg-emerald-100 text-emerald-700' 
                                  : candidate.stage === 'final-interview'
                                  ? 'bg-blue-100 text-blue-700'
                                  : candidate.stage === 'interview'
                                  ? 'bg-purple-100 text-purple-700'
                                  : candidate.stage === 'rejected'
                                  ? 'bg-red-100 text-red-700'
                                  : 'bg-amber-100 text-amber-700'
                              }`}>
                                <span className="capitalize">{candidate.stage.replace('-', ' ')}</span>
                              </span>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <span className="text-gray-700 text-sm md:text-base">{candidate.experience}</span>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  i < Math.floor(candidate.rating) ? (
                                    <FaStar key={i} className="size-3 md:size-4 text-amber-500" />
                                  ) : (
                                    <FaRegStar key={i} className="size-3 md:size-4 text-gray-300" />
                                  )
                                ))}
                                <span className="ml-1 text-sm font-medium text-gray-700">{candidate.rating}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <div className="flex items-center gap-2">
                                <FaRegCalendarCheck className="size-2 md:size-3 text-gray-400" />
                                <div>
                                  <p className="text-gray-700 text-sm">{candidate.nextStep}</p>
                                  <p className="text-xs text-gray-500">{candidate.nextStepDate}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4 md:py-4 md:px-6">
                              <div className="flex gap-1">
                                <button className="p-1 md:p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                  <FaPhone className="size-3 md:size-4" />
                                </button>
                                <button className="p-1 md:p-2 text-gray-400 hover:text-amber-600 transition-colors">
                                  <FaEnvelope className="size-3 md:size-4" />
                                </button>
                                <button className="p-1 md:p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                                  <FaEllipsisH className="size-3 md:size-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="p-4 md:p-6 bg-gradient-to-r from-amber-50/50 to-orange-50/50 rounded-lg md:rounded-xl border border-amber-100">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaGraduationCap className="text-amber-600" />
                        Skills Distribution
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {Array.from(new Set(recruitmentData.flatMap(c => c.skills))).slice(0, 6).map((skill, index) => (
                          <span key={index} className="px-3 py-1.5 bg-white text-amber-700 text-xs font-medium rounded-full border border-amber-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 md:p-6 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-lg md:rounded-xl border border-emerald-100">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaUserTie className="text-emerald-600" />
                        Recruitment Pipeline
                      </h4>
                      <div className="flex justify-between items-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-600">
                            {recruitmentData.filter(r => r.stage === 'screening' || r.stage === 'technical-test').length}
                          </div>
                          <div className="text-xs text-gray-600">Screening</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {recruitmentData.filter(r => r.stage === 'interview' || r.stage === 'final-interview').length}
                          </div>
                          <div className="text-xs text-gray-600">Interview</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">
                            {recruitmentData.filter(r => r.stage === 'offer').length}
                          </div>
                          <div className="text-xs text-gray-600">Offer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Dashboard Footer */}
            <div className="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 p-4 md:p-6 border-t border-emerald-100">
              <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-800">Ready to transform your HR operations?</h3>
                  <p className="text-gray-600 text-xs md:text-sm mt-1">Get started with our complete platform today</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
                  <button className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm md:text-base hover:shadow-lg transition-all duration-300 flex items-center gap-2 group justify-center">
                    <span>Start Free Trial</span>
                    <FaRocket className="group-hover:translate-x-1 transition-transform size-3 md:size-4" />
                  </button>
                  <button className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-white text-gray-800 font-semibold text-sm md:text-base border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 flex items-center gap-2 group justify-center">
                    <span>Schedule Demo</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform size-3 md:size-4 text-emerald-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeaderComponent