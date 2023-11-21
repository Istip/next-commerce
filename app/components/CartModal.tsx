"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function CartModal() {
  return (
    <Sheet defaultOpen>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div>
          <h1>Hello</h1>
        </div>
      </SheetContent>
    </Sheet>
  );
}
