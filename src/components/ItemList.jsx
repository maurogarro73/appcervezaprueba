import React from 'react';
import Item from './Item';

export default function ItemList({ productos }) {
  return (
    <>
      <div>
        {!productos.length && 'Loading...'}
        {productos.map((cerveza) => (
          <Item cerveza={cerveza} />
        ))}
      </div>
    </>
  );
}
