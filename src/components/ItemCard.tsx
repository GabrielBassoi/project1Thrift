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
      <img src={image} alt={name} />

      <h3>{name}</h3>
      <br />
      <h4>{description}</h4>
      <br />

      <div>
        <p>Fit</p>
        <p>{fit}</p>
      </div>
      <br />

      <div>
        <p>Size</p>
        <p>{size}</p>
      </div>
      <br />

      <div>
        <p>Category</p>
        <p>{category}</p>
      </div>
      <br />

      <div>
        <p>Color</p>
        <p>{color}</p>
      </div>
      <br />

      <div>
        <p>In Stock</p>
        <p>{quantity}</p>
      </div>
      <br />

      <h3>${price}</h3>
      <br />

      {quantity === 0 ? (
        <div>
          <button
            disabled={itemQuantity === 0}
            onClick={() => handleQuantityAdjust(-1)}
          >-</button>
          <span>{itemQuantity}</span>
          <button
            disabled={itemQuantity === quantity}
            onClick={() => handleQuantityAdjust(1)}
          >+</button>
        </div>
      ) : (
        <h3>Out of Stock</h3>
      )}

      <button disabled={itemQuantity === 0} onClick={() => handleAddCheckout(itemQuantity)}>
        Add to Cart
      </button>
    </div>
  );
}
