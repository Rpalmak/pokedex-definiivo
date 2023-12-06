import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PokeContext } from '../context';
import PokeCard from './PokeCard';

function BasicExample() {
    const { region } = useContext(PokeContext);
    const regionOffsets = {
        "kanto": 0,
        "johto": 151,
        "hoenn": 251,
        "sinnoh": 386,
        "unova": 493,
        "kalos": 649,
        "alola": 721,
        "galar": 809,
        "hisui": 898,
        "paldea": 905,
        
    };

    const offset = regionOffsets[region.toLowerCase()] || ""; // Convierte la región a minúsculas
    let limit = "10000";
    if (region === "Kanto") {
        limit = 150;
    }
    console.log(offset);
    const apiCall = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch(apiCall)
            .then(response => response.json())
            .then(data => {
                setPokemonList(data.results);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [apiCall]);

    return (
        <>
            {pokemonList.map((pokemon, index) => (
                <PokeCard key={index}
                    nombre={pokemon.name}
                />
            ))}
        </>
    );
}

export default BasicExample;
