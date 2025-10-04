import { createObjPokemon, fetchPokemons } from "./script.js";

const containerPokemon = document.querySelector(".container__pokemon");
const buttonSearchPokemon = document.querySelector(".search__button");
const searchPokemon = document.querySelector(".search__pokemon");

const selectPokemon = () => {
  containerPokemon.innerHTML = "";
  if (searchPokemon.value === "") {
    fetchPokemons();
  } else {
    const url = `https://pokeapi.co/api/v2/pokemon/${searchPokemon.value.toLowerCase()}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => createObjPokemon(data));
  }
};

buttonSearchPokemon.addEventListener("click", selectPokemon);
document.addEventListener("keydown", () => {
  const key = event.keyCode;
  if (key === 13) {
    selectPokemon();
  }
});
