import React, { useState, useEffect } from 'react';
import '../styles/ItemCount.css';

export default function ItemCount({ inicial, stock, onAdd }) {
  const [count, setCount] = useState(parseInt(inicial));

  const crece = () => {
    setCount(count + 1);
  };

  const decrece = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setCount(parseInt(inicial));
  }, [inicial]);

  return (
    <>
      <div className="counter">
        <button disabled={count <= 1} onClick={decrece}>
          -
        </button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={crece}>
          +
        </button>
        <div>
          <button
            className="btnAdd"
            disabled={stock <= 0}
            onClick={() => {
              onAdd(count);
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
}
