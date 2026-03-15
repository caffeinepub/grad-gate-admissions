import { Link } from "@tanstack/react-router";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Partner Login", href: "/partner-login" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-brand-navy text-white">
      <div className="h-1 bg-gradient-to-r from-brand-gold/40 via-brand-gold to-brand-gold/40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/assets/uploads/ChatGPT_Image_Mar_4__2026__03_18_27_PM-removebg-preview-1.png"
                alt="Grad-Gate Admissions"
                style={{ height: "48px", width: "auto" }}
                className="object-contain"
              />
            </div>
            <p className="text-white/60 text-sm font-body leading-relaxed mb-4">
              Your trusted gateway to India's top universities. Transparent,
              merit-based admissions support.
            </p>
            <p className="text-white/40 text-xs font-body">
              A Venture of Himagman Marketing Pvt. Ltd.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-brand-gold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Partner Universities", to: "/universities" },
                { label: "Channel Partners", to: "/partners" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-brand-gold text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-brand-gold mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-white/60 text-sm font-body">
                <Phone
                  size={14}
                  className="mt-0.5 text-brand-gold flex-shrink-0"
                />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-start gap-2.5 text-white/60 text-sm font-body">
                <Mail
                  size={14}
                  className="mt-0.5 text-brand-gold flex-shrink-0"
                />
                <span>info@gradgate.in</span>
              </li>
              <li className="flex items-start gap-2.5 text-white/60 text-sm font-body">
                <MapPin
                  size={14}
                  className="mt-0.5 text-brand-gold flex-shrink-0"
                />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-brand-gold mb-5">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-brand-gold text-sm font-body transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-body">
            © {year} Grad-Gate Admissions. All rights reserved. | Himagman
            Marketing Private Limited
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/50 text-xs font-body flex items-center gap-1 transition-colors"
          >
            Built with <Heart size={10} className="text-brand-gold" /> using
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
