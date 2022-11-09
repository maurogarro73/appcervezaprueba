import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

export default function Item({ cerveza }) {
  return (
    <>
      <Card style={{ width: '18rem' }} className="m-2 mt-5">
        <Card.Img variant="top" src={cerveza.img} />
        <Card.Body>
          <Card.Title>{cerveza.nombre}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <strong>Precio: </strong>${cerveza.precio} x 12 /u
          </ListGroup.Item>
          <ListGroup.Item>Cerveza {cerveza.category}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="success" as={Link} to={'/item/' + cerveza.id}>
            IR AL ITEM
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
