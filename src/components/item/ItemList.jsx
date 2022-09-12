import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row">
            {items.map(item => (
                <div key={item.id} className="col-md-12 py-3">
                    <Item title={item.title} price={item.price} />
                </div>)
            )}
        </div>
    )
}

export default ItemList;