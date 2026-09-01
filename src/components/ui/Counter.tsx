"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // in ms
}

export const Counter = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ end, suffix = "", prefix = "", duration = 1500, className, ...props }, ref) => {
    const [count, setCount] = useState(end);
    const elementRef = useRef<HTMLDivElement>(null);

    return (
      <div 
        ref={(node) => {
          // @ts-ignore
          elementRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn("inline-block font-bold", className)}
        {...props}
      >
        {prefix}{count}{suffix}
      </div>
    );
  }
);

Counter.displayName = "Counter";
