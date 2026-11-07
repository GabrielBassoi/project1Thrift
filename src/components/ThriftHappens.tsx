import { useState } from "react";
import CheckoutContainer from "./CheckoutContainer";
import ItemsContainer from "./ItemsContainer";
import NavBar from "./NavBar";
import type { ClothingProduct } from "../data/data";

export interface ItemsContainerProps {
    items: ClothingProduct[];
}

export default function ThriftHappens() {

    const [items, setItems] = useState<ClothingProduct[]>([]/* INITIALIZE */);
    const [checkout, setCheckout] = useState<ClothingProduct[]>([]);

    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <body>
                <ItemsContainer items={items}/>
                <CheckoutContainer/>
            </body>
        </div>
    )
}