import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const EYEBROW =
  "text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-neutral-500";

export function ReportingTile({ onOpen }: { onOpen: () => void }) {
  return (
    <div
      onClick={onOpen}
      className="group flex h-full w-full cursor-pointer flex-col rounded-[24px] border border-dashed border-neutral-300 p-6"
    >
      <span
        className={cn(EYEBROW, "transition-colors group-hover:text-neutral-700")}
      >
        Reporting
      </span>

      <h2 className="mt-3 text-2xl font-medium leading-tight tracking-[-0.02em] text-neutral-400 transition-colors group-hover:text-neutral-900">
        Recurring or <span className="whitespace-nowrap">one-time</span> digests
      </h2>

      <div className="flex-1" />

      <div className="-mx-6 -mb-6 mt-6 flex items-center justify-center gap-2 border-t border-neutral-200 px-6 py-4 text-[0.9375rem] font-semibold text-neutral-500 transition-colors group-hover:text-neutral-900">
        <Plus className="h-[18px] w-[18px]" strokeWidth={2.25} />
        Set up templates
      </div>
    </div>
  );
}
