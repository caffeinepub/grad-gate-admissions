import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

export default function Contact() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setLoading(true);
    try {
      await actor.submitContactForm(
        form.name,
        form.mobile,
        form.email,
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
            Get In Touch
          </p>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl mb-6">
            Contact Us
          </h1>
          <p className="font-body text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Reach out to our team for admissions, counseling, or partnership
            queries.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-heading font-black text-brand-navy text-2xl mb-8">
                Send Us a Message
              </h2>
              <div className="bg-white border border-border rounded-sm p-8">
                {success ? (
                  <div
                    data-ocid="contact_form.success_state"
                    className="text-center py-10"
                  >
                    <CheckCircle
                      className="text-green-500 mx-auto mb-4"
                      size={52}
                    />
                    <h3 className="font-heading font-bold text-brand-navy text-2xl mb-3">
                      Message Sent!
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Thank you for reaching out. We'll respond within 24
                      business hours.
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
                          data-ocid="contact_form.name_input"
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
                          Mobile Number *
                        </Label>
                        <Input
                          data-ocid="contact_form.mobile_input"
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
                    </div>
                    <div>
                      <Label className="font-body text-sm text-brand-navy font-medium mb-1.5 block">
                        Email Address *
                      </Label>
                      <Input
                        data-ocid="contact_form.email_input"
                        required
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        className="rounded-sm"
                      />
                    </div>
                    <div>
                      <Label className="font-body text-sm text-brand-navy font-medium mb-1.5 block">
                        Message *
                      </Label>
                      <Textarea
                        data-ocid="contact_form.textarea"
                        required
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, message: e.target.value }))
                        }
                        rows={5}
                        className="rounded-sm resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      data-ocid="contact_form.submit_button"
                      disabled={loading}
                      className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-heading font-bold rounded-sm py-3"
                    >
                      {loading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-heading font-black text-brand-navy text-2xl mb-8">
                Office Information
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="p-3 bg-secondary rounded-sm flex-shrink-0">
                    <Phone size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-brand-navy text-sm mb-0.5">
                      Phone / WhatsApp
                    </p>
                    <p className="font-body text-muted-foreground text-sm">
                      +91 99999 99999
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-secondary rounded-sm flex-shrink-0">
                    <Mail size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-brand-navy text-sm mb-0.5">
                      Email
                    </p>
                    <p className="font-body text-muted-foreground text-sm">
                      info@gradgate.in
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-secondary rounded-sm flex-shrink-0">
                    <MapPin size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-brand-navy text-sm mb-0.5">
                      Registered Office
                    </p>
                    <p className="font-body text-muted-foreground text-sm">
                      Himagman Marketing Private Limited
                      <br />
                      New Delhi, India — 110001
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-secondary rounded-sm flex-shrink-0">
                    <Clock size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-brand-navy text-sm mb-0.5">
                      Working Hours
                    </p>
                    <p className="font-body text-muted-foreground text-sm">
                      Monday – Saturday: 9:00 AM – 7:00 PM
                      <br />
                      Sunday: 10:00 AM – 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-sm p-6 bg-secondary">
                <p className="font-heading font-bold text-brand-navy text-sm uppercase tracking-wide mb-2">
                  Corporate Identity
                </p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Registered Name:{" "}
                  <span className="font-semibold text-brand-navy">
                    Himagman Marketing Private Limited
                  </span>
                  <br />
                  Brand: Grad-Gate Admissions
                  <br />
                  CIN: U74999DL2014PTC123456 (Illustrative)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
