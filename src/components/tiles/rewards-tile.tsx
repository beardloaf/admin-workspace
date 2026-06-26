import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { BENTO_CARD } from "@/components/ui-kit/card";
import { MiniBar } from "@/components/ui-kit/progress";
import { Toggle } from "@/components/ui-kit/toggle";

const EYEBROW =
  "text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-neutral-500";

export function RewardsTile() {
  return (
    <div className={cn(BENTO_CARD, "flex flex-col p-6")}>
      <span className={EYEBROW}>Rewards</span>

      <h2 className="mt-3 bg-[linear-gradient(45deg,#000000,#9ca3af)] bg-clip-text text-2xl font-medium leading-tight tracking-[-0.02em] text-transparent">
        Silver Status
      </h2>

      <div className="-mx-6 mt-4 flex items-center justify-between border-t border-neutral-200 px-6 pt-4">
        <span className="flex items-center gap-1.5 text-[0.9375rem] font-semibold text-neutral-900">
          Share with employees
          <Info className="h-[18px] w-[18px] text-neutral-400" strokeWidth={2} />
        </span>
        <Toggle defaultOn />
      </div>

      <div className="flex-1" />

      <div>
        <div className="mb-1.5 flex items-center justify-between text-sm">
          <span className="text-neutral-500">Progress to Gold</span>
          <span className="font-medium text-neutral-700">7.4K / 10K</span>
        </div>
        <MiniBar value={74} />
      </div>
    </div>
  );
}
