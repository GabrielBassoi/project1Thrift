import { useState } from "react";
import CheckoutContainer from "./CheckoutContainer";
import ItemsContainer from "./ItemsContainer";
import NavBar from "./NavBar";
import { type ClothingProduct } from "../data/data";

interface ThriftHappensProps {
  data: ClothingProduct[];
}

export interface ItemInfo {
  id: number;
  quantity: number;
  itemQuantity: number;
}

export interface CheckoutItem {
  id: string,
  itemId: number,
  image: string,
  name: string,
  itemQuantity: number,
  price: number,
}

export default function ThriftHappens({ data }: ThriftHappensProps) {
  // States
  const [checkout, setCheckout] = useState<CheckoutItem[]>([]);
  const [itemsInfo, setItemsInfo] = useState<ItemInfo[]>(() =>
    data.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      itemQuantity: item.itemQuantity,
    })),
  );

  // Handlers

  // Handles the addtion and subtraction of the counter for each item
  function handleQuantityAdjust(id: number, delta: number) {
    setItemsInfo((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          let total = item.itemQuantity + delta;
          if (total <= item.quantity && total >= 0)
            return { ...item, itemQuantity: total };
        }
        return { ...item };
      }),
    );
  }

  // Adds a specific item to the checkout list
  function handleAddCheckout(newItem: CheckoutItem) {
    if (newItem.itemQuantity === 0) return; // out of stock

    if (checkout.find((item) => item.itemId === newItem.itemId)) {
      setCheckout((prev) =>
        prev.map((item) =>
          item.itemId === newItem.itemId
            ? {
                ...item,
                itemQuantity: item.itemQuantity + newItem.itemQuantity,
              }
            : { ...item },
        ),
      );
    } else {
      setCheckout((prev) => [...prev, newItem]);
    }

    setItemsInfo((prev) =>
      prev.map((item) =>
        item.id === newItem.itemId
          ? { ...item, quantity: item.quantity - newItem.itemQuantity, itemQuantity: 0 }
          : { ...item },
      ),
    );
  }

  // Removes the item from checkout and restore the item's quantity
  function handleRemoveItemCheckout(id: string, itemId: number, quantity: number) {
    setCheckout((prev) => prev.filter((item) => item.id !== id));

    setItemsInfo((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + quantity }
          : { ...item },
      ),
    );
  }

  // Removes all the items from checkout and restore all the item's quantities
  function handleEmptyCheckout() {
    checkout.forEach((item) =>
      handleRemoveItemCheckout(item.id, item.itemId, item.itemQuantity),
    );
    setCheckout([]);
  }

  // Main return
  return (
    <div>
      <NavBar />
      <div className="MainContent">
        <ItemsContainer
          data={data}
          itemsInfo={itemsInfo}
          handleQuantityAdjust={handleQuantityAdjust}
          handleAddCheckout={handleAddCheckout}
        />
        <CheckoutContainer
          items={checkout}
          handleRemoveItemCheckout={handleRemoveItemCheckout}
          handleEmptyCheckout={handleEmptyCheckout}
        />
      </div>
    </div>
  );
}
