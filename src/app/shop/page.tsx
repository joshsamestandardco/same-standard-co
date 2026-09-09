import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Same Standard Co. merch — field cap, tee, hoodie, job shirt, and sticker pack. Coming soon. Notify for drop.",
};

export default function ShopPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="eyebrow mb-3">Merch</p>
          <h1 className="font-display text-4xl tracking-[0.06em] sm:text-5xl">
            Shop the line
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-bone-muted">
            Clean marks. No kitsch. Gear you can wear to the station without
            apologizing for the message. First drop coming soon — leave your
            email on any product to get notified.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-14 border border-border bg-surface p-8 text-center">
            <p className="font-display text-2xl tracking-[0.1em] text-bone">
              Same fire. Same bar.
            </p>
            <p className="mt-3 text-sm text-bone-muted">
              Prices shown in USD. Shipping details announced with the drop.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
