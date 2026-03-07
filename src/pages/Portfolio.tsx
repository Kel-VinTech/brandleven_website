import { TrendingUp, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";

const websiteProjects = [
  {
    title: "Apex Consulting Website",
    category: "Corporate Consulting Website",
    results: [
      "Professional Brand Website",
      "Lead Generation Ready",
      "SEO Optimized Structure"
    ],
    color: "from-blue-500 to-indigo-600",
    slug: "apex-consulting",
    screenshot: "/images/apex_consulting.webp",
  },
  {
  title: "Pure Aura Retreat Spa",
  category: "Spa & Salon Website",
  results: [
    "Luxury Brand Design",
    "Mobile Optimized",
    "Booking Ready"
  ],
  color: "from-amber-500 to-orange-600",
  slug: "pure-aura-retreat",
  screenshot: "/images/pure_aura.webp",
  },
 {
    title: "Lumière Interiors",
    category: "Interior Design Website",
    results: [
      "Luxury Brand Design",
      "Portfolio Showcase",
      "Mobile Optimized"
    ],
    color: "from-neutral-700 to-stone-900",
    slug: "lumiere-interiors",
    screenshot: "/images/lumiere.webp",
  },
  {
    title: "Meridian Finance",
    category: "Corporate Website Design",
    results: ["+200% Lead Gen", "4.5s → 1.3s Load", "50% Lower Bounce"],
    color: "from-teal-500 to-emerald-600",
    slug: "meridian-finance",
    screenshot: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
  },
  {
    title: "Bloom Beauty",
    category: "E-commerce Website Design",
    results: ["+320% Sales", "45% Repeat Buyers", "2.8x AOV Increase"],
    color: "from-pink-500 to-rose-600",
    slug: "bloom-beauty",
    screenshot: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
  },
  {
    title: "Atlas Logistics",
    category: "Business Web Application",
    results: ["+180% Efficiency", "Real-time Tracking", "40% Cost Reduction"],
    color: "from-sky-500 to-blue-600",
    slug: "atlas-logistics",
    screenshot: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
];

const adsProjects = [
  {
    title: "GreenPath Stores",
    category: "Facebook Ads Management",
    results: ["5x ROAS", "+320% Reach", "45% Lower CPA"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "LuxeHome Interiors",
    category: "Instagram Ads Specialist",
    results: ["+400% Engagement", "+95K Followers", "6.2x ROAS"],
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "FitPro Academy",
    category: "TikTok Ads Marketing",
    results: ["2.1M Views", "+850 Members", "4.8x ROAS"],
    color: "from-cyan-500 to-blue-600",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      <PageHero
        badge="Portfolio"
        headline={<><span className="text-primary">Real Results.</span> Real Growth.</>}
        subtitle="Explore our case studies showcasing measurable growth in conversions, revenue, and ad performance."
        ctaText="Start Your Project"
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Website Projects" title="Websites That Convert" subtitle="Custom-built websites designed for performance and growth." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteProjects.map((project, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <a href={`/portfolio/${project.slug}`} className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block">
                  <div className="h-48 overflow-hidden relative">
                    <img src={project.screenshot} alt={`${project.title} screenshot`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30`} />
                    <ArrowRight size={18} className="absolute top-4 right-4 text-white/60 group-hover:text-white transition-colors" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-4">{project.title}</h3>
                    <div className="space-y-2">
                      {project.results.map((result, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <TrendingUp size={14} className="text-primary shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary group-hover:underline">
                      View Case Study <ArrowRight size={14} />
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 section-alt">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Ad Campaigns" title="Ads That Drive Sales" subtitle="Data-driven ad campaigns across Facebook, Instagram, and TikTok." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adsProjects.map((project, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <span className="text-4xl font-extrabold text-white/20 group-hover:text-white/30 transition-colors">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-4">{project.title}</h3>
                    <div className="space-y-2">
                      {project.results.map((result, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <TrendingUp size={14} className="text-primary shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Want Results Like These?" subtitle="Let's discuss how we can drive growth for your business." />
    </Layout>
  );
};

export default Portfolio;
