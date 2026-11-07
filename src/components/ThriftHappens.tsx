import { useState } from "react";
import CheckoutContainer from "./CheckoutContainer";
import ItemsContainer from "./ItemsContainer";
import NavBar from "./NavBar";
import type { ClothingProduct } from "../data/data";

export interface ItemCardFunction extends ClothingProduct {
  handleQuantityAdjust: (delta: number) => void;
  handleAddCheckout: () => void;
}

export interface ItemsContainerProps {
  items: ClothingProduct[];
  handleQuantityAdjust: (id: number, delta: number) => void;
  handleAddCheckout: (id: number) => void;
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
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          let total = item.quantity + delta;
          if (total <= item.quantity && total >= 0)
            return { ...item, itemQuantity: total };
        }
        return { ...item };
      }),
    );
  }

  function handleAddCheckout(id: number) {
    let itemAdd = items.find((item) => item.id === id);

    if (itemAdd === undefined) return;
    if (itemAdd.itemQuantity === 0) return;

    if (checkout.find((item) => item.id === itemAdd.id)) {
      setCheckout((prev) =>
        prev.map((item) =>
          item.id === itemAdd.id
            ? {
                ...item,
                itemQuantity: item.itemQuantity + itemAdd.itemQuantity,
              }
            : { ...item },
        ),
      );
    } else {
      setCheckout((prev) => [...prev, itemAdd]);
    }

    itemAdd.quantity = itemAdd.quantity - itemAdd.itemQuantity;
    itemAdd.itemQuantity = 0;

    setItems((prev) =>
      prev.map((item) => (item.id === itemAdd.id ? itemAdd : { ...item })),
    );
  }

  // Main return
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <body>
        <ItemsContainer
          items={items}
          handleQuantityAdjust={handleQuantityAdjust}
          handleAddCheckout={handleAddCheckout}
        />
        <CheckoutContainer items={checkout} />
      </body>
    </div>
  );
}
