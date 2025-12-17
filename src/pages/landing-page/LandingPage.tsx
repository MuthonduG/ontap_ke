import HeaderComponent from "../../components/layout/header/HeaderComponent"
import NavbarComponent from "../../components/layout/navbar/NavbarComponent"

const LandingPage = () => {
  return (
    <div className="w-full h-screen">
      <NavbarComponent/> 
      <HeaderComponent/>
    </div>
  )
}

export default LandingPage
