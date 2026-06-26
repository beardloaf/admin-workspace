"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { stopDrag } from "@/components/ui-kit/card";

export function Toggle({ defaultOn }: { defaultOn: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => setOn((v) => !v)}
      onPointerDown={stopDrag}
      onMouseDown={stopDrag}
      className={cn(
        "no-drag relative inline-flex h-7 w-[52px] shrink-0 items-center rounded-full transition-colors",
        on ? "bg-black" : "bg-neutral-200",
      )}
    >
      <span
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-full bg-white shadow transition-transform",
          on ? "translate-x-[26px]" : "translate-x-[2px]",
        )}
      >
        {on && <Check className="h-3 w-3 text-black" strokeWidth={3} />}
      </span>
    </button>
  );
}
