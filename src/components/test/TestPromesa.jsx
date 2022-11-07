import React from 'react';

export default function TestPromesa() {
  /* let array = ['guille', 'romina', 'gian'];
  if (array.length > 0) {
    console.log(array);
  } else {
    console.log('Che hay un error, el array no está cargado');
  } */

  let productos = new Promise((res, rej) => {
    setTimeout(() => {
      res([
        { id: 100, nombre: 'Guille', edad: 40 },
        { id: 101, nombre: 'Mauro', edad: 33 },
        { id: 102, nombre: 'Romi', edad: 27 },
      ]);
    }, 2000);
  });

  productos
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });

  let array = [
    { id: 100, nombre: 'Guille', edad: 40 },
    { id: 101, nombre: 'Mauro', edad: 33 },
    { id: 102, nombre: 'Romi', edad: 27 },
  ];

  return (
    <>
      <h3>Test Promesas</h3>
      <p>
        {array.map((item) => {
          return (
            <>
              <p style={{ backgroundColor: 'aqua' }}>id: {item.id}</p>
              <p>nombre: {item.nombre}</p>
              <p>edad: {item.edad}</p>
            </>
          );
        })}
      </p>
    </>
  );
}
