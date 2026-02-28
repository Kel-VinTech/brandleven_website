import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PageHeroProps {
  badge: string;
  headline: React.ReactNode;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const PageHero = ({
  badge,
  headline,
  subtitle,
  ctaText,
  ctaLink = "/contact",
  secondaryCtaText,
  secondaryCtaLink = "/portfolio",
}: PageHeroProps) => (
  <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    {/* Soft radial glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
    </div>

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <span className="inline-block bg-primary/8 text-primary text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-6 border border-primary/10">
          {badge}
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
          {headline}
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

        {(ctaText || secondaryCtaText) && (
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {ctaText && (
              <Button variant="cta" size="lg" asChild className="px-8 py-6 text-base">
                <Link to={ctaLink}>{ctaText} <ArrowRight size={18} /></Link>
              </Button>
            )}
            {secondaryCtaText && (
              <Button variant="ghost" size="lg" asChild className="text-muted-foreground hover:text-primary text-base">
                <Link to={secondaryCtaLink}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  </section>
);

export default PageHero;
