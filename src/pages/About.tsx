import { CheckCircle, Target, TrendingUp, Globe, Users, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { useSEO } from "@/hooks/use-seo";

const values = [
  { icon: Target, title: "Integrated Systems", desc: "We deliver fully connected marketing systems — not isolated services — designed to work as one growth engine." },
  { icon: TrendingUp, title: "Outcome-Focused", desc: "Every decision is measured against business outcomes: leads, customers, and revenue growth." },
  { icon: Lightbulb, title: "Strategy-Led Execution", desc: "We combine structured strategy with disciplined execution and continuous optimization." },
  { icon: Users, title: "Long-Term Partnership", desc: "We work as an extension of your team, refining your system to scale sustainably over time." },
];

const About = () => {
  useSEO({
    title: "About Brandleven — Systems-Led Digital Marketing Agency",
    description: "Brandleven is a digital marketing agency that designs and manages integrated systems to help businesses attract, convert, and grow revenue.",
    canonicalPath: "/about",
  });
  return (
    <Layout>
      <PageHero
        badge="About Us"
        headline={<>We Build <span className="text-primary">Marketing Systems</span> That Drive Business Growth.</>}
        subtitle="Brandleven is a digital marketing agency that designs and manages integrated systems to help ambitious businesses attract, convert, and grow revenue."
        ctaText="Request a Strategy Call"
        secondaryCtaText="View Case Studies"
      />

      {/* Who We Are */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading badge="Who We Are" title="A Systems-Led Digital Marketing Agency" center={false} />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Brandleven designs and manages integrated digital marketing systems that help businesses attract the right audience, convert opportunities into customers, and grow revenue. We don't deliver isolated services — we build connected systems engineered for measurable business outcomes.
              </p>
              <p>
                Operating fully remotely, we partner with ambitious businesses worldwide — combining strategy, execution, and continuous optimization across content, social, and conversion-focused web experiences to deliver real, compounding growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading badge="Our Mission" title="Building Systems That Drive Real Growth" subtitle="Our mission is to equip businesses with integrated marketing systems that generate demand, convert customers, and scale revenue predictably." />
          <div className="flex items-center justify-center gap-4 flex-wrap mt-8">
            {["Attract", "Convert", "Grow", "Optimize"].map((item) => (
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
          <SectionHeading badge="Why Brandleven" title="Why Businesses Choose Us" subtitle="We deliver integrated systems focused on measurable business outcomes — not isolated activity." />
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
