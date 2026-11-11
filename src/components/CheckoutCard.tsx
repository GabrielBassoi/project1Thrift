import type { CheckoutItem } from "./ThriftHappens";

export interface CheckoutCardFunction extends CheckoutItem{
  handleRemoveItemCheckout: (quantity: number) => void;
}

export default function CheckoutCard({
  image,
  name,
  price,
  itemQuantity,
  handleRemoveItemCheckout,
}: CheckoutCardFunction) {
  return (
    <div className="CheckoutCard">
      <div id="block1">
        <img src={image} alt={name} width={100} />
        <h3>{name}</h3>
      </div>

      <div id="block2">
        <div>
          <p>Unit Price</p>
          <strong>CA${price.toFixed(2)}</strong>
        </div>

        <div>
          <p>Quantity</p>
          <strong>{itemQuantity}</strong>
        </div>
      </div>

      <div id="block3">
        <div>
          <h3 id="subtotal">Subtotal:</h3>
          <h3>CA${(price * itemQuantity).toFixed(2)}</h3>
        </div>

        <button onClick={() => handleRemoveItemCheckout(itemQuantity)}>
          REMOVE
        </button>
      </div>
    </div>
  );
}
