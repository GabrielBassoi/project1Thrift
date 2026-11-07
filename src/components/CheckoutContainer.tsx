import CheckoutCard from "./CheckoutCard";
import type { CheckoutContainerProps } from "./ThriftHappens";

export default function CheckoutContainer({ items }: CheckoutContainerProps) {
  return (
    <div>
      {items.map((item) => (
        <CheckoutCard key={item.id} {...item} />
      ))}
      <h3>
        {items.length > 0
          ? `Total: ${items.reduce((acc, item) => acc + item.price * item.itemQuantity, 0).toPrecision(2)}`
          : "Cart is empty"}
      </h3>
    </div>
  );
}
