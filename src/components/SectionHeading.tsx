interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, center = true }: SectionHeadingProps) => (
  <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
    {badge && (
      <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">{title}</h2>
    {subtitle && (
      <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
