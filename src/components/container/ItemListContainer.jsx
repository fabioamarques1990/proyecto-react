import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import ItemList from "../item/ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const itemsCollection = collection(db, 'items');
        const ref = id
            ? query(itemsCollection, where('category', '==', id))
            : itemsCollection;

        getDocs(ref).then((resp) => {
            console.log(resp);
            const items = resp.docs.map((item) => {
                return {
                    id: item.id, ...item.data(),
                };
            });
        setItems(items);
        });
    }, [id]);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;