import { Button } from "@/components/ui/button";
import {
  Globe, ShoppingCart, MousePointerClick, RefreshCw, Search,
  Facebook, Instagram, Clapperboard, GitBranch, BarChart3, ArrowRight
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

const webServices = [
  { icon: Globe, title: "Business Website Development", desc: "Custom websites built to represent your brand and generate leads 24/7." },
  { icon: ShoppingCart, title: "E-commerce Website Design", desc: "Fully functional online stores designed to maximize sales and conversions." },
  { icon: MousePointerClick, title: "Landing Page Design", desc: "High-converting landing pages optimized for paid traffic and lead capture." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Modernize your existing site with better UX, faster speeds, and improved conversions." },
  { icon: Search, title: "SEO Optimization", desc: "On-page and technical SEO to improve your rankings and organic traffic." },
];

const adServices = [
  { icon: Facebook, title: "Facebook Ads Management", desc: "Targeted campaigns that reach your ideal audience and maximize ROAS." },
  { icon: Instagram, title: "Instagram Ads Specialist Services", desc: "Visual-first campaigns that drive engagement, follows, and conversions." },
  { icon: Clapperboard, title: "TikTok Ads Marketing", desc: "Short-form video campaigns designed for virality and brand awareness." },
  { icon: GitBranch, title: "Funnel Strategy", desc: "End-to-end sales funnels that guide prospects from awareness to purchase." },
  { icon: BarChart3, title: "Conversion Tracking", desc: "Pixel setup, analytics, and attribution to measure every dollar spent." },
];

const ServiceCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
  </div>
);

const Services = () => {
  return (
    <Layout>
      <PageHero
        badge="Our Services"
        headline={<>Strategic <span className="text-primary">Digital Solutions</span> That Scale.</>}
        subtitle="From professional website development to performance marketing, we cover every aspect of your digital growth."
        ctaText="Get Started Today"
        secondaryCtaText="View Our Work"
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Website Services" title="Websites Built to Convert" subtitle="Every website we build is optimized for lead generation, conversion rate optimization, and sustainable sales growth." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {webServices.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      <section className="section-alt py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Digital Marketing" title="Ads That Drive Revenue" subtitle="Targeted campaigns across Facebook, Instagram, and TikTok — all focused on measurable ROI and data optimization." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adServices.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild className="px-8 py-6 text-base">
              <a href="/contact">Get Started Today <ArrowRight size={18} /></a>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;
