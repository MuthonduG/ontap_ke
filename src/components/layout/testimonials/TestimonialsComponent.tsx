import { useState, useEffect, useRef } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const TestimonialsComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoSlideRef = useRef<number | null>(null);
  
  const avatarUrls = [
    "https://i.pinimg.com/736x/fc/e6/93/fce693e4be192e6943e4a0fc3957a005.jpg",
    "https://i.pinimg.com/1200x/31/c9/ce/31c9ce479d7c5763f6b620d4370b96c8.jpg",
    "https://i.pinimg.com/736x/a5/05/e2/a505e2e8e6e4e5b0607a7a438b8984c6.jpg",
    "https://i.pinimg.com/736x/88/a5/23/88a523523f21ed102bd68d2add317ed5.jpg",
    "https://i.pinimg.com/736x/10/f9/49/10f94912ec553621e064716ae3026447.jpg",
    "https://i.pinimg.com/736x/ee/96/af/ee96afc0635e1f531db8ec9ec181fcc3.jpg"
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "HR Director, TechFlow Inc.",
      content: "This platform transformed how we manage our 200+ employees. The attendance tracking and leave management features alone saved us 15 hours of administrative work per week. Our team loves the mobile app!",
      company: "TechFlow Inc.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Manager, GrowthLabs",
      content: "The analytics dashboard gave us insights we never had before. We reduced overtime costs by 23% in the first quarter after implementation. The ROI was immediate and substantial.",
      company: "GrowthLabs",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "CEO, InnovateCo",
      content: "As a scaling startup, we needed a solution that could grow with us. The flexibility and custom workflows allowed us to maintain our unique company culture while automating HR processes.",
      company: "InnovateCo",
      rating: 4
    },
    {
      name: "Priya Sharma",
      role: "People Operations Lead, CloudScale",
      content: "The payroll integration eliminated manual errors and saved us countless hours. Our finance team is thrilled with the accuracy and reporting capabilities. Support has been exceptional throughout.",
      company: "CloudScale",
      rating: 5
    },
    {
      name: "David Kim",
      role: "HR Manager, NextGen Solutions",
      content: "Implementation was seamless with their dedicated support team. Our employees adapted quickly to the intuitive interface. The biometric attendance feature has been a game-changer for our remote teams.",
      company: "NextGen Solutions",
      rating: 5
    },
    {
      name: "Elena Martinez",
      role: "Director of People, BrightFuture",
      content: "The white-label solution allowed us to maintain our brand while offering enterprise-grade HR tools. Our client satisfaction scores increased by 40% after implementing this platform.",
      company: "BrightFuture",
      rating: 5
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      autoSlideRef.current = window.setInterval(() => {
        goToNext();
      }, 5000);
    }

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [activeIndex, isPaused]);

  const goToPrevious = () => {
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    resetAutoSlide();
  };

  const goToNext = () => {
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    resetAutoSlide();
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    if (!isPaused) {
      autoSlideRef.current = window.setInterval(() => {
        goToNext();
      }, 5000);
    }
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Calculate visible testimonials (3 at a time)
  const getVisibleTestimonials = () => {
    const visible = [];
    const total = testimonials.length;
    
    for (let i = -1; i <= 1; i++) {
      const index = (activeIndex + i + total) % total;
      visible.push({
        ...testimonials[index],
        avatar: avatarUrls[index],
        position: i
      });
    }
    
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="w-full py-20 bg-gradient-to-b from-emerald-50/20 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ❤️ TRUSTED BY TEAMS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Loved by HR Teams
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              & Employees
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built for fast-growing teams across Africa, the GCC & global markets. Join thousands of companies that have transformed their workforce management with our platform
          </p>
        </div>

        {/* Testimonial Slider Container */}
        <div 
          className="relative w-full py-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-white to-gray-50 border border-emerald-200 shadow-lg hover:shadow-emerald-200/50 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-emerald-600 group-hover:text-emerald-700 transition-colors" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-white to-gray-50 border border-emerald-200 shadow-lg hover:shadow-emerald-200/50 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-emerald-600 group-hover:text-emerald-700 transition-colors" />
          </button>

          {/* Testimonial Cards */}
          <div className="flex items-center justify-center gap-8 px-12 transition-all duration-500 ease-out">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`
                  relative transition-all duration-700 ease-out transform
                  ${testimonial.position === 0 
                    ? 'w-[80%] opacity-100 scale-100 z-10' 
                    : testimonial.position === -1
                    ? 'w-[60%] opacity-60 -translate-x-10 scale-95 blur-sm z-0'
                    : 'w-[60%] opacity-60 translate-x-10 scale-95 blur-sm z-0'
                  }
                `}
              >
                <div className={`
                  relative rounded-3xl p-8 transition-all duration-500
                  ${testimonial.position === 0 
                    ? 'bg-gradient-to-br from-white to-emerald-50/30 border-2 border-emerald-200 shadow-2xl shadow-emerald-200/30' 
                    : 'bg-gradient-to-br from-white/50 to-gray-50/50 border border-gray-200 shadow-lg'
                  }
                  hover:shadow-xl hover:shadow-emerald-200/20 hover:border-emerald-300
                `}>
                  {/* Quote Icon */}
                  <div className={`absolute -top-6 -left-6 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    testimonial.position === 0
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-300/50'
                      : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-500'
                  }`}>
                    <FaQuoteLeft className="size-5" />
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`size-5 ${
                            i < testimonial.rating 
                              ? 'text-amber-400 fill-amber-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">
                        {testimonial.rating}.0
                      </span>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg text-gray-700 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-emerald-100">
                      <div className="relative">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white ${
                          testimonial.position === 0
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                            : 'bg-gradient-to-r from-gray-400 to-gray-500'
                        }`} />
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                          testimonial.position === 0
                            ? 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  {testimonial.position === 0 && (
                    <>
                      <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-sm"></div>
                      <div className="absolute -top-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-sm"></div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-300 ${
                  index === activeIndex ? 'scale-110' : 'hover:scale-105'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <div className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${index === activeIndex 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 scale-125' 
                    : 'bg-gradient-to-r from-gray-300 to-gray-400'
                  }
                `} />
                <div className={`
                  absolute inset-0 rounded-full transition-all duration-300
                  ${index === activeIndex 
                    ? 'animate-ping bg-gradient-to-r from-emerald-500/30 to-teal-500/30' 
                    : ''
                  }
                `} />
              </button>
            ))}
          </div>

        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-emerald-100 shadow-lg shadow-emerald-100/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              2,500+
            </div>
            <div className="text-sm text-gray-600 mt-2">Happy Companies</div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-emerald-100 shadow-lg shadow-emerald-100/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              98%
            </div>
            <div className="text-sm text-gray-600 mt-2">Customer Satisfaction</div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-emerald-100 shadow-lg shadow-emerald-100/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              50K+
            </div>
            <div className="text-sm text-gray-600 mt-2">Employees Managed</div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-emerald-100 shadow-lg shadow-emerald-100/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-sm text-gray-600 mt-2">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;