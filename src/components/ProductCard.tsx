import Image from "next/image";
import NotifyForm from "./NotifyForm";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-surface flex flex-col overflow-hidden">
      <div className="relative aspect-square bg-surface-2">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl tracking-[0.08em] text-bone">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-bone-muted">{product.description}</p>
          </div>
          <p className="font-display text-lg tracking-[0.06em] text-oxblood">
            ${product.price}
          </p>
        </div>
        <div className="mt-auto space-y-3 border-t border-border pt-4">
          <p className="eyebrow">Coming soon</p>
          <NotifyForm productName={product.name} compact />
        </div>
      </div>
    </article>
  );
}
