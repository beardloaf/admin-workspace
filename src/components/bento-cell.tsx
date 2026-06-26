"use client";

import { useState, type PointerEvent, type MouseEvent } from "react";
import { Plus, Info, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ModuleData } from "@/lib/seed-modules";

type BentoCellProps = {
  id: string;
  data: ModuleData | null;
  onAdd: (id: string) => void;
};

// Keep clicks on interactive controls from starting a grid drag.
function stopDrag(e: PointerEvent | MouseEvent) {
  e.stopPropagation();
}

function PlusButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      onPointerDown={stopDrag}
      onMouseDown={stopDrag}
      aria-label="Add a module"
      className="no-drag flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105"
    >
      <Plus className="h-5 w-5" strokeWidth={2.25} />
    </button>
  );
}

function Toggle({ defaultOn }: { defaultOn: boolean }) {
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

// Very diffuse, soft ambient shadow behind every module.
const MODULE_SHADOW = "shadow-[0_30px_80px_-20px_rgba(15,23,42,0.18)]";

const TONE_CLASS: Record<NonNullable<ModuleData["tone"]>, string> = {
  default: "text-neutral-900",
  accent: "text-[#16a34a]",
  muted: "text-neutral-400",
};

export function BentoCell({ id, data, onAdd }: BentoCellProps) {
  // Empty placeholder module.
  if (!data) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-[24px] border border-dashed border-neutral-300 transition-colors hover:border-neutral-400">
        <PlusButton onClick={() => onAdd(id)} />
      </div>
    );
  }

  // Decorative light-blue accent panel.
  if (data.variant === "accent") {
    return <div className="h-full w-full rounded-[24px] bg-[#e4eefb]" />;
  }

  const isCta = data.variant === "cta";
  const toneClass = TONE_CLASS[data.tone ?? "default"];

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col rounded-[24px] bg-white p-8",
        isCta
          ? "border border-dashed border-neutral-300"
          : cn("border border-neutral-200", MODULE_SHADOW),
      )}
    >
      <div className="flex items-start justify-between gap-4">
        {data.eyebrow && (
          <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-neutral-500">
            {data.eyebrow}
          </span>
        )}
        {isCta && <PlusButton onClick={() => onAdd(id)} />}
      </div>

      {/* Push title + body toward the bottom, like the reference. */}
      <div className="flex-1" />

      <h2
        className={cn(
          "text-[2.125rem] font-normal leading-[1.05] tracking-[-0.02em]",
          toneClass,
        )}
      >
        {data.title}
      </h2>

      {data.body && (
        <p className="mt-4 max-w-[42ch] text-[1.0625rem] leading-[1.45] text-neutral-600 [&_strong]:font-semibold [&_strong]:text-neutral-900">
          {data.body}
        </p>
      )}

      {data.toggle && (
        <div className="-mx-8 mt-7 flex items-center justify-between border-t border-neutral-200 px-8 pt-5">
          <span
            className={cn(
              "flex items-center gap-1.5 text-[0.9375rem] font-semibold",
              data.toggle.muted ? "text-neutral-400" : "text-neutral-900",
            )}
          >
            {data.toggle.label}
            <Info className="h-[18px] w-[18px] text-neutral-400" strokeWidth={2} />
          </span>
          <Toggle defaultOn={data.toggle.defaultOn} />
        </div>
      )}
    </div>
  );
}
