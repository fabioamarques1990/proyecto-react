import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import ItemDetail from '../item/ItemDetail';
import { products } from '../products/products';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const getProduct = (id) =>
        new Promise((res, rej) => {
            const product = products.find((prod) => prod.id === id);
            setTimeout(() => {
                res(product);
            }, 500);
        });

        getProduct(id)
            .then((info) => {
                setItem(info);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

  return (
    <div style={{ minHeight: '70vh'}}>
        <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
