"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";

type DetailSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  showSave?: boolean;
};

export function DetailSheet({
  open,
  onOpenChange,
  title,
  description,
  showSave = false,
}: DetailSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="flex flex-col rounded-2xl shadow-2xl sm:max-w-md data-[side=right]:inset-y-5 data-[side=right]:right-5 data-[side=right]:h-auto"
      >
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>

        {/* Blank body for now */}
        <div className="flex-1" />

        {showSave && (
          <SheetFooter>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="w-full rounded-2xl bg-black py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.01]"
            >
              Save
            </button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
