import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { 
  FaCreditCard,  
  FaPaypal, 
  FaMoneyCheckAlt, 
  FaShieldAlt,
  FaUsers,
  FaRobot,
  FaCheckCircle,
  FaChevronRight,
  FaStar,
  FaGlobe,
  FaLock,
  FaSync,
  FaCalculator,
  FaFileInvoice,
  FaChartBar,
  FaFileUpload,
  FaHandshake,
  FaSearch,
  FaWallet,
  FaPiggyBank,
  FaChartPie,
  FaEyeSlash,
  FaKey,
  FaServer,
  FaExchangeAlt,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaHistory
} from "react-icons/fa";
import { PiPiggyBankBold } from "react-icons/pi";
import { MdOutlineInventory2} from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import FooterComponent from "../../components/layout/footer/FooterComponent";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [activeAssetTab, setActiveAssetTab] = useState('tracking');
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [salaryAllocation, setSalaryAllocation] = useState([
    { id: 1, name: 'Primary Account', percentage: 60, color: 'from-emerald-500 to-teal-500' },
    { id: 2, name: 'Savings', percentage: 20, color: 'from-emerald-600 to-teal-600' },
    { id: 3, name: 'Investment', percentage: 10, color: 'from-emerald-700 to-teal-700' },
    { id: 4, name: 'Charity', percentage: 5, color: 'from-emerald-800 to-teal-800' },
    { id: 5, name: 'Personal Project', percentage: 5, color: 'from-emerald-900 to-teal-900' }
  ]);
  const location = useLocation();

  // Interactive demo states
  const [assetCount, setAssetCount] = useState(0);
  const [claimsProcessed, setClaimsProcessed] = useState(0);
  const [reimbursementTime, setReimbursementTime] = useState(0);

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

  // Animated counters
  useEffect(() => {
    const assetInterval = setInterval(() => {
      setAssetCount(prev => prev < 1250 ? prev + 25 : 1250);
    }, 100);

    const claimsInterval = setInterval(() => {
      setClaimsProcessed(prev => prev < 890 ? prev + 17 : 890);
    }, 100);

    const timeInterval = setInterval(() => {
      setReimbursementTime(prev => prev < 3.2 ? prev + 0.1 : 3.2);
    }, 100);

    return () => {
      clearInterval(assetInterval);
      clearInterval(claimsInterval);
      clearInterval(timeInterval);
    };
  }, []);

  // Scroll to section programmatically
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without page reload
      window.history.pushState({}, '', `#${sectionId}`);
    }
  };

  // Pricing Plans
  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started with HR automation',
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        'Up to 10 employees',
        'Basic payroll processing',
        'Attendance tracking',
        'Leave management',
        'Email support',
        'Standard compliance'
      ],
      highlighted: false,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'For growing businesses needing comprehensive HR solutions',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Up to 50 employees',
        'Advanced payroll processing',
        'Performance management',
        'Employee engagement tools',
        'Priority support',
        'Advanced compliance',
        'Basic analytics',
        'API access'
      ],
      highlighted: true,
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete HR suite for large organizations with complex needs',
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        'Unlimited employees',
        'Full payroll automation',
        'AI-powered analytics',
        'Custom integrations',
        '24/7 dedicated support',
        'Full compliance suite',
        'Advanced reporting',
        'Custom workflows',
        'On-premise deployment',
        'SLA guarantee'
      ],
      highlighted: false,
      color: 'from-emerald-700 to-teal-700'
    }
  ];

  // Payment Gateways
  const paymentGateways = [
    { name: 'Bank Transfer', icon: PiPiggyBankBold, color: 'from-emerald-500 to-teal-500', description: 'Direct bank transfers', status: 'active' },
    { name: 'Credit Card', icon: FaCreditCard, color: 'from-emerald-600 to-teal-600', description: 'Visa, MasterCard, Amex', status: 'active' },
    { name: 'PayPal', icon: FaPaypal, color: 'from-emerald-700 to-teal-700', description: 'Secure PayPal payments', status: 'active' },
    { name: 'Stripe', icon: FaMoneyCheckAlt, color: 'from-emerald-800 to-teal-800', description: 'Global payment processing', status: 'active' },
    { name: 'Mobile Money', icon: FaGlobe, color: 'from-emerald-900 to-teal-900', description: 'M-Pesa, Airtel Money', status: 'coming-soon' }
  ];

  // Payroll Features
  const payrollFeatures = [
    {
      title: 'Automated Payroll Processing',
      description: 'Calculate salaries, deductions, and taxes automatically',
      icon: FaCalculator,
      features: ['Auto-calculation', 'Tax compliance', 'Direct deposit', 'Payroll reporting']
    },
    {
      title: 'Multiple Payment Methods',
      description: 'Support for various payment gateways and bank integrations',
      icon: PiPiggyBankBold,
      features: ['Bank transfers', 'Credit cards', 'Digital wallets', 'International payments']
    },
    {
      title: 'Tax & Compliance',
      description: 'Automated tax calculations and compliance reporting',
      icon: FaFileInvoice,
      features: ['Tax filing', 'W-2 generation', 'Compliance alerts', 'Audit trails']
    },
    {
      title: 'Real-time Reporting',
      description: 'Comprehensive payroll analytics and insights',
      icon: FaChartBar,
      features: ['Live dashboards', 'Custom reports', 'Export to Excel', 'Analytics API']
    }
  ];

  // Asset Management Features
  const assetManagementFeatures = [
    {
      id: 'tracking',
      title: 'Real-time Asset Tracking',
      icon: FaSearch,
      description: 'Monitor asset location and status in real-time',
      features: ['GPS tracking', 'QR code scanning', 'Status updates', 'Location history']
    },
    {
      id: 'lifecycle',
      title: 'Lifecycle Management',
      icon: FaSync,
      description: 'Track assets from procurement to retirement',
      features: ['Procurement records', 'Maintenance logs', 'Depreciation tracking', 'Disposal records']
    },
    {
      id: 'integration',
      title: 'HR Integration',
      icon: FaUsers,
      description: 'Seamless integration with onboarding/offboarding',
      features: ['Auto-assignment', 'Return tracking', 'Condition checks', 'Digital signatures']
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: IoShieldCheckmarkOutline,
      description: 'Ensure asset protection and regulatory compliance',
      features: ['Access control', 'Audit trails', 'Compliance reports', 'Data encryption']
    }
  ];

  // Claims Process Steps
  const claimsProcess = [
    {
      step: 1,
      title: 'Digital Submission',
      icon: FaFileUpload,
      description: 'Employees submit claims via mobile app or web portal',
      features: ['Photo upload', 'OCR receipt scanning', 'Auto-categorization', 'Instant validation']
    },
    {
      step: 2,
      title: 'Smart Approval',
      icon: FaClipboardCheck,
      description: 'Automated workflows with role-based approvals',
      features: ['Multi-level approval', 'Policy compliance checks', 'Real-time notifications', 'Escalation rules']
    },
    {
      step: 3,
      title: 'Fast Reimbursement',
      icon: GiReceiveMoney,
      description: 'Direct integration with payroll and banking systems',
      features: ['Auto-payment processing', 'Multiple payment methods', 'Real-time tracking', 'Instant notifications']
    },
    {
      step: 4,
      title: 'Audit & Reporting',
      icon: FaChartBar,
      description: 'Complete transparency with detailed audit trails',
      features: ['Real-time dashboards', 'Exportable reports', 'Compliance tracking', 'Analytics insights']
    }
  ];

  // Salary Plan Features
  const salaryPlanFeatures = [
    {
      icon: FaEyeSlash,
      title: 'Zero Management Visibility',
      description: 'Complete privacy for employees - management has no access to personal financial allocations',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: FaKey,
      title: 'Bank-Grade Encryption',
      description: 'Military-grade encryption ensures financial data remains private and secure',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      icon: FaServer,
      title: 'Multi-Account Allocation',
      description: 'Allocate salary across multiple accounts with real-time updates',
      color: 'from-emerald-700 to-teal-700'
    },
    {
      icon: FaExchangeAlt,
      title: 'Real-time Adjustments',
      description: 'Modify allocations anytime with instant effect on next payroll',
      color: 'from-emerald-800 to-teal-800'
    }
  ];

  // Benefits
  const benefits = [
    { icon: FaShieldAlt, title: 'Bank-Level Security', description: '256-bit encryption & secure data centers' },
    { icon: FaSync, title: 'Auto Updates', description: 'Always up-to-date with latest regulations' },
    { icon: FaUsers, title: 'Dedicated Support', description: '24/7 customer support & HR consulting' },
    { icon: FaRobot, title: 'AI-Powered', description: 'Smart recommendations & automation' }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'HR Manager',
      company: 'TechStart Inc.',
      content: 'Switched from manual payroll to OnTap HRM. Saved 20 hours monthly and eliminated errors.',
      rating: 5,
      plan: 'Professional'
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'Growth Ventures',
      content: 'The payroll automation paid for itself in 3 months. Integration with our bank was seamless.',
      rating: 5,
      plan: 'Enterprise'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Finance Director',
      company: 'Global Solutions',
      content: 'Compliance features saved us during our last audit. The peace of mind is invaluable.',
      rating: 4,
      plan: 'Starter'
    }
  ];

  // FAQ
  const faqs = [
    {
      question: 'How does payroll processing work?',
      answer: 'OnTap HRM automates your entire payroll process. Upload employee hours, our system calculates salaries, taxes, and deductions, then processes payments through integrated gateways.'
    },
    {
      question: 'Which payment gateways are supported?',
      answer: 'We support all major gateways including bank transfers, credit cards, PayPal, Stripe, and mobile money solutions like M-Pesa. New gateways are added regularly.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All plans include a 14-day free trial with full access to all features. No credit card required to start.'
    },
    {
      question: 'Can I switch plans later?',
      answer: 'Absolutely. You can upgrade, downgrade, or cancel anytime. Changes take effect at the start of your next billing cycle.'
    }
  ];

  // Quick Navigation Links
  const quickNavSections = [
    { id: 'pricing-plans', label: 'Pricing Plans', icon: FaCreditCard },
    { id: 'asset-management', label: 'Asset Mgmt', icon: MdOutlineInventory2 },
    { id: 'claims-reimbursements', label: 'Claims', icon: GiReceiveMoney },
    { id: 'salary-plan', label: 'Salary Plan', icon: FaWallet },
    { id: 'payment-gateways', label: 'Payment Gateways', icon: PiPiggyBankBold },
    { id: 'payroll', label: 'Payroll Features', icon: FaCalculator },
    { id: 'benefits', label: 'Benefits', icon: FaCheckCircle },
    { id: 'testimonials', label: 'Testimonials', icon: FaStar },
    { id: 'faq', label: 'FAQ', icon: FaRobot },
  ];

  // Calculate savings
  const calculateSavings = (monthly: number, annual: number) => {
    const monthlyTotal = monthly * 12;
    const annualTotal = annual * 12;
    const savings = monthlyTotal - annualTotal;
    const percentage = Math.round((savings / monthlyTotal) * 100);
    return { savings, percentage };
  };

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
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 animate-gradient">
        <div className="absolute inset-0 animate-pulse-orb ">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-300/10 rounded-full animate-pulse-orb"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-300/10 rounded-full animate-pulse-orb" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center py-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-6 animate-feature-tag">
              <FaCreditCard className="animate-spin-slow" />
              <span className="text-sm font-semibold">COMPLETE HR FINANCE SUITE</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-in-up">
              Comprehensive <span className="block text-emerald-100">HR & Finance Solutions</span>
            </h1>
            
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
              Everything you need for payroll, asset management, expense claims, and employee financial wellness. 
              All integrated into one powerful platform.
            </p>

            {/* Quick jump links */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
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
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-12 animate-buttons-stagger">
          <div className="bg-white rounded-full p-1 border border-emerald-200 inline-flex">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-emerald-700'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-emerald-700'
              }`}
            >
              Annual Billing
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <section id="pricing-plans" className="scroll-mt-24 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-text-reveal">
            Choose Your <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 animate-fade-in-delay">
            Select the perfect plan for your business needs. All plans include core HR features.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
              const savings = calculateSavings(plan.monthlyPrice, plan.annualPrice);
              
              return (
                <div 
                  key={plan.id}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.02] ${
                    plan.highlighted ? 'border-2 border-emerald-500 relative' : 'border border-emerald-100'
                  } animate-stagger-card ${
                    hoveredPlan === plan.id ? 'animate-card-lift' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                >
                  {plan.highlighted && (
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center py-2 font-semibold animate-pulse-glow">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline mb-2">
                        <span className="text-4xl font-bold text-gray-800 animate-growth">${price}</span>
                        <span className="text-gray-500 ml-2">/month</span>
                      </div>
                      {billingCycle === 'annual' && (
                        <div className="text-sm text-emerald-600 font-semibold">
                          Save ${savings.savings} ({savings.percentage}%) annually
                        </div>
                      )}
                      <div className="text-sm text-gray-500">
                        {billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'}
                      </div>
                    </div>
                    
                    <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-6 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:shadow-lg hover:scale-105'
                        : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:bg-gray-300'
                    } hover:animate-bounce`}>
                      Start Free Trial
                    </button>
                    
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <FaCheckCircle className={`h-5 w-5 mr-3 ${
                            plan.highlighted ? 'text-emerald-500 animate-improvement-pulse' : 'text-gray-400'
                          }`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Asset Management Section */}
        <section id="asset-management" className="scroll-mt-24 mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 mb-4 animate-pulse-glow">
              <MdOutlineInventory2 className="text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-600">ASSET MANAGEMENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Complete Asset <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Lifecycle Control</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Track company assets across their full lifecycle—from procurement and assignment to maintenance and recovery. 
              Integrated with onboarding, offboarding, digital IDs, and compliance to prevent asset loss and improve accountability.
            </p>
          </div>

          {/* Interactive Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:scale-105 transform-gpu">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white animate-pulse-glow">
                  <MdOutlineInventory2 className="size-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600 animate-count-up">{assetCount}</div>
                  <div className="text-sm text-gray-600">Assets Tracked</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:scale-105 transform-gpu">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white animate-pulse-glow">
                  <FaMoneyBillWave className="size-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">98%</div>
                  <div className="text-sm text-gray-600">Asset Recovery Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:scale-105 transform-gpu">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 text-white animate-pulse-glow">
                  <FaHistory className="size-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">40%</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Tabs */}
          <div className="mb-8">
    
            {/* Feature Content */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
              {assetManagementFeatures.map((feature) => (
                activeAssetTab === feature.id && (
                  <div key={feature.id} className="animate-fade-in">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white animate-pulse-glow">
                        <feature.icon className="size-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {feature.features.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:scale-105 transform-gpu animate-feature-reveal"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="font-semibold text-emerald-700">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Staff Claims & Reimbursements Section */}
        <section id="claims-reimbursements" className="scroll-mt-24 mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 mb-4 animate-pulse-glow">
              <GiReceiveMoney className="text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-600">STAFF CLAIMS & REIMBURSEMENTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Streamlined <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Expense Management</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Streamline employee expense claims with digital submissions, approvals, reimbursement 
              tracking, and audit-ready records. Integrated with payroll and finance workflows for 
              faster processing and transparency.
            </p>
          </div>

          {/* Interactive Process Visualization */}
          <div className="relative mb-12">
            {/* Process Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200 -translate-y-1/2 hidden lg:block animate-flow-line" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {claimsProcess.map((step, index) => (
                <div
                  key={step.step}
                  className="relative group animate-stagger-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setActiveFeature(`claim-${step.step}`)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  {/* Step Connector */}
                  <div className="absolute top-1/2 left-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transform -translate-y-1/2 -translate-x-1/2 hidden lg:block animate-pulse-glow" />
                  
                  <div className={`bg-white rounded-2xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-500 ${
                    activeFeature === `claim-${step.step}` ? 'scale-105 border-emerald-300' : 'border-emerald-100'
                  }`}>
                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white flex items-center justify-center font-bold shadow-lg animate-pulse-glow">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className={`mb-4 p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg inline-block ${
                      activeFeature === `claim-${step.step}` ? 'animate-bounce' : ''
                    }`}>
                      <step.icon className="size-6" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <FaCheckCircle className="text-emerald-500 text-xs animate-pulse" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 animate-count-up">{claimsProcessed}</div>
                <div className="text-emerald-100">Claims Processed Daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 animate-count-up">{reimbursementTime.toFixed(1)}</div>
                <div className="text-emerald-100">Avg. Days for Reimbursement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-emerald-100">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Salary Plan Section */}
        <section id="salary-plan" className="scroll-mt-24 mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 mb-4 animate-pulse-glow">
              <FaWallet className="text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-600">PRIVATE SALARY PLANNING</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Employee-First <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Salary Management</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              A private, employee-only salary planning feature that allows staff to securely allocate 
              their salary across multiple accounts and personal projects. Fully encrypted and 
              access-controlled, with zero visibility for management—promoting financial wellness and trust.
            </p>
          </div>

          {/* Interactive Salary Allocation Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
            {/* Left Side - Features */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
                <div className="space-y-6">
                  {salaryPlanFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300 hover:scale-105 transform-gpu animate-stagger-card"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                      onMouseEnter={() => setActiveFeature(`salary-${idx}`)}
                      onMouseLeave={() => setActiveFeature(null)}
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white animate-pulse-glow`}>
                        <feature.icon className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Interactive Allocation */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Interactive Salary Allocation</h3>
              <p className="text-gray-600 mb-6">
                Drag sliders to adjust salary distribution. Changes are private and only visible to the employee.
              </p>
              
              {/* Allocation Chart */}
              <div className="mb-8">
                <div className="h-8 rounded-full overflow-hidden flex mb-4">
                  {salaryAllocation.map((item, idx) => (
                    <div
                      key={item.id}
                      className={`h-full bg-gradient-to-r ${item.color} transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  ))}
                </div>
                
                {/* Sliders */}
                <div className="space-y-6">
                  {salaryAllocation.map((item) => (
                    <div key={item.id} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">{item.name}</span>
                        <span className="font-bold text-emerald-600">{item.percentage}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={item.percentage}
                        onChange={(e) => {
                          const newValue = parseInt(e.target.value);
                          const total = salaryAllocation.reduce((sum, i) => sum + i.percentage, 0) - item.percentage;
                          if (total + newValue <= 100) {
                            setSalaryAllocation(prev => 
                              prev.map(i => i.id === item.id ? { ...i, percentage: newValue } : i)
                            );
                          }
                        }}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-emerald-600 [&::-webkit-slider-thumb]:to-teal-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Badge */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-4 text-white">
                <div className="flex items-center gap-3">
                  <FaLock className="animate-pulse-glow" />
                  <div>
                    <div className="font-semibold">100% Employee Privacy Guaranteed</div>
                    <p className="text-sm text-emerald-100">Management has zero access to personal financial allocations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:scale-105 transform-gpu">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white animate-pulse-glow">
                  <FaChartPie className="size-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">85%</div>
                  <div className="text-sm text-gray-600">Financial Wellness Improvement</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:scale-105 transform-gpu">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white animate-pulse-glow">
                  <FaHandshake className="size-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">92%</div>
                  <div className="text-sm text-gray-600">Employee Trust Score</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:scale-105 transform-gpu">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 text-white animate-pulse-glow">
                  <FaPiggyBank className="size-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">40%</div>
                  <div className="text-sm text-gray-600">Increased Savings Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Gateways Section */}
        <section id="payment-gateways" className="scroll-mt-24 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-text-reveal">
            Supported <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Payment Gateways</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 animate-fade-in-delay">
            Seamlessly integrate with all major payment providers. Choose the gateway that works best for your business.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {paymentGateways.map((gateway, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 transition-all duration-300 transform-gpu hover:scale-105 text-center animate-stagger-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-r ${gateway.color} p-3 rounded-lg inline-block mb-4 animate-pulse-glow`}>
                  <gateway.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{gateway.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{gateway.description}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  gateway.status === 'active' 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {gateway.status === 'active' ? 'Available' : 'Coming Soon'}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Payroll Features Section */}
        <section id="payroll" className="scroll-mt-24 mb-16">
          <div className="flex items-center justify-center items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 animate-text-reveal">
              Advanced <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Payroll Processing</span>
            </h2>
          </div>

          <p className="leading-10 mb-14 text-center text-md text-gray-500">
            Run accurate, compliant payroll with automated salary calculations, deductions, benefits
            administration, and approval workflows. Ontap supports payroll readiness checks, reporting, and
            secure disbursements—reducing errors and payroll processing time.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {payrollFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 transform-gpu hover:scale-105 animate-feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-lg inline-block mb-4 animate-pulse-glow">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <FaChevronRight className="h-3 w-3 text-emerald-500 mr-2 animate-pulse" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="scroll-mt-24 mb-16">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white animate-gradient-flow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold animate-text-reveal">
                Why Choose OnTap HRM?
              </h2>
              <div className="text-sm text-emerald-100 bg-white/20 px-3 py-1 rounded-full">
                ID: #benefits
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300 animate-stagger-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <benefit.icon className="h-8 w-8 mx-auto mb-4 text-emerald-200 animate-float" />
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-emerald-100 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="scroll-mt-24 mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800 animate-text-reveal">
              Loved by <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Businesses</span>
            </h2>
            <div className="text-sm text-gray-500 bg-amber-50 px-3 py-1 rounded-full">
              ID: #testimonials
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform-gpu hover:scale-[1.02] animate-stagger-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 animate-pulse-glow">
                    {testimonial.name.charAt(0)}
                  </div>
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
                
                <p className="text-gray-700 italic mb-3">"{testimonial.content}"</p>
                
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-sm font-semibold text-emerald-600">{testimonial.plan} Plan</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-24 mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800 animate-text-reveal">
              Frequently Asked <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <div className="text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full">
              ID: #faq
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-emerald-100 p-6 hover:border-emerald-300 transition-colors duration-300 animate-feature-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-bold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="cta" className="scroll-mt-24">
          <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 rounded-2xl p-8 text-center text-white animate-pulse-glow">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 animate-feature-tag">
                <FaLock className="animate-spin-slow" />
                <span className="text-sm font-semibold">14-DAY FREE TRIAL</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-4 animate-text-reveal">
                Ready to Transform Your HR Management?
              </h2>
              
              <p className="mb-6 animate-fade-in-delay">
                Join 5,000+ businesses using OnTap HRM. No credit card required to start.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-buttons-stagger">
                <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transform transition duration-300 hover:scale-105 hover:animate-bounce">
                  Start Free Trial
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transform transition duration-300 hover:scale-105 animate-pulse-border">
                  Schedule Demo
                </button>
              </div>
              
              <p className="text-sm text-emerald-100 mt-4 animate-pulse-text">
                ✅ No setup fees • ✅ Cancel anytime • ✅ 24/7 support included
              </p>
            </div>
          </div>
        </section>
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

export default PricingPage;