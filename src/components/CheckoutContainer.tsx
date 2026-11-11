import CheckoutCard from "./CheckoutCard";
import type { CheckoutItem } from "./ThriftHappens";

export interface CheckoutContainerProps {
  items: CheckoutItem[];
  handleRemoveItemCheckout: (id:string, itemId:number, quantity: number) => void;
  handleEmptyCheckout: () => void;
}

export default function CheckoutContainer({
  items,
  handleRemoveItemCheckout,
  handleEmptyCheckout,
}: CheckoutContainerProps) {
  return (
    <div className="CheckoutContainer">
      <h3>Checkout</h3>
      {items.map((item) => (
        <CheckoutCard
          key={item.id}
          {...item}
          handleRemoveItemCheckout={(quantity: number) =>
            handleRemoveItemCheckout(item.id, item.itemId, quantity)
          }
        />
      ))}

      {items.length === 0 
        ? <h3>Cart is empty</h3>
        : <>
          <h3>Total: CA${items.reduce((acc, item) => acc + item.price * item.itemQuantity, 0).toFixed(2)}</h3>
          <button id="emptyCheckout" onClick={handleEmptyCheckout}>EMPTY CHECKOUT</button>
        </>
      }
    </div>
  );
}
