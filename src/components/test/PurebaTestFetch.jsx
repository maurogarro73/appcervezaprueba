import React, { useEffect, useState } from 'react';

export default function PurebaTestFetch() {
  const [arrayPoke, setArrayPokes] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
      .then((res) => res.json())
      .then((poke) => {
        setArrayPokes(poke.results);
      });
  }, []);

  return (
    <>
      <h1>Array de pokes hecho por mi</h1>
      <div>
        {arrayPoke.map((item) => (
          <div>
            <h3>Nombre: {item.name}</h3>
            <h3>URL: {item.url}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
