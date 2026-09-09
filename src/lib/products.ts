import type { Product } from "@/components/ProductCard";

export const products: Product[] = [
  {
    id: "hat",
    name: "Field Cap",
    price: 32,
    description: "Structured cap. Equals mark. Quiet authority.",
    image: "/products/hat.png",
  },
  {
    id: "tee",
    name: "Standard Tee",
    price: 30,
    description: "Heavyweight cotton. Wordmark front. No noise.",
    image: "/products/tee.png",
  },
  {
    id: "stickers",
    name: "Sticker Pack",
    price: 10,
    description: "Patch + capsule marks. Helmet box ready.",
    image: "/products/stickers.png",
  },
  {
    id: "hoodie",
    name: "Station Hoodie",
    price: 60,
    description: "Midweight fleece. Built for cool nights and early calls.",
    image: "/products/hoodie.png",
  },
  {
    id: "job-shirt",
    name: "Job Shirt",
    price: 65,
    description: "Workwear cut. Oxblood accent. Duty-ready.",
    image: "/products/job-shirt.png",
  },
];
