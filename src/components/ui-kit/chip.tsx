import { cn } from "@/lib/utils";

export type ChipTone = "blue" | "amber" | "neutral" | "green";

const TONE: Record<ChipTone, string> = {
  blue: "bg-sky-50 text-sky-700",
  amber: "bg-amber-50 text-amber-700",
  neutral: "bg-neutral-100 text-neutral-600",
  green: "bg-emerald-50 text-emerald-700",
};

export function Chip({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: ChipTone;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[0.8125rem] font-medium",
        TONE[tone],
      )}
    >
      {children}
    </span>
  );
}
