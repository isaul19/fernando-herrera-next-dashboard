"use client";

import { ShoppingCartIcon } from "lucide-react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        label="Contador"
        title={String(count)}
        subtitle="Productos agregados"
        href="/dashboard/counter"
        icon={<ShoppingCartIcon className="h-10 w-10" />}
      />
    </div>
  );
};
