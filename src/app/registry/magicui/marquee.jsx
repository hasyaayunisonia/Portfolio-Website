"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function Marquee({ reverse, pauseOnHover, className, children }) {
  return (
    <div
      data-direction={reverse ? "reverse" : "normal"}
      data-pause-on-hover={pauseOnHover ? "true" : "false"}
      className={cn("group flex overflow-hidden [--gap:1rem]", className)}
    >
      <div
        className={cn(
          "flex shrink-0 justify-around gap-[--gap] min-w-full",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 justify-around gap-[--gap] min-w-full",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
