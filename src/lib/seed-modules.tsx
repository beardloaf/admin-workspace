export type SeedCell = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

// Two independent grids so drag is confined per zone. rowHeight 12 + margin 24.

// Left grid: 12 cols. Members/policies = two halves (w6); the row below = three
// equal thirds (w4); a full-width add module beneath.
export const LEFT_CELLS: SeedCell[] = [
  { i: "members", x: 0, y: 0, w: 6, h: 10 },
  { i: "policies", x: 6, y: 0, w: 6, h: 10 },
  { i: "departments", x: 0, y: 10, w: 4, h: 8 },
  { i: "rates", x: 4, y: 10, w: 4, h: 8 },
  { i: "rewards", x: 8, y: 10, w: 4, h: 8 },
  { i: "add", x: 0, y: 18, w: 12, h: 5 },
];

// Right grid: 6 cols, single column of full-width (w6) panels.
export const RIGHT_CELLS: SeedCell[] = [
  { i: "company", x: 0, y: 0, w: 6, h: 3 },
  { i: "setup", x: 0, y: 3, w: 6, h: 6 },
  { i: "accountManager", x: 0, y: 9, w: 6, h: 10 },
  { i: "integrations", x: 0, y: 19, w: 6, h: 9 },
];

// Collapsed / expanded heights for the Turner company switcher.
export const COMPANY_COLLAPSED_H = 3;
export const COMPANY_EXPANDED_H = 10;
