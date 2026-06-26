import { Plus } from "lucide-react";
import { stopDrag } from "@/components/ui-kit/card";

export function AddTile({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-[24px] border border-dashed border-neutral-300 transition-colors hover:border-neutral-400">
      <button
        type="button"
        onClick={onAdd}
        onPointerDown={stopDrag}
        onMouseDown={stopDrag}
        aria-label="Add a module"
        className="no-drag flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105"
      >
        <Plus className="h-6 w-6" strokeWidth={2.25} />
      </button>
    </div>
  );
}
