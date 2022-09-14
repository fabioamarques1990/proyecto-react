import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row mt-5 mx-5" >
            <h2>SUP Packs:</h2>
            {items.map(item => (
                <div key={item.id} className="col-md-12 py-3">
                    <Item title={item.title} price={item.price} category={item.category.sup} />
                </div>)
            )}
        </div>
    );
}

export default ItemList;