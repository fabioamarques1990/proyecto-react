import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import ItemList from "../item/ItemList";
import { products } from "../products/products";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {activity} = useParams();

    useEffect(() => {

        let category = "";

        if (activity === "sup") {
            category = "sup";
        } else if (activity === "surf") {
            category = "surf";
        } else {
            category = "all";
        }
        

        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
                res(products);
            }, 1000);
        });

        getProducts.then((res) => {
            if (category === "all") {
            setItems(res);

            } else {
                const arrayProducts = res.filter(product => product.category === category);
                setItems(arrayProducts);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }, [activity]);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;