import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PokeContext } from "../context";
import PropTypes from "prop-types";
import PokeCard from "./PokeCard";

function BasicExample() {
  const { region } = useContext(PokeContext);

  const regionOffsets = {
    kanto: 0,
    johto: 151,
    hoenn: 251,
    sinnoh: 386,
    unova: 494,
    kalos: 649,
    alola: 721,
    galar: 809,
    hisui: 898,
    paldea: 905,
  };

  const limitMap = {
    Kanto: 151,
    Johto: 100,
    Hoenn: 135,
    Sinnoh: 107,
    Unova: 155,
    Kalos: 72,
    Alola: 88,
    Galar: 89,
    Hisui: 7,
    Paldea: 112,
  };

  const getApiUrl = async () => {
    const offset = regionOffsets[region.toLowerCase()] || 0;
    const limit = limitMap[region];

    return `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  };

  const [pokemonList, setPokemonList] = useState([]);

  // Función para obtener el valor de una propiedad anidada en un objeto
function getObjectValue(obj, key) {
  return key.split('.').reduce((o, k) => (o || {})[k], obj);
}


  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiCall = await getApiUrl();
        const response = await fetch(apiCall);
        const data = await response.json();

        // Hacer llamadas a la API para cada Pokemon individual
        const detailPromises = data.results.map(async (pokemon) => {
          const detailResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          const detailData = await detailResponse.json();
          const spriteImage = "";
          const imageKey = `sprites.front_default`;
        
          return {
            name: pokemon.name,
            image: getObjectValue(detailData, imageKey),
            number: detailData.order,
            height: detailData.height,
            weight: detailData.weight,
            types: detailData.types.map((type) => type.type.name),
          };
        });

        const detailedPokemon = await Promise.all(detailPromises);
        setPokemonList(detailedPokemon);
      } catch (err) {
        console.log(err.message);
      }
    };

    if (region) {
      fetchData();
    }
  }, [region]);

  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <PokeCard
          key={index}
          nombre={pokemon.name}
          imagen={pokemon.image}
          numero={pokemon.number}
          tipo={pokemon.types}
          height={pokemon.height/10.0}
          weight={pokemon.weight/10.0}
          region={region}
        />
      ))}
    </>
  );
}

BasicExample.propTypes = {
  lastSegment: PropTypes.string,
};

export default BasicExample;
