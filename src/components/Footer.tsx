import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/Logo New-06.png" alt="DOT DESIGN" className="h-14 sm:h-16" />
            </div>
            <p className="text-sm sm:text-sm opacity-90 leading-relaxed">
              DOT DESIGN is a designing and marketing organization established to meet all kinds of designing and marketing necessities for your brand.
            </p>
            <p className="text-sm sm:text-sm font-semibold text-primary">8+ Years of Experience</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-sm sm:text-sm opacity-90 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm sm:text-sm opacity-90 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm sm:text-sm opacity-90 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm sm:text-sm opacity-90 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-4">Our Services</h3>
            <ul className="space-y-2 sm:space-y-2 text-sm sm:text-sm opacity-90">
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
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-4">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-3">
              <li className="flex items-start gap-2 text-sm sm:text-sm opacity-90">
                <Phone size={18} className="mt-0.5 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                <div>
                  <div>+918050891802</div>
                  <div>+919611710816</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-sm opacity-90">
                <Mail size={18} className="mt-0.5 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                <span>dotdesign06@gmail.com</span>
              </li>
            </ul>
            
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.instagram.com/dot.design06?igsh=MTQ0NHEzcTdrcG1rdw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
              >
                <Instagram size={20} className="text-primary" />
              </a>
              <a
                href="https://www.facebook.com/share/1Gf5XACLPz/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
              >
                <Facebook size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 sm:mt-8 pt-7 sm:pt-8 text-center">
          <p className="text-sm sm:text-sm opacity-90">
            © {new Date().getFullYear()} DOT DESIGN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
