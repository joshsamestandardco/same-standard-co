import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="space-y-4">
          <Image
            src="/brand/patch.png"
            alt="Same Standard Co. patch"
            width={72}
            height={72}
            className="h-16 w-16"
          />
          <p className="font-display text-lg tracking-[0.12em] text-bone">
            Same Standard Co.
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-bone-muted">
            Merch and training aids for firefighters who hold one bar — volunteer
            or career. The paycheck isn&apos;t the qualification.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-3 text-sm text-bone-muted">
            <li>
              <Link href="/" className="hover:text-bone">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-bone">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/training" className="hover:text-bone">
                Training
              </Link>
            </li>
            <li>
              <Link href="/standard" className="hover:text-bone">
                The Standard
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">The bar</p>
          <ul className="space-y-3 font-display text-sm tracking-[0.1em] text-bone">
            <li>The paycheck isn&apos;t the qualification.</li>
            <li>Same fire. Same bar.</li>
            <li>No lower bar.</li>
            <li>One bar. Everyone.</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-bone-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Same Standard Co. All rights reserved.</p>
          <p className="font-display tracking-[0.16em] text-oxblood">= ONE BAR</p>
        </div>
      </div>
    </footer>
  );
}
