import React from "react";
import { cn } from "@/lib/utils";

export function BackgroundLines({ children, className }) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className='pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-slate-100' />
      <div
        className='pointer-events-none absolute inset-0 -z-10 opacity-70'
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30, 41, 59, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 41, 59, 0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className='pointer-events-none absolute inset-0 -z-10'
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.18), transparent 45%), radial-gradient(circle at 10% 80%, rgba(14, 116, 144, 0.12), transparent 35%)",
        }}
      />
      {children}
    </div>
  );
}

