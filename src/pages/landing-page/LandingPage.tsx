import ContactusComponent from "../../components/layout/contact/ContactusComponent"
import FaqsComponent from "../../components/layout/faqs/FaqsComponent"
import HeaderComponent from "../../components/layout/header/HeaderComponent"
import IntegrationsComponent from "../../components/layout/integrarions/IntegrationsComponent"
import NavbarComponent from "../../components/layout/navbar/NavbarComponent"
import PricingComponent from "../../components/layout/pricing/PricingComponent"
import RoadmapComponent from "../../components/layout/roadmap/RoadmapComponent"
import TestimonialsComponent from "../../components/layout/testimonials/TestimonialsComponent"

const LandingPage = () => {
  return (
    <div className="w-full h-screen">
      <NavbarComponent/> 
      <HeaderComponent/>
      <IntegrationsComponent/>
      <RoadmapComponent/>
      <PricingComponent/>
      <TestimonialsComponent/>
      <FaqsComponent/>
      <ContactusComponent/>

    </div>
  )
}

export default LandingPage
