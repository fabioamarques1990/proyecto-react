import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import ItemList from "../item/ItemList";
import {collection, getFirestore, doc, getDocs, query, where} from 'firebase/firestore';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const queryItems = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
        getDocs(queryItems).then((snapShot) => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
            }
        });
    }, [id]);

        /* let category = "";

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
    }, [activity]); */

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;