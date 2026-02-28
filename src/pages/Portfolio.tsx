import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";

const websiteProjects = [
  {
    title: "TrendFusion E-commerce",
    category: "E-commerce Website Design",
    results: ["+240% Conversions", "+180% Revenue", "3.2s → 1.1s Load Time"],
    color: "from-blue-500 to-indigo-600",
    slug: "trendfusion-ecommerce",
    screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "NovaTech SaaS",
    category: "Landing Page Design",
    results: ["+160% Signups", "38% Conversion Rate", "2x Lead Quality"],
    color: "from-violet-500 to-purple-600",
    slug: "novatech-saas",
    screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "CloudSync Solutions",
    category: "Business Website Development",
    results: ["+300% Leads", "98% Uptime", "Professional Redesign"],
    color: "from-amber-500 to-orange-600",
    slug: "cloudsync-solutions",
    screenshot: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
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
                <Link to={`/portfolio/${project.slug}`} className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block">
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
                </Link>
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
