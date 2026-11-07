import ItemCard from "./ItemCard";
import type { ItemsContainerProps } from "./ThriftHappens";

export default function ItemsContainer({
  items,
  handleQuantityAdjust,
  handleAddCheckout
}: ItemsContainerProps) {
  return (
    <div className="ItemContainer">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          {...item}
          handleQuantityAdjust={(delta: number) => handleQuantityAdjust(item.id, delta)}
          handleAddCheckout={() => handleAddCheckout(item.id)}
        />
      ))}
    </div>
  );
}
