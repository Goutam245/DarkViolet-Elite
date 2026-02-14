import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card/40">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1 space-y-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="IT Partner" className="h-9 w-9 rounded-lg" />
            <span className="font-display font-bold text-lg text-foreground">
              IT <span className="gradient-text">Partner</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            A Gold Microsoft Partner since 2008, delivering enterprise IT solutions across 18 countries worldwide.
          </p>
          <div className="space-y-2 pt-2">
            <a href="mailto:sales@o365hq.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-4 h-4 text-primary" /> sales@o365hq.com
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" /> New York, NY
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-sm text-foreground mb-4">Services</h4>
          <ul className="space-y-2.5">
            {["IT Consulting", "Managed Services", "Cloud Migration", "Cybersecurity", "Backup & Recovery"].map((item) => (
              <li key={item}>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-display font-semibold text-sm text-foreground mb-4">Solutions</h4>
          <ul className="space-y-2.5">
            {["Microsoft 365", "Azure Infrastructure", "Security Suite", "SharePoint Online", "Teams & Collaboration"].map((item) => (
              <li key={item}>
                <Link to="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display font-semibold text-sm text-foreground mb-4">Company</h4>
          <ul className="space-y-2.5">
            {[
              { label: "About Us", to: "/" },
              { label: "Contact", to: "/contact" },
              { label: "Careers", to: "/" },
              { label: "Privacy Policy", to: "/" },
              { label: "Terms of Service", to: "/" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} IT Partner. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Gold Microsoft Partner · ISO 27001 Certified
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
