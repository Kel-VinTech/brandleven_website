import { useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Target, Lightbulb, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

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
  "apex-consulting": {
  title: "Apex Consulting Website",
  category: "Corporate Consulting Website",
  color: "from-blue-500 to-indigo-600",
  url: "https://www.apexconsulting.ng/",
  screenshot: "/images/apex_consulting.webp",
  description:
    "Apex Consulting needed a professional corporate website to establish credibility, showcase consulting services, and generate enquiries from businesses.",

  clientGoals: [
    "Build a strong professional online presence",
    "Attract corporate clients and consulting enquiries",
    "Create a modern and mobile-friendly website",
    "Improve trust and credibility with potential clients",
  ],

  whatWeDid: [
    "Designed a modern corporate consulting website",
    "Built service pages highlighting consulting solutions",
    "Integrated lead capture forms for client enquiries",
    "Optimized the website for SEO and performance",
    "Implemented analytics to track user behaviour and conversions",
  ],

  results: [
    "Professional Corporate Website",
    "Mobile Optimized Experience",
    "Lead Generation Ready",
  ],
  },

 "pure-aura-retreat": {
  title: "Pure Aura Retreat Spa",
  category: "Spa & Salon Website Design",
  color: "from-amber-500 to-orange-600",
  url: "https://pure-aura-website.vercel.app/",
  screenshot: "/images/pure_aura.webp",

  description:
    "Pure Aura Retreat needed a luxurious and calming digital presence that reflects their premium spa and wellness services. We created an elegant, mobile-first website designed to attract new clients and simplify appointment bookings.",

  clientGoals: [
    "Create a luxury spa brand presence online",
    "Attract new clients searching for wellness services",
    "Allow customers to easily explore services and pricing",
    "Enable seamless appointment booking experience"
  ],

  whatWeDid: [
    "Designed a luxury spa website with a calming aesthetic",
    "Built service and pricing pages for clear offerings",
    "Created a mobile-optimized experience for clients on phones",
    "Integrated call-to-action booking buttons throughout the site",
    "Optimized images and layout for fast loading and smooth browsing"
  ],

  results: [
    "Luxury Brand Website",
    "Mobile Optimized Experience",
    "Appointment Booking Ready"
  ],
},
  "lumiere-interiors": {
    title: "Lumière Interiors",
    category: "Interior Design Corporate Website",
    color: "from-neutral-700 to-stone-900",
    url: "https://lumiere-website-bice.vercel.app/",
    screenshot: "/images/lumiere.webp",

    description:
      "Lumière Interiors required a sophisticated digital presence that reflects their luxury interior design brand. We created an elegant, modern website that showcases their portfolio, communicates their design philosophy, and attracts high-end clients.",

    clientGoals: [
      "Showcase luxury interior design projects",
      "Establish a premium and trustworthy brand online",
      "Attract high-end residential and commercial clients",
      "Create an elegant portfolio-focused experience"
    ],

    whatWeDid: [
      "Designed a luxury, minimalist website aesthetic",
      "Created a portfolio gallery to showcase design projects",
      "Built clear service pages explaining interior design offerings",
      "Implemented responsive design for mobile and tablet users",
      "Optimized layout and assets for fast performance"
    ],

    results: [
      "Luxury Brand Website",
      "Portfolio Showcase Experience",
      "Mobile Optimized Design"
    ],
  },
  "meridian-finance": {
    title: "Meridian Finance",
    category: "Corporate Website Design",
    color: "from-teal-500 to-emerald-600",
    url: "https://meridianfinance.com",
    screenshot: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    description: "Meridian Finance needed a modern corporate website that conveys trust and generates high-quality leads from enterprise clients.",
    clientGoals: [
      "Establish a premium digital presence",
      "Generate qualified B2B leads",
      "Reduce page load times significantly",
      "Lower bounce rate across key pages",
    ],
    whatWeDid: [
      "Redesigned the entire corporate site with a trust-first approach",
      "Built custom lead capture funnels with CRM integration",
      "Optimized Core Web Vitals for SEO performance",
      "Created detailed service and team pages",
      "Implemented analytics and conversion tracking",
    ],
    results: ["+200% Lead Gen", "4.5s → 1.3s Load", "50% Lower Bounce"],
  },
  "bloom-beauty": {
    title: "Bloom Beauty",
    category: "E-commerce Website Design",
    color: "from-pink-500 to-rose-600",
    url: "https://bloombeauty.com",
    screenshot: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80",
    description: "Bloom Beauty required a visually stunning e-commerce store that reflects their brand identity and maximizes conversions.",
    clientGoals: [
      "Increase online sales and repeat purchases",
      "Create a luxury shopping experience",
      "Boost average order value",
      "Build a loyal customer base",
    ],
    whatWeDid: [
      "Designed a premium storefront with lifestyle photography",
      "Built product bundles and upsell flows",
      "Implemented loyalty rewards and referral system",
      "Optimized checkout for mobile conversions",
      "Set up email marketing automations",
    ],
    results: ["+320% Sales", "45% Repeat Buyers", "2.8x AOV Increase"],
  },
  "atlas-logistics": {
    title: "Atlas Logistics",
    category: "Business Web Application",
    color: "from-sky-500 to-blue-600",
    url: "https://atlaslogistics.com",
    screenshot: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    description: "Atlas Logistics needed a web application to streamline their operations and provide real-time tracking for clients.",
    clientGoals: [
      "Digitize manual logistics workflows",
      "Enable real-time shipment tracking",
      "Reduce operational costs",
      "Improve client communication",
    ],
    whatWeDid: [
      "Built a custom web application with real-time dashboards",
      "Integrated GPS tracking and notification systems",
      "Created client portal for shipment visibility",
      "Automated reporting and invoicing workflows",
      "Deployed on scalable cloud infrastructure",
    ],
    results: ["+180% Efficiency", "Real-time Tracking", "40% Cost Reduction"],
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
          <Button asChild><a href="/portfolio">Back to Portfolio</a></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHero
        badge={project.category}
        headline={<><span className="text-primary">{project.title}</span> — Case Study</>}
        subtitle={project.description}
        ctaText="Visit Live Website"
        ctaLink={project.url}
      />

      {/* Back link */}
      <div className="container mx-auto px-4 mb-8">
        <a href="/portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
          <ArrowLeft size={16} /> Back to Portfolio
        </a>
      </div>

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
