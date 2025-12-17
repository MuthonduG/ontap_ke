import { useState, useEffect, useRef } from "react";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronRight,
  FaApple,
  FaGooglePlay
} from "react-icons/fa";
import { FiMail, FiHeart } from "react-icons/fi";
import Logo from "../../../assets/icon_logo.png"

const FooterComponent = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      // Simulate API call
      setTimeout(() => {
        setIsSubscribed(true);
        setEmail("");
        // Reset subscription status after 3 seconds
        setTimeout(() => setIsSubscribed(false), 3000);
      }, 500);
    }
  };

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Social links
  const socialLinks = [
    { icon: <FaFacebookF />, label: "Facebook", color: "hover:bg-blue-600" },
    { icon: <FaTwitter />, label: "Twitter", color: "hover:bg-sky-500" },
    { icon: <FaLinkedinIn />, label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: <FaInstagram />, label: "Instagram", color: "hover:bg-pink-600" },
    { icon: <FaYoutube />, label: "YouTube", color: "hover:bg-red-600" },
  ];

  // Footer links
  const footerLinks = {
    Product: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Roadmap", href: "#" },
      { label: "Updates", href: "#" },
      { label: "API", href: "#" },
    ],
    Solutions: [
      { label: "Enterprise", href: "#" },
      { label: "Small Business", href: "#" },
      { label: "Healthcare", href: "#" },
      { label: "Retail", href: "#" },
      { label: "Education", href: "#" },
    ],
    Resources: [
      { label: "Documentation", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Blog", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Support", href: "#" },
    ],
    Company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Contact", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  };

  // Contact info
  const contactInfo = [
    { icon: <FaEnvelope />, text: "support@workforce.com" },
    { icon: <FaPhone />, text: "+1 (555) 123-4567" },
    { icon: <FaMapMarkerAlt />, text: "123 Innovation Street, Tech City" },
  ];

  // App store badges
  const appStores = [
    { 
      icon: <FaApple className="size-5" />, 
      label: "Download on the", 
      title: "App Store",
      color: "bg-black hover:bg-gray-900"
    },
    { 
      icon: <FaGooglePlay className="size-5" />, 
      label: "GET IT ON", 
      title: "Google Play",
      color: "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
    },
  ];

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
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="size-5" />
      </button>

      {/* Main Footer */}
      <footer 
        ref={footerRef}
        className="w-full bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300"
      >
        {/* Top Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Newsletter */}
              <div style={fadeInUp(0.2)}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20">
                    <FiMail className="size-5 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Stay Updated
                  </h3>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Subscribe to our newsletter for the latest updates, features, and workforce management insights.
                </p>
                <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                      required
                    />
                    <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/20 transition-all whitespace-nowrap"
                  >
                    {isSubscribed ? "Subscribed!" : "Subscribe"}
                  </button>
                </form>
                {isSubscribed && (
                  <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                    <p className="text-emerald-400 text-sm">
                      🎉 Thank you for subscribing! Check your email for confirmation.
                    </p>
                  </div>
                )}
              </div>

              {/* App Stores */}
              <div style={fadeInUp(0.4)}>
                <h3 className="text-xl font-bold text-white mb-4">
                  Download Our App
                </h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  Manage your workforce on the go with our mobile app. Available on iOS and Android.
                </p>
                <div className="flex flex-wrap gap-4">
                  {appStores.map((store, index) => (
                    <button
                      key={index}
                      className={`flex items-center gap-3 px-5 py-3 rounded-xl text-white transition-all transform hover:scale-105 ${store.color}`}
                      style={staggerItem(index)}
                    >
                      {store.icon}
                      <div className="text-left">
                        <div className="text-xs">{store.label}</div>
                        <div className="text-sm font-semibold">{store.title}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {/* Brand Column */}
              <div className="lg:col-span-2" style={fadeInUp(0.2)}>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500/50 to-teal-500/50">
                      <img src={Logo} alt="" className="size-6" />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      OnTap
                    </span>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Modern workforce management solutions for forward-thinking organizations. Streamline operations, boost productivity, and drive growth.
                  </p>
                </div>

                {/* Social Links */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`p-3 rounded-lg bg-gray-800 text-gray-400 hover:text-white transition-all transform hover:scale-110 ${social.color}`}
                        style={staggerItem(index)}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 text-gray-400"
                      style={staggerItem(index)}
                    >
                      <div className="p-2 rounded-lg bg-gray-800">
                        {info.icon}
                      </div>
                      <span>{info.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link Columns */}
              {Object.entries(footerLinks).map(([category, links], colIndex) => (
                <div key={category} style={fadeInUp(0.2 + colIndex * 0.1)}>
                  <h4 className="text-white font-semibold mb-4">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group"
                          style={staggerItem(index)}
                        >
                          <FaChevronRight className="size-3 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span>{link.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div 
              className="text-gray-500 text-sm"
              style={fadeInUp(0.6)}
            >
              <div className="flex items-center gap-2">
                © {new Date().getFullYear()} WorkforcePro. All rights reserved.
                <FiHeart className="text-red-500 animate-pulse" />
              </div>
              <p className="mt-2 text-xs text-gray-600">
                Made with passion for better workforce management.
              </p>
            </div>

            {/* Additional Links */}
            <div 
              className="flex flex-wrap items-center gap-6 text-sm"
              style={fadeInUp(0.7)}
            >
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Sitemap
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Status
              </a>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-emerald-400">All systems operational</span>
              </div>
            </div>
          </div>


        </div>
      </footer>
    </>
  );
};

export default FooterComponent;