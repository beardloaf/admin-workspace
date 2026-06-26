import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { BENTO_CARD } from "@/components/ui-kit/card";
import { StatusBadge } from "@/components/ui-kit/status-badge";
import { MiniBar } from "@/components/ui-kit/progress";
import { Toggle } from "@/components/ui-kit/toggle";

const EYEBROW =
  "text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-neutral-500";

export function RewardsTile() {
  return (
    <div className={cn(BENTO_CARD, "flex flex-col p-6")}>
      <div className="flex items-start justify-between gap-3">
        <span className={EYEBROW}>Rewards</span>
        <StatusBadge status="complete" />
      </div>

      <h2 className="mt-3 text-[2.125rem] font-medium leading-none tracking-[-0.02em] bg-[linear-gradient(45deg,#000000,#9ca3af)] bg-clip-text text-transparent">
        Silver Status
      </h2>

      <div className="mt-5">
        <div className="mb-1.5 flex items-center justify-between text-sm">
          <span className="text-neutral-500">Progress to Gold</span>
          <span className="font-medium text-neutral-700">1,240 / 2,000 pts</span>
        </div>
        <MiniBar value={62} />
      </div>

      <div className="flex-1" />

      <div className="-mx-6 mt-5 flex items-center justify-between border-t border-neutral-200 px-6 pt-4">
        <span className="flex items-center gap-1.5 text-[0.9375rem] font-semibold text-neutral-900">
          Share with employees
          <Info className="h-[18px] w-[18px] text-neutral-400" strokeWidth={2} />
        </span>
        <Toggle defaultOn />
      </div>
    </div>
  );
}
