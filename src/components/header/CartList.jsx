import React, { useContext } from 'react';
import { CartContext } from '../context/Context';

const CartList = () => {
    const {cart, deleteOne, clear} = useContext(CartContext);
    console.log(cart);
    return (
        <div>
            <h2>Lista del carrito:</h2>
            <hr />
            {cart.map((producto) => (
              <div key={producto.id}>
                <h3>{producto.title}</h3>
                <button onClick={() => deleteOne(producto.id)}>Borrar paquete</button>
              </div>  
            ))}
            <br />
            <hr />
            <button onClick={clear}>Borrar todos</button>
        </div>
    );
};

export default CartList;