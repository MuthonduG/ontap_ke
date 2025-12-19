import { useState } from "react";
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
  FaChartBar
} from "react-icons/fa";
import { PiPiggyBankBold } from "react-icons/pi";
import FooterComponent from "../../components/layout/footer/FooterComponent";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

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
      color: 'from-blue-500 to-cyan-500'
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
      color: 'from-emerald-500 to-teal-500'
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
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Payment Gateways
  const paymentGateways = [
    { name: 'Bank Transfer', icon: PiPiggyBankBold, color: 'from-blue-500 to-blue-600', description: 'Direct bank transfers', status: 'active' },
    { name: 'Credit Card', icon: FaCreditCard, color: 'from-emerald-500 to-teal-500', description: 'Visa, MasterCard, Amex', status: 'active' },
    { name: 'PayPal', icon: FaPaypal, color: 'from-blue-400 to-blue-500', description: 'Secure PayPal payments', status: 'active' },
    { name: 'Stripe', icon: FaMoneyCheckAlt, color: 'from-purple-500 to-pink-500', description: 'Global payment processing', status: 'active' },
    { name: 'Mobile Money', icon: FaGlobe, color: 'from-orange-500 to-amber-500', description: 'M-Pesa, Airtel Money', status: 'coming-soon' }
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
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 animate-gradient">
        <div className="absolute inset-0 animate-pulse-orb">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-300/10 rounded-full animate-pulse-orb"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-300/10 rounded-full animate-pulse-orb" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-6 animate-feature-tag">
              <FaCreditCard className="animate-spin-slow" />
              <span className="text-sm font-semibold">TRANSPARENT PRICING</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-in-up">
              Simple, Fair <span className="block text-emerald-100">Pricing</span>
            </h1>
            
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
              Choose the perfect plan for your business. All plans include payroll processing, 
              multiple payment gateways, and our comprehensive HRM suite.
            </p>
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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        {/* Payment Gateways */}
        <div className="mb-16">
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
        </div>

        {/* Payroll Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-text-reveal">
            Advanced <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Payroll Processing</span>
          </h2>
          
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
        </div>

        {/* Benefits */}
        <div className="mb-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white animate-gradient-flow">
          <h2 className="text-3xl font-bold mb-8 text-center animate-text-reveal">
            Why Choose OnTap HRM?
          </h2>
          
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

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-text-reveal">
            Loved by <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Businesses</span>
          </h2>
          
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
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-text-reveal">
            Frequently Asked <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          
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
        </div>

        {/* Final CTA */}
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