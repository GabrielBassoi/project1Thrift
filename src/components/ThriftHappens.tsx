import { useState } from "react";
import CheckoutContainer from "./CheckoutContainer";
import ItemsContainer from "./ItemsContainer";
import NavBar from "./NavBar";
import type { ClothingProduct } from "../data/data";

export default function ThriftHappens() {

    const [items, setItems] = useState<ClothingProduct[]>();
    const [checkout, setCheckout] = useState<ClothingProduct[]>();

    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <body>
                <ItemsContainer/>
                <CheckoutContainer/>
            </body>
        </>
    )
}