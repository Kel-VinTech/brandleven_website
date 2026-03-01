import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection = ({
  title = "Ready to Elevate Your Brand Online?",
  subtitle = "Let's build something exceptional — and make it perform.",
  buttonText = "Book a Free Strategy Call",
  buttonLink = "/contact",
}: CTASectionProps) => {
  return (
    <section className="hero-gradient py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4 max-w-3xl mx-auto">
            {title}
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Button variant="cta-white" size="lg" asChild className="text-base px-8 py-6">
            <a href={buttonLink}>
              {buttonText} <ArrowRight size={18} />
            </a>
          </Button>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70 text-sm">
            <a href="tel:07013832571" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone size={14} /> 07013832571
            </a>
            <a href="mailto:contactbrandleven@gmail.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail size={14} /> contactbrandleven@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <Globe size={14} /> Remote — Serving Clients Worldwide
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
