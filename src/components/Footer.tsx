import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const TikTokIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/brandleven?igsh=MWUyZGQ5ZmlzMmdndQ==", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/brandleven", label: "Facebook" },
  { icon: TikTokIcon, href: "#", label: "TikTok" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 text-2xl font-extrabold mb-4">
              <img src="/images/logo-icon.webp" alt="Brandleven logo" className="w-8 h-8 rounded-lg" width={32} height={32} decoding="async" />
              <span className="text-primary">Brandleven</span>
            </a>
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
                  <a
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-background/70 text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
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
                <a href="mailto:contactbrandleven@gmail.com" className="hover:text-primary transition-colors">contactbrandleven@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Remote — Worldwide</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-background/50 hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
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
