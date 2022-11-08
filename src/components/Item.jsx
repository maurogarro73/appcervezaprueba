import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ cerveza }) {
  return (
    <div key={cerveza.id}>
      <h2>{cerveza.nombre}</h2>
      <p>Precio: ${cerveza.precio}</p>
      <p>Cerveza {cerveza.category}</p>
      <Link to={'/item/' + cerveza.id}>IR AL ITEM</Link>
    </div>
  );
}
