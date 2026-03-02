import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";

const FORMSPREE_URL = "https://formspree.io/f/xreawbje";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.status === 200) {
        toast({
          title: "Message sent successfully.",
          description: "We'll reply within 24 hours.",
        });
        form.reset();
      } else {
        setFormError("Something went wrong. Please try again.");
      }
    } catch (err) {
      if (import.meta.env.DEV) console.error("Formspree error:", err);
      setFormError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHero
        badge="Contact"
        headline={<>Let's Build Something <span className="text-primary">Exceptional.</span></>}
        subtitle="Ready to grow your business? Get in touch and let's discuss your goals."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <SectionHeading badge="Get in Touch" title="Let's Talk Growth" center={false} />
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:07013832571" className="text-muted-foreground hover:text-primary transition-colors">07013832571</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:contactbrandleven@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">contactbrandleven@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <Globe size={20} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">We operate remotely and work with clients worldwide.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                {formError && (
                  <div className="bg-destructive/10 text-destructive text-sm rounded-lg p-3 font-medium">
                    {formError}
                  </div>
                )}
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Name *</label>
                  <Input name="name" required placeholder="Your full name" maxLength={100} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email *</label>
                  <Input name="email" required type="email" placeholder="you@company.com" maxLength={255} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Business Name</label>
                  <Input name="business" placeholder="Your business name" maxLength={100} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Service Needed</label>
                  <Input name="service" placeholder="e.g., Website Design, Facebook Ads" maxLength={100} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Message *</label>
                  <Textarea name="message" required placeholder="Tell us about your project and goals..." rows={4} maxLength={1000} />
                </div>
                <Button type="submit" variant="cta" size="lg" className="w-full py-6 text-base" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Book a Free Strategy Call"} <Send size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
