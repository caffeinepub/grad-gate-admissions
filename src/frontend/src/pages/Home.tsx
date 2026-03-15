import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  CheckCircle,
  ChevronRight,
  GraduationCap,
  Handshake,
} from "lucide-react";
import { useEffect, useState } from "react";
import LeadPopup from "../components/LeadPopup";

const universities = [
  "Amity University",
  "Lovely Professional University",
  "Sharda University",
  "Manipal University",
  "Symbiosis International",
  "Christ University",
  "VIT University",
  "SRM University",
  "UPES Dehradun",
  "Chandigarh University",
  "KIIT University",
  "BML Munjal University",
];

// Static doubled array for the marquee (no runtime state)
const marqueeItems = [
  ...universities.map((name) => ({ name, key: `a-${name}` })),
  ...universities.map((name) => ({ name, key: `b-${name}` })),
];

const whyCards = [
  {
    icon: <CheckCircle size={32} className="text-brand-gold" />,
    title: "Zero Donation",
    desc: "Strictly merit-based admissions. We never facilitate donation-based seats or unethical practices.",
  },
  {
    icon: <Building2 size={32} className="text-brand-gold" />,
    title: "50+ Universities",
    desc: "Direct tie-ups with India's top private and deemed universities across all disciplines.",
  },
  {
    icon: <Handshake size={32} className="text-brand-gold" />,
    title: "Direct Tie-Ups",
    desc: "Authorized channel partner — no middlemen, no hidden fees. Straight from the university.",
  },
];

const serviceItems = [
  {
    title: "Career Counseling",
    desc: "Personal career mapping and university selection tailored to your profile.",
  },
  {
    title: "Direct Admission",
    desc: "Authorized entry into B.Tech, MBA, MBBS, BBA at top private universities.",
  },
  {
    title: "Education Finance",
    desc: "Strategic banking partnerships for seamless education loan processing.",
  },
  {
    title: "Scholarships",
    desc: "Identification and application support for merit-based financial aid.",
  },
];

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPopupOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{ paddingTop: "4rem" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-student.dim_1200x700.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-brand-navy/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-navy/40" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-8">
            <GraduationCap size={14} className="text-brand-gold" />
            <span className="text-brand-gold text-xs font-heading font-semibold uppercase tracking-widest">
              A Venture of Himagman Marketing Pvt. Ltd.
            </span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
            Your Gateway to
            <br />
            <span className="text-brand-gold">India's Top Universities.</span>
          </h1>

          <p className="font-body text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Transparent, Merit-Based Admissions &amp; Education Loan Support.
            Zero Donation. Direct Tie-Ups. Pan-India Network.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              data-ocid="hero.primary_button"
              onClick={() => setPopupOpen(true)}
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-heading font-bold text-base px-8 py-3 rounded-sm shadow-gold"
            >
              Book Free Counseling
            </Button>
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10 font-heading font-semibold text-base px-8 py-3 rounded-sm bg-transparent"
              >
                Explore Services <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <div className="w-px h-8 bg-white/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-bounce" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-brand-navy border-t border-brand-gold/30 border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-3">
          <div className="w-8 h-px bg-brand-gold/50" />
          <p className="text-white/70 text-sm font-body text-center">
            <span className="text-brand-gold font-semibold">A Venture of</span>{" "}
            Himagman Marketing Private Limited — Registered Education
            Consultancy
          </p>
          <div className="w-8 h-px bg-brand-gold/50" />
        </div>
      </div>

      {/* Why Grad-Gate */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-gold font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Our Promise
            </p>
            <h2 className="font-heading font-black text-brand-navy text-3xl sm:text-4xl">
              Why Choose Grad-Gate?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="border border-border rounded-sm p-8 hover:shadow-navy hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="mb-5">{card.icon}</div>
                <h3 className="font-heading font-bold text-brand-navy text-xl mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Slider */}
      <section className="py-14 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
          <p className="text-brand-gold font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Our Partners
          </p>
          <h2 className="font-heading font-black text-brand-navy text-2xl">
            Tied-Up Universities
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="animate-marquee">
            {marqueeItems.map((item) => (
              <div
                key={item.key}
                className="mx-3 flex-shrink-0 bg-white border border-border rounded-sm px-6 py-3.5 shadow-xs"
              >
                <span className="font-heading font-semibold text-brand-navy text-sm whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-gold font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h2 className="font-heading font-black text-brand-navy text-3xl sm:text-4xl">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {serviceItems.map((s) => (
              <div
                key={s.title}
                className="flex gap-4 p-5 border border-border rounded-sm hover:border-brand-gold/40 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-heading font-bold text-brand-navy text-base mb-1">
                    {s.title}
                  </h4>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button className="bg-brand-navy hover:bg-brand-navy-light text-white font-heading font-bold rounded-sm px-8">
                View All Services <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-navy py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-black text-white text-3xl sm:text-4xl mb-4">
            Ready to Start Your University Journey?
          </h2>
          <p className="font-body text-white/70 max-w-xl mx-auto mb-8">
            Speak to our expert counselors today. Absolutely free — no strings
            attached.
          </p>
          <Button
            onClick={() => setPopupOpen(true)}
            className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-heading font-bold px-10 py-3 rounded-sm shadow-gold text-base"
          >
            Book Free Counseling Session
          </Button>
        </div>
      </section>

      <LeadPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}
