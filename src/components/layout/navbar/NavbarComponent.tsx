import type { ReactNode } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import NavLogo from "../../../assets/full_logo.png";

interface navProps {
  title: string;
  href: string;
}

const navList: navProps[] = [
  { title: "Home", href: "#" },
  { title: "Platform", href: "#" },
  { title: "Solutions", href: "#" },
  { title: "Resources", href: "#" },
  { title: "Pricing", href: "#" }
]

const NavbarComponent = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-3 border-b border-gray-200/50 bg-white/80 backdrop-blur-sm">
      
      {/* Enhanced Logo Container */}
      <div className="flex items-center space-x-3">
        <div className="relative group">
          {/* Outer glow ring */}
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
          
          {/* Animated gradient border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-teal-600 rounded-full animate-pulse-slow opacity-70"></div>
          
          {/* Main logo container */}
          <div className="relative flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-br from-white via-emerald-50 to-teal-50 shadow-lg">
            
            {/* Inner shine effect */}
            <div className="absolute top-0 left-1/4 w-2 h-4 bg-white/50 blur-sm transform -rotate-45"></div>
            
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.3)_0%,_transparent_70%)]"></div>
            
            {/* Logo with enhanced effects */}
            <img 
              src={NavLogo} 
              alt="Navigation Logo" 
              className="w-16 h-16 object-contain relative z-10 p-1.5 transition-transform duration-300 group-hover:scale-105" 
              style={{
                filter: `
                  drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))
                  drop-shadow(0 4px 8px rgba(255, 255, 255, 0.5))
                  drop-shadow(0 0 12px rgba(255, 255, 255, 0.3))
                  brightness(1.05)
                  contrast(1.1)
                `
              }}
            />
            
            {/* Floating particles effect */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-300 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-teal-300 rounded-full animate-bounce delay-150"></div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        {navList.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-gray-700 hover:text-emerald-600 font-medium text-sm tracking-wide transition-colors duration-200 relative group"
          >
            {item.title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex items-center space-x-4">
        <button className="hidden md:flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r  from-[#17ae9e]/80 to-[#0f766e]/70 text-white font-semibold text-sm hover:shadow-md hover:shadow-teal-300/70 transition-all duration-300 group">
          <span>Get Started</span>
          <FaRegArrowAltCircleRight className="size-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        
        {/* Mobile menu button */}
        <button className="md:hidden w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
          <div className="space-y-1">
            <div className="w-5 h-0.5 bg-gray-600"></div>
            <div className="w-5 h-0.5 bg-gray-600"></div>
            <div className="w-5 h-0.5 bg-gray-600"></div>
          </div>
        </button>
      </div>
    </nav>
  )
}

export default NavbarComponent