import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { BENTO_CARD, stopDrag } from "@/components/ui-kit/card";
import { StatusBadge } from "@/components/ui-kit/status-badge";
import { Chip } from "@/components/ui-kit/chip";
import { AvatarStack } from "@/components/ui-kit/avatar-stack";

const EYEBROW =
  "text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-neutral-500";

export function MembersTile({ onAdd }: { onAdd: () => void }) {
  return (
    <div className={cn(BENTO_CARD, "flex flex-col p-6")}>
      <div className="flex items-start justify-between gap-3">
        <span className={EYEBROW}>Team</span>
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
        <button
          type="button"
          onClick={onAdd}
          onPointerDown={stopDrag}
          onMouseDown={stopDrag}
          aria-label="Add new member"
          className="no-drag ml-auto flex h-9 items-center gap-1 rounded-xl bg-neutral-100 px-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
        >
          <Plus className="h-4 w-4" strokeWidth={2.25} />
          Add new
        </button>
      </div>
    </div>
  );
}
