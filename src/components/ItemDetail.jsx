import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../styles/itemDetail.css';
import ItemCount from './ItemCount';

export default function ItemDetail({ producto }) {
  return (
    <>
      {producto.id ? (
        <>
          <div className="item">
            <div className="imagenProducto">
              <img className="imgProducto" src={producto.img} alt="imagen producto" />
            </div>
            <div className="descripcion">
              <h3 className="tituloCerveza">{producto.nombre}</h3>
              <p>Precio: {producto.precio} x12 /u</p>
              <p>Cerveza: {producto.category}</p>
              <ItemCount inicial={1} stock={producto.stock} />
            </div>
          </div>
        </>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
}
