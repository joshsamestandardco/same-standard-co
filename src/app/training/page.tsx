import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Weeknight training calendar, drill cards, and makeup logs for volunteer fire departments. Free digital training aids from Same Standard Co.",
};

const downloads = [
  {
    title: "Weeknight Training Calendar",
    description:
      "A full-year outline built for after-work sessions. Topics sequenced for progression, not filler. Print it. Post it. Run it.",
    file: "/downloads/SSC-Weeknight-Training-Calendar.pdf",
    filename: "SSC-Weeknight-Training-Calendar.pdf",
    tag: "12 months",
  },
  {
    title: "Drill Cards — Training Aids",
    description:
      "Station-ready drill cards: objectives, setup, execution, and evaluation. Short enough for a weeknight. Serious enough for the fireground.",
    file: "/downloads/SSC-Drill-Cards-Training-Aids.pdf",
    filename: "SSC-Drill-Cards-Training-Aids.pdf",
    tag: "Printable",
  },
  {
    title: "Makeup Log",
    description:
      "Track who missed what and how they made it up. Accountability without bureaucracy. One bar means everyone gets the hours.",
    file: "/downloads/SSC-Makeup-Log.pdf",
    filename: "SSC-Makeup-Log.pdf",
    tag: "Accountability",
  },
];

export default function TrainingPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="eyebrow mb-3">Digital aids</p>
          <h1 className="font-display text-4xl tracking-[0.06em] sm:text-5xl">
            Training that fits
            <br />
            real life
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-bone-muted">
            Rural volunteers train between jobs, families, and calls. These aids
            are built for that reality — structured weeknight calendars, drill
            cards you can run cold, and logs that keep the standard honest.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow mb-2">The pitch</p>
            <h2 className="font-display text-3xl tracking-[0.06em]">
              Weeknight calendar + drill cards
            </h2>
            <p className="mt-4 text-bone-muted leading-relaxed">
              Most departments don&apos;t lack motivation. They lack a plan that
              survives a Tuesday at 19:00. Pair a calendar with cards and you
              stop reinventing training every week — and you stop accepting
              &ldquo;good enough for volunteers.&rdquo;
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                t: "Plan the year",
                d: "Topics mapped month by month so skills compound.",
              },
              {
                n: "02",
                t: "Run the card",
                d: "Clear objectives. Minimal setup. Measurable reps.",
              },
              {
                n: "03",
                t: "Log the gap",
                d: "Missed a night? Make it up. Document it.",
              },
              {
                n: "04",
                t: "Hold the bar",
                d: "Same expectations for every member on the roster.",
              },
            ].map((step) => (
              <div key={step.n} className="border border-border bg-black p-5">
                <p className="font-display text-oxblood tracking-[0.16em]">
                  {step.n}
                </p>
                <h3 className="mt-3 font-display text-lg tracking-[0.08em]">
                  {step.t}
                </h3>
                <p className="mt-2 text-sm text-bone-muted">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="eyebrow mb-3">Downloads</p>
          <h2 className="font-display text-3xl tracking-[0.06em]">
            Free. Print-ready. No fluff.
          </h2>

          <div className="mt-10 space-y-6">
            {downloads.map((item) => (
              <article
                key={item.filename}
                className="card-surface flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl tracking-[0.08em]">
                      {item.title}
                    </h3>
                    <span className="border border-oxblood px-2 py-0.5 font-display text-[10px] tracking-[0.16em] text-oxblood">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-bone-muted">
                    {item.description}
                  </p>
                </div>
                <a
                  href={item.file}
                  download={item.filename}
                  className="btn-primary shrink-0 self-start sm:self-center"
                >
                  Download PDF
                </a>
              </article>
            ))}
          </div>

          <div className="mt-12 border border-border bg-surface p-8 text-center">
            <p className="font-display text-2xl tracking-[0.1em]">
              No lower bar.
            </p>
            <p className="mt-3 text-sm text-bone-muted">
              Training aids are free. Merch funds the mission.{" "}
              <Link href="/shop" className="text-oxblood hover:underline">
                Shop the line
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
