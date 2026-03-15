import { Globe, Shield, Star, Users } from "lucide-react";

const stats = [
  { value: "50+", label: "Partner Universities" },
  { value: "1000+", label: "Students Placed" },
  { value: "10+", label: "Years Experience" },
  { value: "Pan-India", label: "Network Reach" },
];

const values = [
  {
    icon: <Shield size={24} className="text-brand-gold" />,
    title: "Transparency",
    desc: "Every fee, every process, every tie-up is disclosed openly. No hidden costs or surprises.",
  },
  {
    icon: <Star size={24} className="text-brand-gold" />,
    title: "Merit First",
    desc: "We match students to universities based on academic merit, aptitude, and career goals.",
  },
  {
    icon: <Users size={24} className="text-brand-gold" />,
    title: "Trust",
    desc: "Built on long-term relationships with universities, banks, and thousands of families.",
  },
  {
    icon: <Globe size={24} className="text-brand-gold" />,
    title: "Support",
    desc: "From counseling to admission to loan to scholarship — we walk with you at every step.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            Our Story
          </p>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl mb-6">
            About Grad-Gate
          </h1>
          <p className="font-body text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Empowering India's students with transparent, merit-based access to
            top universities — since day one.
          </p>
        </div>
      </section>

      {/* Himagman legacy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-gold font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                The Foundation
              </p>
              <h2 className="font-heading font-black text-brand-navy text-3xl sm:text-4xl mb-6">
                Himagman Marketing
                <br />
                Private Limited
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Himagman Marketing Private Limited is a registered corporate
                entity with a decade-long legacy of building trust-based
                commercial and educational partnerships across India. The
                company operates with a mandate of ethical business, community
                impact, and long-term stakeholder value.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Grad-Gate Admissions is the education vertical of Himagman
                Marketing — launched to address a critical gap: the absence of a
                transparent, merit-based counseling and admissions service that
                treats students as academic aspirants, not revenue targets.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border border-border rounded-sm p-6 text-center"
                >
                  <p className="font-heading font-black text-brand-gold text-3xl sm:text-4xl mb-1">
                    {s.value}
                  </p>
                  <p className="font-body text-muted-foreground text-sm">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-brand-gold font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            Mission Statement
          </p>
          <h2 className="font-heading font-black text-brand-navy text-3xl sm:text-4xl mb-8">
            "To democratize access to quality higher education"
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Grad-Gate exists to ensure that every deserving student — regardless
            of geography, background, or information access — can find, afford,
            and enroll in the right university. We do this through direct
            institutional tie-ups, zero-donation admissions, and strategic
            banking partnerships that make education financing accessible.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-gold font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              What We Stand For
            </p>
            <h2 className="font-heading font-black text-brand-navy text-3xl sm:text-4xl">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 border border-border rounded-sm hover:shadow-navy hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4 p-3 bg-secondary rounded-sm w-fit">
                  {v.icon}
                </div>
                <h3 className="font-heading font-bold text-brand-navy text-lg mb-2">
                  {v.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
