import React from 'react';
import Item from './Item';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

export default function ItemList({ productos }) {
  return (
    <>
      <Container>
        <CardGroup className="d-flex">
          {!productos.length && 'Loading...'}
          {productos.map((cerveza) => (
            <Item cerveza={cerveza} />
          ))}
        </CardGroup>
      </Container>
    </>
  );
}
