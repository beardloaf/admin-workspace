"use client";

import { ChevronDown, Calendar, Plus, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import { CARD, CARD_BASE, stopDrag } from "@/components/ui-kit/card";
import { StatusBadge } from "@/components/ui-kit/status-badge";
import { BambooMark, OktaMark } from "@/components/ui-kit/brand-marks";

/* ───────────── Company switcher (expandable) ───────────── */

export function CompanyCard({
  expanded,
  onToggle,
  onEdit,
}: {
  expanded: boolean;
  onToggle: () => void;
  onEdit: () => void;
}) {
  return (
    <div
      onClick={onToggle}
      className={cn(
        CARD,
        "relative flex cursor-pointer flex-col p-6",
        expanded ? "justify-start" : "justify-center",
      )}
    >
      {/* Title stays at the top; expanding just adds white space below. */}
      <div className="flex items-center gap-2.5">
        <span className="text-base font-extrabold italic tracking-tight text-[#1d3a8a]">
          Turner
        </span>
        <span className="flex-1 truncate text-lg font-bold tracking-tight text-neutral-900">
          Turner Construction
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          onPointerDown={stopDrag}
          onMouseDown={stopDrag}
          aria-label={expanded ? "Collapse" : "Expand"}
          className="no-drag shrink-0 text-neutral-700"
        >
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform duration-200",
              expanded && "rotate-180",
            )}
            strokeWidth={2.25}
          />
        </button>
      </div>

      {expanded && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          onPointerDown={stopDrag}
          onMouseDown={stopDrag}
          aria-label="Edit company"
          className="no-drag absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors hover:bg-neutral-200"
        >
          <Pencil className="h-4 w-4" strokeWidth={2} />
        </button>
      )}
    </div>
  );
}

/* ───────────── Account manager ───────────── */

export function AccountManagerCard() {
  return (
    <div className={cn(CARD, "flex flex-col p-6")}>
      <h2 className="text-2xl font-medium leading-tight tracking-[-0.02em] text-neutral-900">
        Unlock the power of Engine
      </h2>
      <p className="mt-2 text-sm leading-snug text-neutral-500">
        Your account manager is ready to optimize Engine for your team.
      </p>

      <div className="flex-1" />

      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=faces"
          alt="Maya Iyer"
          className="h-11 w-11 shrink-0 rounded-full object-cover"
        />
        <span className="min-w-0">
          <span className="block text-base font-bold leading-tight text-neutral-900">
            Maya Iyer
          </span>
          <span className="block text-xs text-neutral-500">Account Manager</span>
        </span>
      </div>

      <button
        type="button"
        onClick={() => {}}
        onPointerDown={stopDrag}
        onMouseDown={stopDrag}
        className="no-drag mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-neutral-100 py-3 text-base font-semibold text-neutral-900 transition-colors hover:bg-neutral-200"
      >
        <Calendar className="h-[18px] w-[18px]" strokeWidth={2} />
        Schedule call
      </button>
    </div>
  );
}

/* ───────────── Connected Integrations ───────────── */

function IntegrationRow({
  icon,
  name,
  status,
  label,
}: {
  icon: React.ReactNode;
  name: string;
  status: "attention" | "notset";
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3.5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center">
        {icon}
      </span>
      <span className="flex-1 text-lg font-semibold text-neutral-900">
        {name}
      </span>
      <StatusBadge status={status} label={label} />
    </div>
  );
}

export function IntegrationsCard() {
  return (
    <div className={cn(CARD_BASE, "flex flex-col p-6")}>
      <div className="flex items-center justify-between gap-2">
        <span className="whitespace-nowrap text-2xl font-medium tracking-[-0.02em] text-neutral-900">
          Connected Integrations
        </span>
        <button
          type="button"
          onClick={() => {}}
          onPointerDown={stopDrag}
          onMouseDown={stopDrag}
          className="no-drag shrink-0 rounded-xl bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
        >
          See all
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <IntegrationRow
          name="BambooHR"
          status="attention"
          label="Error"
          icon={<BambooMark />}
        />
        <IntegrationRow
          name="Okta"
          status="notset"
          label="Incomplete"
          icon={<OktaMark />}
        />
      </div>

      <button
        type="button"
        onClick={() => {}}
        onPointerDown={stopDrag}
        onMouseDown={stopDrag}
        className="no-drag mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-neutral-100 py-3 text-base font-semibold text-neutral-900 transition-colors hover:bg-neutral-200"
      >
        <Plus className="h-[18px] w-[18px]" strokeWidth={2.25} />
        New integration
      </button>
    </div>
  );
}
