import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import logoold from "@/assets/logonew.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-[#0d0d0d]/95 to-[#1a1a1a]/95 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-gradient-to-r from-[#101010]/60 to-[#1c1c1c]/60 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logoold}
              alt="PTRinfraCons"
              className="h-16 w-auto object-contain"
            />
            <div className="text-2xl font-heading font-bold bg-gradient-to-r from-[#FFD700] to-[#FFB347] text-transparent bg-clip-text">
              PTRinfraCons
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-[#FFD700]" // gold active color
                    : "text-gray-200 hover:text-[#FFD700]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="secondary"
              size="sm"
              className="bg-[#FFD700] hover:bg-[#ffcc33] text-black font-semibold shadow-md transition-all"
            >
              <Link to="/enquire">Enquire Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in bg-black/90 rounded-xl shadow-lg px-4 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-[#FFD700]"
                    : "text-gray-200 hover:text-[#FFD700]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="secondary"
              size="sm"
              className="w-full bg-[#FFD700] hover:bg-[#ffcc33] text-black font-semibold"
            >
              <Link to="/enquire">Enquire Now</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
