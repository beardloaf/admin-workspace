import { cn } from "@/lib/utils";
import { BENTO_CARD } from "@/components/ui-kit/card";

const EYEBROW =
  "text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-neutral-500";

export function DepartmentsTile() {
  return (
    <div className={cn(BENTO_CARD, "flex flex-col p-6")}>
      <span className={EYEBROW}>Departments</span>

      <div className="flex-1" />

      <span className="text-[2.75rem] font-medium leading-none tracking-[-0.02em] text-neutral-900">
        5
      </span>
      <span className="mt-1 text-[1.0625rem] font-medium text-neutral-700">
        Departments
      </span>
      <p className="mt-2 text-sm leading-snug text-neutral-500">
        Field ops, Finance +3
      </p>
    </div>
  );
}
