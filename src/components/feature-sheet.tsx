"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { FEATURES, type FeatureType } from "@/lib/features";

type FeatureSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (feature: FeatureType) => void;
};

export function FeatureSheet({
  open,
  onOpenChange,
  onSelect,
}: FeatureSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="m-3 h-auto rounded-2xl border shadow-2xl sm:max-w-md"
      >
        <SheetHeader>
          <SheetTitle>Add a module</SheetTitle>
          <SheetDescription>
            Pick a feature to drop into this slot.
          </SheetDescription>
        </SheetHeader>

        <div className="grid gap-3 overflow-y-auto px-4 pb-6">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <button
                key={f.type}
                type="button"
                onClick={() => onSelect(f.type)}
                className="flex items-start gap-3 rounded-xl border border-neutral-300 bg-white p-4 text-left transition-all hover:border-black hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neutral-300">
                  <Icon className="h-5 w-5 text-neutral-700" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-neutral-900">
                    {f.name}
                  </div>
                  <div className="text-xs text-neutral-500">
                    {f.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
