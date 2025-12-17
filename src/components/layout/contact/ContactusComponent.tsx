import { useState, useEffect, useRef } from "react";
import { 
  FaUser, 
  FaEnvelope, 
  FaComment, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPhoneAlt,
  FaGlobe
} from "react-icons/fa";

const ContactusComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const contactRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="size-5" />,
      title: "Visit Our Office",
      details: ["123 Innovation Street", "Tech City, TC 10001"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-r from-emerald-100 to-teal-100"
    },
    {
      icon: <FaPhoneAlt className="size-5" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-gradient-to-r from-blue-100 to-purple-100"
    },
    {
      icon: <FaClock className="size-5" />,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-r from-amber-100 to-orange-100"
    },
    {
      icon: <FaGlobe className="size-5" />,
      title: "Global Support",
      details: ["24/7 Online Support", "Multilingual Assistance"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-r from-purple-100 to-pink-100"
    }
  ];

  const fadeInUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay }
  });

  return (
    <div 
      ref={contactRef}
      className="w-full py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header - Matching your roadmap style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              📞 CONTACT US
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Get in
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about workforce management? Our team is here to help you implement and optimize your solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div 
              className="opacity-0 transform translate-y-4 transition-all duration-700"
              style={isInView ? { opacity: 1, transform: 'translateY(0)' } : {}}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                We're Here to Help
              </h3>
              <p className="text-gray-600 mb-8">
                Reach out to our expert team for implementation support, technical questions, or to discuss how our workforce management platform can transform your organization.
              </p>
            </div>

            {/* Contact Cards - Matching roadmap card style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="opacity-0 transform translate-y-4 transition-all duration-700"
                  style={isInView ? { 
                    opacity: 1, 
                    transform: 'translateY(0)',
                    transitionDelay: `${index * 100}ms`
                  } : {}}
                >
                  <div className="relative rounded-2xl p-6 border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
                    <div className={`absolute -top-3 left-6 ${info.bgColor} p-3 rounded-xl`}>
                      <div className={`bg-gradient-to-r ${info.color} p-2 rounded-lg text-white`}>
                        {info.icon}
                      </div>
                    </div>
                    <div className="pt-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div 
              className="opacity-0 transform translate-y-4 transition-all duration-700"
              style={isInView ? { 
                opacity: 1, 
                transform: 'translateY(0)',
                transitionDelay: '400ms'
              } : {}}
            >
              <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Response Time
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                      &lt;1h
                    </div>
                    <div className="text-sm text-gray-600">Initial Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                      24h
                    </div>
                    <div className="text-sm text-gray-600">Resolution Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                      99%
                    </div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="opacity-0 transform translate-y-4 transition-all duration-700"
            style={isInView ? { 
              opacity: 1, 
              transform: 'translateY(0)',
              transitionDelay: '200ms'
            } : {}}
          >
            <div className="relative rounded-2xl p-8 border-2 border-emerald-100 bg-gradient-to-br from-white to-emerald-50/30 shadow-2xl shadow-emerald-200/20">
              {/* Active Form Indicator */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 animate-ping"></div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Send a Message
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                        <FaUser className="size-3.5 text-emerald-600" />
                      </div>
                      <span>Full Name</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.name ? 'border-red-300' : 'border-gray-300'
                    } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-all bg-white`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 animate-pulse">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <FaEnvelope className="size-3.5 text-blue-600" />
                      </div>
                      <span>Email Address</span>
                    </div>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all bg-white`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 animate-pulse">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                        <FaPhoneAlt className="size-3.5 text-purple-600" />
                      </div>
                      <span>Phone Number (Optional)</span>
                    </div>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all bg-white"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                        <FaComment className="size-3.5 text-amber-600" />
                      </div>
                      <span>Your Message</span>
                    </div>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.message ? 'border-red-300' : 'border-gray-300'
                    } focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none transition-all bg-white resize-none`}
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 animate-pulse">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-95 ${
                    isSubmitted 
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600'
                      : isSubmitting
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-400'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-lg hover:shadow-emerald-200/50'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center justify-center gap-2">
                      <FaCheckCircle className="size-5" />
                      Message Sent Successfully!
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <FaPaperPlane className="size-4" />
                      Send Message
                    </div>
                  )}
                </button>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-center animate-pulse">
                    <p className="text-emerald-700 font-medium">
                      Thank you for reaching out! Our team will contact you within 1 business day.
                    </p>
                  </div>
                )}
              </form>

              {/* Privacy Note */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Privacy Policy
                  </a>
                  . We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactusComponent;