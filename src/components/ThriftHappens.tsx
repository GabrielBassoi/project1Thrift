import { useState } from "react";
import CheckoutContainer from "./CheckoutContainer";
import ItemsContainer from "./ItemsContainer";
import NavBar from "./NavBar";
import type { ClothingProduct } from "../data/data";

export interface ItemCardFunction extends ClothingProduct {
  handleQuantityAdjust: (delta: number) => void;
}

export interface ItemsContainerProps {
  items: ClothingProduct[];
  handleQuantityAdjust: (id: number, delta: number) => void;
}

export interface CheckoutContainerProps {
  items: ClothingProduct[];
}

export default function ThriftHappens() {
  // States
  const [items, setItems] = useState<ClothingProduct[]>([] /* INITIALIZE */);
  const [checkout, setCheckout] = useState<ClothingProduct[]>([]);

  // Handlers

  function handleQuantityAdjust(id: number, delta: number) {
    setItems((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          let total = item.quantity + delta;
          if (total <= item.quantity && total >= 0)
            return { ...item, itemQuantity: total };
        }
        return { ...item };
      }),
    );
  }

  // Main return
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <body>
        <ItemsContainer items={items} handleQuantityAdjust={handleQuantityAdjust} />
        <CheckoutContainer items={checkout} />
      </body>
    </div>
  );
}
