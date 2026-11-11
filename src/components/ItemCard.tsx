import type { ClothingProduct } from "../data/data";
import type { CheckoutItem, ItemInfo } from "./ThriftHappens";

export interface ItemCardFunction extends ClothingProduct {
  itemInfo: ItemInfo;
  handleQuantityAdjust: (delta: number) => void;
  handleAddCheckout: (newItem: CheckoutItem) => void;
}

export default function ItemCard({
  name,
  image,
  fit,
  category,
  color,
  description,
  size,
  price,
  itemInfo,
  handleQuantityAdjust,
  handleAddCheckout,
}: ItemCardFunction) {
  return (
    <div className="ItemCard">
      <img src={image} alt={name} width={210} />

      <h4>{name}</h4>
      <p id={"description"}>{description}</p>

      <div className="ItemCardText">
        <p>FIT</p>
        <strong>{fit}</strong>
      </div>
      
      <div className="ItemCardText">
        <p>SIZE</p>
        <strong>{size}</strong>
      </div>

      <div className="ItemCardText">
        <p>CATEGORY</p>
        <strong>{category}</strong>
      </div>

      <div className="ItemCardText">
        <p>COLOR</p>
        <strong>{color}</strong>
      </div>

      <div className="ItemCardText">
        <p>IN STOCK</p>
        <strong>{itemInfo.quantity}</strong>
      </div>

      <div id="space"></div>

      <h3>CA${price.toFixed(2)}</h3>

      {itemInfo.quantity === 0 ? (
        <h3 id="outOfStock">OUT OF STOCK</h3>
      ) : (
        <div className="counterItem">
          <button
            disabled={itemInfo.itemQuantity === 0}
            onClick={() => handleQuantityAdjust(-1)}
          >
            -
          </button>
          <span>{itemInfo.itemQuantity}</span>
          <button
            disabled={itemInfo.itemQuantity === itemInfo.quantity}
            onClick={() => handleQuantityAdjust(1)}
          >
            +
          </button>
        </div>
      )}

      <button id="addToCart"
        disabled={itemInfo.itemQuantity === 0}
        onClick={() => handleAddCheckout({
          id: crypto.randomUUID(),
          itemId: itemInfo.id,
          image: image,
          name: name,
          itemQuantity: itemInfo.itemQuantity,
          price: price,
        })}
      >
        Add to Cart
      </button>
    </div>
  );
}
