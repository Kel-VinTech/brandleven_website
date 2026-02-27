import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Globe, Megaphone, TrendingUp, BarChart3, Users, Star,
  ArrowRight, CheckCircle, Monitor, ShoppingCart, MousePointerClick,
  Facebook, Instagram, Clapperboard
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const services = [
  { icon: Globe, title: "Website Design Agency", desc: "Stunning, conversion-optimized websites tailored to your brand." },
  { icon: Monitor, title: "Professional Development", desc: "Custom-built sites using modern tech for speed and scalability." },
  { icon: MousePointerClick, title: "High-Converting Websites", desc: "Every element designed to turn visitors into customers." },
  { icon: Megaphone, title: "Digital Marketing Agency", desc: "Full-service campaigns that drive traffic and revenue." },
  { icon: Facebook, title: "Facebook Ads Expert", desc: "Laser-targeted Facebook campaigns that maximize ROI." },
  { icon: Instagram, title: "Instagram Ads Specialist", desc: "Eye-catching Instagram ads that grow your audience." },
  { icon: Clapperboard, title: "TikTok Ads Marketing", desc: "Viral-ready TikTok campaigns for the next generation." },
];

const results = [
  { value: "300%", label: "Average Sales Increase" },
  { value: "5X", label: "Return on Ad Spend" },
  { value: "150+", label: "Clients Worldwide" },
  { value: "98%", label: "Client Satisfaction" },
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

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 md:pt-44 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary-foreground/15 text-primary-foreground text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Digital Agency — Remote Worldwide
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
              We Build Websites That Convert &amp; Ads That Drive Sales.
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Brandleven helps businesses grow with high-converting websites and data-driven Facebook, Instagram, and TikTok ads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta-white" size="lg" asChild className="text-base px-8 py-6">
                <Link to="/contact">Get a Free Consultation <ArrowRight size={18} /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="text-base px-8 py-6">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="What We Do"
            title="Services That Drive Growth"
            subtitle="From website design to paid advertising, we deliver end-to-end digital solutions that generate leads and revenue."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Results */}
      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Proven Results"
            title="Numbers That Speak for Themselves"
            subtitle="Our data-driven approach consistently delivers measurable results for businesses worldwide."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {results.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-card rounded-xl border border-border animate-count-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it — hear from businesses we've helped grow."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
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
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {[
              { q: "How long does it take to build a website?", a: "Most projects are delivered within 2-4 weeks, depending on complexity and scope." },
              { q: "Do you work with businesses outside the UK?", a: "Absolutely! We operate fully remotely and serve clients worldwide." },
              { q: "What kind of results can I expect from ads?", a: "Our clients typically see a 3-5x return on ad spend within the first 90 days." },
              { q: "Do you offer ongoing support?", a: "Yes, we offer maintenance plans and ongoing optimization for both websites and ad campaigns." },
            ].map((faq, i) => (
              <details key={i} className="group bg-card border border-border rounded-xl">
                <summary className="cursor-pointer p-6 font-semibold text-foreground flex items-center justify-between list-none">
                  {faq.q}
                  <span className="text-muted-foreground group-open:rotate-45 transition-transform duration-200 text-xl">+</span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Index;
