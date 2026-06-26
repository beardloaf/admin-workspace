import { cn } from "@/lib/utils";
import { BENTO_CARD } from "@/components/ui-kit/card";
import { StatusBadge } from "@/components/ui-kit/status-badge";
import { Chip } from "@/components/ui-kit/chip";
import { AvatarStack } from "@/components/ui-kit/avatar-stack";

const EYEBROW =
  "text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-neutral-500";

export function MembersTile() {
  return (
    <div className={cn(BENTO_CARD, "flex flex-col p-6")}>
      <div className="flex items-start justify-between gap-3">
        <span className={EYEBROW}>Members</span>
        <StatusBadge status="complete" />
      </div>

      <h2 className="mt-3 text-[2.125rem] font-medium leading-none tracking-[-0.02em] text-neutral-900">
        12 Members
      </h2>

      <div className="mt-4 flex flex-wrap gap-2">
        <Chip tone="blue">2 Admins</Chip>
        <Chip tone="blue">1 Department manager</Chip>
        <Chip tone="amber">2 Coordinators</Chip>
        <Chip tone="neutral">7 Travelers</Chip>
      </div>

      <div className="flex-1" />

      <div className="mt-5 flex items-center gap-3">
        <AvatarStack
          avatars={[
            { initials: "MI", color: "#3aa0e3" },
            { initials: "JD", color: "#7c5cff" },
            { initials: "AK", color: "#e0699f" },
            { initials: "RT", color: "#f0a83a" },
          ]}
          extra={8}
        />
        <span className="text-sm text-neutral-500">2 newly added</span>
      </div>
    </div>
  );
}
