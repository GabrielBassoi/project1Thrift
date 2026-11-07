import type { ClothingProduct } from "../data/data";

export default function CheckoutCard({
    image,
    name,
    price,
    itemQuantity,
}: ClothingProduct) {
    return <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <br />

        <div>
            <p>Unit Price</p>
            <p>{price}</p>
        </div>
        <br />

        <div>
            <p>Quantity</p>
            <p>{itemQuantity}</p>
        </div>
        <br />

        <div>
            <h3>Subtotal</h3>
            <h3>${(price*itemQuantity).toPrecision(2)}</h3>
        </div>
        <br />

        <button>Remove</button>
    </div>;
}