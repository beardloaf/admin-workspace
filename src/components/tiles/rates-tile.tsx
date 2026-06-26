import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { BENTO_CARD } from "@/components/ui-kit/card";
import {
  AvisMark,
  EnterpriseMark,
  HertzMark,
} from "@/components/ui-kit/brand-marks";

const EYEBROW =
  "text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-neutral-500";

export function RatesTile({ onOpen }: { onOpen: () => void }) {
  return (
    <div
      onClick={onOpen}
      className={cn(BENTO_CARD, "flex cursor-pointer flex-col p-6")}
    >
      <span className={EYEBROW}>Negotiated rates</span>

      <h2 className="mt-3 text-2xl font-medium leading-tight tracking-[-0.02em] text-neutral-900">
        3 Active
      </h2>

      <div className="flex-1" />

      {/* logos at the bottom, 24px (mt-6) above the divider */}
      <div className="flex flex-wrap gap-1.5">
        <AvisMark />
        <EnterpriseMark />
        <HertzMark />
      </div>

      <div className="-mx-6 -mb-6 mt-6 flex items-center justify-center gap-2 border-t border-neutral-200 px-6 py-4 text-[0.9375rem] font-semibold text-neutral-900">
        <Plus className="h-[18px] w-[18px]" strokeWidth={2.25} />
        Add hotels
      </div>
    </div>
  );
}
