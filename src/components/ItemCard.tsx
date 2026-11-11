import type { ItemCardFunction } from "./ThriftHappens";

export default function ItemCard({
  name,
  image,
  fit,
  category,
  color,
  description,
  size,
  price,
  quantity,
  itemQuantity,
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
        <strong>{quantity}</strong>
      </div>

      <div id="space"></div>

      <h3>CA${price.toFixed(2)}</h3>

      {quantity === 0 ? (
        <h3 id="outOfStock">OUT OF STOCK</h3>
      ) : (
        <div className="counterItem">
          <button
            disabled={itemQuantity === 0}
            onClick={() => handleQuantityAdjust(-1)}
          >
            -
          </button>
          <span>{itemQuantity}</span>
          <button
            disabled={itemQuantity === quantity}
            onClick={() => handleQuantityAdjust(1)}
          >
            +
          </button>
        </div>
      )}

      <button id="addToCart"
        disabled={itemQuantity === 0}
        onClick={() => handleAddCheckout(itemQuantity)}
      >
        Add to Cart
      </button>
    </div>
  );
}
