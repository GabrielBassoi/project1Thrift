import CheckoutCard from "./CheckoutCard";
import type { CheckoutContainerProps } from "./ThriftHappens";

export default function CheckoutContainer({
  items,
  handleRemoveItemCheckout,
}: CheckoutContainerProps) {
  return (
    <div>
      {items.map((item) => (
        <CheckoutCard
          key={item.id}
          {...item}
          handleRemoveItemCheckout={(quantity: number) => handleRemoveItemCheckout(item.id, quantity)}
        />
      ))}
      {items.length > 0 ? <button>Empty Checkout</button> : <></>}
      <h3>
        {items.length > 0
          ? `Total: ${items.reduce((acc, item) => acc + item.price * item.itemQuantity, 0).toPrecision(2)}`
          : "Cart is empty"}
      </h3>
    </div>
  );
}
