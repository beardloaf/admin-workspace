import { cn } from "@/lib/utils";

export type Avatar = { initials: string; color: string };

export function AvatarStack({
  avatars,
  extra,
  size = 36,
}: {
  avatars: Avatar[];
  extra?: number;
  size?: number;
}) {
  return (
    <div className="flex items-center">
      {avatars.map((a, i) => (
        <span
          key={i}
          className={cn(
            "flex items-center justify-center rounded-full text-xs font-bold text-white ring-2 ring-white",
            i > 0 && "-ml-2.5",
          )}
          style={{ width: size, height: size, backgroundColor: a.color }}
        >
          {a.initials}
        </span>
      ))}
      {extra ? (
        <span
          className="-ml-2.5 flex items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-600 ring-2 ring-white"
          style={{ width: size, height: size }}
        >
          +{extra}
        </span>
      ) : null}
    </div>
  );
}
