import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection = ({
  title = "Ready to Grow Your Business Online?",
  subtitle = "Let's build a website that converts and ads that drive real sales.",
  buttonText = "Book a Free Strategy Call",
  buttonLink = "/contact",
}: CTASectionProps) => {
  return (
    <section className="hero-gradient py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4 max-w-3xl mx-auto">
          {title}
        </h2>
        <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Button variant="cta-white" size="lg" asChild className="text-base px-8 py-6">
          <Link to={buttonLink}>
            {buttonText} <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
