"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/training", label: "Training" },
  { href: "/standard", label: "The Standard" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/capsule.png"
            alt="Same Standard Co."
            width={180}
            height={48}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-display text-sm tracking-[0.14em] transition-colors ${
                  active ? "text-oxblood" : "text-bone hover:text-oxblood"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center border border-border text-bone md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-display text-lg leading-none">{open ? "×" : "="}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-black md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-border py-4 font-display text-base tracking-[0.14em] ${
                    active ? "text-oxblood" : "text-bone"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
