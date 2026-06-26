import { cn } from "@/lib/utils";
import { BENTO_CARD } from "@/components/ui-kit/card";
import { StatusBadge } from "@/components/ui-kit/status-badge";
import { MiniBar } from "@/components/ui-kit/progress";

const EYEBROW =
  "text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-neutral-500";

const POLICIES = [
  { name: "Default", assignees: 10, approvers: 2 },
  { name: "Traveling Sales", assignees: 4, approvers: 2 },
];

export function PoliciesTile({ onOpen }: { onOpen: () => void }) {
  return (
    <div
      onClick={onOpen}
      className={cn(BENTO_CARD, "flex cursor-pointer flex-col p-6")}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={EYEBROW}>Travel Policies</span>
        <StatusBadge status="complete" />
      </div>

      <h2 className="mt-3 text-[2.125rem] font-medium leading-none tracking-[-0.02em] text-neutral-900">
        2 Policies
      </h2>

      <div className="mt-5 space-y-3">
        {POLICIES.map((p) => (
          <div key={p.name}>
            <span className="text-[1.0625rem] font-semibold text-neutral-900">
              {p.name}
            </span>
            <span className="ml-2 text-sm text-neutral-500">
              {p.assignees} assignees · {p.approvers} approvers
            </span>
          </div>
        ))}
      </div>

      <div className="flex-1" />

      <div className="mt-5">
        <div className="mb-1.5 flex items-center justify-between text-sm text-neutral-500">
          <span>Travelers covered</span>
          <span className="font-medium text-neutral-700">88%</span>
        </div>
        <MiniBar value={88} />
      </div>
    </div>
  );
}
