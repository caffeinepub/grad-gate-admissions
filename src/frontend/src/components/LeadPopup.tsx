import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

interface LeadPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function LeadPopup({ open, onClose }: LeadPopupProps) {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    course: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setLoading(true);
    try {
      await actor.submitStudentLead(
        form.name,
        form.mobile,
        form.course,
        form.city,
      );
      setSuccess(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSuccess(false);
      setForm({ name: "", mobile: "", course: "", city: "" });
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        onKeyUp={(e) => e.key === "Escape" && handleClose()}
        role="presentation"
      />
      <div
        data-ocid="lead_popup.dialog"
        className="relative bg-white rounded-sm shadow-2xl w-full max-w-md overflow-hidden"
      >
        <div className="bg-brand-navy px-6 py-5">
          <h3 className="font-heading font-bold text-white text-lg">
            Book Free Counseling
          </h3>
          <p className="text-white/60 text-sm font-body mt-1">
            Get expert guidance within 24 hours
          </p>
          <button
            type="button"
            data-ocid="lead_popup.close_button"
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-6">
          {success ? (
            <div className="text-center py-8">
              <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
              <h4 className="font-heading font-bold text-brand-navy text-xl mb-2">
                We'll be in touch!
              </h4>
              <p className="text-muted-foreground text-sm font-body mb-6">
                Thank you! Our counselor will contact you within 24 hours.
              </p>
              <Button
                onClick={handleClose}
                className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-heading font-bold rounded-sm"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label className="font-body text-sm text-brand-navy font-medium mb-1.5 block">
                  Full Name *
                </Label>
                <Input
                  data-ocid="lead_popup.name_input"
                  required
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  className="rounded-sm border-border font-body"
                />
              </div>
              <div>
                <Label className="font-body text-sm text-brand-navy font-medium mb-1.5 block">
                  Mobile Number *
                </Label>
                <Input
                  data-ocid="lead_popup.mobile_input"
                  required
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.mobile}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, mobile: e.target.value }))
                  }
                  className="rounded-sm border-border font-body"
                />
              </div>
              <div>
                <Label className="font-body text-sm text-brand-navy font-medium mb-1.5 block">
                  Course Interested *
                </Label>
                <Select
                  value={form.course}
                  onValueChange={(v) => setForm((p) => ({ ...p, course: v }))}
                >
                  <SelectTrigger
                    data-ocid="lead_popup.course_select"
                    className="rounded-sm border-border font-body"
                  >
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    {["B.Tech", "MBA", "MBBS", "BBA", "Other"].map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="font-body text-sm text-brand-navy font-medium mb-1.5 block">
                  City *
                </Label>
                <Input
                  data-ocid="lead_popup.city_input"
                  required
                  placeholder="Your city"
                  value={form.city}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, city: e.target.value }))
                  }
                  className="rounded-sm border-border font-body"
                />
              </div>
              <Button
                type="submit"
                data-ocid="lead_popup.submit_button"
                disabled={loading || !form.course}
                className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-heading font-bold rounded-sm mt-2"
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? "Submitting..." : "Book My Free Counseling"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
