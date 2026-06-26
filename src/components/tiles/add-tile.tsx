import { Plus } from "lucide-react";
import { stopDrag } from "@/components/ui-kit/card";

export function AddTile({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="group relative h-full w-full rounded-[24px]">
      {/* Dashed rounded border that marches around on hover */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <rect className="add-dash" />
      </svg>

      <div className="relative flex h-full w-full items-center justify-center">
        <button
          type="button"
          onClick={onAdd}
          onPointerDown={stopDrag}
          onMouseDown={stopDrag}
          aria-label="Add a module"
          className="no-drag flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-125"
        >
          <Plus className="h-6 w-6" strokeWidth={2.25} />
        </button>
      </div>
    </div>
  );
}
