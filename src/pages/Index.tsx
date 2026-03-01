import { Button } from "@/components/ui/button";
import {
  Globe, Megaphone, TrendingUp, BarChart3, Users, Star,
  ArrowRight, CheckCircle, Monitor, ShoppingCart, MousePointerClick,
  Facebook, Instagram, Clapperboard, Search, Layers, Rocket, LineChart,
  Paintbrush, Target, Handshake
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const services = [
  { icon: Globe, title: "Website Design Agency", desc: "Strategic, design-led websites crafted to elevate brands and drive measurable growth." },
  { icon: Monitor, title: "Professional Development", desc: "Custom digital platforms built for speed, scalability, and seamless user experience." },
  { icon: MousePointerClick, title: "High-Converting Websites", desc: "Design meets data — every element optimized for performance." },
  { icon: Megaphone, title: "Digital Marketing Agency", desc: "Creative-led ad systems engineered for predictable ROI." },
  { icon: Facebook, title: "Facebook Ads Expert", desc: "Performance-focused campaigns designed to scale profitably." },
  { icon: Instagram, title: "Instagram Ads Specialist", desc: "High-impact creatives built to convert attention into action." },
  { icon: Clapperboard, title: "TikTok Ads Marketing", desc: "Scroll-stopping campaigns optimized for rapid growth." },
];

const growthSteps = [
  { icon: Search, title: "Strategy & Research", desc: "We analyze your market, audience, and growth opportunities." },
  { icon: Layers, title: "Conversion-Focused Build", desc: "We design websites engineered for performance." },
  { icon: Rocket, title: "Launch & Optimization", desc: "We test, track, and refine for maximum efficiency." },
  { icon: LineChart, title: "Scale with Data", desc: "We use real performance data to scale revenue." },
];

const results = [
  { value: 300, suffix: "%", label: "Average Sales Increase Within 90 Days" },
  { value: 5, suffix: "X", label: "Return on Ad Spend Across Campaigns" },
  { value: 150, suffix: "+", label: "Brands Scaled Globally" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
];

const whyUs = [
  { icon: Paintbrush, title: "Design-Led Strategy", desc: "We lead with aesthetics and brand identity — backed by conversion science." },
  { icon: Target, title: "Data-Driven Execution", desc: "Every decision is informed by analytics, A/B tests, and real performance metrics." },
  { icon: Handshake, title: "Long-Term Growth Partnership", desc: "We're not a vendor — we're your growth partner invested in your success." },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TrendFusion",
    quote: "Brandleven transformed our online presence completely. Our conversions increased by 240% within the first quarter.",
  },
  {
    name: "James Okonkwo",
    role: "Founder, GreenPath Stores",
    quote: "Their Facebook ads strategy was a game-changer. We saw a 5x ROAS and our best sales month ever.",
  },
  {
    name: "Emily Chen",
    role: "CMO, NovaTech",
    quote: "Professional, responsive, and results-driven. Brandleven delivered beyond our expectations every time.",
  },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-primary">
      {count}{suffix}
    </div>
  );
};

const Index = () => {
  return (
    <Layout>
      {/* Hero — Premium Agency Style */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 hero-grid opacity-[0.035]" />
        <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/[0.06]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/[0.04]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Digital Agency — Remote Worldwide
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.08] mb-6 tracking-tight">
                We Design{" "}
                <span className="text-gradient">Digital Experiences</span>{" "}
                That Drive{" "}
                <span className="text-gradient">Growth.</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                Brandleven is a design-driven digital agency building high-converting websites and scalable ad systems for ambitious brands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" asChild className="text-base px-8 py-6">
                  <a href="/contact">Book a Free Strategy Call <ArrowRight size={18} /></a>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-base px-8 py-6">
                  <a href="/portfolio">View Our Work</a>
                </Button>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8 flex items-center gap-6 text-sm text-muted-foreground"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-primary" /> Trusted by 150+ brands
                </span>
                <span className="flex items-center gap-1.5">
                  <Star size={14} className="fill-primary text-primary" /> 98% client satisfaction
                </span>
              </motion.div>
            </motion.div>

            {/* Right — Floating UI mockup */}
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
                  <div className="space-y-4">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      <div className="h-24 bg-accent rounded-lg" />
                      <div className="h-24 bg-primary/10 rounded-lg" />
                      <div className="h-24 bg-accent rounded-lg" />
                    </div>
                    <div className="flex gap-3 mt-4">
                      <div className="h-10 bg-primary rounded-lg flex-1" />
                      <div className="h-10 bg-muted rounded-lg w-24" />
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-card border border-border rounded-xl shadow-lg p-4 z-20"
                >
                  <div className="text-xs text-muted-foreground mb-1">Conversions</div>
                  <div className="text-2xl font-extrabold text-primary">+240%</div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl shadow-lg p-4 z-20"
                >
                  <div className="text-xs text-muted-foreground mb-1">ROAS</div>
                  <div className="text-2xl font-extrabold text-primary">5.2x</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading badge="What We Do" title="Services That Drive Growth" subtitle="From website design to paid advertising, we deliver end-to-end digital solutions that generate leads and revenue." />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Growth System */}
      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading badge="Our Process" title="Our 4-Step Growth System" subtitle="A proven framework that transforms your digital presence into a revenue engine." />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {growthSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative text-center group">
                  {i < growthSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
                  )}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 relative z-10">
                    <step.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">Step {i + 1}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Results */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading badge="Proven Results" title="Numbers That Speak for Themselves" subtitle="Our data-driven approach consistently delivers measurable results for businesses worldwide." />
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {results.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="text-muted-foreground text-sm font-medium mt-2">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Brands Choose Us */}
      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading badge="Why Us" title="Why Brands Choose Brandleven" subtitle="We combine creative excellence with analytical rigor to deliver results that matter." />
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
            <SectionHeading badge="Testimonials" title="What Our Clients Say" subtitle="Don't just take our word for it — hear from businesses we've helped grow." />
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
              { q: "How long does it take to build a website?", a: "Most projects are delivered within 2-4 weeks, depending on complexity and scope." },
              { q: "Do you work with businesses outside the UK?", a: "Absolutely! We operate fully remotely and serve clients worldwide." },
              { q: "What kind of results can I expect from ads?", a: "Our clients typically see a 3-5x return on ad spend within the first 90 days." },
              { q: "Do you offer ongoing support?", a: "Yes, we offer maintenance plans and ongoing optimization for both websites and ad campaigns." },
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
