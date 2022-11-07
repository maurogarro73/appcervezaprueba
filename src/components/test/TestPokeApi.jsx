import React from 'react';
import { useState, useEffect } from 'react';

export default function TestPokeApi() {
  const [arrayDePokes, setArrayDePokes] = useState([]);

  useEffect(() => {
    /* https://pokeapi.co/api/v2/pokemon?limit=10&offset=0 */
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      .then((res) => res.json())
      .then((poke) => {
        setArrayDePokes(poke.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      {arrayDePokes.map((item, i) => (
        <div key={i}>
          <h2>{item.name}</h2>
          <p>url: {item.url}</p>
        </div>
      ))}
    </div>
  );
}
