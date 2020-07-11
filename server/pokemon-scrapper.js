const fetch = require('node-fetch');

const pokemonsUrl = 'http://pokeapi.salestock.net/api/v2/pokemon/?limit=50';
const createImgUrl = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
const jsonServer = 'http://localhost:3001/pokemons';

fetch (pokemonsUrl) 
  .then(response => response.json())
  .then(async parsed => {
    console.log(parsed)
    for (let i = 0; i < parsed.results.length; i++) {
      const pokemon = {
        id: i + 1,
        img: createImgUrl(i+1),
        ...parsed.results[i] 
      }
      await fetch (jsonServer, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pokemon)
      }).catch(error => {
        console.error(error);
      })
    }
  });
