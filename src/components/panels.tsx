"use client";

import { type PointerEvent, type MouseEvent } from "react";
import {
  ChevronDown,
  Calendar,
  AlertTriangle,
  AlertCircle,
  Asterisk,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Right-column panels: no hover scale (unlike the bento cards).
const CARD_BASE =
  "w-full rounded-[24px] border border-neutral-200 bg-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.18)]";
// Most cards fill their grid cell; CARD_BASE alone hugs its content height.
const CARD = "h-full " + CARD_BASE;

function stopDrag(e: PointerEvent | MouseEvent) {
  e.stopPropagation();
}

/* ───────────── See all features ───────────── */

export function SeeAllBar() {
  return (
    <div className="flex h-full w-full items-center justify-end">
      <button
        type="button"
        onClick={() => {}}
        onPointerDown={stopDrag}
        onMouseDown={stopDrag}
        className="no-drag rounded-full bg-black px-7 py-3.5 text-lg font-semibold text-white transition-transform hover:scale-[1.02]"
      >
        See all features
      </button>
    </div>
  );
}

/* ───────────── Company switcher ───────────── */

export function CompanyCard({
  expanded,
  onToggle,
}: {
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      onClick={onToggle}
      className={cn(CARD, "flex cursor-pointer flex-col px-6 py-3")}
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
    </div>
  );
}

/* ───────────── Unlock the full Engine experience ───────────── */

export function UnlockCard() {
  return (
    <div className={cn(CARD, "flex flex-col p-6")}>
      <h2 className="text-xl font-extrabold leading-snug tracking-tight text-neutral-900">
        Unlock the full Engine experience
      </h2>
      <p className="mt-2 text-sm leading-snug text-neutral-500">
        Your account manager is ready to optimize Engine for your team.
      </p>

      <div className="flex-1" />

      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3aa0e3] text-sm font-bold text-white">
          MI
        </span>
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

type IntegrationStatus = "error" | "incomplete";

function StatusBadge({ status }: { status: IntegrationStatus }) {
  if (status === "error") {
    return (
      <span className="flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1.5 text-[0.9375rem] font-medium text-orange-700">
        <AlertTriangle className="h-[18px] w-[18px]" strokeWidth={2} />
        Error
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1.5 text-[0.9375rem] font-medium text-sky-700">
      <AlertCircle className="h-[18px] w-[18px]" strokeWidth={2} />
      Incomplete
    </span>
  );
}

function IntegrationRow({
  icon,
  name,
  status,
}: {
  icon: React.ReactNode;
  name: string;
  status: IntegrationStatus;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3.5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center">
        {icon}
      </span>
      <span className="flex-1 text-lg font-semibold text-neutral-900">
        {name}
      </span>
      <StatusBadge status={status} />
    </div>
  );
}

export function IntegrationsCard() {
  return (
    <div className={cn(CARD_BASE, "flex flex-col p-6")}>
      <div className="flex items-center justify-between gap-2">
        <span className="whitespace-nowrap text-xl font-extrabold tracking-tight text-neutral-900">
          Connected Integrations
        </span>
        <button
          type="button"
          onClick={() => {}}
          onPointerDown={stopDrag}
          onMouseDown={stopDrag}
          className="no-drag shrink-0 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
        >
          See all
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <IntegrationRow
          name="BambooHR"
          status="error"
          icon={
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#73c41d] text-base font-bold lowercase text-white">
              b
            </span>
          }
        />
        <IntegrationRow
          name="Okta"
          status="incomplete"
          icon={<Asterisk className="h-6 w-6 text-neutral-900" strokeWidth={2.5} />}
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

/* ───────────── kind → component ───────────── */

export type PanelKind = "seeAll" | "company" | "unlock" | "integrations";

export function Panel({ kind }: { kind: PanelKind }) {
  switch (kind) {
    case "seeAll":
      return <SeeAllBar />;
    case "unlock":
      return <UnlockCard />;
    case "integrations":
      return <IntegrationsCard />;
    // "company" is rendered directly by the workspace (it needs expand state).
    default:
      return null;
  }
}
