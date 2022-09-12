import React from 'react';
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);

    const restar = (valor) => {
        if (valor > 0) {
            setCantidad(valor);
        }
    }

    const sumar = (valor) => {
        if (valor <= itemStock) {
            setCantidad(valor);
        }
    }

    const agregarPaquetes = () => {
        if (cantidad <= itemStock) {
            setItemStock(itemStock - cantidad);
            setItemAdd(itemAdd + cantidad);
        }
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-2">
                    <h3 className="text-center">Paquete</h3>
                    <div className="input-group">
                        <input type="button" className="btn btn-secondary" value="-" onClick={() => { restar(cantidad - 1) }} />
                        <input type="text" className="form-control" value={cantidad} onChange={() => { }} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={() => { sumar(cantidad + 1) }} />
                    </div>
                    <div className="d-grid gap-2 pt-3">
                        <input type="button" className="btn btn-secondary" value="Agregar" onClick={() => {agregarPaquetes()}} />
                    </div>
                    <br />
                    <h5>Paquetes seleccionados: {itemAdd}</h5>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;