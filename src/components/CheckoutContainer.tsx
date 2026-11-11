import CheckoutCard from "./CheckoutCard";
import type { CheckoutContainerProps } from "./ThriftHappens";

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
            handleRemoveItemCheckout(item.id, quantity)
          }
        />
      ))}
      <h3>
        {items.length > 0
          ? `Total: CA$${items.reduce((acc, item) => acc + item.price * item.itemQuantity, 0).toFixed(2)}`
          : "Cart is empty"}
      </h3>
      {items.length > 0 ? (
        <button id="emptyCheckout" onClick={handleEmptyCheckout}>EMPTY CHECKOUT</button>
      ) : (
        <></>
      )}
    </div>
  );
}
