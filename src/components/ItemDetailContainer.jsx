import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { productosHC } from '../data/data.js';
import '../styles/itemDetail.css';
import ItemDetail from './ItemDetail.jsx';

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
    <Container>
      <ItemDetail producto={producto} />
    </Container>
  );
}
