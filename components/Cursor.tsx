"use client";
import { useEffect, useRef } from "react";

const HOVER_SELECTOR = "a, button, .bento-card, .work-card, .stat, .process-step, .stack-row, .hoverable";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 900px)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = 0, my = 0, cx = 0, cy = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      cx += (mx - cx) * 0.22;
      cy += (my - cy) * 0.22;
      if (ref.current) {
        ref.current.style.left = cx + "px";
        ref.current.style.top = cy + "px";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (t && t.closest(HOVER_SELECTOR)) ref.current?.classList.add("cursor-hover");
      else ref.current?.classList.remove("cursor-hover");
    };
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="cursor-dot fixed w-2 h-2 rounded-full bg-ink pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 max-[900px]:hidden"
        aria-hidden
      />
      <style jsx global>{`
        .cursor-dot {
          transition: width .25s var(--ease), height .25s var(--ease), background-color .25s var(--ease);
        }
        .cursor-hover {
          width: 44px !important;
          height: 44px !important;
          background-color: rgba(11, 18, 32, 0.06) !important;
        }
      `}</style>
    </>
  );
}
