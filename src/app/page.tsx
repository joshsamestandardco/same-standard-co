import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,30,30,0.18),_transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10 space-y-8">
            <p className="eyebrow">Firefighter merch + training aids</p>
            <h1 className="font-display text-4xl leading-[1.05] tracking-[0.04em] text-bone sm:text-5xl lg:text-6xl">
              The paycheck
              <br />
              isn&apos;t the
              <br />
              <span className="text-oxblood">qualification.</span>
            </h1>
            <p className="max-w-md text-base leading-relaxed text-bone-muted sm:text-lg">
              Built for rural volunteer firefighters who refuse a lower bar.
              Same fire. Same standard. Career or volunteer — one bar for
              everyone.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className="btn-primary">
                Shop the line
              </Link>
              <Link href="/training" className="btn-ghost">
                Training aids
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
            <div className="absolute h-64 w-64 rounded-full bg-oxblood/20 blur-3xl sm:h-80 sm:w-80" />
            <Image
              src="/brand/patch.png"
              alt="Same Standard Co. equals-sign patch"
              width={420}
              height={420}
              priority
              className="relative z-10 w-full max-w-sm drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Taglines strip */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            "The paycheck isn’t the qualification.",
            "Same fire. Same bar.",
            "No lower bar.",
            "One bar. Everyone.",
          ].map((line) => (
            <p
              key={line}
              className="font-display text-center text-sm tracking-[0.12em] text-bone sm:text-left"
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* Statement */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="eyebrow mb-4">The idea</p>
          <h2 className="font-display text-3xl tracking-[0.06em] text-bone sm:text-4xl">
            Aggressive. Humble. Zero cheese.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-bone-muted sm:text-lg">
            Fire doesn&apos;t care who gets paid. Competence is the only
            credential that matters on the fireground. Same Standard Co. exists
            for the volunteers who train like professionals — and the career
            crews who respect that grind.
          </p>
          <Link
            href="/standard"
            className="mt-8 inline-block font-display text-sm tracking-[0.16em] text-oxblood hover:underline"
          >
            Read the standard →
          </Link>
        </div>
      </section>

      {/* Featured products */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-2">Merch</p>
              <h2 className="font-display text-3xl tracking-[0.06em]">
                Wear the bar
              </h2>
            </div>
            <Link href="/shop" className="btn-ghost self-start px-5 py-2.5 text-sm">
              View all
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <article key={product.id} className="card-surface overflow-hidden">
                <div className="relative aspect-square bg-surface-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-display text-lg tracking-[0.08em]">
                      {product.name}
                    </h3>
                    <p className="text-sm text-bone-muted">Coming soon</p>
                  </div>
                  <p className="font-display text-oxblood">${product.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Training CTA */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="eyebrow">Digital training aids</p>
            <h2 className="font-display text-3xl tracking-[0.06em] sm:text-4xl">
              Weeknights count.
            </h2>
            <p className="text-base leading-relaxed text-bone-muted">
              Free downloadable calendar, drill cards, and makeup logs designed
              for departments that train after work — not on someone else&apos;s
              schedule.
            </p>
            <Link href="/training" className="btn-primary">
              Get the aids
            </Link>
          </div>
          <div className="card-surface grid gap-4 p-6 sm:grid-cols-3">
            {[
              { title: "Weeknight Calendar", note: "12-month plan" },
              { title: "Drill Cards", note: "Station-ready" },
              { title: "Makeup Log", note: "Accountability" },
            ].map((item) => (
              <div key={item.title} className="border border-border bg-black p-4 text-center">
                <p className="font-display text-3xl text-oxblood">=</p>
                <p className="mt-2 font-display text-sm tracking-[0.1em]">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-bone-muted">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <p className="font-display text-5xl text-oxblood sm:text-6xl">=</p>
          <h2 className="mt-6 font-display text-3xl tracking-[0.08em] sm:text-4xl">
            One bar. Everyone.
          </h2>
          <p className="mt-4 text-bone-muted">
            If you hold the standard, you belong here.
          </p>
        </div>
      </section>
    </>
  );
}
