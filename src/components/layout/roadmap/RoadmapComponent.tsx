import { useState, useEffect, useRef } from "react";
import { 
  FaBuilding, 
  FaCreditCard, 
  FaUsers, 
  FaCogs, 
  FaChartLine, 
  FaCheckCircle,
  FaArrowRight,
  FaRegClock,
  FaPlay,
  FaPause
} from "react-icons/fa";

const RoadmapComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const playIntervalRef = useRef<number | null>(null);

  const roadmapSteps = [
    {
      id: 1,
      title: "Institutional Signup",
      description: "Create your organization account with basic company details and verification",
      icon: <FaBuilding className="size-6" />,
      color: "emerald",
      duration: "2 minutes",
      features: [
        "Organization verification",
        "Admin account setup",
        "Security configuration",
        "Initial team setup"
      ],
      status: "completed"
    },
    {
      id: 2,
      title: "Choose Payment Plan",
      description: "Select the perfect plan based on your team size and requirements",
      icon: <FaCreditCard className="size-6" />,
      color: "blue",
      duration: "3 minutes",
      features: [
        "Plan comparison",
        "Team size assessment",
        "Feature selection",
        "Billing setup"
      ],
      status: "completed"
    },
    {
      id: 3,
      title: "Add Employees & Staff",
      description: "Onboard your team members with bulk import or individual invites",
      icon: <FaUsers className="size-6" />,
      color: "purple",
      duration: "5-10 minutes",
      features: [
        "Bulk CSV import",
        "Individual invitations",
        "Role assignment",
        "Department setup"
      ],
      status: "active"
    },
    {
      id: 4,
      title: "Manage Staff & Resources",
      description: "Configure attendance, leave policies, and resource allocation",
      icon: <FaCogs className="size-6" />,
      color: "amber",
      duration: "15 minutes",
      features: [
        "Attendance rules",
        "Leave policies",
        "Shift management",
        "Resource allocation"
      ],
      status: "upcoming"
    },
    {
      id: 5,
      title: "Analytics & Optimization",
      description: "Monitor performance and optimize workforce management",
      icon: <FaChartLine className="size-6" />,
      color: "teal",
      duration: "Ongoing",
      features: [
        "Real-time analytics",
        "Performance reports",
        "Cost optimization",
        "Predictive insights"
      ],
      status: "upcoming"
    }
  ];

  // Calculate positions along the curve
  const calculateCardPositions = () => {
    const positions = [];
    const totalSteps = roadmapSteps.length;
    const curveHeight = 100; // Height of the curve in pixels
    const containerWidth = 100; // Percentage width
    
    for (let i = 0; i < totalSteps; i++) {
      // Calculate x position (equally spaced with padding)
      const x = (i / (totalSteps - 1)) * 80 + 10; // 10% padding on each side
      
      // Calculate y position using a sine wave for alternating pattern
      // This creates the curved effect
      const angle = (i / (totalSteps - 1)) * Math.PI;
      const y = Math.sin(angle) * curveHeight;
      
      // Alternate between top and bottom positioning
      const isTop = i % 2 === 0;
      
      positions.push({
        x: `${x}%`,
        y: isTop ? `calc(50% - ${y}px - 100px)` : `calc(50% + ${Math.abs(y)}px + 60px)`,
        rotation: i === 0 || i === totalSteps - 1 ? "0deg" : 
                 i < totalSteps / 2 ? `${Math.sin(angle) * 2}deg` : 
                 `${Math.sin(angle) * -2}deg`
      });
    }
    
    return positions;
  };

  const cardPositions = calculateCardPositions();

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && isInView) {
      playIntervalRef.current = window.setInterval(() => {
        setActiveStep(prev => {
          const next = prev >= roadmapSteps.length - 1 ? 0 : prev + 1;
          setProgress((next + 1) * 20);
          return next;
        });
      }, 3000);
    } else if (playIntervalRef.current) {
      clearInterval(playIntervalRef.current);
    }

    return () => {
      if (playIntervalRef.current) {
        clearInterval(playIntervalRef.current);
      }
    };
  }, [isPlaying, isInView]);

  // Intersection Observer for scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (isPlaying) {
              setProgress((activeStep + 1) * 20);
            }
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (roadmapRef.current) {
      observer.observe(roadmapRef.current);
    }

    return () => {
      if (roadmapRef.current) {
        observer.unobserve(roadmapRef.current);
      }
    };
  }, [isPlaying, activeStep]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgress((index + 1) * 20);
    if (isPlaying) {
      setIsPlaying(false);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setActiveStep(prev => {
      const next = prev >= roadmapSteps.length - 1 ? 0 : prev + 1;
      setProgress((next + 1) * 20);
      return next;
    });
  };

  const handlePrev = () => {
    setActiveStep(prev => {
      const next = prev <= 0 ? roadmapSteps.length - 1 : prev - 1;
      setProgress((next + 1) * 20);
      return next;
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-emerald-500 bg-emerald-50";
      case "active": return "text-blue-500 bg-blue-50";
      case "upcoming": return "text-gray-400 bg-gray-50";
      default: return "text-gray-400 bg-gray-50";
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "emerald": return "bg-emerald-500";
      case "blue": return "bg-blue-500";
      case "purple": return "bg-purple-500";
      case "amber": return "bg-amber-500";
      case "teal": return "bg-teal-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div 
      ref={roadmapRef}
      className="w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden h-fit"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              🚀 USER JOURNEY
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
             The OnTap HRM 
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow our guided implementation process to get your workforce management system running in minutes
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-white to-gray-50 border border-emerald-200 hover:border-emerald-300 flex items-center gap-2 hover:shadow-md transition-all"
          >
            <FaArrowRight className="rotate-180" />
            <span>Previous</span>
          </button>
          
          <button
            onClick={handlePlayPause}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-200/50 flex items-center gap-2 hover:scale-105 transition-all"
          >
            {isPlaying ? (
              <>
                <FaPause />
                <span>Pause Journey</span>
              </>
            ) : (
              <>
                <FaPlay />
                <span>Play Journey</span>
              </>
            )}
          </button>
          
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-white to-gray-50 border border-emerald-200 hover:border-emerald-300 flex items-center gap-2 hover:shadow-md transition-all"
          >
            <span>Next</span>
            <FaArrowRight />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mb-16 mx-4">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
          <div className="absolute -top-2 left-0 w-full flex justify-between">
            {roadmapSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(index)}
                className={`relative w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                  index <= activeStep 
                    ? 'bg-white border-emerald-500 scale-125' 
                    : 'bg-white border-gray-300'
                } ${index === activeStep ? 'ring-4 ring-emerald-200' : ''}`}
              >
                <div className={`absolute inset-0 rounded-full animate-ping ${
                  index === activeStep ? 'bg-emerald-400' : 'hidden'
                }`}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Roadmap Container */}
        <div className="relative h-[600px] w-full mb-8">
          {/* Curved Connecting Line */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10%,50% C25%,25% 40%,75% 55%,50% C70%,25% 85%,75% 90%,50%"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10,5"
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="25%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="75%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#0d9488" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Roadmap Steps positioned along the curve */}
          {roadmapSteps.map((step, index) => {
            const position = cardPositions[index];
            const isActive = index === activeStep;
            
            return (
              <div
                key={step.id}
                onClick={() => handleStepClick(index)}
                className={`absolute cursor-pointer transition-all duration-500 w-64 ${
                  isActive 
                    ? 'scale-110 z-10' 
                    : index < activeStep
                    ? 'opacity-100'
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  left: position.x,
                  top: position.y,
                  transform: `translateX(-50%) rotate(${position.rotation})`
                }}
              >
                {/* Step Card */}
                <div className={`
                  relative rounded-2xl p-6 border-2 transition-all duration-300
                  ${isActive 
                    ? 'border-emerald-300 bg-gradient-to-br from-white to-emerald-50/30 shadow-2xl shadow-emerald-200/30' 
                    : index < activeStep
                    ? 'border-emerald-100 bg-gradient-to-br from-white to-gray-50 shadow-lg'
                    : 'border-gray-200 bg-gradient-to-br from-white/80 to-gray-50/80 shadow-md'
                  }
                  hover:shadow-xl hover:shadow-emerald-200/20 hover:border-emerald-300
                `}>
                  {/* Step Number */}
                  <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300 ${
                    index <= activeStep 
                      ? getIconColor(step.color)
                      : 'bg-gradient-to-br from-gray-400 to-gray-500'
                  }`}>
                    {step.id}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute -top-3 right-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getStatusColor(step.status)}`}>
                      {step.status === "completed" && <FaCheckCircle className="size-3" />}
                      {step.status === "active" && <FaRegClock className="size-3" />}
                      {step.status}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 pt-4">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      index <= activeStep 
                        ? `${getIconColor(step.color)}/10 text-${step.color}-600`
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {step.icon}
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className={`text-xl font-bold mb-2 transition-colors ${
                        index <= activeStep ? 'text-gray-800' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm transition-colors ${
                        index <= activeStep ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {step.description}
                      </p>
                    </div>

                    {/* Duration */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                      index <= activeStep 
                        ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      <FaRegClock className="size-3" />
                      {step.duration}
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      <span className="text-xs font-semibold text-gray-500 uppercase">Features:</span>
                      <ul className="space-y-1">
                        {step.features.map((feature, idx) => (
                          <li 
                            key={idx} 
                            className={`text-sm flex items-center gap-2 transition-all ${
                              index <= activeStep 
                                ? 'text-gray-700' 
                                : 'text-gray-400'
                            }`}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              index <= activeStep ? 'bg-emerald-400' : 'bg-gray-300'
                            }`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Active Step Indicator */}
                  {isActive && (
                    <>
                      <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 animate-ping"></div>
                    </>
                  )}

                  {/* Connection line to the curve */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-10 transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-50'
                  }`} style={{
                    top: index % 2 === 0 ? 'calc(100% + 4px)' : '-44px',
                    background: isActive 
                      ? 'linear-gradient(to bottom, #10b981, #3b82f6)' 
                      : 'linear-gradient(to bottom, #d1d5db, #9ca3af)'
                  }}>
                    <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${isActive ? 'bg-emerald-500' : 'bg-gray-400'}`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout (stacked cards) - fallback */}
        <div className="md:hidden space-y-8">
          {roadmapSteps.map((step, index) => (
            <div
              key={step.id}
              onClick={() => handleStepClick(index)}
              className={`relative cursor-pointer transition-all duration-500 transform ${
                index === activeStep 
                  ? 'scale-105 z-10' 
                  : index < activeStep
                  ? 'opacity-100'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              {/* Step Card */}
              <div className={`
                relative rounded-2xl p-6 border-2 transition-all duration-300
                ${index === activeStep 
                  ? 'border-emerald-300 bg-gradient-to-br from-white to-emerald-50/30 shadow-2xl shadow-emerald-200/30' 
                  : index < activeStep
                  ? 'border-emerald-100 bg-gradient-to-br from-white to-gray-50 shadow-lg'
                  : 'border-gray-200 bg-gradient-to-br from-white/80 to-gray-50/80 shadow-md'
                }
                hover:shadow-xl hover:shadow-emerald-200/20 hover:border-emerald-300
              `}>
                {/* Step Number */}
                <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300 ${
                  index <= activeStep 
                    ? getIconColor(step.color)
                    : 'bg-gradient-to-br from-gray-400 to-gray-500'
                }`}>
                  {step.id}
                </div>

                {/* Status Badge */}
                <div className="absolute -top-3 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getStatusColor(step.status)}`}>
                    {step.status === "completed" && <FaCheckCircle className="size-3" />}
                    {step.status === "active" && <FaRegClock className="size-3" />}
                    {step.status}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 pt-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    index <= activeStep 
                      ? `${getIconColor(step.color)}/10 text-${step.color}-600`
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {step.icon}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className={`text-xl font-bold mb-2 transition-colors ${
                      index <= activeStep ? 'text-gray-800' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm transition-colors ${
                      index <= activeStep ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                    index <= activeStep 
                      ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <FaRegClock className="size-3" />
                    {step.duration}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <span className="text-xs font-semibold text-gray-500 uppercase">Features:</span>
                    <ul className="space-y-1">
                      {step.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className={`text-sm flex items-center gap-2 transition-all ${
                            index <= activeStep 
                              ? 'text-gray-700' 
                              : 'text-gray-400'
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            index <= activeStep ? 'bg-emerald-400' : 'bg-gray-300'
                          }`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Active Step Indicator */}
                {index === activeStep && (
                  <>
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 animate-ping"></div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold shadow-lg">
                        Current Step
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Connection Arrow for Mobile */}
              {index < roadmapSteps.length - 1 && (
                <div className="flex justify-center mt-4 mb-2">
                  <FaArrowRight className="text-emerald-400 size-6 animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapComponent;