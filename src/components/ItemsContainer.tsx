import ItemCard from "./ItemCard";
import type { ItemsContainerProps } from "./ThriftHappens";

export default function ItemsContainer({items}: ItemsContainerProps) {
    return <div className="ItemContainer">
        {items.map((item) => <ItemCard {...item}/>)}
    </div>;
}