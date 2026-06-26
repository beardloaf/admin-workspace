import { CheckCircle2, AlertTriangle, CircleDashed } from "lucide-react";
import { cn } from "@/lib/utils";

export type Status = "complete" | "attention" | "notset";

const CONFIG: Record<
  Status,
  { label: string; className: string; Icon: typeof CheckCircle2 }
> = {
  complete: {
    label: "Complete",
    className: "bg-emerald-50 text-emerald-700",
    Icon: CheckCircle2,
  },
  attention: {
    label: "Needs attention",
    className: "bg-amber-50 text-amber-700",
    Icon: AlertTriangle,
  },
  notset: {
    label: "Not set up",
    className: "bg-neutral-100 text-neutral-500",
    Icon: CircleDashed,
  },
};

export function StatusBadge({
  status,
  label,
}: {
  status: Status;
  label?: string;
}) {
  const { label: defaultLabel, className, Icon } = CONFIG[status];
  return (
    <span
      className={cn(
        "flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.8125rem] font-medium",
        className,
      )}
    >
      <Icon className="h-4 w-4" strokeWidth={2} />
      {label ?? defaultLabel}
    </span>
  );
}
