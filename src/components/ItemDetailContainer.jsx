import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { productosHC } from '../data/data.js';

export default function ItemDetailContainer() {
  const { iditem } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(() => {
    const productoPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHC.find((item) => item.id == iditem));
      }, 2000);
    });

    productoPromise.then((res) => {
      setProducto(res);
    });
  }, [iditem]);

  return (
    <div>
      <>
        {producto.id ? (
          <>
            <div>
              <h3>Nombre: {producto.nombre}</h3>
              <p>id: {producto.id}</p>
              <p>Precio: {producto.precio}</p>
              <p>Cerveza: {producto.category}</p>
            </div>
          </>
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </>
    </div>
  );
}
