import type { ClothingProduct } from "../data/data";
import ItemCard from "./ItemCard";
import type { CheckoutItem, ItemInfo } from "./ThriftHappens";

interface ItemsContainerProps {
  data: ClothingProduct[];
  itemsInfo: ItemInfo[];

  handleQuantityAdjust: (id: number, delta: number) => void;
  handleAddCheckout: (newItem: CheckoutItem) => void;
}

export default function ItemsContainer({
  data,
  itemsInfo,
  handleQuantityAdjust,
  handleAddCheckout
}: ItemsContainerProps) {
  return (
    <div className="ItemContainer">
      {data.map((item) => {
        const info = itemsInfo.find((info) => info.id === item.id);
        if(!info) return null;

        return (
        <ItemCard
          key={item.id}
          {...item}
          itemInfo={info}
          
          handleQuantityAdjust={(delta: number) => handleQuantityAdjust(item.id, delta)}
          handleAddCheckout={(newItem: CheckoutItem) => handleAddCheckout(newItem)}
        />
      )})}
    </div>
  );
}
