import { useState, useEffect, useRef } from "react";
import { 
  FaCheck, 
  FaTimes, 
  FaUsers, 
  FaRocket,
  FaCrown,
  FaGem,
  FaStar
} from "react-icons/fa";


const PricingComponent = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [cardsVisible, setCardsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pricingSectionRef = useRef<HTMLDivElement>(null);

  const pricingPlans = [
    {
      name: "Free",
      icon: <FaRocket className="text-emerald-500 size-10" />,
      price: {
        monthly: "$0",
        annual: "$0"
      },
      description: "Perfect for small teams getting started",
      color: "emerald",
      popular: false,
      features: [
        { name: "Up to 10 employees", included: true },
        { name: "Basic attendance tracking", included: true },
        { name: "Leave management", included: true },
        { name: "Basic reports", included: true },
        { name: "Email support", included: true },
        { name: "Mobile app access", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Payroll processing", included: false },
        { name: "Custom workflows", included: false },
        { name: "API access", included: false },
        { name: "Dedicated account manager", included: false },
        { name: "White-label solution", included: false }
      ],
      ctaText: "Get Started Free",
      highlight: "No credit card required"
    },
    {
      name: "Basic",
      icon: <FaUsers className="text-blue-500 size-10" />,
      price: {
        monthly: "$29",
        annual: "$25"
      },
      description: "For growing teams needing more features",
      color: "blue",
      popular: true,
      features: [
        { name: "Up to 50 employees", included: true },
        { name: "Advanced attendance tracking", included: true },
        { name: "Leave & shift management", included: true },
        { name: "Advanced analytics dashboard", included: true },
        { name: "Priority email & chat support", included: true },
        { name: "Mobile app with GPS tracking", included: true },
        { name: "Basic payroll processing", included: true },
        { name: "Custom report templates", included: true },
        { name: "API access (limited)", included: false },
        { name: "Dedicated account manager", included: false },
        { name: "White-label solution", included: false },
        { name: "Advanced security features", included: false }
      ],
      ctaText: "Start 14-day Trial",
      highlight: "Popular"
    },
    {
      name: "Silver",
      icon: <FaGem className="text-purple-500 size-10" />,
      price: {
        monthly: "$79",
        annual: "$69"
      },
      description: "For established businesses with complex needs",
      color: "purple",
      popular: false,
      features: [
        { name: "Up to 200 employees", included: true },
        { name: "Advanced attendance with biometric", included: true },
        { name: "Comprehensive leave management", included: true },
        { name: "Real-time analytics & forecasting", included: true },
        { name: "24/7 phone & chat support", included: true },
        { name: "Full mobile suite", included: true },
        { name: "Advanced payroll processing", included: true },
        { name: "Custom workflows & automations", included: true },
        { name: "Full API access", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Basic white-label", included: false },
        { name: "Advanced security & compliance", included: false }
      ],
      ctaText: "Start 30-day Trial",
      highlight: "Save 15% annually"
    },
    {
      name: "Gold",
      icon: <FaCrown className="text-amber-500 size-10" />,
      price: {
        monthly: "$199",
        annual: "$169"
      },
      description: "Enterprise-grade solution for large organizations",
      color: "amber",
      popular: false,
      features: [
        { name: "Unlimited employees", included: true },
        { name: "Enterprise attendance system", included: true },
        { name: "Advanced workforce management", included: true },
        { name: "Predictive analytics & AI insights", included: true },
        { name: "24/7 dedicated support", included: true },
        { name: "Custom mobile solutions", included: true },
        { name: "Enterprise payroll suite", included: true },
        { name: "Advanced automations & integrations", included: true },
        { name: "Full API & webhook access", included: true },
        { name: "Dedicated success manager", included: true },
        { name: "Full white-label solution", included: true },
        { name: "Enterprise security & compliance", included: true }
      ],
      ctaText: "Contact Sales",
      highlight: "Custom enterprise pricing"
    }
  ];

  // Intersection Observer for scroll animation - triggers every time
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setCardsVisible(true);
            
            // Reset animation for re-triggering
            if (containerRef.current) {
              containerRef.current.classList.remove('animate-complete');
            }
            
            // Add completion class after animation
            setTimeout(() => {
              if (containerRef.current && entry.isIntersecting) {
                containerRef.current.classList.add('animate-complete');
              }
            }, 1500);
          } else {
            setIsInView(false);
            setCardsVisible(false);
            
            // Reset for next animation
            if (containerRef.current) {
              containerRef.current.classList.remove('animate-complete');
            }
          }
        });
      },
      { 
        threshold: 0.3, 
        rootMargin: '0px 0px -100px 0px' 
      }
    );

    if (pricingSectionRef.current) {
      observer.observe(pricingSectionRef.current);
    }

    return () => {
      if (pricingSectionRef.current) {
        observer.unobserve(pricingSectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={pricingSectionRef}
      className="w-full py-20 bg-gradient-to-b from-white to-emerald-50/20 scroll-mt-16 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with fade-in animation */}
        <div className={`w-full text-center mb-16 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              💎 TRANSPARENT PRICING
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Simple, Fair Pricing
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              for Every Team Size
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Choose the perfect plan for your organization. All plans include core HR features with 
            scalable options as your team grows.
          </p>

          {/* Billing Toggle */}
          <div className={`inline-flex items-center bg-white rounded-full p-1 border border-emerald-200 shadow-sm mb-8 transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                billingCycle === "annual"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <span>Annual</span>
              <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Container */}
        <div 
          ref={containerRef} 
          className={`w-full p-6 relative ${!cardsVisible ? 'pre-animate' : ''}`}
        >
          {/* Animation Center Point */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`center-pulse size-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 ${
              cardsVisible ? 'animate-center-pulse' : 'opacity-0'
            }`}></div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`pricing-card card-translate-${index + 1} card-animation-delay-${index + 1} ${
                  cardsVisible ? 'animate-spread' : ''
                } relative w-full rounded-3xl border transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-200/50 ${
                  plan.popular
                    ? "border-emerald-300 shadow-2xl shadow-emerald-200/50 scale-105 z-10 bg-gradient-to-br from-emerald-50/80 to-teal-50/80"
                    : "border-gray-200 hover:border-emerald-200 bg-gradient-to-br from-white to-gray-50"
                }`}
                style={{
                  animationPlayState: cardsVisible ? 'running' : 'paused',
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold shadow-lg shadow-emerald-200/50 flex items-center gap-2">
                      <FaStar className="size-3" />
                      {plan.highlight}
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="p-8 rounded-t-3xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-${plan.color}-100 to-${plan.color}-50 shadow-md`}>
                      {plan.icon}
                    </div>
                    {plan.popular && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-700">
                        RECOMMENDED
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                  {/* Price Display */}
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">
                        {billingCycle === "annual" ? plan.price.annual : plan.price.monthly}
                      </span>
                      {plan.price.monthly !== "$0" && (
                        <span className="text-gray-500 ml-2">
                          /{billingCycle === "annual" ? "month" : "month"}
                        </span>
                      )}
                    </div>
                    {billingCycle === "annual" && plan.price.monthly !== "$0" && (
                      <p className="text-sm text-gray-500 mt-1">
                        Billed annually (${parseInt(plan.price.annual.replace('$', '')) * 12}/year)
                      </p>
                    )}
                  </div>

                  {/* Highlight Text */}
                  <div className={`text-sm font-medium px-4 py-2 rounded-lg ${
                    plan.popular
                      ? "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-700"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {plan.highlight}
                  </div>
                </div>

                {/* Features List */}
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start transition-transform duration-200 hover:translate-x-1">
                        <div className={`flex-shrink-0 mt-0.5 mr-3 ${
                          feature.included 
                            ? `text-${plan.color}-500` 
                            : "text-gray-300"
                        }`}>
                          {feature.included ? (
                            <FaCheck className="size-5" />
                          ) : (
                            <FaTimes className="size-4" />
                          )}
                        </div>
                        <span className={`text-sm ${
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    plan.popular
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-xl hover:shadow-emerald-300/50"
                      : plan.name === "Free"
                      ? "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow-lg"
                      : "bg-gradient-to-r from-white to-gray-100 text-gray-800 border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-lg"
                  }`}>
                    {plan.ctaText}
                  </button>
                </div>

                {/* Glow Effect for Popular Card */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/5 to-teal-500/5 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute left-10 top-1/4 animate-float">
        <div className="w-4 h-4 bg-emerald-300/30 rounded-full"></div>
      </div>
      <div className="absolute right-8 bottom-1/4 animate-float delay-700">
        <div className="w-6 h-6 bg-teal-400/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default PricingComponent;