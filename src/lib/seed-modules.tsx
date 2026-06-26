import type { ReactNode } from "react";
import type { PanelKind } from "@/components/panels";

export type ModuleTone = "default" | "accent" | "muted";
export type ModuleVariant = "filled" | "cta" | "accent";

export type ModuleToggle = {
  label: string;
  defaultOn: boolean;
  muted?: boolean;
};

export type ModuleData = {
  eyebrow?: string;
  title: string;
  tone?: ModuleTone;
  body?: ReactNode;
  toggle?: ModuleToggle;
  variant?: ModuleVariant;
};

export type SeedCell = {
  i: string;
  data: ModuleData | null; // null = empty "+" module (unless `custom` is set)
  custom?: PanelKind; // bespoke third-column panel
  x: number;
  y: number;
  w: number;
  h: number;
};

// 12-column grid, three columns of four. Columns 1 & 2 hold the bento
// modules; column 3 (x: 8) holds the account / integrations panels.
export const SEED_CELLS: SeedCell[] = [
  {
    i: "basic",
    x: 0,
    y: 0,
    w: 4,
    h: 5,
    data: {
      eyebrow: "4 Departments",
      title: "Basic",
      body: (
        <>
          We start every account with default depts. and you can{" "}
          <strong>add / remove</strong> any time.
        </>
      ),
    },
  },
  {
    i: "flexible",
    x: 4,
    y: 0,
    w: 4,
    h: 5,
    data: {
      eyebrow: "3 Travel Policies",
      title: "Flexible",
      tone: "accent",
      body: (
        <>
          We set your policies to flexible, keeping it easy to book in major
          cities. <strong>Make an update.</strong>
        </>
      ),
    },
  },
  {
    i: "team",
    x: 0,
    y: 5,
    w: 4,
    h: 5,
    data: {
      eyebrow: "Travelers & Teams",
      title: "It’s just you.",
      body: (
        <>
          Even if you’re booking for everyone, <strong>add your people</strong>{" "}
          to make your life easier.
        </>
      ),
    },
  },
  {
    i: "accent",
    x: 4,
    y: 5,
    w: 4,
    h: 5,
    data: {
      title: "",
      variant: "accent",
    },
  },
  {
    i: "rewards",
    x: 0,
    y: 10,
    w: 4,
    h: 5,
    data: {
      eyebrow: "1% Rewards",
      title: "Silver Status",
      body: <>Every account starts here and we let your team earn points.</>,
      toggle: { label: "Share with employees", defaultOn: true },
    },
  },
  {
    i: "rates",
    x: 4,
    y: 10,
    w: 4,
    h: 5,
    data: {
      eyebrow: "Your Rates",
      title: "Setup custom rates",
      tone: "muted",
      variant: "cta",
      body: (
        <>Add your hotels, flights, cars rates or ask us how to get cheaper rates.</>
      ),
      toggle: { label: "Negotiated rates", defaultOn: false, muted: true },
    },
  },
  { i: "empty-1", x: 0, y: 15, w: 4, h: 5, data: null },
  { i: "empty-2", x: 4, y: 15, w: 4, h: 5, data: null },

  // ── Third column ──
  { i: "company", x: 8, y: 0, w: 4, h: 2, data: null, custom: "company" },
  { i: "unlock", x: 8, y: 2, w: 4, h: 5, data: null, custom: "unlock" },
  { i: "integrations", x: 8, y: 7, w: 4, h: 6, data: null, custom: "integrations" },
];
