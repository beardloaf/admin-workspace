import { Asterisk } from "lucide-react";

/**
 * Lightweight monochrome brand marks for the prototype. Real brand SVGs can be
 * dropped in later — these approximate the wordmarks with styled text.
 */

function LogoChip({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`flex h-8 items-center rounded-lg border border-neutral-200 px-2 text-xs font-bold tracking-tight ${className}`}
    >
      {children}
    </span>
  );
}

export const AvisMark = () => (
  <LogoChip className="text-[#d4002a]">Avis</LogoChip>
);
export const EnterpriseMark = () => (
  <LogoChip className="text-[#0a7a3b]">Enterprise</LogoChip>
);
export const HertzMark = () => (
  <LogoChip className="text-[#000] [&>span]:text-[#ffd400]">
    Hertz
  </LogoChip>
);

export const BambooMark = () => (
  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#73c41d] text-base font-bold lowercase text-white">
    b
  </span>
);

export const OktaMark = () => (
  <Asterisk className="h-6 w-6 text-neutral-900" strokeWidth={2.5} />
);
