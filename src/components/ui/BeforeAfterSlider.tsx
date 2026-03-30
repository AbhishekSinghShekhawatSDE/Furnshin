"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  title?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  title,
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <div className="relative overflow-hidden rounded-xl shadow-2xl group" style={{ aspectRatio: "4/3" }}>
      {title && (
        <div className="absolute top-4 left-4 z-20 glass px-3 py-1 rounded-full">
          <p className="text-espresso text-xs font-semibold">{title}</p>
        </div>
      )}

      {/* After image (full) */}
      <div className="absolute inset-0">
        <Image src={afterSrc} alt={afterAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="absolute top-3 right-3 glass px-2 py-1 rounded text-espresso text-xs font-bold">After</div>
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="absolute inset-0 w-full" style={{ minWidth: containerRef.current?.offsetWidth || 600 }}>
          <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="absolute top-3 left-3 glass px-2 py-1 rounded text-espresso text-xs font-bold">Before</div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10 flex items-center justify-center cursor-ew-resize"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        onMouseDown={() => { dragging.current = true; }}
        onMouseMove={(e) => { if (dragging.current) updatePosition(e.clientX); }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchStart={() => { dragging.current = true; }}
        onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
        onTouchEnd={() => { dragging.current = false; }}
        ref={containerRef}
      >
        <div className="w-0.5 h-full" style={{ backgroundColor: "#C9A96E" }} />
        <div
          className="absolute w-10 h-10 rounded-full flex items-center justify-center shadow-xl"
          style={{ backgroundColor: "#C9A96E" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2C1810" strokeWidth="2.5">
            <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
