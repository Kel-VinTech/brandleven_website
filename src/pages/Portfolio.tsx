import { TrendingUp, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import { useSEO } from "@/hooks/use-seo";
import apexConsultingImg from "@/assets/apex-consulting.webp";
import pureAuraImg from "@/assets/pure-aura-retreat.webp";
import lumiereInteriorsImg from "@/assets/lumiere-interiors.webp";
import maisonAurelleImg from "@/assets/maison-aurelle.webp";
import lipEnvyImg from "@/assets/lip-envy-luxury-lip-care.webp";
import lkAestheticsImg from "@/assets/lk-aesthetics-tanning.webp";
import apexConsultingGlobalAdsImg from "@/assets/apex-consulting-global-ads.webp";
import apexConsultingGlobalInstagramAdsImg from "@/assets/apex-consulting-global-instagram-ads.webp";

const websiteProjects = [
  {
    title: "Pure Aura Retreat Spa",
    category: "Spa & Salon Website Design",
    results: ["Luxury Brand Website", "Mobile Optimized Experience", "Appointment Booking Ready"],
    color: "from-amber-500 to-orange-600",
    slug: "pure-aura-retreat",
    screenshot: pureAuraImg,
  },
  {
    title: "Lumière Interiors",
    category: "Interior Design Corporate Website",
    results: ["Luxury Brand Website", "Portfolio Showcase Experience", "Mobile Optimized Design"],
    color: "from-stone-500 to-amber-700",
    slug: "lumiere-interiors",
    screenshot: lumiereInteriorsImg,
  },
  {
    title: "Maison Aurelle",
    category: "Fashion E-commerce Website",
    results: ["Premium Brand Storefront", "Mobile-First Shopping Experience", "Conversion Optimized Design"],
    color: "from-stone-400 to-amber-600",
    slug: "maison-aurelle",
    screenshot: maisonAurelleImg,
  },
  {
    title: "Apex Consulting",
    category: "Corporate Consulting Website",
    results: ["Professional Corporate Website", "Mobile Optimized Experience", "Lead Generation Ready"],
    color: "from-teal-500 to-emerald-600",
    slug: "apex-consulting",
    screenshot: apexConsultingImg,
  },
  {
    title: "Lip Envy",
    category: "Luxury Lip Care E-commerce",
    results: ["Premium Product Showcase", "Mobile Shopping Ready", "Conversion-Focused Storefront"],
    color: "from-pink-400 to-primary",
    slug: "lip-envy",
    screenshot: lipEnvyImg,
  },
  {
    title: "LK Aesthetics & Tanning",
    category: "Aesthetics & Tanning Website",
    results: ["Online Booking System", "Luxury Service Showcase", "Mobile Booking Ready"],
    color: "from-secondary to-primary",
    slug: "lk-aesthetics-tanning",
    screenshot: lkAestheticsImg,
  },
];

const adsProjects = [
  {
    title: "Apex Consulting Global",
    category: "Facebook Ads Management",
    results: ["5x ROAS", "+320% Reach", "45% Lower CPA"],
    color: "from-emerald-500 to-teal-600",
    screenshot: apexConsultingGlobalAdsImg,
  },
  {
    title: "LuxeHome Interiors",
    category: "Instagram Ads Specialist",
    results: ["+400% Engagement", "+180% CTR Increase", "6.2x ROAS"],
    color: "from-rose-500 to-pink-600",
    screenshot: apexConsultingGlobalInstagramAdsImg,
  },
  {
    title: "FitPro Academy",
    category: "TikTok Ads Marketing",
    results: ["2.1M Views", "+850 Members", "4.8x ROAS"],
    color: "from-cyan-500 to-blue-600",
  },
];

const Portfolio = () => {
  useSEO({
    title: "Case Studies — Marketing Systems That Drive Growth | Brandleven",
    description: "See how Brandleven's integrated marketing systems help businesses attract qualified audiences, convert customers, and scale revenue across industries.",
    canonicalPath: "/portfolio",
  });
  return (
    <Layout>
      <PageHero
        badge="Case Studies"
        headline={<><span className="text-primary">Integrated Systems.</span> Measurable Outcomes.</>}
        subtitle="Explore how our digital marketing systems have helped businesses attract qualified audiences, convert customers, and scale revenue."
        ctaText="Request a Strategy Call"
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Web Experiences" title="Conversion-Focused Web Experiences" subtitle="The conversion layer of our marketing systems — engineered to turn visitors into leads and customers." />
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
          <SectionHeading badge="Demand Generation" title="Audience Growth & Paid Campaigns" subtitle="The attract layer of our marketing systems — structured campaigns that build visibility and drive qualified demand." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adsProjects.map((project, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {project.screenshot ? (
                    <div className="h-48 overflow-hidden relative bg-muted">
                      <img
                        src={project.screenshot}
                        alt={`${project.title} ads performance screenshot`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <span className="text-4xl font-extrabold text-white/20 group-hover:text-white/30 transition-colors">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
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

      <CTASection title="Ready to Build a System That Drives Real Growth?" subtitle="Let's design a digital marketing system tailored to your business goals." />
    </Layout>
  );
};

export default Portfolio;
