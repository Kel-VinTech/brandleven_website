import LegalLayout from "@/components/LegalLayout";
import { useSEO } from "@/hooks/use-seo";

const Disclaimer = () => {
  useSEO({
    title: "Disclaimer | Brandleven",
    description: "Important information about results, performance, and the responsibilities involved in our digital marketing engagements.",
    canonicalPath: "/disclaimer",
  });

  return (
    <LegalLayout
      badge="Legal"
      title="Disclaimer"
      subtitle="Honest expectations about results, performance, and the work we do together."
    >
      <section>
        <h2>1. No Guaranteed Results</h2>
        <p>
          While our digital marketing systems are designed to improve customer acquisition, engagement, and revenue, results may vary depending on market conditions, industry, competition, audience behaviour, and the level of client participation. We do not guarantee specific revenue figures, sales numbers, or customer counts.
        </p>
      </section>

      <section>
        <h2>2. Factors That Influence Performance</h2>
        <p>The success of any marketing engagement depends on a combination of factors, including:</p>
        <ul>
          <li>Client responsiveness and timely approvals</li>
          <li>Quality and timeliness of content, assets, and access provided</li>
          <li>Market demand and competitive landscape</li>
          <li>Consistency of execution over time</li>
          <li>Pricing, product-market fit, and overall business operations</li>
        </ul>
      </section>

      <section>
        <h2>3. Marketing Is Not a Promise</h2>
        <p>
          Digital marketing is a discipline of testing, optimization, and compounding effort. We commit to applying our experience, strategy, and best practices — but we do not promise exact results or business outcomes.
        </p>
      </section>

      <section>
        <h2>4. Client Responsibilities</h2>
        <p>To get the best results from our work together, clients are expected to:</p>
        <ul>
          <li>Provide content, brand assets, and approvals in a timely manner</li>
          <li>Grant access to social media accounts, hosting, analytics, and ad platforms as required</li>
          <li>Maintain timely communication throughout the engagement</li>
          <li>Understand that delays from the client side may affect delivery and outcomes</li>
        </ul>
      </section>

      <section>
        <h2>5. Account Access & Content Ownership</h2>
        <p>
          We may require access to platforms such as social media accounts, website hosting, analytics, and advertising tools to deliver our services. The client retains full ownership of their accounts, content, brand, and creative assets at all times.
        </p>
        <p>
          Brandleven may showcase completed work, results, and case studies in our portfolio and marketing materials unless otherwise agreed in writing.
        </p>
      </section>

      <section>
        <h2>6. Third-Party Platforms</h2>
        <p>
          Our work often involves third-party platforms (e.g. Meta, TikTok, Google, hosting providers). We are not responsible for changes to their policies, algorithms, pricing, or availability that may affect performance.
        </p>
      </section>

      <section>
        <h2>7. Contact</h2>
        <p>
          Questions about this disclaimer? Email <a href="mailto:contactbrandleven@gmail.com">contactbrandleven@gmail.com</a>.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Disclaimer;
