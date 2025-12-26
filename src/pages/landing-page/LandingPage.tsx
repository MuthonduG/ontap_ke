import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactusComponent from "../../components/layout/contact/ContactusComponent";
import FaqsComponent from "../../components/layout/faqs/FaqsComponent";
import FooterComponent from "../../components/layout/footer/FooterComponent";
import HeaderComponent from "../../components/layout/header/HeaderComponent";
import IntegrationsComponent from "../../components/layout/integrarions/IntegrationsComponent";
import PricingComponent from "../../components/layout/pricing/PricingComponent";
import RoadmapComponent from "../../components/layout/roadmap/RoadmapComponent";
import TestimonialsComponent from "../../components/layout/testimonials/TestimonialsComponent";
import { 
  FaHome,
  FaPuzzlePiece,
  FaRoad,
  FaCreditCard,
  FaStar,
  FaQuestionCircle,
  FaEnvelope,
  FaChevronUp,
  FaArrowDown
} from "react-icons/fa";

const LandingPage = () => {
  const location = useLocation();

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

  // Scroll to section programmatically
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without page reload
      window.history.pushState({}, '', `#${sectionId}`);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quick Navigation Links
  const quickNavSections = [
    { id: 'hero', label: 'Home', icon: FaHome },
    { id: 'integrations', label: 'Integrations', icon: FaPuzzlePiece },
    { id: 'roadmap', label: 'Roadmap', icon: FaRoad },
    { id: 'pricing', label: 'Pricing', icon: FaCreditCard },
    { id: 'testimonials', label: 'Testimonials', icon: FaStar },
    { id: 'faq', label: 'FAQ', icon: FaQuestionCircle },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <div className="w-full relative">
      {/* Quick Navigation (Fixed) */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-2 border border-emerald-200">
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
      <section id="hero" className="scroll-mt-24">
        <HeaderComponent />
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="scroll-mt-24">
        <IntegrationsComponent />
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="scroll-mt-24">
        <RoadmapComponent />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="scroll-mt-24">
        <PricingComponent />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="scroll-mt-24">
        <TestimonialsComponent />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-24">
        <FaqsComponent />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24">
        <ContactusComponent />
      </section>

      {/* Footer Section */}
      <section id="footer">
        <FooterComponent />
      </section>

    </div>
  );
};

export default LandingPage;