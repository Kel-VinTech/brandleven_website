import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4">
              <span className="text-primary">Brand</span>leven
            </h3>
            <p className="text-background/70 text-sm leading-relaxed">
              We build high-converting websites and run data-driven ad campaigns that deliver measurable results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-background/70 text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Website Development</li>
              <li>E-commerce Design</li>
              <li>Landing Pages</li>
              <li>Facebook Ads</li>
              <li>Instagram Ads</li>
              <li>TikTok Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:07013832571" className="hover:text-primary transition-colors">07013832571</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info.kelvinleven@gmail.com" className="hover:text-primary transition-colors">info.kelvinleven@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Remote — Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
          © {new Date().getFullYear()} Brandleven. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
