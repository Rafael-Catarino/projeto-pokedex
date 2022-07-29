const containerPokemon = document.querySelector('#container-pokemon');
const buttonSearchPokemon = document.querySelector('#button-search-pokemon');
const divPokemon = document.querySelectorAll('.div-pokemon');
const inputNamePokemon = document.querySelector('#input-name-pokemon');
const spanNamePokemon = document.getElementsByClassName('span-name-pokemon');

/* montando a pokedex */
const createSpanTypePokemon = (type) => {
  const spanTypePokemon = document.createElement('span');
  spanTypePokemon.innerText = type.join(' | ', ',');
  spanTypePokemon.className = 'span-type-pokemon';
  return spanTypePokemon;
}

const createSpanNamePokemon = (name) => {
  const spanNamePokemon = document.createElement('span');
  spanNamePokemon.innerText = name;
  spanNamePokemon.className = 'span-name-pokemon';
  return spanNamePokemon;
}

const createImgPokemon = (img) => {
  const imgPokemon = document.createElement('img');
  imgPokemon.src = img;
  imgPokemon.className = 'img-pokemon';
  return imgPokemon;
}

const createSpanIdPokemon = (id) => {
  const spanIdPokemon = document.createElement('span');
  spanIdPokemon.className = 'span-id-pokemon';
  spanIdPokemon.innerText = `#${id}`;
  return spanIdPokemon;
}

const createDivPokemon = (typecolor) => {
  const divPokemon = document.createElement('div');
  divPokemon.classList.add('div-pokemon', typecolor);
  return divPokemon;
}

const ridingDivPokemon = ({ id, img, name, type, typecolor }) => {
  const divPokemon = createDivPokemon(typecolor);
  divPokemon.appendChild(createSpanIdPokemon(id));
  divPokemon.appendChild(createImgPokemon(img));
  divPokemon.appendChild(createSpanNamePokemon(name));
  divPokemon.appendChild(createSpanTypePokemon(type));
  containerPokemon.appendChild(divPokemon);
}

const createObjPokemon = (data) => {
  const pokemon = {
    id: data.id,
    img: data.sprites.other.dream_world.front_default,
    name: data.name,
    type: data.types.map(types => types.type.name),
    typecolor: data.types[0].type.name
  };
  ridingDivPokemon(pokemon);
}

const fetchPokemons = () => {
  for (let i = 1; i <= 251; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url).then((response) => response.json())
      .then(data => createObjPokemon(data));
  }
}

fetchPokemons();