
/* ------------------ 1 -------------- */
const icons = {
    male: 'icons/mail.svg',
    female: 'icons/femail.svg',
    agender: 'icons/bi.svg',
  };
  
  const body = document.querySelector('body');
  
  function createTemplate(values) {
    const cardOfCharacter = document.createElement('div');
    body.insertAdjacentElement('beforeend', cardOfCharacter);
  
    const nameElem = document.createElement('span');
    nameElem.classList.add('name');
    nameElem.innerText = values.name;
    cardOfCharacter.insertAdjacentElement('beforeend', nameElem);
  
    const birthElem = document.createElement('span');
    birthElem.classList.add('birth');
    birthElem.innerText = values.birth_year;
    cardOfCharacter.insertAdjacentElement('beforeend', birthElem);
  
    const genderIcon =
      values.gender === 'male'
        ? (gender = `<img src="${icons.male}" alt="mail">`)
        : values.gender === 'female'
        ? (gender = `<img src="${icons.female}" alt="femail">`)
        : (gender = `<img src="${icons.agender}" alt="bi">`);
  
    const genderElem = document.createElement('span');
    genderElem.classList.add('gender');
    genderElem.innerHTML = genderIcon;
    cardOfCharacter.insertAdjacentElement('beforeend', genderElem);
  }
  
  const getData = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  };
  
  async function getCharacters(part) {
    const url = ` https://swapi.dev/api/films/${part}`  
    const data = await getData(url);
  
    data.characters.forEach(async (person) => {
      const character = await getData(person);
      console.log(character)
      createTemplate(character);
    });
  }

/* ----------------- 4 ----------------------*/
const buttonGetCharacters1 = document.querySelector('#part1')
buttonGetCharacters1.addEventListener('click', getCharacters.bind(null,1))

const buttonGetCharacters2 = document.querySelector('#part2')
buttonGetCharacters2.addEventListener('click', getCharacters.bind(null,2))

const buttonGetCharacters3 = document.querySelector('#part3')
buttonGetCharacters3.addEventListener('click', getCharacters.bind(null,3))

const buttonGetCharacters4 = document.querySelector('#part4')
buttonGetCharacters4.addEventListener('click', getCharacters.bind(null,4))

const buttonGetCharacters5 = document.querySelector('#part5')
buttonGetCharacters5.addEventListener('click', getCharacters.bind(null,5))

const buttonGetCharacters6 = document.querySelector('#part6')
buttonGetCharacters6.addEventListener('click', getCharacters.bind(null,6))


/*-------------------- 2 ----------------*/
async function getPlanet(){
    const url =  "http://swapi.dev/api/planets";

    const data = await getData(url);
    data.results.forEach(async (planet) => {
        createPlanetTemplate(planet);
    })
}

const planetBlock = document.querySelector('.plannetsBlock');

function createPlanetTemplate(value){
    const planetElem = document.createElement('div');
    planetElem.classList.add('planetName');
    planetElem.innerText = value.name;
    planetBlock.insertAdjacentElement('beforeend', planetElem);
}

const getPlanetsButton = document.querySelector('.getPlanets');
getPlanetsButton.addEventListener('click', getPlanet);


/* ------------------- 3 --------------*/
