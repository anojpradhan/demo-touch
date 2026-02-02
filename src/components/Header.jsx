// Header.jsx - Main Header Component
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin,
  Globe,
  BookOpen,
  GraduationCap,
  Users,
  Award,
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items with dropdown data
  const navItems = [
    {
      name: "Home",
      href: "/",
      hasDropdown: false,
    },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Career Counseling",
          href: "/services/career-counseling",
          icon: <Users className="w-4 h-4" />,
        },
        {
          name: "Visa Assistance",
          href: "/services/visa-assistance",
          icon: <Globe className="w-4 h-4" />,
        },
        {
          name: "University Selection",
          href: "/services/university-selection",
          icon: <GraduationCap className="w-4 h-4" />,
        },
        {
          name: "Application Support",
          href: "/services/application-support",
          icon: <BookOpen className="w-4 h-4" />,
        },
      ],
    },
    {
      name: "Test Preparation",
      href: "/test-preparation",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "IELTS",
          href: "/test-preparation/ielts",
          icon: <BookOpen className="w-4 h-4" />,
        },
        {
          name: "TOEFL",
          href: "/test-preparation/toefl",
          icon: <BookOpen className="w-4 h-4" />,
        },
        {
          name: "GRE",
          href: "/test-preparation/gre",
          icon: <BookOpen className="w-4 h-4" />,
        },
        {
          name: "GMAT",
          href: "/test-preparation/gmat",
          icon: <BookOpen className="w-4 h-4" />,
        },
        {
          name: "SAT",
          href: "/test-preparation/sat",
          icon: <BookOpen className="w-4 h-4" />,
        },
      ],
    },
    {
      name: "Study Abroad",
      href: "/study-abroad",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "USA",
          href: "/study-abroad/usa",
          icon: <Globe className="w-4 h-4" />,
        },
        {
          name: "UK",
          href: "/study-abroad/uk",
          icon: <Globe className="w-4 h-4" />,
        },
        {
          name: "Canada",
          href: "/study-abroad/canada",
          icon: <Globe className="w-4 h-4" />,
        },
        {
          name: "Australia",
          href: "/study-abroad/australia",
          icon: <Globe className="w-4 h-4" />,
        },
        {
          name: "Germany",
          href: "/study-abroad/germany",
          icon: <Globe className="w-4 h-4" />,
        },
        {
          name: "Other Countries",
          href: "/study-abroad/others",
          icon: <Globe className="w-4 h-4" />,
        },
      ],
    },
    {
      name: "About Us",
      href: "/about-us",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Our Story",
          href: "/about-us/story",
          icon: <Users className="w-4 h-4" />,
        },
        {
          name: "Our Team",
          href: "/about-us/team",
          icon: <Users className="w-4 h-4" />,
        },
        {
          name: "Success Stories",
          href: "/about-us/success-stories",
          icon: <Award className="w-4 h-4" />,
        },
        {
          name: "Testimonials",
          href: "/about-us/testimonials",
          icon: <Users className="w-4 h-4" />,
        },
      ],
    },
    {
      name: "Scholarships",
      href: "/scholarships",
      hasDropdown: false,
    },
  ];

  // Contact information
  const contactInfo = {
    phone: "+1 (555) 123-4567",
    email: "info@touchconsultancy.com",
    address: "123 Education Street, Knowledge City",
  };

  const handleDropdownToggle = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-red-800 text-white hidden md:block">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center hover:text-gray-200 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center hover:text-gray-200 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center group">
                <div className="relative">
                  <span className="text-3xl md:text-4xl font-bold text-red-700 tracking-tight">
                    TOUCH
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-red-600 transition-all duration-300"></div>
                </div>
                <div className="ml-2">
                  <span className="text-xs md:text-sm font-semibold text-gray-700 tracking-wider block">
                    CONSULTANCY
                  </span>
                  <div className="h-0.5 w-full bg-red-500 mt-0.5"></div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="px-4 py-2 text-gray-800 hover:text-red-700 font-medium transition-colors relative group"
                  >
                    {item.name}
                    {/* Animated underline */}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-red-600 group-hover:w-3/4 transition-all duration-300"></span>
                  </a>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 min-w-55 py-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors group/item"
                          >
                            <span className="mr-3 text-red-600">
                              {dropdownItem.icon}
                            </span>
                            <span>{dropdownItem.name}</span>
                            <span className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity">
                              <ChevronDown className="w-4 h-4 transform rotate-90" />
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Contact Us Button */}
              <a
                href="/contact"
                className="ml-4 px-6 py-2.5 bg-linear-to-r from-red-700 to-red-600 text-white font-semibold rounded-lg hover:from-red-800 hover:to-red-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-red-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? "max-h-200 py-4" : "max-h-0"
            }`}
          >
            <div className="border-t border-gray-100 pt-4">
              {navItems.map((item) => (
                <div key={item.name} className="mb-1">
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      className="block py-3 px-4 text-gray-800 hover:text-red-700 font-medium transition-colors w-full"
                      onClick={handleNavClick}
                    >
                      {item.name}
                    </a>
                    {item.hasDropdown && (
                      <button
                        className="p-3 text-gray-500 hover:text-red-700 transition-colors"
                        onClick={() => handleDropdownToggle(item.name)}
                        aria-label={`Toggle ${item.name} dropdown`}
                      >
                        {activeDropdown === item.name ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name ? "max-h-125" : "max-h-0"
                      }`}
                    >
                      <div className="bg-gray-50 rounded-lg ml-4 mr-2 my-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center py-3 px-6 text-gray-700 hover:text-red-700 hover:bg-red-50 transition-colors border-b border-gray-100 last:border-b-0"
                            onClick={handleNavClick}
                          >
                            <span className="mr-3 text-red-600">
                              {dropdownItem.icon}
                            </span>
                            <span>{dropdownItem.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Contact Button */}
              <div className="mt-4 px-4">
                <a
                  href="/contact"
                  className="block w-full text-center py-3 bg-linear-to-r from-red-700 to-red-600 text-white font-semibold rounded-lg hover:from-red-800 hover:to-red-700 transition-all duration-300 shadow-md"
                  onClick={handleNavClick}
                >
                  Contact Us
                </a>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-6 px-4 pt-4 border-t border-gray-200">
                <div className="space-y-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center text-gray-700 hover:text-red-700"
                  >
                    <Phone className="w-5 h-5 mr-3 text-red-600" />
                    <span>{contactInfo.phone}</span>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center text-gray-700 hover:text-red-700"
                  >
                    <Mail className="w-5 h-5 mr-3 text-red-600" />
                    <span>{contactInfo.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
