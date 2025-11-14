import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={logo} alt="DOT DESIGN" className="h-8 w-8 sm:h-10 sm:w-10" />
              <span className="text-lg sm:text-xl font-bold">DOT DESIGN</span>
            </div>
            <p className="text-xs sm:text-sm opacity-90">
              DOT DESIGN is a designing and marketing organization established to meet all kinds of designing and marketing necessities for your brand.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-primary">8+ Years of Experience</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-90 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-90 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Our Services</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm opacity-90">
              <li>Graphic Designing</li>
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>Corporate Ad Film</li>
              <li>WhatsApp API</li>
              <li>Printing Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-xs sm:text-sm opacity-90">
                <Phone size={16} className="mt-0.5 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                <div>
                  <div>+918050891802</div>
                  <div>+919611710816</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm opacity-90">
                <Mail size={16} className="mt-0.5 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                <span>dotdesign06@gmail.com</span>
              </li>
            </ul>
            
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/dot.design06?igsh=MTQ0NHEzcTdrcG1rdw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
              >
                <Instagram size={20} className="text-primary" />
              </a>
              <a
                href="https://www.facebook.com/share/1Gf5XACLPz/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
              >
                <Facebook size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm opacity-90">
            © {new Date().getFullYear()} DOT DESIGN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
