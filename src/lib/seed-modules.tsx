export type SeedCell = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

// 18-col grid, rowHeight 12 + margin 24. Left zone = 12 cols (members/policies
// = 2 equal halves of w6; the row below = 3 equal thirds of w4). Right column
// = 6 cols (x12). A height unit ≈ 36px.
export const SEED_CELLS: SeedCell[] = [
  // ── Bento (left, x0–12) ──
  { i: "members", x: 0, y: 0, w: 6, h: 10 },
  { i: "policies", x: 6, y: 0, w: 6, h: 10 },
  // one row of three equal tiles
  { i: "departments", x: 0, y: 10, w: 4, h: 8 },
  { i: "rates", x: 4, y: 10, w: 4, h: 8 },
  { i: "rewards", x: 8, y: 10, w: 4, h: 8 },
  // full-width add module under the row
  { i: "add", x: 0, y: 18, w: 12, h: 5 },

  // ── Third column (x12) ──
  { i: "company", x: 12, y: 0, w: 6, h: 2 },
  { i: "setup", x: 12, y: 2, w: 6, h: 6 },
  { i: "accountManager", x: 12, y: 8, w: 6, h: 10 },
  { i: "integrations", x: 12, y: 18, w: 6, h: 9 },
];

// Collapsed / expanded heights for the Turner company switcher.
export const COMPANY_COLLAPSED_H = 2;
export const COMPANY_EXPANDED_H = 10;
