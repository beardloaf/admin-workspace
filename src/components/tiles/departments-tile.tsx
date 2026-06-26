import { cn } from "@/lib/utils";
import { BENTO_CARD } from "@/components/ui-kit/card";
import { StatusBadge } from "@/components/ui-kit/status-badge";

const EYEBROW =
  "text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-neutral-500";

const DEPARTMENTS = [
  "Field operations",
  "Project management",
  "Finance",
  "Administration",
  "Executive",
];

export function DepartmentsTile() {
  return (
    <div className={cn(BENTO_CARD, "flex flex-col p-6")}>
      <div className="flex items-start justify-between gap-3">
        <span className={EYEBROW}>Departments</span>
        <StatusBadge status="complete" />
      </div>

      <h2 className="mt-3 text-[2.125rem] font-medium leading-none tracking-[-0.02em] text-neutral-900">
        5 Departments
      </h2>

      <ul className="mt-5 space-y-1.5">
        {DEPARTMENTS.map((d) => (
          <li key={d} className="text-[1.0625rem] text-neutral-600">
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}
