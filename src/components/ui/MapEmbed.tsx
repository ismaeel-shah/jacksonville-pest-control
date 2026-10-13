"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

/**
 * Click-to-load Google Map. Nothing loads from Google until the visitor asks,
 * which keeps the contact page fast.
 */
export function MapEmbed({ query, title }: { query: string; title: string }) {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-line bg-surface font-semibold text-primary hover:border-primary"
      >
        <MapPin aria-hidden className="size-8" />
        Show map
      </button>
    );
  }

  return (
    <iframe
      title={title}
      src={`https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
      className="aspect-[16/9] w-full rounded-xl border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
