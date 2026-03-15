import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Loader2,
  Megaphone,
  Package,
  TrendingUp,
  User,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

const benefits = [
  {
    icon: <TrendingUp size={20} className="text-brand-gold" />,
    title: "High Commission Structure",
    desc: "Competitive per-enrollment commissions paid monthly with full transparency.",
  },
  {
    icon: <Megaphone size={20} className="text-brand-gold" />,
    title: "Marketing Support",
    desc: "Branded collaterals, digital assets, and co-branded campaigns managed by us.",
  },
  {
    icon: <Package size={20} className="text-brand-gold" />,
    title: "Branding Materials",
    desc: "Official Grad-Gate branding kits including banners, visiting cards, and standees.",
  },
  {
    icon: <User size={20} className="text-brand-gold" />,
    title: "Dedicated Relationship Manager",
    desc: "A personal point of contact for every registered channel partner.",
  },
];

export default function Partners() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    company: "",
    mobile: "",
    city: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setLoading(true);
    try {
      await actor.submitChannelPartner(
        form.name,
        form.company,
        form.mobile,
        form.city,
        form.message,
      );
      setSuccess(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            B2B Partnership
          </p>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl mb-6">
            Grow with Grad-Gate.
          </h1>
          <p className="font-body text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Join our pan-India network of Channel Partners. We provide the
            branding and tie-ups; you provide the talent.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-gold font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Why Partner With Us
            </p>
            <h2 className="font-heading font-black text-brand-navy text-3xl sm:text-4xl">
              Partner Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex gap-4 p-6 border border-border rounded-sm hover:shadow-navy transition-all duration-300"
              >
                <div className="p-2.5 bg-secondary rounded-sm flex-shrink-0 h-fit">
                  {b.icon}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-brand-navy text-base mb-1.5">
                    {b.title}
                  </h4>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-brand-gold font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                Join the Network
              </p>
              <h2 className="font-heading font-black text-brand-navy text-3xl">
                Register as a Partner
              </h2>
            </div>
            <div className="bg-white border border-border rounded-sm p-8">
              {success ? (
                <div
                  data-ocid="partner_form.success_state"
                  className="text-center py-10"
                >
                  <CheckCircle
                    className="text-green-500 mx-auto mb-4"
                    size={52}
                  />
                  <h3 className="font-heading font-bold text-brand-navy text-2xl mb-3">
                    Registration Received!
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Thank you for your interest. Our partnership team will
                    contact you within 48 hours to discuss next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label className="font-body text-sm text-brand-navy font-medium mb-1.5 block">
                        Full Name *
                      </Label>
                      <Input
                        data-ocid="partner_form.name_input"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        className="rounded-sm"
                      />
                    </div>
                    <div>
                      <Label className="font-body text-sm text-brand-navy font-medium mb-1.5 block">
                        Company / Organization *
                      </Label>
                      <Input
                        data-ocid="partner_form.company_input"
                        required
                        placeholder="Company name"
                        value={form.company}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, company: e.target.value }))
                        }
                        className="rounded-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label className="font-body text-sm text-brand-navy font-medium mb-1.5 block">
                        Mobile Number *
                      </Label>
                      <Input
                        data-ocid="partner_form.mobile_input"
                        required
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.mobile}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, mobile: e.target.value }))
                        }
                        className="rounded-sm"
                      />
                    </div>
                    <div>
                      <Label className="font-body text-sm text-brand-navy font-medium mb-1.5 block">
                        City *
                      </Label>
                      <Input
                        data-ocid="partner_form.city_input"
                        required
                        placeholder="Your city"
                        value={form.city}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, city: e.target.value }))
                        }
                        className="rounded-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="font-body text-sm text-brand-navy font-medium mb-1.5 block">
                      Message (optional)
                    </Label>
                    <Textarea
                      data-ocid="partner_form.textarea"
                      placeholder="Tell us about your existing business or student network..."
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      rows={4}
                      className="rounded-sm resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    data-ocid="partner_form.submit_button"
                    disabled={loading}
                    className="w-full bg-brand-navy hover:bg-brand-navy-light text-white font-heading font-bold rounded-sm py-3"
                  >
                    {loading && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {loading ? "Registering..." : "Register as a Partner"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
