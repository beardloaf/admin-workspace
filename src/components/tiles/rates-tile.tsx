import { cn } from "@/lib/utils";
import { BENTO_CARD } from "@/components/ui-kit/card";
import { StatusBadge } from "@/components/ui-kit/status-badge";
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
      <div className="flex items-start justify-between gap-3">
        <span className={EYEBROW}>Rates</span>
        <StatusBadge status="attention" />
      </div>

      <h2 className="mt-3 text-[2.125rem] font-medium leading-none tracking-[-0.02em] text-neutral-900">
        Negotiated rates
      </h2>

      <div className="mt-5 flex flex-wrap gap-2">
        <AvisMark />
        <EnterpriseMark />
        <HertzMark />
      </div>

      <p className="mt-4 text-[1.0625rem] text-neutral-500">
        3 car providers connected ·{" "}
        <span className="font-semibold text-neutral-900">add hotels</span>
      </p>
    </div>
  );
}
