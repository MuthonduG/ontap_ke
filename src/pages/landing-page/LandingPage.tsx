import HeaderComponent from "../../components/layout/header/HeaderComponent"
import IntegrationsComponent from "../../components/layout/integrarions/IntegrationsComponent"
import NavbarComponent from "../../components/layout/navbar/NavbarComponent"

const LandingPage = () => {
  return (
    <div className="w-full h-screen">
      <NavbarComponent/> 
      <HeaderComponent/>
      <IntegrationsComponent/>
    </div>
  )
}

export default LandingPage
