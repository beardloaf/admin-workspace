export type SeedCell = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

// 3 columns of 4 (12-col grid), rowHeight 12 + margin 24 → a height unit ≈ 36px.
// Cols 1–2 hold the birdseye bento tiles; col 3 (x: 8) holds the account panels.
export const SEED_CELLS: SeedCell[] = [
  // ── Bento (left, x0–8) ──
  { i: "members", x: 0, y: 0, w: 4, h: 10 },
  { i: "policies", x: 4, y: 0, w: 4, h: 10 },
  // one row: departments | rates | rewards
  { i: "departments", x: 0, y: 10, w: 2, h: 8 },
  { i: "rates", x: 2, y: 10, w: 3, h: 8 },
  { i: "rewards", x: 5, y: 10, w: 3, h: 8 },
  // full-width add module under the row
  { i: "add", x: 0, y: 18, w: 8, h: 4 },

  // ── Third column (x8) ──
  { i: "company", x: 8, y: 0, w: 4, h: 2 },
  { i: "setup", x: 8, y: 2, w: 4, h: 6 },
  { i: "accountManager", x: 8, y: 8, w: 4, h: 10 },
  { i: "integrations", x: 8, y: 18, w: 4, h: 9 },
];

// Collapsed / expanded heights for the Turner company switcher.
export const COMPANY_COLLAPSED_H = 2;
export const COMPANY_EXPANDED_H = 10;
