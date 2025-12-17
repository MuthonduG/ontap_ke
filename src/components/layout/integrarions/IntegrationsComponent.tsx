import { useState, useEffect, useRef } from "react";
import { 
  FaSlack, 
  FaMicrosoft, 
  FaGoogle, 
  FaGithub, 
  FaTrello, 
  FaJira, 
  FaTeamspeak,
  FaWhatsapp,
  FaDiscord,
  FaDropbox,
  FaFigma,
  FaShopify,
  FaSalesforce
} from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SiNotion, SiAsana } from "react-icons/si";
import { TbBrandZoom } from "react-icons/tb";


const IntegrationsComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  
  // Integration data
  const integrations = [
    { 
      name: "Slack", 
      icon: <FaSlack className="text-[#E01E5A] size-12" />, 
      description: "Team communication & collaboration",
      color: "#E01E5A"
    },
    { 
      name: "Microsoft 365", 
      icon: <FaMicrosoft className="text-[#D83B01] size-12" />, 
      description: "Office suite integration",
      color: "#D83B01"
    },
    { 
      name: "Google Workspace", 
      icon: <FaGoogle className="text-[#4285F4] size-12" />, 
      description: "Gmail, Drive, Calendar sync",
      color: "#4285F4"
    },
    { 
      name: "GitHub", 
      icon: <FaGithub className="text-[#181717] size-12" />, 
      description: "Developer collaboration",
      color: "#181717"
    },
    { 
      name: "Trello", 
      icon: <FaTrello className="text-[#0052CC] size-12" />, 
      description: "Project management",
      color: "#0052CC"
    },
    { 
      name: "Asana", 
      icon: <SiAsana className="text-[#273347] size-12" />, 
      description: "Task & workflow management",
      color: "#273347"
    },
    { 
      name: "Jira", 
      icon: <FaJira className="text-[#0052CC] size-12" />, 
      description: "Agile project tracking",
      color: "#0052CC"
    },
    { 
      name: "Zoom", 
      icon: <TbBrandZoom className="text-[#2D8CFF] size-12" />, 
      description: "Video conferencing",
      color: "#2D8CFF"
    },
    { 
      name: "Microsoft Teams", 
      icon: <FaTeamspeak className="text-[#6264A7] size-12" />, 
      description: "Team collaboration",
      color: "#6264A7"
    },
    { 
      name: "WhatsApp Business", 
      icon: <FaWhatsapp className="text-[#25D366] size-12" />, 
      description: "Business messaging",
      color: "#25D366"
    },
    { 
      name: "Discord", 
      icon: <FaDiscord className="text-[#5865F2] size-12" />, 
      description: "Community & team chat",
      color: "#5865F2"
    },
    { 
      name: "Dropbox", 
      icon: <FaDropbox className="text-[#0061FF] size-12" />, 
      description: "File storage & sharing",
      color: "#0061FF"
    },
    { 
      name: "Figma", 
      icon: <FaFigma className="text-[#F24E1E] size-12" />, 
      description: "Design collaboration",
      color: "#F24E1E"
    },
    { 
      name: "Notion", 
      icon: <SiNotion className="text-[#000000] size-12" />, 
      description: "All-in-one workspace",
      color: "#000000"
    },
    { 
      name: "Shopify", 
      icon: <FaShopify className="text-[#7AB55C] size-12" />, 
      description: "E-commerce integration",
      color: "#7AB55C"
    },
    { 
      name: "Salesforce", 
      icon: <FaSalesforce className="text-[#00A1E0] size-12" />, 
      description: "CRM integration",
      color: "#00A1E0"
    },
  ];

  const slidesPerView = 5;
  const totalSlides = Math.ceil(integrations.length / slidesPerView);

  // Auto slide functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = window.setTimeout(() => {
        if (!isPaused) {
          intervalRef.current = window.setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
          }, 3000);
        }
      }, 1000);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = window.setTimeout(() => {
        if (!isPaused) {
          intervalRef.current = window.setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
          }, 3000);
        }
      }, 1000);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              🔌 SEAMLESS INTEGRATIONS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Connect with Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Favorite Tools
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Integrate OnTapHR with the tools your team already loves. Streamline workflows and 
            boost productivity with seamless connections.
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative w-full overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-xl shadow-emerald-100/50"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Track */}
          <div 
            ref={sliderRef}
            className="flex w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-8">
                  {integrations
                    .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                    .map((integration, index) => (
                      <div
                        key={`${slideIndex}-${index}`}
                        className="group relative"
                      >
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                          {/* Coming Soon Badge */}
                          <div className="absolute -top-2 -right-2">
                            <div className="relative">
                              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold shadow-lg shadow-amber-200/50">
                                Coming Soon
                              </div>
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping opacity-70"></div>
                            </div>
                          </div>

                          {/* Integration Icon */}
                          <div className="flex flex-col items-center text-center">
                            <div className="mb-4 relative">
                              <div 
                                className="absolute inset-0 rounded-2xl blur-xl opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                                style={{ backgroundColor: integration.color }}
                              ></div>
                              <div className="relative">
                                {integration.icon}
                              </div>
                            </div>

                            {/* Integration Name */}
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                              {integration.name}
                            </h3>

                            {/* Integration Description */}
                            <p className="text-sm text-gray-500 mb-4">
                              {integration.description}
                            </p>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                              <div 
                                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1.5 rounded-full transition-all duration-300 group-hover:w-full"
                                style={{ width: '70%' }}
                              ></div>
                            </div>

                            {/* Progress Text */}
                            <div className="flex justify-between w-full text-xs text-gray-400">
                              <span>Integration</span>
                              <span className="font-semibold text-emerald-600">70%</span>
                            </div>
                          </div>
                        </div>

                        {/* Hover Effect Line */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-t-lg group-hover:w-3/4 transition-all duration-300"></div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-emerald-200 shadow-lg hover:shadow-emerald-200/70 hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center group z-10"
            aria-label="Previous slide"
          >
            <MdOutlineKeyboardArrowLeft className="text-gray-700 group-hover:text-emerald-600 size-6 transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-emerald-200 shadow-lg hover:shadow-emerald-200/70 hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center group z-10"
            aria-label="Next slide"
          >
            <MdOutlineKeyboardArrowRight className="text-gray-700 group-hover:text-emerald-600 size-6 transition-colors" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center space-x-3 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full'
                  : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 rounded-3xl p-8 border border-emerald-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need a specific integration?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're constantly adding new integrations. Request your favorite tool and we'll 
              prioritize it in our development roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:shadow-xl hover:shadow-emerald-300/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 group">
                <span>Request Integration</span>
                <svg className="size-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="px-8 py-3 rounded-full bg-white text-gray-800 font-semibold border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2">
                <span>View API Docs</span>
                <FaGithub className="size-5 text-gray-600" />
              </button>
            </div>
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

      {/* Custom Styles
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `} */}
      {/* </style> */}
    </div>
  );
};

export default IntegrationsComponent;
