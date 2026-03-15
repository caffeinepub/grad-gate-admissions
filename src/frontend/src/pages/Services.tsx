import { Button } from "@/components/ui/button";
import {
  Award,
  Banknote,
  BookOpen,
  ChevronDown,
  UserCheck,
} from "lucide-react";
import { useState } from "react";
import LeadPopup from "../components/LeadPopup";

const services = [
  {
    icon: <UserCheck size={36} className="text-brand-gold" />,
    title: "Career Counseling",
    subtitle: "Personal Guidance",
    desc: "Our expert counselors conduct in-depth personal career mapping sessions to understand your aptitude, interests, and long-term career goals. We match you with the perfect university and program.",
    features: [
      "One-on-one career assessment sessions",
      "Stream and program selection guidance",
      "University shortlisting based on merit",
      "Comparison of fee structures and rankings",
    ],
  },
  {
    icon: <BookOpen size={36} className="text-brand-gold" />,
    title: "Direct Admission",
    subtitle: "Authorized Entry",
    desc: "As an authorized channel partner of 50+ universities, we facilitate direct, merit-based admissions into B.Tech, MBA, MBBS, BBA, and other professional programs — zero donation, zero compromise.",
    features: [
      "B.Tech, MBA, MBBS, BBA, BCA and more",
      "Direct authorized admissions",
      "Zero donation or unethical fees",
      "Application and documentation support",
    ],
  },
  {
    icon: <Banknote size={36} className="text-brand-gold" />,
    title: "Education Finance",
    subtitle: "Banking Partnerships",
    desc: "Education should never be stopped by finances. We have strategic partnerships with leading national banks and NBFCs to help students secure education loans with minimal documentation.",
    features: [
      "Partnerships with SBI, HDFC, Axis, and more",
      "Education loans from ₹1L to ₹40L",
      "Simple documentation assistance",
      "Post-loan disbursement support",
    ],
  },
  {
    icon: <Award size={36} className="text-brand-gold" />,
    title: "Scholarship Assistance",
    subtitle: "Merit-Based Aid",
    desc: "Many students miss out on scholarships simply because they don't know they exist. Our team identifies, applies, and follows up on merit-based scholarships across all partnered universities.",
    features: [
      "University-sponsored merit scholarships",
      "Government scholarship identification",
      "Application and documentation",
      "Follow-up and disbursement tracking",
    ],
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <section className="bg-brand-navy pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl mb-6">
            Our Services
          </h1>
          <p className="font-body text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            End-to-end admission support — from the first counseling session to
            the final fee receipt.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                id={`service-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="border border-border rounded-sm overflow-hidden hover:shadow-navy transition-all duration-300"
              >
                <div className="p-8">
                  <div className="mb-5">{s.icon}</div>
                  <p className="text-brand-gold font-heading font-semibold text-xs uppercase tracking-widest mb-1">
                    {s.subtitle}
                  </p>
                  <h3 className="font-heading font-black text-brand-navy text-2xl mb-4">
                    {s.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-5">
                    {s.desc}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(expanded === s.title ? null : s.title)
                    }
                    className="flex items-center gap-2 text-brand-navy font-heading font-semibold text-sm hover:text-brand-gold transition-colors"
                  >
                    {expanded === s.title ? "Show Less" : "Learn More"}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${expanded === s.title ? "rotate-180" : ""}`}
                    />
                  </button>

                  {expanded === s.title && (
                    <ul className="mt-5 space-y-2 border-t border-border pt-5">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 font-body text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button
              onClick={() => setPopupOpen(true)}
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-heading font-bold px-10 py-3 rounded-sm shadow-gold text-base"
            >
              Book Free Counseling
            </Button>
          </div>
        </div>
      </section>

      <LeadPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}
