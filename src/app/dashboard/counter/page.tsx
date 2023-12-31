import { Metadata } from "next";
import { CartCounter } from "@/shopping-cart/CartCounter";

export const metadata: Metadata = {
  title: "counter page",
};

export default async function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter />
    </div>
  );
}
