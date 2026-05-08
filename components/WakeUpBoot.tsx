"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function WakeUpBoot() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") return;
    const body = document.body;
    body.classList.remove("loading", "waking");
    body.classList.add("ready", "copy-on");
  }, [pathname]);
  return null;
}
