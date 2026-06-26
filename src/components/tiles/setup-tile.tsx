import { cn } from "@/lib/utils";
import { BENTO_CARD } from "@/components/ui-kit/card";

const EYEBROW =
  "text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-neutral-500";

const COMPLETED = 4;
const TOTAL = 6;
const PCT = Math.round((COMPLETED / TOTAL) * 100);

export function SetupTile() {
  const r = 52;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - PCT / 100);
  return (
    <div className={cn(BENTO_CARD, "flex flex-col p-6")}>
      <span className={EYEBROW}>Account setup</span>

      <div className="flex flex-1 items-center gap-5">
        <div className="relative h-[120px] w-[120px] shrink-0">
          <svg width={120} height={120} className="-rotate-90">
            <circle
              cx={60}
              cy={60}
              r={r}
              fill="none"
              stroke="#f0f0f0"
              strokeWidth={12}
            />
            <circle
              cx={60}
              cy={60}
              r={r}
              fill="none"
              stroke="#111111"
              strokeWidth={12}
              strokeLinecap="round"
              strokeDasharray={c}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold tracking-tight text-neutral-900">
            {PCT}%
          </div>
        </div>

        <div>
          <p className="text-[1.0625rem] font-semibold text-neutral-900">
            {COMPLETED} of {TOTAL} complete
          </p>
          <p className="mt-1 text-sm leading-snug text-neutral-500">
            Finish setup to unlock the full Engine experience.
          </p>
        </div>
      </div>
    </div>
  );
}
