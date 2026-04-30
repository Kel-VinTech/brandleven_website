import LegalLayout from "@/components/LegalLayout";
import { useSEO } from "@/hooks/use-seo";

const Terms = () => {
  useSEO({
    title: "Terms & Conditions | Brandleven",
    description: "The terms governing your engagement with Brandleven's digital marketing systems, including scope, payments, revisions, and termination.",
    canonicalPath: "/terms",
  });

  return (
    <LegalLayout
      badge="Legal"
      title="Terms & Conditions"
      subtitle="Clear, fair terms that govern how we work together to grow your business."
    >
      <section>
        <h2>1. Overview of Services</h2>
        <p>
          Brandleven provides integrated digital marketing systems that may include website development, social media management, content planning and strategy, performance optimization, and ongoing campaign management. The specific deliverables included in your engagement are defined by the package or proposal you select.
        </p>
      </section>

      <section>
        <h2>2. Scope of Work</h2>
        <p>
          Deliverables, timelines, and ongoing responsibilities depend on the system tier you choose — Basic System, Growth System, or Scale System — or the custom proposal agreed in writing. Anything outside the agreed scope is treated as a new request and may require a separate quote.
        </p>
      </section>

      <section>
        <h2>3. Payment Terms</h2>
        <ul>
          <li>All payments are made upfront before work begins.</li>
          <li>Monthly retainers and managed plans are billed in advance at the start of each cycle.</li>
          <li>Work does not continue while an invoice is outstanding.</li>
          <li>Late payments may pause active deliverables until the account is brought up to date.</li>
        </ul>
      </section>

      <section>
        <h2>4. Revisions</h2>
        <p>
          Each deliverable includes a reasonable number of revisions to ensure the final result meets your goals. Excessive revision rounds, scope changes, or new directions beyond what was originally briefed may incur additional cost, which we will always communicate before proceeding.
        </p>
      </section>

      <section>
        <h2>5. Project Timelines</h2>
        <p>
          Timelines are estimated based on the agreed scope and shared at the start of the engagement. Actual delivery depends on client responsiveness — including approvals, feedback, content, and account access. Delays from the client side may shift agreed milestones.
        </p>
      </section>

      <section>
        <h2>6. Termination</h2>
        <p>
          Either party may terminate the engagement with written notice. Monthly plans require notice before the next billing cycle. Payments already made for completed work or in-progress milestones are non-refundable.
        </p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>
          Brandleven is not liable for indirect, incidental, or consequential losses, lost profits, or business outcomes that fall outside our reasonable control. Our total liability for any claim is limited to the amount paid for the specific service in question.
        </p>
      </section>

      <section>
        <h2>8. Contact</h2>
        <p>
          Questions about these terms? Email us at <a href="mailto:contactbrandleven@gmail.com">contactbrandleven@gmail.com</a>.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Terms;
