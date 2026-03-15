import { GraduationCap } from "lucide-react";

const universities = [
  {
    name: "Amity University",
    location: "Noida, Uttar Pradesh",
    programs: "Engineering, Management, Law, Media",
  },
  {
    name: "Lovely Professional University",
    location: "Phagwara, Punjab",
    programs: "Engineering, Agriculture, Pharmacy, Design",
  },
  {
    name: "Sharda University",
    location: "Greater Noida, UP",
    programs: "Medical, Engineering, Architecture",
  },
  {
    name: "Manipal University",
    location: "Manipal, Karnataka",
    programs: "Medicine, Engineering, Humanities",
  },
  {
    name: "Symbiosis International",
    location: "Pune, Maharashtra",
    programs: "Management, Law, Mass Communication",
  },
  {
    name: "Christ University",
    location: "Bengaluru, Karnataka",
    programs: "Commerce, Sciences, Social Work",
  },
  {
    name: "VIT University",
    location: "Vellore, Tamil Nadu",
    programs: "Engineering, Sciences, Management",
  },
  {
    name: "SRM University",
    location: "Chennai, Tamil Nadu",
    programs: "Engineering, Medicine, Science",
  },
  {
    name: "UPES Dehradun",
    location: "Dehradun, Uttarakhand",
    programs: "Energy, Engineering, Business",
  },
  {
    name: "Chandigarh University",
    location: "Mohali, Punjab",
    programs: "Engineering, Management, Law",
  },
  {
    name: "KIIT University",
    location: "Bhubaneswar, Odisha",
    programs: "Engineering, Management, Law, Fashion",
  },
  {
    name: "Woxsen University",
    location: "Hyderabad, Telangana",
    programs: "Business, Architecture, Technology",
  },
  {
    name: "BML Munjal University",
    location: "Gurgaon, Haryana",
    programs: "Engineering, Management, Commerce",
  },
  {
    name: "FLAME University",
    location: "Pune, Maharashtra",
    programs: "Liberal Arts, Psychology, Economics",
  },
  {
    name: "GITAM University",
    location: "Visakhapatnam, AP",
    programs: "Science, Technology, Management",
  },
];

export default function Universities() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            Our Network
          </p>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl mb-6">
            Partner Universities
          </h1>
          <p className="font-body text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Direct authorized tie-ups with 50+ India's most reputed private and
            deemed universities.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="font-heading font-bold text-brand-navy text-2xl mb-4">
            Authorized Channel Partners — Not Agents
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Grad-Gate holds direct authorization letters from each partnered
            institution. This means students receive the official admission
            process, official fee receipts, and full university-backed student
            services — with no third-party risk.
          </p>
        </div>
      </section>

      {/* University Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((u) => (
              <div
                key={u.name}
                className="border border-border rounded-sm p-6 hover:shadow-navy hover:border-brand-gold/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/10 transition-colors">
                    <GraduationCap size={22} className="text-brand-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-bold text-brand-navy text-base mb-1 leading-tight">
                      {u.name}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground mb-2">
                      {u.location}
                    </p>
                    <p className="font-body text-xs text-muted-foreground/70 leading-relaxed">
                      {u.programs}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
