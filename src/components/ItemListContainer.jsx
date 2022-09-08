import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const productos = [
            {"id":1, "nombre":"Paquete 1", "descripcion":"Tabla - Remo", "imagen":"https://img.freepik.com/free-photo/silhouette-young-beautiful-woman-surfing-sea-sunrise_176420-2036.jpg?w=1800&t=st=1662603496~exp=1662604096~hmac=b65780984fc7f132257d0ff4f7a398ce443f7795ca2d77fa3dc730812f941498", "precio":500},
            {"id":2, "nombre":"Paquete 2", "descripcion":"Tabla - Remo - Chaleco", "imagen":"https://img.freepik.com/free-photo/young-woman-are-doing-yoga-stand-up-paddle-board-sup-beautiful-lake-river-concept-healthy-lifestyle-sport-yoga-hobby_639032-1494.jpg?w=1800&t=st=1662603567~exp=1662604167~hmac=fdd2b999724440cd75a1d45a78f6ac2942c020efeb9ce2220dab59d9416ad768", "precio":750},
            {"id":3, "nombre":"Paquete 3", "descripcion":"Tabla - Remo - Chaleco - Camara", "imagen":"https://img.freepik.com/free-photo/full-shot-woman-holding-board_23-2149105056.jpg?w=1800&t=st=1662603734~exp=1662604334~hmac=1c1fea52f501c754dc33d1639139594a94eb2a0457082a5a82ad80447ff25417", "precio":1500},
            {"id":4, "nombre":"Paquete 4", "descripcion":"Tabla - Remo - Chaleco - Camara - Drone", "imagen":"https://img.freepik.com/premium-photo/young-beautiful-woman-blue-bikini-is-riding-sup-board-by-dzerzhinsky-quarries_159260-998.jpg?w=1800", "precio":3000},
        ];

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;