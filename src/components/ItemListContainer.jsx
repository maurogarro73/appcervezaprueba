import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productosHC } from '../data/data.js';

export default function ItemListContainer() {
  const { idcategory } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHC);
      }, 2000);
    });

    productosPromise.then((res) => {
      if (idcategory) {
        setProductos(res.filter((item) => item.category === idcategory));
      } else {
        setProductos(res);
      }
    });
  }, [idcategory]);

  return (
    <>
      <div>
        {!productos.length && 'Loading...'}
        {productos.map((cerveza) => (
          <div key={cerveza.id}>
            <h2>{cerveza.nombre}</h2>
            <p>Precio: ${cerveza.precio}</p>
            <p>Cerveza {cerveza.category}</p>
            <Link to={'/item/' + cerveza.id}>IR AL ITEM</Link>
          </div>
        ))}
      </div>
    </>
  );
}
