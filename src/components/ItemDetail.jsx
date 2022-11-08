import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function ItemDetail({ producto }) {
  return (
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
  );
}
