import { ReactNode } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

interface LegalLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated?: string;
  children: ReactNode;
}

const LegalLayout = ({ badge, title, subtitle, lastUpdated = "April 2026", children }: LegalLayoutProps) => {
  return (
    <Layout>
      <PageHero badge={badge} headline={<>{title}</>} subtitle={subtitle} />
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground mb-8">Last updated: {lastUpdated}</p>
            <article className="prose prose-slate max-w-none space-y-8 text-muted-foreground leading-relaxed [&_h2]:text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-foreground [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-primary [&_a]:underline">
              {children}
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalLayout;
