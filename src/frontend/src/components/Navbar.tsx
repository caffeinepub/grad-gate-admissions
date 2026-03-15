import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import LeadPopup from "./LeadPopup";

const navLinks = [
  { label: "Home", to: "/", ocid: "nav.home_link" },
  { label: "About Us", to: "/about", ocid: "nav.about_link" },
  { label: "Services", to: "/services", ocid: "nav.services_link" },
  { label: "Universities", to: "/universities", ocid: "nav.universities_link" },
  { label: "Channel Partners", to: "/partners", ocid: "nav.partners_link" },
  { label: "Contact", to: "/contact", ocid: "nav.contact_link" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const { location } = useRouterState();
  const currentPath = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-navy shadow-navy border-b border-white/10"
            : "bg-brand-navy/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="bg-white rounded px-1 py-0.5">
                <img
                  src="/assets/uploads/ChatGPT_Image_Mar_4__2026__03_18_27_PM-removebg-preview-1.png"
                  alt="Grad-Gate Admissions"
                  style={{ height: "52px", width: "auto" }}
                  className="object-contain"
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  className={`px-3 py-2 rounded text-sm font-medium font-body transition-colors ${
                    currentPath === link.to
                      ? "text-brand-gold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button
                data-ocid="nav.cta_button"
                onClick={() => setPopupOpen(true)}
                className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-heading font-bold text-sm px-5 py-2 rounded-sm shadow-gold transition-all"
              >
                Book Free Counseling
              </Button>
            </div>

            <button
              type="button"
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-brand-navy border-t border-white/10">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 rounded text-sm font-medium font-body transition-colors ${
                    currentPath === link.to
                      ? "text-brand-gold bg-white/5"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                data-ocid="nav.cta_button"
                onClick={() => {
                  setMobileOpen(false);
                  setPopupOpen(true);
                }}
                className="mt-3 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-heading font-bold text-sm rounded-sm"
              >
                Book Free Counseling
              </Button>
            </div>
          </div>
        )}
      </header>

      <LeadPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}
