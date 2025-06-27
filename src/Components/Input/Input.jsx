import React, { useState, useEffect } from "react";
import "./Input.css";

function Practice() {
  const [poke, setPoke] = useState([]);
  const key = "https://pokeapi.co/api/v2/pokemon?limit=10";
  useEffect(() => {
    fetch(key)
      .then((res) => res.json())
      .then((data) => setPoke(data.results));
  }, []);

  return (
    <>
      {poke.map((pokemon, index) => (
        <div key={index}>
          <p>{pokemon.name}</p>
          <p>{pokemon.id}</p>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
              index + 1
            }.png`}
            alt={`pokemon.name`}
          />
        </div>
      ))}
    </>
  );
}

export default Practice;
