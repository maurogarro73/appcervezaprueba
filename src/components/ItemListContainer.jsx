import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productosHC } from '../data/data.js';
import ItemList from './ItemList.jsx';

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

  return <ItemList productos={productos} />;
}
