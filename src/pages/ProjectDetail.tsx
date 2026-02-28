import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Target, Lightbulb, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";

const allProjects: Record<string, {
  title: string;
  category: string;
  color: string;
  url: string;
  screenshot: string;
  clientGoals: string[];
  whatWeDid: string[];
  results: string[];
  description: string;
}> = {
  "trendfusion-ecommerce": {
    title: "TrendFusion E-commerce",
    category: "E-commerce Website Design",
    color: "from-blue-500 to-indigo-600",
    url: "https://trendfusion.com",
    screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    description: "TrendFusion needed a complete e-commerce overhaul to compete in the fast-fashion market. We delivered a lightning-fast, conversion-optimized storefront.",
    clientGoals: [
      "Increase online sales and conversion rates",
      "Reduce page load time for better UX",
      "Modern, mobile-first shopping experience",
      "Streamlined checkout process",
    ],
    whatWeDid: [
      "Redesigned the entire storefront with a mobile-first approach",
      "Implemented lazy loading and image optimization for speed",
      "Built a custom checkout flow reducing cart abandonment by 35%",
      "Integrated advanced product filtering and search",
      "Set up conversion tracking and A/B testing framework",
    ],
    results: ["+240% Conversions", "+180% Revenue", "3.2s → 1.1s Load Time"],
  },
  "novatech-saas": {
    title: "NovaTech SaaS",
    category: "Landing Page Design",
    color: "from-violet-500 to-purple-600",
    url: "https://novatech.io",
    screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    description: "NovaTech required a high-converting landing page to drive signups for their cloud platform. We crafted a compelling narrative with clear CTAs.",
    clientGoals: [
      "Increase free trial signups",
      "Clearly communicate product value proposition",
      "Build trust with enterprise clients",
      "Improve lead quality from organic traffic",
    ],
    whatWeDid: [
      "Designed a single-page experience with strategic CTA placement",
      "Created compelling copy focused on pain points and solutions",
      "Built interactive product demos embedded in the page",
      "Implemented social proof sections with real metrics",
      "Optimized for SEO targeting SaaS-related keywords",
    ],
    results: ["+160% Signups", "38% Conversion Rate", "2x Lead Quality"],
  },
  "cloudsync-solutions": {
    title: "CloudSync Solutions",
    category: "Business Website Development",
    color: "from-amber-500 to-orange-600",
    url: "https://cloudsync.com",
    screenshot: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    description: "CloudSync needed a professional corporate website that positions them as an industry leader in cloud infrastructure solutions.",
    clientGoals: [
      "Establish credibility in the B2B cloud market",
      "Generate qualified enterprise leads",
      "Showcase technical capabilities and case studies",
      "Ensure 99.9% uptime for the website itself",
    ],
    whatWeDid: [
      "Built a professional multi-page site with a clean corporate design",
      "Created detailed service pages optimized for lead generation",
      "Integrated a blog and resource center for content marketing",
      "Set up lead capture forms with CRM integration",
      "Deployed on high-availability infrastructure",
    ],
    results: ["+300% Leads", "98% Uptime", "Professional Redesign"],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? allProjects[slug] : null;

  if (!project) {
    return (
      <Layout>
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Button asChild><Link to="/portfolio">Back to Portfolio</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className={`pt-32 pb-16 md:pt-44 md:pb-24 bg-gradient-to-br ${project.color}`}>
        <div className="container mx-auto px-4">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <ScrollReveal>
            <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">{project.title}</h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8">{project.description}</p>
            <Button variant="cta-white" size="lg" asChild>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Visit Live Website <ExternalLink size={16} />
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden border border-border shadow-2xl">
              <img src={project.screenshot} alt={`${project.title} website screenshot`} className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Details */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Client Goals */}
            <ScrollReveal>
              <div className="bg-card border border-border rounded-xl p-8 h-full">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <Target size={24} className="text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-4">Client Goals</h2>
                <ul className="space-y-3">
                  {project.clientGoals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* What We Did */}
            <ScrollReveal delay={0.1}>
              <div className="bg-card border border-border rounded-xl p-8 h-full">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <Lightbulb size={24} className="text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-4">What We Did</h2>
                <ul className="space-y-3">
                  {project.whatWeDid.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Results */}
            <ScrollReveal delay={0.2}>
              <div className="bg-card border border-border rounded-xl p-8 h-full">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <Target size={24} className="text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-4">Results</h2>
                <div className="space-y-4">
                  {project.results.map((result, i) => (
                    <div key={i} className="bg-accent rounded-lg p-4 text-center">
                      <span className="text-lg font-bold text-primary">{result}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="cta" className="w-full" asChild>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      Visit Website <ExternalLink size={14} />
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection title="Want Results Like These?" subtitle="Let's discuss how we can drive similar growth for your business." />
    </Layout>
  );
};

export default ProjectDetail;
