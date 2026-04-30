import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle, Star, Users, TrendingUp,
  Globe, Megaphone, Target, Handshake, Eye, RefreshCw,
  BarChart3, Zap, Shield, Layers
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/use-seo";

const growthSteps = [
  {
    icon: Eye,
    step: "01",
    title: "Attract",
    desc: "We build your visibility and reach through structured social media and content strategy.",
  },
  {
    icon: Target,
    step: "02",
    title: "Convert",
    desc: "We create optimized web experiences that turn visitors into leads and customers.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Grow",
    desc: "We continuously refine and manage your digital presence to improve performance and scale revenue.",
  },
];

const packages = [
  {
    name: "Basic System",
    goal: "Establish your digital foundation",
    desc: "Establish your digital foundation with a structured online presence and conversion-ready setup.",
    features: [
      "Conversion-Focused Web Experience",
      "Foundational SEO Setup",
      "Lead Capture Integration",
      "Brand Positioning Framework",
    ],
    highlight: false,
  },
  {
    name: "Growth System",
    goal: "Attract and engage your audience",
    desc: "Attract and engage your audience through integrated content strategy and managed digital presence.",
    features: [
      "Conversion-Focused Web Experience",
      "Funnel Optimization",
      "Audience Growth & Engagement Setup",
      "Content Strategy & Planning",
      "Managed Social Presence",
    ],
    highlight: true,
  },
  {
    name: "Scale System",
    goal: "Generate demand and scale revenue",
    desc: "A fully managed marketing system designed to consistently generate demand, convert customers, and drive revenue growth.",
    features: [
      "Conversion-Focused Web Experience",
      "Funnel & Conversion Optimization",
      "Full Audience Growth & Engagement Management",
      "Content Strategy, Creation & Publishing",
      "Community & Engagement Management (DMs & Comments)",
      "Brand Consistency Across Channels",
      "Monthly Performance Tracking & Optimization",
    ],
    highlight: false,
  },
];

const results = [
  { icon: Globe, text: "Improved lead generation through structured digital systems" },
  { icon: Megaphone, text: "Enhanced customer engagement and conversion across digital channels" },
  { icon: BarChart3, text: "Supported businesses in building scalable marketing foundations" },
  { icon: Users, text: "Delivered integrated marketing systems for 150+ brands worldwide" },
];

const whyUs = [
  {
    icon: Layers,
    title: "Integrated Systems, Not Isolated Services",
    desc: "We don't deliver isolated services — we design and manage integrated systems built to drive measurable growth.",
  },
  {
    icon: Zap,
    title: "Focused on Business Outcomes",
    desc: "Our focus is on measurable business outcomes — leads, customers, and revenue — not surface-level activity.",
  },
  {
    icon: Shield,
    title: "Strategy, Execution & Optimization",
    desc: "We combine strategy, execution, and continuous optimization to drive consistent, compounding growth.",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TrendFusion",
    quote: "Brandleven built us a complete digital system — and our leads grew by 240% in the first quarter. They genuinely care about results.",
  },
  {
    name: "James Okonkwo",
    role: "Founder, GreenPath Stores",
    quote: "They brought our social media and website together into one clear strategy. We had our best sales month ever — and the process felt easy.",
  },
  {
    name: "Ihuoma Ibechuckwu",
    role: "CEO, Apex Consulting Global",
    quote: "Professional, strategic, and refreshingly focused on real outcomes. Brandleven delivered beyond what we expected.",
  },
];

const Index = () => {
  useSEO({
    title: "Brandleven — Digital Marketing Systems That Drive Business Growth",
    description: "We design and manage integrated digital marketing systems that help businesses attract the right audience, convert opportunities into customers, and grow revenue.",
    canonicalPath: "/",
  });
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 hero-grid opacity-[0.035]" />
        <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/[0.06]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Integrated Digital Marketing Systems
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.08] mb-6 tracking-tight">
                We Design and Manage Digital Marketing Systems That{" "}
                <span className="text-gradient">Drive Business Growth</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                We help businesses attract the right audience, convert opportunities into customers, and grow revenue through integrated digital marketing systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" asChild className="text-base px-8 py-6">
                  <a href="/contact">Request a Strategy Call <ArrowRight size={18} /></a>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-base px-8 py-6">
                  <a href="/portfolio">View Case Studies</a>
                </Button>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8 flex items-center gap-6 text-sm text-muted-foreground"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-primary" /> 150+ brands served
                </span>
                <span className="flex items-center gap-1.5">
                  <Star size={14} className="fill-primary text-primary" /> Integrated marketing systems
                </span>
              </motion.div>
            </motion.div>

            {/* Right — System Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="bg-card border border-border rounded-2xl shadow-2xl p-8 relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-accent-foreground/30" />
                    <div className="w-3 h-3 rounded-full bg-primary/40" />
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                      <Eye size={18} className="text-primary" />
                      <span className="font-semibold">Attract</span>
                      <span className="ml-auto text-xs text-muted-foreground">Social Media</span>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight size={16} className="text-primary/40 rotate-90" />
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                      <Target size={18} className="text-primary" />
                      <span className="font-semibold">Convert</span>
                      <span className="ml-auto text-xs text-muted-foreground">Website</span>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight size={16} className="text-primary/40 rotate-90" />
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                      <TrendingUp size={18} className="text-primary" />
                      <span className="font-semibold">Grow</span>
                      <span className="ml-auto text-xs text-muted-foreground">Revenue</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-card border border-border rounded-xl shadow-lg p-4 z-20"
                >
                  <div className="text-xs text-muted-foreground mb-1">Leads Generated</div>
                  <div className="text-2xl font-extrabold text-primary">+240%</div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl shadow-lg p-4 z-20"
                >
                  <div className="text-xs text-muted-foreground mb-1">Sales Growth</div>
                  <div className="text-2xl font-extrabold text-primary">3x</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Our System Works */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              badge="Our Approach"
              title="Attract. Convert. Grow."
              subtitle="A structured, three-part system designed to attract the right audience, convert opportunities into customers, and grow revenue predictably."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {growthSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative text-center group">
                  {i < growthSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
                  )}
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 relative z-10">
                    <step.icon size={32} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">Step {step.step}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              badge="System Tiers"
              title="Choose the System That Fits Your Stage of Growth"
              subtitle="Integrated marketing systems — structured to attract audiences, convert customers, and scale revenue with intention."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`bg-card border rounded-xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${pkg.highlight ? "border-primary shadow-lg ring-2 ring-primary/20" : "border-border"}`}>
                  {pkg.highlight && (
                    <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 self-start">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-extrabold mb-1">{pkg.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-3">{pkg.goal}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{pkg.desc}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={pkg.highlight ? "cta" : "outline"} size="lg" asChild className="w-full text-base py-5">
                    <a href="/contact">Get Started <ArrowRight size={16} /></a>
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">Available as <span className="font-semibold text-foreground">3-month</span> or <span className="font-semibold text-foreground">6-month</span> engagements.</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              badge="Outcomes"
              title="Measurable Results for Growing Businesses"
              subtitle="We measure success by business outcomes — leads, customers, and revenue — not vanity metrics."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {results.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <r.icon size={22} className="text-primary" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{r.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              badge="Why Brandleven"
              title="A Strategic Partner for Integrated Growth"
              subtitle="We design and manage complete marketing systems — combining strategy, execution, and optimization to deliver measurable business results."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading badge="Testimonials" title="Trusted by Founders Building Real Growth" subtitle="Business leaders who chose integrated strategy, structured execution, and measurable outcomes." />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground leading-relaxed mb-6 flex-1">"{t.quote}"</blockquote>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-muted-foreground text-sm">{t.role}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
          </ScrollReveal>
          <div className="space-y-4">
            {[
              { q: "What makes Brandleven different from other agencies?", a: "Most agencies deliver isolated services — a website here, social media there. We design and manage integrated marketing systems that combine strategy, execution, and optimization to drive measurable business outcomes." },
              { q: "How long does it take to see results?", a: "Most clients see meaningful improvements in reach, engagement, and lead generation within the first 30–60 days of system launch, with results compounding through ongoing optimization." },
              { q: "Do you work with businesses outside the UK?", a: "Yes. We operate fully remotely and partner with growth-focused businesses worldwide." },
              { q: "Which system tier is right for my business?", a: "It depends on your stage. The Basic System establishes your digital foundation, the Growth System attracts and engages your audience, and the Scale System is a fully managed engine for generating demand and driving revenue. We'll guide you to the right fit." },
              { q: "Do you offer ongoing support?", a: "Yes — every system includes continuous optimization, available as 3-month or 6-month engagements so performance keeps improving over time." },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <details className="group bg-card border border-border rounded-xl hover:border-primary/20 transition-colors duration-300">
                  <summary className="cursor-pointer p-6 font-semibold text-foreground flex items-center justify-between list-none">
                    {faq.q}
                    <span className="text-muted-foreground group-open:rotate-45 transition-transform duration-200 text-xl">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Index;
