import { useState, useEffect, useRef } from "react";
import { 
  FaFileAlt, 
  FaChartLine, 
  FaUsers, 
  FaLightbulb, 
  FaDownload, 
  FaCalendarAlt,
  FaTimes,
  FaArrowRight,
  FaEye,
  FaBookOpen,
  FaRegClock,
  FaUserTie,
  FaRegBookmark,
  FaShareAlt,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaPrint,
  FaSearch
} from "react-icons/fa";
import FooterComponent from "../../components/layout/footer/FooterComponent";

type ResourceType = 'whitepaper' | 'casestudy';
type ResourceCategory = 'all' | 'technology' | 'recruitment' | 'engagement' | 'analytics' | 'leadership';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: ResourceType;
  category: ResourceCategory[];
  author: string;
  date: string;
  readTime: string;
  views: number;
  downloads: number;
  featured: boolean;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
  thumbnailColor: string;
}

const BlogPage = () => {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);
  
  const [resources] = useState<Resource[]>([
    {
      id: 1,
      title: "The Future of AI in HR Management",
      description: "Exploring how artificial intelligence is revolutionizing talent acquisition, employee engagement, and HR analytics. This comprehensive white paper examines the transformative impact of AI technologies on modern HR practices, from automated screening to predictive analytics for employee retention.",
      type: 'whitepaper',
      category: ['technology', 'analytics'],
      author: "Dr. Sarah Johnson",
      date: "2024-03-15",
      readTime: "15 min",
      views: 2450,
      downloads: 890,
      featured: true,
      content: [
        "Artificial Intelligence is transforming HR management by automating routine tasks, providing predictive analytics, and enhancing decision-making processes. The integration of AI technologies allows HR departments to shift from administrative functions to strategic business partners.",
        "Machine learning algorithms can analyze vast amounts of employee data to identify patterns in engagement, predict turnover risks, and optimize talent allocation. These predictive capabilities enable proactive interventions that can reduce turnover by up to 30% in organizations that implement them effectively.",
        "Natural Language Processing enables intelligent chatbots that handle employee queries 24/7, reducing HR workload and improving response times. These AI assistants can answer common questions about policies, benefits, and procedures, freeing HR professionals to focus on more complex, strategic issues.",
        "AI-powered recruitment tools can screen resumes, conduct initial interviews, and assess candidate fit based on historical hiring success data. These systems reduce unconscious bias by focusing on skills and qualifications rather than demographic characteristics, leading to more diverse and qualified candidate pools.",
        "The integration of AI in performance management allows for continuous, real-time feedback rather than traditional annual reviews. This approach provides employees with timely guidance for improvement and helps managers identify development opportunities throughout the year."
      ],
      keyTakeaways: [
        "AI adoption in HR can reduce administrative tasks by up to 70%",
        "Predictive analytics can forecast employee turnover with 85% accuracy",
        "AI-driven recruitment improves diversity by reducing unconscious bias"
      ],
      tags: ["AI", "HR Technology", "Automation", "Predictive Analytics"],
      thumbnailColor: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "TechCorp's Remote Work Transformation",
      description: "How a global tech company successfully implemented hybrid work models and increased productivity by 40%. This case study details the challenges, strategies, and measurable outcomes of TechCorp's transition to a flexible work environment.",
      type: 'casestudy',
      category: ['technology', 'engagement'],
      author: "Michael Chen",
      date: "2024-02-28",
      readTime: "12 min",
      views: 1870,
      downloads: 620,
      featured: true,
      content: [
        "TechCorp faced significant challenges in 2020 when transitioning to remote work, including communication breakdowns and decreased collaboration. The sudden shift revealed gaps in digital infrastructure and remote management capabilities that needed immediate attention.",
        "The company implemented a comprehensive hybrid work strategy with clear guidelines, dedicated collaboration tools, and regular check-ins. Leadership established core principles for remote work while allowing individual teams to adapt implementation based on their specific needs and functions.",
        "Productivity tracking showed a 40% increase in output after implementing AI-powered project management tools. The data revealed that employees were able to focus better without office distractions, and asynchronous work allowed for deeper concentration on complex tasks.",
        "Employee satisfaction surveys revealed a 35% improvement in work-life balance and job satisfaction. The flexibility to manage personal responsibilities alongside work commitments proved to be a significant factor in employee retention and engagement metrics.",
        "The company saved $2.3M annually in reduced office space and commuting subsidies. These cost savings were reinvested into employee development programs and improved technology infrastructure for remote collaboration."
      ],
      keyTakeaways: [
        "Clear communication protocols are essential for remote success",
        "Hybrid models require flexible technology infrastructure",
        "Regular virtual team-building maintains company culture"
      ],
      tags: ["Remote Work", "Productivity", "Hybrid Models", "Digital Transformation"],
      thumbnailColor: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Data-Driven Talent Acquisition Strategies",
      description: "Leveraging analytics to optimize recruitment processes and reduce time-to-hire by 65%. This white paper explores how organizations can transform their hiring practices through data analytics and predictive modeling.",
      type: 'whitepaper',
      category: ['analytics', 'recruitment'],
      author: "Emma Rodriguez",
      date: "2024-03-10",
      readTime: "18 min",
      views: 1560,
      downloads: 540,
      featured: false,
      content: [
        "Traditional recruitment processes often rely on intuition rather than data, leading to inconsistent hiring outcomes. This white paper examines how data-driven approaches can create more objective, efficient, and effective talent acquisition systems.",
        "Data analytics can identify the most effective sourcing channels, reducing cost-per-hire by analyzing conversion rates. By tracking candidates from initial contact through to hiring, organizations can allocate resources to the channels that yield the highest quality candidates at the lowest cost.",
        "Predictive models assess candidate success based on historical performance data of similar hires. These models consider factors beyond resumes and interviews, including skills assessments, behavioral data, and cultural fit indicators to predict long-term success.",
        "Automated screening tools reduce time spent reviewing resumes by 80%, allowing recruiters to focus on strategic tasks. This efficiency gain enables HR teams to build stronger relationships with candidates and hiring managers while reducing time-to-fill metrics.",
        "Continuous feedback loops improve algorithm accuracy over time, creating a self-improving recruitment system. As more data is collected about hiring outcomes, the system becomes better at identifying the characteristics that predict success within the organization."
      ],
      keyTakeaways: [
        "Data-driven hiring reduces time-to-hire by 65% on average",
        "Quality of hire improves by 30% with predictive analytics",
        "Recruiter productivity increases by allowing focus on high-value tasks"
      ],
      tags: ["Recruitment", "Analytics", "Talent Acquisition", "Data Science"],
      thumbnailColor: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      title: "Manufacturing Industry: Employee Retention Success",
      description: "Case study on how a manufacturing giant reduced turnover by 45% through engagement initiatives. This detailed analysis shows how traditional industries can adapt modern HR practices to improve retention and productivity.",
      type: 'casestudy',
      category: ['engagement', 'leadership'],
      author: "David Wilson",
      date: "2024-01-22",
      readTime: "14 min",
      views: 2180,
      downloads: 730,
      featured: false,
      content: [
        "A leading manufacturing company faced a 25% annual turnover rate, costing millions in recruitment and training. The high turnover was particularly concentrated among skilled technicians and mid-level supervisors, creating operational challenges and knowledge gaps.",
        "The company implemented a comprehensive engagement program including skills development, career pathing, and recognition systems. The program was designed with input from employees at all levels to ensure it addressed their specific needs and concerns about career development.",
        "Regular pulse surveys identified pain points and allowed for quick interventions before employees decided to leave. The surveys revealed that lack of growth opportunities and poor work-life balance were the primary drivers of turnover in the manufacturing environment.",
        "Mentorship programs and clear promotion paths gave employees visibility into their growth potential. The company created transparent career ladders that showed employees exactly what skills and experience were needed to advance within the organization.",
        "After 18 months, turnover reduced to 14%, saving $4.2M annually in replacement costs. The improved retention also led to higher productivity as experienced employees remained with the company and could mentor newer team members."
      ],
      keyTakeaways: [
        "Regular feedback mechanisms prevent disengagement",
        "Clear career paths are crucial for retention",
        "Manufacturing industries can successfully implement modern HR practices"
      ],
      tags: ["Retention", "Engagement", "Manufacturing", "Leadership"],
      thumbnailColor: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "The ROI of Employee Development Programs",
      description: "Quantifying the financial impact of training and development initiatives on organizational performance. This research paper provides a framework for calculating and maximizing return on investment in employee development.",
      type: 'whitepaper',
      category: ['leadership'],
      author: "Dr. Lisa Thompson",
      date: "2024-03-05",
      readTime: "20 min",
      views: 1320,
      downloads: 480,
      featured: false,
      content: [
        "Traditional views of training as a cost center are shifting to recognition of development as a strategic investment. This white paper demonstrates how organizations can measure and communicate the financial benefits of employee development programs.",
        "Companies with comprehensive development programs see 34% higher retention rates and 24% higher profitability. The research shows that investment in employee growth creates a virtuous cycle where skilled employees drive innovation, which in turn creates more opportunities for development.",
        "Skill development directly correlates with innovation output, with trained employees generating 3x more patent applications. The ability to apply new skills to solve business problems is a key driver of competitive advantage in knowledge-intensive industries.",
        "The average return on training investment is 353%, with high-performing companies achieving over 500% ROI. These returns come from multiple sources including increased productivity, reduced errors, improved customer satisfaction, and enhanced innovation capabilities.",
        "Digital learning platforms reduce training costs by 70% while increasing accessibility and completion rates. The scalability of digital platforms allows organizations to provide consistent, high-quality training to geographically dispersed teams without the costs associated with traditional classroom training."
      ],
      keyTakeaways: [
        "Development programs yield an average 353% ROI",
        "Trained employees drive innovation and revenue growth",
        "Digital platforms make training scalable and cost-effective"
      ],
      tags: ["Training", "Development", "ROI", "Leadership"],
      thumbnailColor: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Healthcare: Implementing AI for Workforce Management",
      description: "How a hospital network used AI to optimize staff scheduling and reduce burnout. This case study explores the practical application of AI in healthcare workforce management and its impact on both employee wellbeing and patient care.",
      type: 'casestudy',
      category: ['technology', 'analytics'],
      author: "Dr. Robert Kim",
      date: "2024-02-15",
      readTime: "16 min",
      views: 1890,
      downloads: 610,
      featured: true,
      content: [
        "A major hospital network faced chronic understaffing and nurse burnout, leading to patient safety concerns. The traditional scheduling system could not adequately account for fluctuations in patient volume, staff availability, and required skill mixes.",
        "AI algorithms analyzed historical patient volume, staff availability, and skill requirements to create optimal schedules. The system considered dozens of variables including staff preferences, certification requirements, continuity of care needs, and legal compliance requirements.",
        "The system reduced overtime by 35% while maintaining adequate staffing levels for peak periods. By better matching staff availability with patient needs, the hospital was able to reduce reliance on expensive agency staff and voluntary overtime shifts.",
        "Nurse satisfaction improved by 42%, and burnout rates dropped from 38% to 19%. The more predictable schedules and better work-life balance contributed to improved mental health outcomes for healthcare workers in a high-stress environment.",
        "Patient satisfaction scores increased by 28%, correlating with better staff morale and continuity of care. When nurses worked more consistent schedules with the same patient populations, they developed stronger therapeutic relationships and provided more personalized care."
      ],
      keyTakeaways: [
        "AI scheduling reduces overtime costs while improving staff satisfaction",
        "Healthcare staffing requires sophisticated predictive modeling",
        "Technology can directly impact both employee wellbeing and patient outcomes"
      ],
      tags: ["Healthcare", "AI", "Scheduling", "Workforce Management"],
      thumbnailColor: "from-cyan-500 to-blue-500"
    },
    {
      id: 7,
      title: "Building Inclusive Workplaces Through Data",
      description: "Using analytics to identify and address unconscious bias in hiring and promotion. This research paper provides evidence-based strategies for creating more equitable workplaces through data-driven approaches.",
      type: 'whitepaper',
      category: ['analytics', 'recruitment'],
      author: "Maria Garcia",
      date: "2024-03-01",
      readTime: "17 min",
      views: 1540,
      downloads: 520,
      featured: false,
      content: [
        "Unconscious bias in hiring and promotion decisions often goes undetected without data analysis. This paper demonstrates how organizations can use analytics to identify patterns of bias that may not be apparent through casual observation or anecdotal evidence.",
        "Algorithms can flag patterns suggesting bias in interview evaluations, promotion rates, and compensation decisions. By analyzing decision data across demographic groups, organizations can identify disparities that may indicate biased processes or outcomes.",
        "Companies using bias-detection tools see 40% improvement in diversity hiring and 25% reduction in gender pay gaps. These tools provide objective metrics that help organizations track progress toward diversity, equity, and inclusion goals over time.",
        "Regular diversity analytics reports help organizations track progress and identify areas needing intervention. These reports should include both representation metrics (who is in the organization) and experience metrics (how different groups experience the workplace).",
        "Inclusive workplaces show 35% higher innovation rates and 19% better financial performance. The diversity of perspectives in inclusive organizations leads to better problem-solving, more creative solutions, and better understanding of diverse customer needs."
      ],
      keyTakeaways: [
        "Data analysis is essential for identifying hidden biases",
        "Diverse companies outperform homogeneous ones financially",
        "Regular monitoring ensures sustained progress on DEI goals"
      ],
      tags: ["Diversity", "Inclusion", "Analytics", "Bias Detection"],
      thumbnailColor: "from-pink-500 to-rose-500"
    },
    {
      id: 8,
      title: "Retail Success: Gamification in Employee Training",
      description: "How a retail chain increased training completion rates from 45% to 92% using gamification. This case study explores the application of game design principles to employee learning and development in a retail environment.",
      type: 'casestudy',
      category: ['engagement', 'technology'],
      author: "James Wilson",
      date: "2024-01-30",
      readTime: "11 min",
      views: 1670,
      downloads: 580,
      featured: false,
      content: [
        "A national retail chain struggled with low training completion rates, affecting customer service quality. Traditional e-learning modules had low engagement, particularly among frontline retail staff who preferred interactive, hands-on learning approaches.",
        "The company implemented a gamified learning platform with points, badges, and leaderboards. The platform transformed compliance training and product knowledge modules into interactive challenges that rewarded progress and mastery rather than just completion.",
        "Completion rates soared from 45% to 92% within three months of implementation. The competitive elements and immediate feedback provided by the gamified system created intrinsic motivation that was lacking in traditional training approaches.",
        "Knowledge retention improved by 65%, as measured by post-training assessments. The spaced repetition and interactive testing features of the gamified platform helped employees retain information much more effectively than passive video or text-based training.",
        "Customer satisfaction scores increased by 31% directly correlating with better-trained staff. When employees had better product knowledge and service skills, they were more confident in assisting customers, leading to improved shopping experiences and higher sales conversion rates."
      ],
      keyTakeaways: [
        "Gamification dramatically improves engagement with training content",
        "Competitive elements motivate participation and completion",
        "Better-trained employees directly impact customer satisfaction"
      ],
      tags: ["Gamification", "Training", "Retail", "Engagement"],
      thumbnailColor: "from-amber-500 to-yellow-500"
    }
  ]);

  const itemsPerPage = 6;

  // Filter resources based on category and search
  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category.includes(activeCategory);
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedResources = filteredResources.slice(startIndex, startIndex + itemsPerPage);

  const categories = [
    { id: 'all', name: 'All Resources', icon: FaFileAlt, count: resources.length },
    { id: 'technology', name: 'HR Technology', icon: FaChartLine, count: resources.filter(r => r.category.includes('technology')).length },
    { id: 'recruitment', name: 'Recruitment', icon: FaUserTie, count: resources.filter(r => r.category.includes('recruitment')).length },
    { id: 'engagement', name: 'Employee Engagement', icon: FaUsers, count: resources.filter(r => r.category.includes('engagement')).length },
    { id: 'analytics', name: 'HR Analytics', icon: FaLightbulb, count: resources.filter(r => r.category.includes('analytics')).length },
    { id: 'leadership', name: 'Leadership', icon: FaUsers, count: resources.filter(r => r.category.includes('leadership')).length }
  ];

  const openResource = (resource: Resource) => {
    setSelectedResource(resource);
    document.body.style.overflow = 'hidden';
  };

  const closeResource = () => {
    setSelectedResource(null);
    document.body.style.overflow = 'auto';
  };

  const toggleBookmark = (id: number) => {
    setBookmarkedIds(prev => 
      prev.includes(id) 
        ? prev.filter(bookmarkId => bookmarkId !== id)
        : [...prev, id]
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Close popup on Escape key or click outside
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeResource();
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeResource();
      }
    };
    
    if (selectedResource) {
      window.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedResource]);

  // Stats
  const stats = {
    totalResources: resources.length,
    whitepapers: resources.filter(r => r.type === 'whitepaper').length,
    caseStudies: resources.filter(r => r.type === 'casestudy').length,
    totalViews: resources.reduce((sum, r) => sum + r.views, 0),
    totalDownloads: resources.reduce((sum, r) => sum + r.downloads, 0)
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-emerald-50/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 animate-gradient">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <FaBookOpen className="h-5 w-5 text-white mr-2" />
              <span className="text-sm font-semibold text-white">HRM RESOURCES LIBRARY</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              HRM Insights & Research
              <span className="block bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
                White Papers & Case Studies
              </span>
            </h1>
            
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Discover comprehensive research, real-world case studies, and actionable insights 
              to transform your HR practices and drive organizational success.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search white papers, case studies, or topics..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-white/30 focus:border-white focus:ring-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:shadow-2xl focus:shadow-emerald-200/50 transition-all duration-300"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-300/50 transition-all duration-300">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              {stats.totalResources}
            </div>
            <div className="font-semibold text-gray-800 mt-2">Total Resources</div>
            <div className="text-sm text-gray-600 mt-1">Whitepapers & Case Studies</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {stats.whitepapers}
            </div>
            <div className="font-semibold text-gray-800 mt-2">White Papers</div>
            <div className="text-sm text-gray-600 mt-1">In-depth Research</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {stats.caseStudies}
            </div>
            <div className="font-semibold text-gray-800 mt-2">Case Studies</div>
            <div className="text-sm text-gray-600 mt-1">Real-world Examples</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
              {stats.totalDownloads.toLocaleString()}+
            </div>
            <div className="font-semibold text-gray-800 mt-2">Total Downloads</div>
            <div className="text-sm text-gray-600 mt-1">Industry Professionals</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Browse by Category</h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <FaFilter className="size-4" />
              <span className="text-sm">{filteredResources.length} resources</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id as ResourceCategory);
                  setCurrentPage(1);
                }}
                className={`p-4 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-emerald-300 hover:shadow-lg'
                }`}
              >
                <category.icon className={`size-6 mb-2 ${
                  activeCategory === category.id ? 'text-white' : 'text-emerald-600'
                }`} />
                <span className="text-sm font-medium text-center">{category.name}</span>
                <span className={`text-xs mt-1 ${
                  activeCategory === category.id ? 'text-emerald-100' : 'text-gray-500'
                }`}>
                  {category.count} items
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Resources</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {resources
              .filter(r => r.featured)
              .map((resource) => (
                <div 
                  key={resource.id}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 cursor-pointer">
                    <div 
                      className={`h-2 bg-gradient-to-r ${resource.thumbnailColor}`}
                    ></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          resource.type === 'whitepaper'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {resource.type === 'whitepaper' ? 'WHITEPAPER' : 'CASE STUDY'}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(resource.id);
                          }}
                          className={`p-2 rounded-lg transition-colors ${
                            bookmarkedIds.includes(resource.id)
                              ? 'text-amber-500 bg-amber-50'
                              : 'text-gray-400 hover:text-amber-500 hover:bg-amber-50'
                          }`}
                        >
                          <FaRegBookmark className="size-5" />
                        </button>
                      </div>
                      
                      <h3 
                        onClick={() => openResource(resource)}
                        className="text-xl font-bold text-gray-800 mb-3 hover:text-emerald-600 transition-colors cursor-pointer line-clamp-2"
                      >
                        {resource.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <FaUserTie className="size-4 mr-1" />
                          <span className="truncate">{resource.author}</span>
                        </div>
                        <div className="flex items-center">
                          <FaRegClock className="size-4 mr-1" />
                          <span>{resource.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <FaEye className="size-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">{resource.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center">
                            <FaDownload className="size-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">{resource.downloads.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => openResource(resource)}
                          className="flex items-center space-x-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl hover:bg-emerald-100 transition-colors group"
                        >
                          <span className="text-sm font-medium">Read Now</span>
                          <FaArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Resources */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">All Resources</h2>
            <div className="flex items-center space-x-4">
              <select 
                className="px-4 py-2 border border-gray-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:border-emerald-500"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value as ResourceCategory)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {paginatedResources.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-flex p-4 rounded-2xl bg-gray-100 mb-4">
                <FaSearch className="size-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {paginatedResources.map((resource) => (
                  <div 
                    key={resource.id}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 cursor-pointer h-full">
                      <div 
                        className={`h-1 bg-gradient-to-r ${resource.thumbnailColor}`}
                      ></div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            resource.type === 'whitepaper'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-emerald-100 text-emerald-700'
                          }`}>
                            {resource.type === 'whitepaper' ? 'WHITEPAPER' : 'CASE STUDY'}
                          </span>
                          <span className="text-xs text-gray-500">{formatDate(resource.date)}</span>
                        </div>
                        
                        <h3 
                          onClick={() => openResource(resource)}
                          className="text-lg font-bold text-gray-800 mb-3 hover:text-emerald-600 transition-colors cursor-pointer line-clamp-2"
                        >
                          {resource.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                          {resource.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <FaUserTie className="size-3 mr-1" />
                            <span className="truncate">{resource.author}</span>
                          </div>
                          <div className="flex items-center">
                            <FaRegClock className="size-3 mr-1" />
                            <span>{resource.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {resource.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <button
                          onClick={() => openResource(resource)}
                          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-colors group"
                        >
                          <FaBookOpen className="size-4" />
                          <span className="text-sm font-medium">Read {resource.type === 'whitepaper' ? 'White Paper' : 'Case Study'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-4 mt-8">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-xl ${
                      currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FaChevronLeft className="size-5" />
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded-xl transition-colors ${
                          currentPage === pageNum
                            ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-xl ${
                      currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FaChevronRight className="size-5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Resource Popup Modal - FIXED VISIBLE VERSION */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeResource}
          />
          
          {/* Modal Container - Always visible and centered */}
          <div className="flex items-center justify-center min-h-screen p-4">
            <div 
              ref={modalRef}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[85vh] my-8 animate-slide-in-up flex flex-col overflow-hidden"
            >
              {/* Header - Fixed */}
              <div className={`p-6 md:p-8 ${selectedResource.type === 'whitepaper' ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : 'bg-gradient-to-r from-emerald-600 to-teal-500'} flex-shrink-0`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 min-w-0 mr-4">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                      <span className="text-sm font-semibold text-white">
                        {selectedResource.type === 'whitepaper' ? 'WHITE PAPER' : 'CASE STUDY'}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2 break-words">
                      {selectedResource.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 text-white/90">
                      <div className="flex items-center">
                        <FaUserTie className="size-4 mr-2" />
                        <span className="text-sm">{selectedResource.author}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="size-4 mr-2" />
                        <span className="text-sm">{formatDate(selectedResource.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <FaRegClock className="size-4 mr-2" />
                        <span className="text-sm">{selectedResource.readTime} read</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={closeResource}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex-shrink-0"
                  >
                    <FaTimes className="size-5 text-white" />
                  </button>
                </div>
                
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {selectedResource.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark(selectedResource.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        bookmarkedIds.includes(selectedResource.id)
                          ? 'text-amber-300 bg-white/20'
                          : 'text-white/80 hover:text-amber-300 hover:bg-white/20'
                      }`}
                    >
                      <FaRegBookmark className="size-5" />
                    </button>
                    <button className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors">
                      <FaShareAlt className="size-5" />
                    </button>
                    <button className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors">
                      <FaPrint className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6 md:p-8">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Executive Summary</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedResource.description}
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Key Content</h3>
                    <div className="space-y-4">
                      {selectedResource.content.map((paragraph, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3"></div>
                          <p className="text-gray-600 leading-relaxed">{paragraph}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <FaStar className="size-5 text-amber-500 mr-2" />
                      Key Takeaways
                    </h3>
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6">
                      <ul className="space-y-3">
                        {selectedResource.keyTakeaways.map((takeaway, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-white text-xs font-bold">{index + 1}</span>
                            </div>
                            <span className="text-gray-700 font-medium">{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-center mb-4">
                        <FaEye className="size-5 text-gray-600 mr-2" />
                        <span className="text-sm font-medium text-gray-600">Total Views</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-800">{selectedResource.views.toLocaleString()}</div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-center mb-4">
                        <FaDownload className="size-5 text-gray-600 mr-2" />
                        <span className="text-sm font-medium text-gray-600">Downloads</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-800">{selectedResource.downloads.toLocaleString()}</div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-center mb-4">
                        <FaRegClock className="size-5 text-gray-600 mr-2" />
                        <span className="text-sm font-medium text-gray-600">Reading Time</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-800">{selectedResource.readTime}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer - Fixed */}
              <div className="border-t border-gray-200 p-6 bg-white flex-shrink-0">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-gray-600">
                    Looking for more insights? Browse our full library of HR resources.
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={closeResource}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors"
                    >
                      Close
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-300/50 transition-all duration-300 flex items-center space-x-2">
                      <FaDownload className="size-4" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Get Exclusive HR Insights</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Subscribe to receive curated white papers, case studies, and industry reports directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your work email address" 
              className="flex-grow px-5 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-500"
            />
            <button className="px-6 py-3 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent/>
    </>
  );
};

export default BlogPage;