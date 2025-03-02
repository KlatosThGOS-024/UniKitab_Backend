"use client";
import { useEffect, useState } from "react";

export default function GlobalLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      suppressHydrationWarning
      className={
        mounted ? "opacity-100 transition-opacity duration-300" : "opacity-0"
      }
    >
      {children}
    </div>
  );
}
