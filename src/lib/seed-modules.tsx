import type { ReactNode } from "react";

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
  data: ModuleData | null; // null = empty "+" module
  x: number;
  y: number;
  w: number;
  h: number;
};

// 12-column grid. Four rows of two, ending with two empty "+" modules.
export const SEED_CELLS: SeedCell[] = [
  {
    i: "basic",
    x: 0,
    y: 0,
    w: 6,
    h: 7,
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
    x: 6,
    y: 0,
    w: 6,
    h: 7,
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
    y: 7,
    w: 6,
    h: 7,
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
    x: 6,
    y: 7,
    w: 6,
    h: 7,
    data: {
      title: "",
      variant: "accent",
    },
  },
  {
    i: "rewards",
    x: 0,
    y: 14,
    w: 6,
    h: 7,
    data: {
      eyebrow: "1% Rewards",
      title: "Silver Status",
      body: <>Every account starts here and we let your team earn points.</>,
      toggle: { label: "Share with employees", defaultOn: true },
    },
  },
  {
    i: "rates",
    x: 6,
    y: 14,
    w: 6,
    h: 7,
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
  { i: "empty-1", x: 0, y: 21, w: 6, h: 7, data: null },
  { i: "empty-2", x: 6, y: 21, w: 6, h: 7, data: null },
];
