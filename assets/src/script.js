const containerPokemon = document.querySelector('.container__pokemon');

/* Criar o span para o type de cada pokemon  */
const createSpanTypePokemon = (type) => {
  const spanTypePokemon = document.createElement('span');
  spanTypePokemon.innerText = type.join(' | ', ',');
  spanTypePokemon.className = 'span__type__pokemon';
  return spanTypePokemon;
}

/* Criar o span para o nome de cada pokemon  */
const createSpanNamePokemon = (name) => {
  const spanNamePokemon = document.createElement('span');
  spanNamePokemon.innerText = name;
  spanNamePokemon.className = 'span__name__pokemon';
  return spanNamePokemon;
}

/* Criar o img para renderizar a imagem dos pokemons na tela */
const createImgPokemon = (img) => {
  const imgPokemon = document.createElement('img');
  imgPokemon.src = img;
  imgPokemon.className = 'img__pokemon';
  return imgPokemon;
}

/* Criar o span para o id de cada pokemon */
const createSpanIdPokemon = (id) => {
  const spanIdPokemon = document.createElement('span');
  spanIdPokemon.className = 'span__id__pokemon';
  spanIdPokemon.innerText = id;
  return spanIdPokemon;
}

/* Criar a div pokemon */
const createDivPokemon = (typecolor) => {
  const divPokemon = document.createElement('div');
  divPokemon.classList.add('cart__pokemon', typecolor);
  return divPokemon;
}

/* função que monta as divs de cada pokemon */
const ridingDivPokemon = ({ id, img, name, type, typecolor }) => {
  const divPokemon = createDivPokemon(typecolor);
  divPokemon.appendChild(createSpanIdPokemon(id));
  divPokemon.appendChild(createImgPokemon(img));
  divPokemon.appendChild(createSpanNamePokemon(name));
  divPokemon.appendChild(createSpanTypePokemon(type));
  containerPokemon.appendChild(divPokemon);
}

/* Função que monta o objeto de cada pokemon */
const createObjPokemon =(data) => { 
  const pokemon = {
    id: data.id,
    img: data.sprites.other.dream_world.front_default,
    name: data.name,
    type: data.types.map(types => types.type.name),
    typecolor: data.types[0].type.name
  }
  ridingDivPokemon(pokemon);
}

/* Função que faz a requisição fetch */
let arrData = [];
const fetchPokemons = async () => {
  for (let i = 1; i <= 151; i++) {
    arrData.push(await getPokemon(i));
  }
  console.log(arrData);
  arrData.forEach((e) => createObjPokemon(e));
}

const getPokemon = async(id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  return pokemon;
}

window.onload = () => {
  fetchPokemons();
}

export {createObjPokemon, fetchPokemons};