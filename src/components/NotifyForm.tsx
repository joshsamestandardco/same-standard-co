"use client";

import { FormEvent, useState } from "react";

type Props = {
  productName: string;
  compact?: boolean;
};

export default function NotifyForm({ productName, compact = false }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("done");
    setEmail("");
  }

  if (status === "done") {
    return (
      <p className="text-sm text-bone">
        You&apos;re on the list for <span className="text-oxblood">{productName}</span>.
        We&apos;ll notify you when it drops.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`flex w-full ${compact ? "flex-col gap-2" : "flex-col gap-3 sm:flex-row"}`}
    >
      <label className="sr-only" htmlFor={`notify-${productName}`}>
        Email for {productName}
      </label>
      <input
        id={`notify-${productName}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@department.gov"
        className="w-full border border-border bg-black px-3 py-2.5 text-sm text-bone outline-none focus:border-oxblood"
      />
      <button type="submit" className="btn-primary whitespace-nowrap px-4 py-2.5 text-sm">
        Notify me
      </button>
    </form>
  );
}
