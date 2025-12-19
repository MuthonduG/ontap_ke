import { useState } from "react";
import { FaPlay, FaCalendarAlt, FaClock, FaUsers, FaStar, FaChevronRight, FaRegCheckCircle, FaVideo, FaChalkboardTeacher, FaCertificate, FaQuoteLeft, FaRegCalendarCheck, FaLeaf, FaRocket, FaBrain, FaTrophy } from "react-icons/fa";
import FooterComponent from "../../components/layout/footer/FooterComponent";

const EventsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // YouTube video embedding with responsive design
  const youtubeEmbed = (
    <div className="w-full" style={{ minWidth: '400px', maxWidth: '800px' }}>
      <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
        <iframe 
          className="absolute top-0 left-0 w-full h-full border-none"
          src="https://www.youtube.com/embed/Ul_2SD4nRZQ"
          title="The Importance of HRM in Modern Organizations"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );

  // Categories for filtering
  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'webinar', label: 'Webinars' },
    { id: 'training', label: 'Training Sessions' },
    { id: 'workshop', label: 'Workshops' }
  ];

  // Curated Past Webinars & Training Sessions
  const pastEvents = [
    {
      id: 1,
      title: "Modern Talent Acquisition Strategies",
      type: "webinar",
      date: "Nov 15, 2023",
      duration: "90 min",
      attendees: 245,
      rating: 4.8,
      reviews: 47,
      description: "Explore cutting-edge recruitment techniques and AI-powered talent sourcing methods that are transforming HR departments.",
      speaker: "Dr. Sarah Johnson",
      speakerRole: "HR Innovation Lead",
      keyTakeaways: [
        "AI-driven candidate matching techniques",
        "Diversity and inclusion in hiring",
        "Remote recruitment best practices"
      ],
      testimonials: [
        {
          name: "Michael Chen",
          role: "HR Manager",
          company: "TechCorp Inc.",
          comment: "Transformative insights that helped us reduce time-to-hire by 40%.",
          rating: 5
        },
        {
          name: "Lisa Rodriguez",
          role: "Talent Director",
          company: "Global Solutions",
          comment: "Practical strategies we implemented immediately with great results.",
          rating: 4
        }
      ]
    },
    {
      id: 2,
      title: "Employee Engagement & Retention Masterclass",
      type: "training",
      date: "Oct 28, 2023",
      duration: "3 hours",
      attendees: 180,
      rating: 4.9,
      reviews: 38,
      description: "Deep dive into creating engagement strategies that reduce turnover and boost productivity.",
      speaker: "James Wilson",
      speakerRole: "Organizational Psychologist",
      keyTakeaways: [
        "Measuring engagement metrics effectively",
        "Recognition programs that work",
        "Career path development frameworks"
      ],
      testimonials: [
        {
          name: "Emma Thompson",
          role: "People Operations",
          company: "StartUp Ventures",
          comment: "Our engagement scores improved by 35% after implementing these strategies.",
          rating: 5
        }
      ]
    },
    {
      id: 3,
      title: "HR Analytics & Data-Driven Decision Making",
      type: "workshop",
      date: "Sep 12, 2023",
      duration: "4 hours",
      attendees: 120,
      rating: 4.7,
      reviews: 42,
      description: "Hands-on workshop on leveraging HR data for strategic workforce planning and optimization.",
      speaker: "Dr. Robert Kim",
      speakerRole: "HR Analytics Expert",
      keyTakeaways: [
        "Building effective HR dashboards",
        "Predictive analytics for workforce planning",
        "ROI measurement of HR initiatives"
      ],
      testimonials: [
        {
          name: "David Park",
          role: "HR Director",
          company: "Enterprise Solutions",
          comment: "Finally learned how to translate HR data into business language executives understand.",
          rating: 5
        },
        {
          name: "Sophia Williams",
          role: "Analytics Manager",
          company: "DataFirst Inc.",
          comment: "Excellent practical exercises with real HR datasets.",
          rating: 4
        }
      ]
    },
    {
      id: 4,
      title: "Compliance & Legal Updates for HR Professionals",
      type: "webinar",
      date: "Aug 5, 2023",
      duration: "75 min",
      attendees: 310,
      rating: 4.6,
      reviews: 55,
      description: "Latest regulatory changes and compliance requirements every HR professional needs to know.",
      speaker: "Amanda Stevens, Esq.",
      speakerRole: "Employment Law Specialist",
      keyTakeaways: [
        "2023-2024 regulatory changes",
        "Remote work compliance guidelines",
        "Documentation best practices"
      ],
      testimonials: [
        {
          name: "Thomas Brown",
          role: "Compliance Officer",
          company: "Financial Services Group",
          comment: "Saved us from potential legal issues with timely updates.",
          rating: 5
        }
      ]
    }
  ];

  // Upcoming Events
  const upcomingEvents = [
    {
      id: 1,
      title: "AI-Powered Performance Management",
      type: "webinar",
      date: "Jan 25, 2024",
      time: "2:00 PM EST",
      duration: "90 min",
      category: "Future of Work",
      description: "Discover how artificial intelligence is revolutionizing performance reviews and employee development.",
      speaker: "Dr. Elena Martinez",
      speakerBio: "AI in HR Researcher with 15+ years experience",
      registrationLink: "#register",
      keyTopics: [
        "Automated feedback systems",
        "Bias reduction in evaluations",
        "Personalized development plans"
      ]
    },
    {
      id: 2,
      title: "Mental Health & Well-being in the Workplace",
      type: "training",
      date: "Feb 8, 2024",
      time: "10:00 AM EST",
      duration: "3 hours",
      category: "Employee Wellness",
      description: "Comprehensive training on building supportive environments and mental health resources.",
      speaker: "Dr. Benjamin Carter",
      speakerBio: "Clinical Psychologist & Workplace Wellness Expert",
      registrationLink: "#register",
      keyTopics: [
        "Mental health first aid",
        "Burnout prevention strategies",
        "Creating psychological safety"
      ]
    },
    {
      id: 3,
      title: "Strategic Workforce Planning Workshop",
      type: "workshop",
      date: "Feb 22, 2024",
      time: "9:00 AM EST",
      duration: "Full Day",
      category: "Strategic HR",
      description: "Interactive workshop on aligning workforce strategy with business objectives.",
      speaker: "Karen Lee",
      speakerBio: "Former CHRO & Workforce Strategy Consultant",
      registrationLink: "#register",
      keyTopics: [
        "Skills gap analysis",
        "Succession planning",
        "Talent pipeline development"
      ]
    },
    {
      id: 4,
      title: "Compensation & Benefits Innovation",
      type: "webinar",
      date: "Mar 7, 2024",
      time: "1:00 PM EST",
      duration: "75 min",
      category: "Total Rewards",
      description: "Explore innovative compensation models and benefits packages for the modern workforce.",
      speaker: "Richard Thompson",
      speakerBio: "Compensation Strategy Leader",
      registrationLink: "#register",
      keyTopics: [
        "Equity and transparency in pay",
        "Flexible benefits packages",
        "Global compensation strategies"
      ]
    }
  ];

  // Filter events based on active category
  const filteredPastEvents = activeCategory === 'all' 
    ? pastEvents 
    : pastEvents.filter(event => event.type === activeCategory);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-emerald-200/20' : 
              i % 3 === 1 ? 'bg-teal-200/20' : 'bg-green-200/20'
            }`}
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animation: 'floatParticle 20s ease-in-out infinite'
            }}
          />
        ))}
      </div>

      {/* Hero Section with Video */}
      <section className="max-w-7xl mx-auto px-4 mb-16 relative z-10 mt-16 py-16">
        <div className="text-center mb-12 animate-fade-in-up leading-10">
          <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4 animate-pulse-glow">
            <FaVideo className="text-emerald-600 animate-spin-slow" />
            <span className="text-sm font-semibold text-emerald-600">
              HRM LEARNING HUB
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 animate-text-reveal mt-10">
            OnTap Webinars & <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent animate-gradient-flow">Training</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay leading-10 mt-10">
            Expert-led sessions to elevate your HR skills, stay updated with industry trends, 
            and transform your organization's human resource management.
          </p>
        </div>

        {/* Featured Video Section */}
        <div className="bg-white rounded-2xl p-8 border border-emerald-200 shadow-lg mb-12 animate-slide-in-up hover:shadow-2xl transition-all duration-300 hover:animate-card-lift">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 animate-slide-in-left">
                <FaPlay className="text-emerald-600 animate-pulse" />
                Featured Session: The Importance of HRM
              </h2>
              <p className="text-gray-600 mb-6 animate-fade-in-delay">
                Watch this essential overview of how strategic Human Resource Management drives 
                organizational success in today's competitive business landscape. Learn about the 
                evolving role of HR from administrative to strategic partnership.
              </p>
              
              <div className="space-y-4 animate-buttons-stagger">
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-all hover:scale-105">
                  <FaRegCheckCircle className="text-emerald-600 animate-pulse" />
                  <span className="text-gray-700">Strategic HR alignment with business goals</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-all hover:scale-105">
                  <FaRegCheckCircle className="text-emerald-600 animate-pulse" />
                  <span className="text-gray-700">Talent management and development</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-all hover:scale-105">
                  <FaRegCheckCircle className="text-emerald-600 animate-pulse" />
                  <span className="text-gray-700">Building organizational culture</span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:inline-block lg:w-1/2 animate-slide-in-right">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-emerald-200/50 transition-all duration-300">
                {youtubeEmbed}
              </div>
   
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4 animate-pulse-glow">
              <FaLeaf className="text-emerald-600 animate-spin-slow" />
              <span className="text-sm font-semibold text-emerald-600">
                PAST SESSIONS ARCHIVE
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Past <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Webinars & Training</span>
            </h2>
            <p className="text-gray-600">
              Access recordings and materials from our previous expert-led sessions
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0 animate-buttons-stagger">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 active:scale-95 transform-gpu ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg animate-pulse-glow'
                    : 'bg-white text-gray-600 border border-gray-300 hover:border-emerald-300 hover:text-emerald-600'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Past Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPastEvents.map((event, index) => (
            <div 
              key={event.id} 
              className="bg-white rounded-2xl border-2 border-emerald-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 transform-gpu animate-stagger-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => {}}
            >
              <div className="p-6">
                {/* Event Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 animate-pulse-glow ${
                      event.type === 'webinar' ? 'bg-emerald-100 text-emerald-600 border border-emerald-200' :
                      event.type === 'training' ? 'bg-teal-100 text-teal-600 border border-teal-200' :
                      'bg-green-100 text-green-600 border border-green-200'
                    }`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors animate-text-reveal">
                      {event.title}
                    </h3>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-amber-500 mb-1 animate-pulse">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(event.rating) ? 'fill-current' : 'fill-gray-300'} />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700 animate-count-up">{event.rating}/5</span>
                  </div>
                </div>

                {/* Event Details */}
                <p className="text-gray-600 mb-4 animate-fade-in-delay">{event.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2 animate-slide-in-left">
                    <FaCalendarAlt className="animate-pulse" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                    <FaClock className="animate-pulse" />
                    <span>{event.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                    <FaUsers className="animate-pulse" />
                    <span className="font-semibold text-emerald-600">{event.attendees} attendees</span>
                  </div>
                </div>

                {/* Key Takeaways */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <FaBrain className="text-emerald-600 animate-pulse" />
                    Key Takeaways:
                  </h4>
                  <ul className="space-y-1">
                    {event.keyTakeaways.map((takeaway, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center gap-2 text-sm text-gray-600 animate-feature-reveal"
                        style={{ animationDelay: `${idx * 0.05}s` }}
                      >
                        <FaChevronRight className="text-emerald-600 text-xs group-hover:translate-x-1 transition-transform" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Speaker Info */}
                <div className="mb-4 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100 animate-pulse-border">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-emerald-600">Speaker:</span> {event.speaker}
                  </p>
                  <p className="text-sm text-gray-600">{event.speakerRole}</p>
                </div>

                {/* Testimonials */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                    <FaQuoteLeft className="text-emerald-400 animate-spin-slow" />
                    Participant Feedback
                  </h4>
                  {event.testimonials.map((testimonial, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gradient-to-r from-emerald-50/50 to-teal-50/50 p-3 rounded-lg border border-emerald-100 hover:border-emerald-300 transition-all hover:scale-105 group/testimonial"
                      onMouseEnter={() => {}}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={i < testimonial.rating ? 'text-amber-500 animate-pulse' : 'text-gray-300'} 
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-700 group-hover/testimonial:text-emerald-600 transition-colors">
                          {testimonial.name}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 italic">"{testimonial.comment}"</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Access Recording Button */}
                <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95 transform-gpu hover:animate-pulse-slow">
                  Access Recording & Materials
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4 animate-pulse-glow">
            <FaRegCalendarCheck className="text-emerald-600 animate-spin-slow" />
            <span className="text-sm font-semibold text-emerald-600">
              UPCOMING SESSIONS
            </span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-text-reveal">
            Register for <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent animate-gradient-flow">Upcoming Events</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            Join our live sessions and interact with industry experts in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingEvents.map((event, index) => (
            <div 
              key={event.id} 
              className="bg-white rounded-2xl border-2 border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform-gpu animate-stagger-card hover:animate-testimonial-bounce"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                {/* Event Type Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 animate-pulse-glow ${
                  event.type === 'webinar' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' :
                  event.type === 'training' ? 'bg-teal-50 text-teal-600 border border-teal-200' :
                  'bg-green-50 text-green-600 border border-green-200'
                }`}>
                  {event.type === 'webinar' ? <FaVideo className="animate-pulse" /> : <FaChalkboardTeacher className="animate-pulse" />}
                  <span>{event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
                </div>

                {/* Event Title & Category */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors animate-text-reveal">
                  {event.title}
                </h3>
                <span className="inline-block px-2 py-1 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-600 text-xs rounded-full mb-4 border border-emerald-200 animate-pulse">
                  {event.category}
                </span>

                {/* Event Date & Time */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-700 animate-slide-in-left">
                    <FaCalendarAlt className="text-emerald-400 animate-pulse" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                    <FaClock className="text-emerald-400 animate-pulse" />
                    <span>{event.time} • {event.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 animate-fade-in-delay">{event.description}</p>

                {/* Key Topics */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <FaBrain className="text-emerald-600 animate-pulse" />
                    Topics Covered:
                  </h4>
                  <ul className="space-y-1">
                    {event.keyTopics.slice(0, 2).map((topic, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center gap-2 text-xs text-gray-600 animate-feature-reveal"
                        style={{ animationDelay: `${idx * 0.05}s` }}
                      >
                        <FaChevronRight className="text-emerald-600 animate-pulse" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Speaker Info */}
                <div className="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100 mb-4 animate-pulse-border">
                  <p className="text-xs font-semibold text-emerald-700">{event.speaker}</p>
                  <p className="text-xs text-emerald-600">{event.speakerBio}</p>
                </div>

                {/* Register Button */}
                <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95 transform-gpu hover:animate-pulse-slow">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-2xl p-8 text-center text-white relative overflow-hidden animate-pulse-border">
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/20 rounded-full animate-float"
                style={{
                  width: `${Math.random() * 40 + 20}px`,
                  height: `${Math.random() * 40 + 20}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <FaCertificate className="text-3xl mx-auto mb-4 animate-bounce-slow" />
            <h3 className="text-2xl font-bold mb-2 animate-text-reveal">Get Certified in HRM</h3>
            <p className="mb-6 max-w-2xl mx-auto animate-fade-in-delay">
              Complete our webinar series and earn a Professional HRM Certificate recognized by industry leaders
            </p>
            <button className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 transform-gpu hover:animate-pulse-slow">
              Learn About Certification
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-3xl mx-auto px-4 mb-16 relative z-10">
        <div className="bg-white rounded-2xl p-8 border-2 border-emerald-200 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:animate-card-lift">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4 animate-pulse-glow">
            <FaRocket className="text-emerald-600 animate-spin-slow" />
            <span className="text-sm font-semibold text-emerald-600">
              STAY UPDATED
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-4 animate-text-reveal">
            Stay Updated with HRM Insights
          </h3>
          <p className="text-gray-600 mb-6 animate-fade-in-delay">
            Get notified about new webinars, training sessions, and exclusive HR resources
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-buttons-stagger">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-all"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95 transform-gpu hover:animate-pulse-slow">
              Subscribe
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4 animate-pulse">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
    <FooterComponent/>
    </>
  );
};

export default EventsPage;