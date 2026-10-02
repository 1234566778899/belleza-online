"use client";

import { useState } from "react";
import { SmartImage } from "../SmartImage";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse gap-3 md:flex-row md:gap-2.5">
      <ul className="flex gap-3 p-px md:flex-col">
        {images.map((src, i) => (
          <li key={src}>
            <button
              onClick={() => setActive(i)}
              aria-label={`Ver imagen ${i + 1}`}
              aria-current={active === i}
              className={`relative block size-[82px] overflow-hidden rounded-[10px] border md:size-[93px] ${active === i ? "border-accent" : "border-[#dfdfdf] hover:border-muted"}`}
            >
              <SmartImage src={src} alt="" fill sizes="93px" className="bg-card object-cover" />
            </button>
          </li>
        ))}
      </ul>
      <div className="relative aspect-square flex-1 overflow-hidden rounded-[20px] bg-card">
        <SmartImage src={images[active]} alt={alt} fill preload sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
      </div>
    </div>
  );
}
