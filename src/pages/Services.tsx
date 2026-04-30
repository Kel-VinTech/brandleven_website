import { Button } from "@/components/ui/button";
import {
  Globe, Target, Megaphone, ArrowRight, Layers, Zap, BarChart3
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { useSEO } from "@/hooks/use-seo";

const systemServices = [
  {
    icon: Globe,
    title: "Conversion-Focused Web Experiences",
    desc: "Optimized web experiences engineered to turn visitors into qualified leads and paying customers.",
  },
  {
    icon: Megaphone,
    title: "Audience Growth & Engagement",
    desc: "Structured social media strategy that builds visibility, attracts the right audience, and drives meaningful engagement.",
  },
  {
    icon: Target,
    title: "Content Strategy & Planning",
    desc: "A clear content roadmap that positions your brand, builds authority, and supports every stage of the customer journey.",
  },
];

const systemBenefits = [
  { icon: Layers, title: "Fully Integrated", desc: "Content, social, and web work together as one connected system — not disconnected services." },
  { icon: Zap, title: "Demand Generation", desc: "Every component is designed to attract opportunities and convert them into revenue." },
  { icon: BarChart3, title: "Continuous Optimization", desc: "We measure, refine, and scale performance so your system improves month over month." },
];

const Services = () => {
  useSEO({
    title: "Our System — Integrated Digital Marketing Services | Brandleven",
    description: "Explore Brandleven's integrated marketing system: audience growth, content strategy, and conversion-focused web experiences engineered to drive measurable revenue.",
    canonicalPath: "/services",
  });
  return (
    <Layout>
      <PageHero
        badge="Our System"
        headline={<>Integrated Digital Marketing <span className="text-primary">Systems</span> That Drive Revenue</>}
        subtitle="We design and manage connected marketing systems that help businesses attract the right audience, convert opportunities into customers, and grow revenue predictably."
        ctaText="Request a Strategy Call"
        secondaryCtaText="View Case Studies"
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              badge="System Components"
              title="What Powers Your Growth System"
              subtitle="Each service is integrated into a unified system designed to deliver measurable business results — never delivered in isolation."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemServices.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <s.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              badge="Why a System"
              title="Why Systems Outperform Standalone Services"
              subtitle="Isolated tactics produce isolated results. An integrated system aligns strategy, execution, and optimization to compound business outcomes over time."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemBenefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild className="px-8 py-6 text-base">
              <a href="/contact">Request a Strategy Call <ArrowRight size={18} /></a>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;
