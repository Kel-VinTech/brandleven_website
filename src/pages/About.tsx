import { CheckCircle, Target, TrendingUp, Globe, Users, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every strategy is designed to deliver measurable outcomes and real business growth." },
  { icon: TrendingUp, title: "Conversion-Focused", desc: "We optimize every touchpoint to turn visitors into paying customers." },
  { icon: Lightbulb, title: "Data-Backed Strategies", desc: "Decisions powered by analytics, not guesswork — ensuring maximum ROI." },
  { icon: Users, title: "Long-Term Growth", desc: "We build sustainable digital foundations that scale with your business." },
];

const About = () => {
  return (
    <Layout>
      <PageHero
        badge="About Us"
        headline={<>Built to Help <span className="text-primary">Ambitious Brands</span> Grow.</>}
        subtitle="We're a remote-first digital agency helping businesses worldwide grow through strategic websites and targeted advertising."
        ctaText="Work With Us"
        secondaryCtaText="View Our Work"
      />

      {/* Who We Are */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading badge="Who We Are" title="Built for the Modern Business" center={false} />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Brandleven is a full-service digital agency specializing in high-converting website development and performance-driven advertising. We combine creative design with data-backed strategies to help businesses attract more customers and increase revenue.
              </p>
              <p>
                Operating fully remotely, we serve clients across the globe — from startups looking for their first website to established brands scaling their advertising campaigns across Facebook, Instagram, and TikTok.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading badge="Our Mission" title="Helping Businesses Thrive Online" subtitle="Our mission is to empower businesses with digital solutions that generate leads, drive conversions, and create lasting growth." />
          <div className="flex items-center justify-center gap-4 flex-wrap mt-8">
            {["Lead Generation", "Conversion Optimization", "Revenue Growth", "Brand Visibility"].map((item) => (
              <span key={item} className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5 text-sm font-medium">
                <CheckCircle size={16} className="text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Why Brandleven" title="Why Choose Us" subtitle="We don't just build — we deliver growth." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <div key={i} className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <v.icon size={24} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
