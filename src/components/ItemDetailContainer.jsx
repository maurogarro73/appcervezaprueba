import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export default function ItemDetailContainer() {
  const { iditem } = useParams();

  const [producto, setProducto] = useState({});

  let productosHC = [
    {
      id: 1,
      nombre: 'Heineken',
      precio: 3750,
      category: 'rubia',
    },
    {
      id: 2,
      nombre: 'Budweiser',
      precio: 2440,
      category: 'rubia',
    },
    {
      id: 3,
      nombre: 'Andes Origen Roja',
      precio: 5904,
      category: 'roja',
    },
    {
      id: 4,
      nombre: 'Budweiser',
      precio: 3600,
      category: 'roja',
    },
    {
      id: 5,
      nombre: 'Quilmes Stout',
      precio: 2112,
      category: 'negra',
    },
    {
      id: 6,
      nombre: 'Patagonia Amber Lager',
      precio: 2320,
      category: 'negra',
    },
  ];

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
