"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";

type RatesSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function RatesSheet({ open, onOpenChange }: RatesSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="flex flex-col rounded-l-2xl shadow-2xl sm:max-w-md"
      >
        <SheetHeader>
          <SheetTitle>Your Rates</SheetTitle>
          <SheetDescription>Set up your custom rates.</SheetDescription>
        </SheetHeader>

        {/* Blank body for now */}
        <div className="flex-1" />

        <SheetFooter>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="w-full rounded-2xl bg-black py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.01]"
          >
            Save
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
