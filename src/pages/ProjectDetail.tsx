import { useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Target, Lightbulb, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { useSEO } from "@/hooks/use-seo";
import apexConsultingImg from "@/assets/apex-consulting.webp";
import pureAuraImg from "@/assets/pure-aura-retreat.webp";
import lumiereInteriorsImg from "@/assets/lumiere-interiors.webp";
import maisonAurelleImg from "@/assets/maison-aurelle.webp";
import lipEnvyImg from "@/assets/lip-envy-luxury-lip-care.webp";
import lkAestheticsImg from "@/assets/lk-aesthetics-tanning.webp";

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
  "pure-aura-retreat": {
    title: "Pure Aura Retreat Spa",
    category: "Spa & Salon Website Design",
    color: "from-amber-500 to-orange-600",
    url: "https://pureauraretreat.com",
    screenshot: pureAuraImg,
    description: "Pure Aura Retreat needed a luxurious and calming digital presence that reflects their premium spa and wellness services. We created an elegant, mobile-first website designed to attract new clients and simplify appointment bookings.",
    clientGoals: [
      "Create a luxury spa brand presence online",
      "Attract new clients searching for wellness services",
      "Allow customers to easily explore services and pricing",
      "Enable seamless appointment booking experience",
    ],
    whatWeDid: [
      "Designed a luxury spa website with a calming aesthetic",
      "Built service and pricing pages for clear offerings",
      "Created a mobile-optimized experience for clients on phones",
      "Integrated call-to-action booking buttons throughout the site",
      "Optimized images and layout for fast loading and smooth browsing",
    ],
    results: ["Luxury Brand Website", "Mobile Optimized Experience", "Appointment Booking Ready"],
  },
  "lumiere-interiors": {
    title: "Lumière Interiors",
    category: "Interior Design Corporate Website",
    color: "from-stone-500 to-amber-700",
    url: "https://lumiereinteriors.com",
    screenshot: lumiereInteriorsImg,
    description: "Lumière Interiors required a sophisticated digital presence that reflects their luxury interior design brand. We created an elegant, modern website that showcases their portfolio, communicates their design philosophy, and attracts high-end clients.",
    clientGoals: [
      "Showcase luxury interior design projects",
      "Establish a premium and trustworthy brand online",
      "Attract high-end residential and commercial clients",
      "Create an elegant portfolio-focused experience",
    ],
    whatWeDid: [
      "Designed a luxury, minimalist website aesthetic",
      "Created a portfolio gallery to showcase design projects",
      "Built clear service pages explaining interior design offerings",
      "Implemented responsive design for mobile and tablet users",
      "Optimized layout and assets for fast performance",
    ],
    results: ["Luxury Brand Website", "Portfolio Showcase Experience", "Mobile Optimized Design"],
  },
  "maison-aurelle": {
    title: "Maison Aurelle",
    category: "Fashion E-commerce Website",
    color: "from-stone-400 to-amber-600",
    url: "https://maisonaurelle.com",
    screenshot: maisonAurelleImg,
    description: "Maison Aurelle needed an editorial-grade e-commerce experience that reflects their premium fashion brand. We crafted a refined storefront focused on storytelling, conscious style, and a frictionless shopping journey across devices.",
    clientGoals: [
      "Establish a luxury fashion brand presence online",
      "Showcase seasonal collections with editorial storytelling",
      "Drive online sales through a refined shopping experience",
      "Build a mobile-first storefront for modern shoppers",
    ],
    whatWeDid: [
      "Designed an editorial homepage with full-bleed lookbook hero",
      "Built collection and product pages with premium typography",
      "Implemented wishlist, cart, and account flows for shoppers",
      "Optimized checkout for mobile conversions and speed",
      "Tuned imagery and assets for fast loading across devices",
    ],
    results: ["Premium Brand Storefront", "Mobile-First Shopping Experience", "Conversion Optimized Design"],
  },
  "apex-consulting": {
    title: "Apex Consulting",
    category: "Corporate Consulting Website",
    color: "from-teal-500 to-emerald-600",
    url: "https://apexconsulting.com",
    screenshot: apexConsultingImg,
    description: "Apex Consulting needed a professional corporate website to establish credibility, showcase consulting services, and generate enquiries from businesses.",
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
    results: ["Professional Corporate Website", "Mobile Optimized Experience", "Lead Generation Ready"],
  },
  "lip-envy": {
    title: "Lip Envy",
    category: "Luxury Lip Care E-commerce",
    color: "from-pink-400 to-primary",
    url: "https://lipenvy.com",
    screenshot: lipEnvyImg,
    description: "Lip Envy needed a polished beauty e-commerce experience that blends premium branding with a clear shopping journey, helping customers discover curated lip products and buy confidently across devices.",
    clientGoals: [
      "Create a memorable luxury beauty brand presence online",
      "Showcase featured lip products in a clean editorial storefront",
      "Drive mobile and desktop purchases with a frictionless shopping flow",
      "Build trust through premium visuals and clear product discovery",
    ],
    whatWeDid: [
      "Designed a soft luxury storefront inspired by editorial beauty campaigns",
      "Built a hero-led shopping experience with strong collection call-to-actions",
      "Structured product discovery around curated lip care and beauty categories",
      "Optimized the layout for mobile-first browsing and conversion-ready shopping",
      "Compressed imagery and storefront assets for fast loading performance",
    ],
    results: ["Premium Product Showcase", "Mobile Shopping Ready", "Conversion-Focused Storefront"],
  },
  "lk-aesthetics-tanning": {
    title: "LK Aesthetics & Tanning",
    category: "Aesthetics & Tanning Website",
    color: "from-secondary to-primary",
    url: "https://lkaestheticsandtanning.com",
    screenshot: lkAestheticsImg,
    description: "LK Aesthetics & Tanning needed a luxury beauty website that reflects its premium in-clinic experience, clearly presents treatments and pricing, and makes it easy for clients to book appointments online.",
    clientGoals: [
      "Create a polished online presence for aesthetics and tanning services",
      "Showcase treatments, deals, and pricing in a clear structure",
      "Increase appointment bookings from mobile and desktop visitors",
      "Build trust with a premium, beauty-focused first impression",
    ],
    whatWeDid: [
      "Designed a luxury service website with a strong beauty brand aesthetic",
      "Built dedicated sections for treatments, pricing, deals, and contact details",
      "Created a mobile-optimized navigation flow for service discovery",
      "Integrated a clear booking system pathway with prominent call-to-action buttons",
      "Optimized imagery and page structure for fast loading and easy browsing",
    ],
    results: ["Online Booking System", "Luxury Service Showcase", "Mobile Booking Ready"],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? allProjects[slug] : null;

  useSEO({
    title: project
      ? `${project.title} — ${project.category} Case Study | Brandleven`
      : "Case Study Not Found | Brandleven",
    description: project
      ? `${project.description} See how Brandleven's integrated marketing system delivered measurable results for ${project.title}.`
      : "The case study you're looking for could not be found.",
    canonicalPath: slug ? `/portfolio/${slug}` : "/portfolio",
  });

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
