import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../item/ItemList";
import { products } from "../products/products";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
                res(products);
            }, 1000);
        });

        getProducts.then((res) => {
            setItems(res);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;