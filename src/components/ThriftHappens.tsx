import { useState } from "react";
import CheckoutContainer from "./CheckoutContainer";
import ItemsContainer from "./ItemsContainer";
import NavBar from "./NavBar";
import type { ClothingProduct } from "../data/data";

export interface ItemCardFunction extends ClothingProduct {
  handleQuantityAdjust: (delta: number) => void;
  handleAddCheckout: (quantity: number) => void;
}

export interface ItemsContainerProps {
  items: ClothingProduct[];
  handleQuantityAdjust: (id: number, delta: number) => void;
  handleAddCheckout: (id: number, quantity: number) => void;
}

export interface CheckoutCardFunction extends ClothingProduct {
  handleRemoveItemCheckout: (quantity: number) => void;
}

export interface CheckoutContainerProps {
  items: ClothingProduct[];
  handleRemoveItemCheckout: (id: number, quantity: number) => void;
}

export default function ThriftHappens() {
  // States
  const [items, setItems] = useState<ClothingProduct[]>([] /* INITIALIZE */);
  const [checkout, setCheckout] = useState<ClothingProduct[]>([]);

  // Handlers

  // Handles the addtion and subtraction of the counter for each item
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

  // Adds a specific item to the checkout list
  function handleAddCheckout(id: number, quantity: number) {
    if (quantity === 0) return;

    if (checkout.find((item) => item.id === id)) {
      setCheckout((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                itemQuantity: item.itemQuantity + quantity,
              }
            : { ...item },
        ),
      );
    } else {
      let itemAdd = items.find((item) => item.id === id);
      if (itemAdd === undefined) return;
      setCheckout((prev) => [...prev, itemAdd]);
    }

    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - quantity, itemQuantity: 0 }
          : { ...item },
      ),
    );
  }

  // Removes the item from checkout and restore the item's quantity
  function handleRemoveItemCheckout(id: number, quantity: number) {
    setCheckout((prev) => prev.filter((item) => item.id !== id));

    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + quantity }
          : { ...item },
      ),
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
        <CheckoutContainer
          items={checkout}
          handleRemoveItemCheckout={handleRemoveItemCheckout}
        />
      </body>
    </div>
  );
}
