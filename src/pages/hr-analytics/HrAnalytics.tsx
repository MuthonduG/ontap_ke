import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  FaUsers,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
  FaClock,
  FaUserTimes,
  FaChartBar,
  FaRobot,
  FaBrain,
  FaMagic,
  FaShieldAlt,
  FaCogs,
  FaLightbulb,
  FaDatabase,
  FaSync,
  FaSearch,
  FaBell,
  FaChartArea,
  FaCrown,
  FaGem,
  FaStar,
  FaRocket,
  FaMicrochip,
  FaNetworkWired,
  FaCode,
  FaLock,
  FaHome,
  FaCogs as FaCogsIcon,
  FaChartPie,
  FaTools,
  FaHandHoldingUsd,
  FaComments,
  FaEnvelope,
  FaRobot as FaAi,
} from "react-icons/fa";
import {
  Line,
  Bar,
  Doughnut
} from "react-chartjs-2";
import { IoIosTrendingUp } from "react-icons/io";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import FooterComponent from "../../components/layout/footer/FooterComponent";
import { FaQuoteLeft } from "react-icons/fa6";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const HrAnalytics = () => {
  // State for animations and interactivity
  const [isInView, setIsInView] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState('intelligent');
  const [timeRange, setTimeRange] = useState('monthly');
  const [animatedValues, setAnimatedValues] = useState({
    payrollAccuracy: 0,
    timeSaved: 0,
    costReduction: 0,
    complianceScore: 0,
    predictionAccuracy: 0,
    employeeSatisfaction: 0
  });
  const location = useLocation();

  // Target values for animation
  const targetValues = {
    payrollAccuracy: 99.8,
    timeSaved: 65,
    costReduction: 28,
    complianceScore: 96.5,
    predictionAccuracy: 92.3,
    employeeSatisfaction: 4.7
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

  // Quick Navigation Links
  const quickNavSections = [
    { id: 'hero', label: 'Overview', icon: FaHome },
    { id: 'features', label: 'Features', icon: FaCogsIcon },
    { id: 'ai-capabilities', label: 'AI Capabilities', icon: FaRobot },
    { id: 'analytics', label: 'Analytics', icon: FaChartPie },
    { id: 'how-it-works', label: 'How It Works', icon: FaTools },
    { id: 'cost-savings', label: 'Cost Savings', icon: FaHandHoldingUsd },
    { id: 'testimonials', label: 'Testimonials', icon: FaComments },
    { id: 'cta', label: 'Get Started', icon: FaEnvelope },
  ];

  // Refs for intersection observer
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const aiCapabilitiesRef = useRef<HTMLDivElement>(null);
  const analyticsRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const costSavingsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Animation for counting numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues(prev => ({
        payrollAccuracy: Math.min(targetValues.payrollAccuracy, prev.payrollAccuracy + (targetValues.payrollAccuracy - prev.payrollAccuracy) * 0.1),
        timeSaved: Math.min(targetValues.timeSaved, prev.timeSaved + (targetValues.timeSaved - prev.timeSaved) * 0.1),
        costReduction: Math.min(targetValues.costReduction, prev.costReduction + (targetValues.costReduction - prev.costReduction) * 0.1),
        complianceScore: Math.min(targetValues.complianceScore, prev.complianceScore + (targetValues.complianceScore - prev.complianceScore) * 0.1),
        predictionAccuracy: Math.min(targetValues.predictionAccuracy, prev.predictionAccuracy + (targetValues.predictionAccuracy - prev.predictionAccuracy) * 0.1),
        employeeSatisfaction: Math.min(targetValues.employeeSatisfaction, prev.employeeSatisfaction + (targetValues.employeeSatisfaction - prev.employeeSatisfaction) * 0.1)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Intersection observer for animations - trigger immediately for hero
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Set hero to be immediately visible
    if (heroRef.current) {
      setIsInView(true);
    }

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (aiCapabilitiesRef.current) observer.observe(aiCapabilitiesRef.current);
    if (analyticsRef.current) observer.observe(analyticsRef.current);
    if (howItWorksRef.current) observer.observe(howItWorksRef.current);
    if (costSavingsRef.current) observer.observe(costSavingsRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (aiCapabilitiesRef.current) observer.unobserve(aiCapabilitiesRef.current);
      if (analyticsRef.current) observer.unobserve(analyticsRef.current);
      if (howItWorksRef.current) observer.unobserve(howItWorksRef.current);
      if (costSavingsRef.current) observer.unobserve(costSavingsRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  // Helper for scroll animations - always visible for hero
  const scrollAnimation = (delay: number, isHero: boolean = false) => ({
    opacity: isHero ? 1 : (isInView ? 1 : 0),
    transform: isHero ? 'translateY(0)' : (isInView ? 'translateY(0)' : 'translateY(20px)'),
    transition: `all 0.6s ease-out ${delay}s`
  });

  // Data for Payroll Analytics
  const payrollData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Payroll Cost ($)',
        data: [8500000, 8700000, 8900000, 9100000, 9300000, 9500000, 9700000, 9750000, 9800000, 9850000, 9870000, 9875000],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.3)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(16, 185, 129)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8
      },
      {
        label: 'Predicted ($)',
        data: [8550000, 8720000, 8910000, 9120000, 9340000, 9530000, 9710000, 9770000, 9820000, 9880000, 9900000, 9920000],
        borderColor: 'rgba(16, 185, 129, 0.6)',
        borderDash: [5, 5],
        backgroundColor: 'transparent',
        tension: 0.4,
        pointStyle: 'dash',
        pointRadius: 3
      }
    ]
  };

  // Data for Attendance Analytics
  const attendanceData = {
    labels: ['Engineering', 'Sales', 'Marketing', 'HR', 'Finance', 'Operations'],
    datasets: [
      {
        label: 'Attendance Rate (%)',
        data: [95.2, 93.8, 94.2, 96.5, 92.8, 94.5],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(59, 130, 246, 0.7)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(59, 130, 246, 0.9)',
          'rgba(59, 130, 246, 0.6)',
          'rgba(59, 130, 246, 0.8)'
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(59, 130, 246)',
          'rgb(59, 130, 246)',
          'rgb(59, 130, 246)',
          'rgb(59, 130, 246)',
          'rgb(59, 130, 246)'
        ],
        borderWidth: 2,
        borderRadius: 8
      },
      {
        label: 'Industry Average',
        data: [92.5, 91.8, 92.2, 93.5, 91.8, 92.5],
        backgroundColor: 'rgba(156, 163, 175, 0.4)',
        borderColor: 'rgb(156, 163, 175)',
        borderWidth: 2,
        borderRadius: 8,
        borderDash: [3, 3]
      }
    ]
  };

  // Data for Employee Sentiment
  const sentimentData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Satisfaction Score',
        data: [4.2, 4.3, 4.5, 4.7],
        borderColor: 'rgb(168, 85, 247)',
        backgroundColor: 'rgba(168, 85, 247, 0.3)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(168, 85, 247)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6
      },
      {
        label: 'Engagement Level',
        data: [78, 81, 84, 87],
        borderColor: 'rgb(14, 165, 233)',
        backgroundColor: 'rgba(14, 165, 233, 0.3)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(14, 165, 233)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6
      }
    ]
  };

  // Data for Turnover Predictions
  const turnoverData = {
    labels: ['Low Risk', 'Medium Risk', 'High Risk'],
    datasets: [
      {
        data: [68, 25, 7],
        backgroundColor: [
          'rgba(16, 185, 129, 0.9)',
          'rgba(245, 158, 11, 0.9)',
          'rgba(239, 68, 68, 0.9)'
        ],
        borderColor: [
          'rgb(16, 185, 129)',
          'rgb(245, 158, 11)',
          'rgb(239, 68, 68)'
        ],
        borderWidth: 3,
        hoverOffset: 15
      }
    ]
  };

  // Data for Cost Savings
  const savingsData = {
    labels: ['Process Automation', 'Error Reduction', 'Overtime Optimization', 'Compliance Avoidance'],
    datasets: [
      {
        label: 'Cost Savings ($K)',
        data: [45, 28, 32, 19],
        backgroundColor: [
          'rgba(34, 197, 94, 0.9)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(34, 197, 94, 0.9)',
          'rgba(34, 197, 94, 0.7)'
        ],
        borderColor: [
          'rgb(34, 197, 94)',
          'rgb(34, 197, 94)',
          'rgb(34, 197, 94)',
          'rgb(34, 197, 94)'
        ],
        borderWidth: 2,
        borderRadius: 8
      }
    ]
  };

  // Fixed Chart options with proper TypeScript types
  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: '#374151',
          font: {
            size: 12,
            weight: 'bold' as const
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        cornerRadius: 8,
        displayColors: true
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 11
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 11
          }
        }
      }
    },
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart' as const
    },
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 4,
        hoverRadius: 8
      }
    }
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: '#374151',
          font: {
            size: 12,
            weight: 'bold' as const
          },
          padding: 20,
          usePointStyle: true
        }
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        cornerRadius: 8,
        displayColors: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 11
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 11
          }
        }
      }
    },
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart' as const
    }
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right' as const,
        labels: {
          color: '#374151',
          font: {
            size: 12
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    },
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 1500
    }
  };

  // Platform Features
  const platformFeatures = [
    {
      id: 'intelligent',
      title: 'Intelligent Payroll Analytics',
      description: 'Our AI-powered platform analyzes payroll data in real-time, identifying patterns, detecting anomalies, and providing actionable insights to optimize workforce costs.',
      icon: <FaBrain />,
      color: 'from-emerald-500 to-teal-500',
      capabilities: [
        'Real-time payroll processing analytics',
        'Anomaly detection in salary distributions',
        'Cost optimization recommendations',
        'Automated compliance checks'
      ]
    },
    {
      id: 'predictive',
      title: 'Predictive Attendance Insights',
      description: 'Leverage machine learning algorithms to forecast attendance patterns, predict absenteeism, and optimize shift scheduling for maximum productivity.',
      icon: <FaMagic />,
      color: 'from-blue-500 to-cyan-500',
      capabilities: [
        'Attendance pattern forecasting',
        'Absenteeism prediction models',
        'Optimal shift scheduling',
        'Leave management analytics'
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Workforce Analytics',
      description: 'Comprehensive analytics dashboard providing deep insights into employee performance, engagement levels, and workforce optimization opportunities.',
      icon: <FaChartArea />,
      color: 'from-purple-500 to-pink-500',
      capabilities: [
        'Performance trend analysis',
        'Engagement scoring system',
        'Skill gap identification',
        'Succession planning analytics'
      ]
    },
    {
      id: 'compliance',
      title: 'Compliance & Risk Management',
      description: 'Automated compliance monitoring and risk assessment to ensure your organization stays compliant with labor laws and regulations.',
      icon: <FaShieldAlt />,
      color: 'from-amber-500 to-orange-500',
      capabilities: [
        'Real-time compliance monitoring',
        'Risk assessment scoring',
        'Audit trail generation',
        'Regulatory change alerts'
      ]
    }
  ];

  // AI Analytics Capabilities
  const aiCapabilities = [
    {
      id: 1,
      title: "Natural Language Processing",
      description: "Understand and analyze employee feedback, surveys, and communications to gauge sentiment and identify areas for improvement.",
      icon: <FaAi />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Sentiment analysis from employee feedback",
        "Automated survey response categorization",
        "Real-time communication monitoring",
        "Trend detection in employee conversations"
      ]
    },
    {
      id: 2,
      title: "Predictive Modeling",
      description: "Advanced machine learning models forecast employee turnover, predict hiring needs, and anticipate workforce trends.",
      icon: <FaMicrochip />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Turnover risk prediction (90% accuracy)",
        "Hiring demand forecasting",
        "Performance trajectory analysis",
        "Skill gap prediction models"
      ]
    },
    {
      id: 3,
      title: "Pattern Recognition",
      description: "Identify hidden patterns in workforce data that human analysis might miss, revealing optimization opportunities.",
      icon: <FaNetworkWired />,
      color: "from-emerald-500 to-teal-500",
      features: [
        "Anomaly detection in attendance patterns",
        "Correlation analysis between engagement & productivity",
        "Seasonal trend identification",
        "Cross-department performance patterns"
      ]
    },
    {
      id: 4,
      title: "Automated Decision Support",
      description: "AI-powered recommendations for hiring, promotions, training allocations, and workforce optimization strategies.",
      icon: <FaRocket />,
      color: "from-amber-500 to-orange-500",
      features: [
        "Intelligent hiring recommendation engine",
        "Promotion candidate identification",
        "Training program effectiveness analysis",
        "Resource allocation optimization"
      ]
    },
    {
      id: 5,
      title: "Real-time Analytics Engine",
      description: "Process massive amounts of HR data in real-time, providing instant insights and predictive alerts.",
      icon: <FaCode />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Real-time data processing",
        "Instant anomaly alerts",
        "Live dashboard updates",
        "Predictive alert generation"
      ]
    },
    {
      id: 6,
      title: "Privacy-Preserving AI",
      description: "Advanced encryption and anonymization techniques ensure data privacy while maintaining analytical accuracy.",
      icon: <FaLock />,
      color: "from-gray-700 to-gray-900",
      features: [
        "Differential privacy implementation",
        "Data anonymization algorithms",
        "Secure multi-party computation",
        "GDPR & CCPA compliance automation"
      ]
    }
  ];

  // Analytics Cards
  const analyticsCards = [
    {
      id: 1,
      title: "Payroll Accuracy",
      value: `${animatedValues.payrollAccuracy.toFixed(1)}%`,
      icon: <FaMoneyBillWave />,
      color: "from-emerald-500 to-teal-500",
      description: "Automated payroll processing with AI validation"
    },
    {
      id: 2,
      title: "Time Saved",
      value: `${animatedValues.timeSaved.toFixed(0)}%`,
      icon: <FaClock />,
      color: "from-blue-500 to-cyan-500",
      description: "Reduction in manual HR processes"
    },
    {
      id: 3,
      title: "Cost Reduction",
      value: `${animatedValues.costReduction.toFixed(0)}%`,
      icon: <IoIosTrendingUp />,
      color: "from-purple-500 to-pink-500",
      description: "Optimized workforce expenditure"
    },
    {
      id: 4,
      title: "Compliance Score",
      value: `${animatedValues.complianceScore.toFixed(1)}%`,
      icon: <FaShieldAlt />,
      color: "from-amber-500 to-orange-500",
      description: "Automated regulatory compliance"
    }
  ];

  // How It Works Steps
  const howItWorks = [
    {
      step: 1,
      title: "Data Integration",
      description: "Seamlessly connect with your existing HR systems, payroll software, and time-tracking tools. Our platform aggregates data from multiple sources in real-time.",
      icon: <FaDatabase />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      step: 2,
      title: "AI Analysis",
      description: "Advanced machine learning algorithms process the data, identifying patterns, trends, and anomalies that human analysis might miss.",
      icon: <FaBrain />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      step: 3,
      title: "Insight Generation",
      description: "Transform raw data into actionable insights with intuitive dashboards, predictive analytics, and automated reporting.",
      icon: <FaLightbulb />,
      color: "bg-amber-100 text-amber-600"
    },
    {
      step: 4,
      title: "Actionable Outcomes",
      description: "Receive recommendations, alerts, and automated actions to optimize your workforce management and drive business results.",
      icon: <FaCogs />,
      color: "bg-emerald-100 text-emerald-600"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "HR Director, TechCorp",
      quote: "This platform transformed how we analyze workforce data. We reduced payroll errors by 95% and saved 40 hours monthly on manual reporting.",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CFO, RetailPlus",
      quote: "The predictive analytics helped us optimize staffing costs by 28% while maintaining productivity. A game-changer for HR analytics.",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "VP Operations, HealthCare Inc",
      quote: "Compliance monitoring alone paid for the platform. Real-time alerts prevented potential violations and saved us from hefty fines.",
      avatar: "https://i.pravatar.cc/150?img=3"
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 overflow-hidden relative">
      {/* Quick Navigation (Fixed) */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-2 border border-emerald-200">
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
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              i % 3 === 0 ? 'bg-emerald-200/20' : 
              i % 3 === 1 ? 'bg-blue-200/20' : 'bg-purple-200/20'
            }`}
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="scroll-mt-24 max-w-7xl mx-auto px-4 mb-16 mt-16 relative z-10">
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 animate-float">
          <FaGem className="text-emerald-300/30 size-16" />
        </div>
        <div className="absolute bottom-40 left-40 animate-float" style={{ animationDelay: '1s' }}>
          <FaCrown className="text-amber-300/30 size-12" />
        </div>

        <div className="text-center mb-12 py-10" style={scrollAnimation(0.2, true)}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4 animate-pulse-glow">
            <FaChartLine className="text-emerald-600 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-semibold text-emerald-600">
              AI-POWERED HR ANALYTICS
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 py-6">
            Transform HR Data Into
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent py-4 animate-gradient">
              Strategic Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our AI-powered HR analytics platform turns complex workforce data into actionable intelligence, 
            helping you make informed decisions about payroll, attendance, compliance, and workforce optimization.
          </p>

          {/* Quick jump links */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {quickNavSections.slice(1).map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="px-3 py-1.5 bg-emerald-500/10 backdrop-blur-sm text-emerald-700 text-sm rounded-full hover:bg-emerald-500/20 transition-all flex items-center gap-2 border border-emerald-200"
              >
                <section.icon className="size-3" />
                {section.label}
              </button>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-200/50 transition-all hover:scale-105 active:scale-95 transform-gpu">
              Start Free Trial
            </button>
            <button className="px-8 py-3 rounded-xl bg-white border-2 border-emerald-600 text-emerald-600 font-semibold hover:bg-emerald-50 transition-all hover:scale-105 active:scale-95 transform-gpu">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* Platform Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyticsCards.map((card, index) => (
            <div
              key={card.id}
              className="relative group"
              style={scrollAnimation(0.3 + index * 0.1, true)}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 ${
                hoveredCard === card.id ? 'scale-105 border-emerald-300 shadow-2xl' : ''
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${card.color} text-white shadow-lg ${
                    hoveredCard === card.id ? 'animate-pulse scale-110' : ''
                  } transition-all duration-300`}>
                    {card.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    {card.value}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
                
                {/* Animated Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} id="features" className="scroll-mt-24 max-w-7xl mx-auto px-4 mb-20 relative z-10">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Advanced HR Analytics <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Capabilities</span>
          </h2>
        </div>
        
        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto leading-10">
            Conduct continuous, KPI-driven performance reviews linked directly to tasks, goals, and
            outcomes. Track productivity trends, departmental performance, appraisals, confirmations, and
            promotions with data-backed insights - eliminating subjective evaluations.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="mb-8" style={scrollAnimation(0.3)}>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {platformFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all transform-gpu hover:scale-105 active:scale-95 ${
                  activeFeature === feature.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-300 hover:border-emerald-300'
                }`}
              >
                {feature.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Active Feature Content */}
          {platformFeatures.map((feature) => (
            feature.id === activeFeature && (
              <div
                key={feature.id}
                className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                style={scrollAnimation(0.4)}
              >
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/3 text-center lg:text-left">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-4 shadow-lg animate-pulse-glow`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {feature.capabilities.map((capability, index) => (
                        <div
                          key={index}
                          className="bg-white p-4 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 transform-gpu hover:scale-105 group"
                          style={{
                            animationDelay: `${index * 0.1}s`,
                            animation: isInView ? 'slideInRight 0.5s ease-out forwards' : 'none',
                            opacity: 0
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                              {index === 0 && <FaSearch />}
                              {index === 1 && <FaBell />}
                              {index === 2 && <FaSync />}
                              {index === 3 && <FaChartLine />}
                            </div>
                            <span className="font-medium text-gray-800 group-hover:text-emerald-600 transition-colors">{capability}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* AI Analytics Capabilities Section */}
      <section ref={aiCapabilitiesRef} id="ai-capabilities" className="scroll-mt-24 max-w-7xl mx-auto px-4 mb-20">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Advanced AI <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Capabilities</span>
          </h2>
        </div>
        
        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cutting-edge artificial intelligence technologies powering our HR analytics platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((capability, index) => (
            <div
              key={capability.id}
              className="group relative"
              style={scrollAnimation(0.3 + index * 0.1)}
              onMouseEnter={() => setHoveredCard(capability.id + 100)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 ${
                hoveredCard === capability.id + 100 ? 'scale-105 border-purple-300' : ''
              }`}>
                {/* Animated Icon */}
                <div className={`mb-4 p-4 rounded-xl bg-gradient-to-r ${capability.color} text-white shadow-lg inline-block ${
                  hoveredCard === capability.id + 100 ? 'animate-bounce' : 'animate-pulse-glow'
                }`}>
                  {capability.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {capability.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {capability.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li 
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-700 transition-colors"
                      style={{
                        animationDelay: `${idx * 0.05}s`,
                        animation: hoveredCard === capability.id + 100 ? 'slideInRight 0.3s ease-out forwards' : 'none',
                        opacity: 0
                      }}
                    >
                      <FaStar className="text-yellow-400 text-xs" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Animated Hover Background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${capability.color.replace('500', '100')} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
                
                {/* Floating Particles on Hover */}
                {hoveredCard === capability.id + 100 && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute rounded-full bg-gradient-to-r ${capability.color} animate-spread`}
                        style={{
                          width: '4px',
                          height: '4px',
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics Showcase */}
      <section ref={analyticsRef} id="analytics" className="scroll-mt-24 max-w-7xl mx-auto px-4 mb-20 relative z-10">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Real-time Analytics <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Dashboard</span>
          </h2>
        </div>
        
        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interactive dashboards that bring your HR data to life with actionable insights
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="flex justify-end mb-6" style={scrollAnimation(0.3)}>
          <div className="inline-flex bg-white rounded-xl p-1 border border-gray-300 shadow-sm">
            {['daily', 'weekly', 'monthly', 'quarterly'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all transform-gpu hover:scale-105 ${
                  timeRange === range
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Charts Grid */}
        <div className="space-y-8" style={scrollAnimation(0.4)}>
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payroll Analytics */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform-gpu">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <FaMoneyBillWave className="text-emerald-600 animate-pulse" />
                    Payroll Cost Analysis
                  </h3>
                  <p className="text-sm text-gray-600">
                    Track payroll trends with AI-powered predictions
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">$9.87M</div>
                  <div className="text-sm text-emerald-600 flex items-center gap-1">
                    <FaArrowUp /> +3.1% from last month
                  </div>
                </div>
              </div>
              <div className="h-64">
                <Line data={payrollData} options={lineChartOptions as any} />
              </div>
              <div className="mt-4 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-emerald-700">AI Insight:</span> Predicted 2.5% increase in Q4 due to seasonal hiring patterns
                </p>
              </div>
            </div>

            {/* Attendance Analytics */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform-gpu">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <FaCalendarCheck className="text-blue-600 animate-pulse" />
                    Department Attendance
                  </h3>
                  <p className="text-sm text-gray-600">
                    Compare attendance rates against industry benchmarks
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">94.5%</div>
                  <div className="text-sm text-emerald-600 flex items-center gap-1">
                    <FaArrowUp /> +1.2% from last week
                  </div>
                </div>
              </div>
              <div className="h-64">
                <Bar data={attendanceData} options={barChartOptions as any} />
              </div>
              <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-blue-700">Insight:</span> Engineering department leads with 95.2% attendance rate
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Employee Sentiment */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform-gpu">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <FaUsers className="text-purple-600 animate-pulse" />
                    Employee Engagement
                  </h3>
                  <p className="text-sm text-gray-600">
                    Track satisfaction and engagement trends
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">4.7/5</div>
                  <div className="text-sm text-emerald-600 flex items-center gap-1">
                    <FaArrowUp /> +0.3 from last quarter
                  </div>
                </div>
              </div>
              <div className="h-64">
                <Line data={sentimentData} options={lineChartOptions as any} />
              </div>
              <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-purple-700">Trend:</span> Consistent improvement in both satisfaction and engagement scores
                </p>
              </div>
            </div>

            {/* Turnover Risk */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform-gpu">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <FaUserTimes className="text-rose-600 animate-pulse" />
                    Turnover Risk Assessment
                  </h3>
                  <p className="text-sm text-gray-600">
                    AI-powered risk prediction for employee retention
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">7%</div>
                  <div className="text-sm text-rose-600 flex items-center gap-1">
                    <FaArrowDown /> -0.5% from last month
                  </div>
                </div>
              </div>
              <div className="h-64 flex items-center justify-center">
                <div className="w-48 h-48">
                  <Doughnut data={turnoverData} options={pieChartOptions as any} />
                </div>
              </div>
              <div className="mt-4 p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border border-rose-100">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-rose-700">Alert:</span> 7 employees identified as high risk - recommended retention actions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howItWorksRef} id="how-it-works" className="scroll-mt-24 max-w-7xl mx-auto px-4 mb-20">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            How Our <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Platform Works</span>
          </h2>
        </div>
        
        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your HR operations in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((step, index) => (
            <div
              key={step.step}
              className="relative group"
              style={scrollAnimation(0.3 + index * 0.1)}
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 transform-gpu">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${step.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-300">0{step.step}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Animated Connector */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gray-300 group-hover:bg-emerald-300 transition-colors duration-300">
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Savings Section */}
      <section ref={costSavingsRef} id="cost-savings" className="scroll-mt-24 max-w-7xl mx-auto px-4 mb-20">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Quantifiable <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Cost Savings</span>
          </h2>
        </div>
        
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div style={scrollAnimation(0.3)}>
              <p className="text-gray-600 mb-6">
                Our platform delivers measurable ROI through intelligent workforce optimization and automated processes
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 transform-gpu hover:scale-105">
                  <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <FaMoneyBillWave />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Average annual savings</div>
                    <div className="text-2xl font-bold text-emerald-600">$124,000</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 transform-gpu hover:scale-105">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <FaClock />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Monthly time saved</div>
                    <div className="text-2xl font-bold text-blue-600">160 hours</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={scrollAnimation(0.4)}>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Cost Reduction Areas</h3>
                  <FaChartBar className="text-emerald-600 animate-pulse" />
                </div>
                <div className="h-64">
                  <Bar data={savingsData} options={barChartOptions as any} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} id="testimonials" className="scroll-mt-24 max-w-7xl mx-auto px-4 mb-20">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Trusted by <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">HR Leaders</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 transform-gpu group"
              style={scrollAnimation(0.3 + index * 0.1)}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-200 group-hover:border-emerald-300 transition-colors duration-300"
                />
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              
              {/* Quote Icon */}
              <FaQuoteLeft className="absolute top-4 right-4 text-emerald-200 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} id="cta" className="scroll-mt-24 max-w-4xl mx-auto px-4 mb-20">
        <div 
          className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 p-8 md:p-12 text-center relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
          style={scrollAnimation(0.3)}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-spin"
                style={{
                  width: `${Math.random() * 60 + 30}px`,
                  height: `${Math.random() * 60 + 30}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 15 + 10}s`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>

          {/* Floating Elements */}
          <div className="absolute top-4 left-4 animate-float">
            <FaChartLine className="text-white/30 size-8" />
          </div>
          <div className="absolute bottom-4 right-4 animate-float" style={{ animationDelay: '1s' }}>
            <FaBrain className="text-white/30 size-8" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
            <FaRobot className="text-white/30 size-6" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-pulse">
              Ready to Transform Your HR Analytics?
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Join 500+ organizations that have revolutionized their HR operations with our analytics platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-xl bg-white text-emerald-600 font-semibold hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl transform-gpu">
                Start 30-Day Free Trial
              </button>
              <button className="px-8 py-3 rounded-xl bg-emerald-700 text-white font-semibold hover:bg-emerald-800 hover:scale-105 active:scale-95 transition-all border border-emerald-600 shadow-lg hover:shadow-xl transform-gpu">
                Book a Personalized Demo
              </button>
            </div>
            <p className="text-emerald-200 text-sm mt-6">
              No credit card required • Full platform access • Expert onboarding support
            </p>
          </div>
        </div>
      </section>
    </div>
    <FooterComponent/>
  </>
  );
};

export default HrAnalytics;