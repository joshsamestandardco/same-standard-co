import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Standard",
  description:
    "Same Standard Co. philosophy: volunteers and career firefighters share one bar. The paycheck isn’t the qualification.",
};

export default function StandardPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <Image
            src="/brand/capsule.png"
            alt="Same Standard Co."
            width={220}
            height={56}
            className="mx-auto h-10 w-auto"
            priority
          />
          <p className="eyebrow mt-8 mb-3">Philosophy</p>
          <h1 className="font-display text-4xl tracking-[0.06em] sm:text-5xl">
            The Standard
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-bone-muted">
            Aggressive but humble. Zero cheese. One idea that doesn&apos;t
            bend.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl space-y-10 px-4 py-14 sm:px-6 sm:py-16">
          <article className="space-y-4">
            <h2 className="font-display text-2xl tracking-[0.08em] text-oxblood">
              The paycheck isn&apos;t the qualification.
            </h2>
            <p className="text-base leading-relaxed text-bone-muted">
              Getting paid doesn&apos;t make you ready. Not getting paid
              doesn&apos;t make you less. Qualification is competence under
              pressure — measured in training hours, judgment, and the willingness
              to hold yourself accountable when no one is watching.
            </p>
          </article>

          <div className="rule" />

          <article className="space-y-4">
            <h2 className="font-display text-2xl tracking-[0.08em] text-oxblood">
              Same fire. Same bar.
            </h2>
            <p className="text-base leading-relaxed text-bone-muted">
              The building doesn&apos;t ask about your status. The patient
              doesn&apos;t care about your roster category. Rural volunteer
              departments answer the same physics with fewer people and less
              time. That is not an excuse for a softer standard — it is the
              reason the standard matters more.
            </p>
          </article>

          <div className="rule" />

          <article className="space-y-4">
            <h2 className="font-display text-2xl tracking-[0.08em] text-oxblood">
              No lower bar.
            </h2>
            <p className="text-base leading-relaxed text-bone-muted">
              &ldquo;Good enough for volunteers&rdquo; is a failure of
              leadership. We reject kitsch, cosplay, and the culture that
              confuses slogans with skill. Train. Document. Correct. Repeat.
              The bar stays where the job puts it.
            </p>
          </article>

          <div className="rule" />

          <article className="space-y-4">
            <h2 className="font-display text-2xl tracking-[0.08em] text-oxblood">
              One bar. Everyone.
            </h2>
            <p className="text-base leading-relaxed text-bone-muted">
              Same Standard Co. makes merch and training aids for people who
              live that sentence. The equals mark is not decoration — it is the
              claim. Volunteer and career share the same expectation. If you
              wear it, you mean it.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <p className="font-display text-5xl text-oxblood">=</p>
          <h2 className="mt-6 font-display text-2xl tracking-[0.1em] sm:text-3xl">
            Built for the grind between calls
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-bone-muted">
            We don&apos;t name-drop departments. We don&apos;t sell thin-red-line
            kitsch. We sell a standard — and the tools to keep it.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/shop" className="btn-primary">
              Shop
            </Link>
            <Link href="/training" className="btn-ghost">
              Training
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
