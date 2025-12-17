import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaSearch, FaLightbulb, FaCogs, FaUsers, FaChartLine, FaCreditCard, FaShieldAlt } from "react-icons/fa";

const FaqsComponent = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);
  const faqRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // FAQ Categories
  const categories = [
    { id: "all", label: "All Questions", icon: <FaLightbulb />, count: 20 },
    { id: "getting-started", label: "Getting Started", icon: <FaCogs />, count: 6 },
    { id: "account", label: "Account & Billing", icon: <FaCreditCard />, count: 5 },
    { id: "team", label: "Team Management", icon: <FaUsers />, count: 5 },
    { id: "security", label: "Security", icon: <FaShieldAlt />, count: 2 },
    { id: "analytics", label: "Analytics", icon: <FaChartLine />, count: 2 }
  ];

  // FAQ Data
  const faqs = [
    // Getting Started
    {
      id: 1,
      question: "How quickly can I set up my workforce management system?",
      answer: "Most organizations can complete the initial setup in under 30 minutes. Our guided implementation process walks you through each step, from institutional signup to adding your first employees.",
      category: "getting-started",
      popular: true
    },
    {
      id: 2,
      question: "What information do I need to get started?",
      answer: "You'll need basic organization details (name, address, tax ID), contact information for the primary admin, and employee data (which can be imported via CSV). We provide templates for easy data import.",
      category: "getting-started"
    },
    {
      id: 3,
      question: "Do you offer onboarding assistance?",
      answer: "Yes! We provide complimentary onboarding support for all enterprise plans. This includes a dedicated implementation specialist and training sessions for your team.",
      category: "getting-started"
    },
    {
      id: 4,
      question: "Can I try before purchasing?",
      answer: "Absolutely. We offer a 14-day free trial with full access to all features. No credit card required to start your trial.",
      category: "getting-started",
      popular: true
    },
    {
      id: 5,
      question: "Is there a mobile app available?",
      answer: "Yes, we offer native mobile apps for both iOS and Android. Your team can access schedules, clock in/out, request time off, and view announcements from anywhere.",
      category: "getting-started"
    },
    {
      id: 6,
      question: "What browsers are supported?",
      answer: "Our web platform works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest versions for optimal performance.",
      category: "getting-started"
    },

    // Account & Billing
    {
      id: 7,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), ACH transfers, and wire transfers for annual payments. All payments are processed securely through our PCI-compliant system.",
      category: "account",
      popular: true
    },
    {
      id: 8,
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Pro-rated credits are applied when upgrading, and downgrades take effect at the start of your next billing cycle.",
      category: "account"
    },
    {
      id: 9,
      question: "How does employee-based pricing work?",
      answer: "You're billed based on active users in your system. You can add or remove users at any time, and billing adjusts automatically. We offer volume discounts for larger teams.",
      category: "account"
    },
    {
      id: 10,
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee for annual subscriptions. Monthly plans can be canceled at any time without penalty.",
      category: "account"
    },
    {
      id: 11,
      question: "Do you offer discounts for non-profits or educational institutions?",
      answer: "Yes, we provide special pricing for qualifying non-profit organizations and educational institutions. Please contact our sales team with your documentation for custom pricing.",
      category: "account"
    },

    // Team Management
    {
      id: 12,
      question: "How many team members can I add?",
      answer: "There's no hard limit! Our platform scales from small teams to enterprise organizations with thousands of employees. Pricing scales based on your active user count.",
      category: "team"
    },
    {
      id: 13,
      question: "Can I set different permission levels?",
      answer: "Yes, our system includes customizable role-based access control. You can define roles like Admin, Manager, Supervisor, and Employee with granular permissions.",
      category: "team",
      popular: true
    },
    {
      id: 14,
      question: "How does bulk employee import work?",
      answer: "You can import employees via CSV/Excel file. Our system validates the data and allows you to map columns to our fields. We also support API integration with existing HR systems.",
      category: "team"
    },
    {
      id: 15,
      question: "Can employees access their own schedules?",
      answer: "Yes, employees can view their schedules, request time off, swap shifts (if permitted), and check their hours from any device via our mobile app or web portal.",
      category: "team"
    },
    {
      id: 16,
      question: "How do you handle time zone differences?",
      answer: "Our platform automatically adjusts for time zones. You can set organization-wide time zones or allow different zones for different locations. All times are displayed in the viewer's local time zone.",
      category: "team"
    },

    // Security
    {
      id: 17,
      question: "Is my data secure and encrypted?",
      answer: "Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We undergo regular security audits and are SOC 2 Type II compliant.",
      category: "security",
      popular: true
    },
    {
      id: 18,
      question: "Where is my data stored?",
      answer: "Data is stored in secure, SOC 2 compliant data centers. We offer data residency options for organizations with specific geographic requirements.",
      category: "security"
    },

    // Analytics
    {
      id: 19,
      question: "What kind of reports are available?",
      answer: "We offer comprehensive reporting including attendance, overtime, labor costs, productivity, and forecasting. Reports can be scheduled, exported, and customized to your needs.",
      category: "analytics"
    },
    {
      id: 20,
      question: "Can I integrate with other business tools?",
      answer: "Yes! We offer integrations with popular tools like QuickBooks, ADP, Slack, Microsoft Teams, and Google Workspace. We also provide a robust API for custom integrations.",
      category: "analytics",
      popular: true
    }
  ];

  // Filter FAQs based on category and search
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Toggle FAQ item
  const toggleFaq = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  // Auto-open first item when category changes
  useEffect(() => {
    if (filteredFaqs.length > 0 && openItems.length === 0) {
      setOpenItems([filteredFaqs[0].id]);
    }
  }, [activeCategory, filteredFaqs.length]);

  // Intersection Observer for scroll animations
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

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  // Animation styles
  const fadeInUp = (delay: number) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
  });

  const staggerItem = (index: number) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
  });

  return (
    <div 
      ref={faqRef}
      className="w-full py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ❓ FAQS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Find quick answers to common questions about our workforce management platform
          </p>

          {/* Search Bar */}
          <div 
            className="max-w-2xl mx-auto mb-12"
            style={fadeInUp(0.2)}
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search questions or keywords..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-all bg-white shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div 
            className="lg:w-1/4"
            style={fadeInUp(0.3)}
          >
            <div className="sticky top-8 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSearchTerm(""); // Clear search when changing category
                  }}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-200/50'
                      : 'bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-md'
                  }`}
                  style={staggerItem(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        activeCategory === category.id 
                          ? 'bg-white/20' 
                          : 'bg-gradient-to-r from-emerald-50 to-teal-50'
                      }`}>
                        <div className={activeCategory === category.id ? 'text-white' : 'text-emerald-600'}>
                          {category.icon}
                        </div>
                      </div>
                      <span className="font-medium">{category.label}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      activeCategory === category.id
                        ? 'bg-white/20'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:w-3/4">
            {/* Results Count */}
            <div 
              className="mb-8"
              style={fadeInUp(0.4)}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {activeCategory === "all" ? "All Questions" : categories.find(c => c.id === activeCategory)?.label}
                  </h3>
                  <p className="text-gray-600">
                    {filteredFaqs.length} question{filteredFaqs.length !== 1 ? 's' : ''} found
                    {searchTerm && ` for "${searchTerm}"`}
                  </p>
                </div>
                {filteredFaqs.some(faq => faq.popular) && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                    <span className="text-sm font-medium text-amber-700">Popular questions marked</span>
                  </div>
                )}
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
                      openItems.includes(faq.id)
                        ? 'border-emerald-300 bg-gradient-to-br from-white to-emerald-50/30 shadow-xl shadow-emerald-200/20'
                        : 'border-gray-200 bg-white hover:border-emerald-200 hover:shadow-lg'
                    }`}
                    style={staggerItem(index)}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`p-3 rounded-xl ${
                          openItems.includes(faq.id)
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                            : 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-600'
                        }`}>
                          <span className="font-bold">{faq.id}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-lg font-semibold text-gray-800">
                              {faq.question}
                            </h4>
                            {faq.popular && (
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                              {categories.find(c => c.id === faq.category)?.label}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        {openItems.includes(faq.id) ? (
                          <div className="p-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-600">
                            <FaChevronUp className="size-5" />
                          </div>
                        ) : (
                          <div className="p-2 rounded-full bg-gray-100 text-gray-600">
                            <FaChevronDown className="size-5" />
                          </div>
                        )}
                      </div>
                    </button>
                    
                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openItems.includes(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 ml-14 border-t border-gray-100 pt-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                        {openItems.includes(faq.id) && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <span className="text-sm font-medium text-emerald-600">
                              Was this helpful?
                            </span>
                            <div className="flex gap-2 mt-2">
                              <button className="px-3 py-1.5 text-sm rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors">
                                👍 Yes
                              </button>
                              <button className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                                👎 No
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div 
                  className="rounded-2xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 to-white p-12 text-center"
                  style={fadeInUp(0.5)}
                >
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center mx-auto mb-4">
                      <FaSearch className="size-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      No questions found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {searchTerm 
                        ? `We couldn't find any questions matching "${searchTerm}"`
                        : `No questions found in this category`
                      }
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setActiveCategory("all");
                      }}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-200/50 transition-all"
                    >
                      View All Questions
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Still Have Questions */}
            <div 
              className="mt-12"
              style={fadeInUp(0.6)}
            >
              <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Still have questions?
                    </h3>
                    <p className="text-gray-600">
                      Can't find the answer you're looking for? Our support team is here to help.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-200/50 transition-all">
                      Contact Support
                    </button>
                    <button className="px-6 py-3 rounded-xl bg-white border border-emerald-300 text-emerald-600 font-medium hover:bg-emerald-50 transition-all">
                      Schedule a Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqsComponent;
