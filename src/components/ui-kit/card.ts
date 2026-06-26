import type { PointerEvent, MouseEvent } from "react";

// Very diffuse, soft ambient shadow behind solid cards.
export const SHADOW = "shadow-[0_30px_80px_-20px_rgba(15,23,42,0.18)]";

// Hugs its content height.
export const CARD_BASE = `w-full rounded-[24px] border border-neutral-200 bg-white ${SHADOW}`;
// Fills its grid cell.
export const CARD = `h-full ${CARD_BASE}`;
// Bento tiles additionally scale slightly on hover (right-column panels do not).
export const BENTO_CARD = `${CARD} transition-transform duration-200 hover:scale-[1.02]`;

// Keep clicks on interactive controls from starting a grid drag.
export function stopDrag(e: PointerEvent | MouseEvent) {
  e.stopPropagation();
}
