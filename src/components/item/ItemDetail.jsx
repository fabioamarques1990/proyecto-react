import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 py-3">
                <h2> {item.title} </h2>
                <p> {item.description} </p>
                <p> <b>{item.price}</b> </p>
            </div>

            <ItemCount stock={8} initial={1} onAdd={0} />
        </div>
    </div>
  );
};

export default ItemDetail;