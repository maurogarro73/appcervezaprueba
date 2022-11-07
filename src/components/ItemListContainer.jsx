import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
  const { idcategory } = useParams();

  const [productos, setProductos] = useState([]);

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
          </div>
        ))}
      </div>
    </>
  );
}
