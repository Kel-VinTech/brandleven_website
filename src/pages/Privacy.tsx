import LegalLayout from "@/components/LegalLayout";
import { useSEO } from "@/hooks/use-seo";

const Privacy = () => {
  useSEO({
    title: "Privacy Policy | Brandleven",
    description: "How Brandleven collects, uses, and protects your personal and business information.",
    canonicalPath: "/privacy",
  });

  return (
    <LegalLayout
      badge="Legal"
      title="Privacy Policy"
      subtitle="How we collect, use, and protect the information you share with us."
    >
      <section>
        <h2>1. Information We Collect</h2>
        <p>When you contact us, request a strategy call, or work with us, we may collect:</p>
        <ul>
          <li>Your name and contact details (email address, phone number)</li>
          <li>Business information (company name, website, industry, goals)</li>
          <li>Account access details required to deliver our services</li>
          <li>Basic technical data such as IP address and browser type via analytics</li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To respond to enquiries and deliver the services you've requested</li>
          <li>To communicate with you about your project, invoices, and updates</li>
          <li>To improve our marketing efforts, website performance, and service quality</li>
          <li>To comply with legal and accounting obligations</li>
        </ul>
      </section>

      <section>
        <h2>3. Data Protection</h2>
        <p>
          We do not sell, rent, or trade your personal information. We only share data with trusted service providers (such as email, hosting, or analytics platforms) when strictly necessary to deliver our services, and we expect them to handle your data responsibly.
        </p>
      </section>

      <section>
        <h2>4. Cookies & Analytics</h2>
        <p>
          Our website may use cookies and analytics tools to understand how visitors use the site and to improve the experience. You can disable cookies in your browser settings if you prefer.
        </p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>
          You may request to access, update, or delete the personal information we hold about you at any time by contacting us.
        </p>
      </section>

      <section>
        <h2>6. Contact</h2>
        <p>
          For privacy-related questions or requests, email <a href="mailto:contactbrandleven@gmail.com">contactbrandleven@gmail.com</a>.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Privacy;
