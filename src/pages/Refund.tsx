import LegalLayout from "@/components/LegalLayout";
import { useSEO } from "@/hooks/use-seo";

const Refund = () => {
  useSEO({
    title: "Refund & Cancellation Policy | Brandleven",
    description: "Brandleven's fair and transparent approach to refunds, cancellations, and ongoing engagements.",
    canonicalPath: "/refund",
  });

  return (
    <LegalLayout
      badge="Legal"
      title="Refund & Cancellation Policy"
      subtitle="A fair, transparent approach to refunds, cancellations, and ongoing engagements."
    >
      <section>
        <h2>1. General Refund Policy</h2>
        <p>
          Because our work begins with strategy, planning, and execution from day one, services are generally non-refundable once work has started. We invest time, tools, and resources into your project from the moment we begin.
        </p>
      </section>

      <section>
        <h2>2. Cancelling Monthly Plans</h2>
        <p>
          Monthly retainers and managed plans require written notice before your next billing cycle. Once a billing cycle has begun, the fee for that cycle is non-refundable, and we will continue delivering the agreed work through the end of the period.
        </p>
      </section>

      <section>
        <h2>3. Work Completed Up to Cancellation</h2>
        <p>
          If a project is cancelled mid-engagement, all work completed up to the cancellation point is billable. We will share what has been delivered so you can continue moving forward.
        </p>
      </section>

      <section>
        <h2>4. Completed Milestones</h2>
        <p>
          Refunds are not issued for milestones, deliverables, or services that have already been completed and delivered.
        </p>
      </section>

      <section>
        <h2>5. Disputes</h2>
        <p>
          If something isn't working for you, we'd much rather hear from you first. Reach out to <a href="mailto:contactbrandleven@gmail.com">contactbrandleven@gmail.com</a> and we'll do our best to find a fair resolution.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Refund;
