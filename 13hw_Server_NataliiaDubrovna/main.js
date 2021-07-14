const body = document.querySelector('body')
// const nameElem = document.querySelector('.name');
// const birthElem = document.querySelector('.birth');
// const genderElem = document.querySelector('.gender');




function createTemplate (){
    const cardOfCharacter = document.createElement("div");
    body.insertAdjacentHTML('beforeend', cardOfCharacter);
    
    const nameElem = document.createElement("span");
    nameElem.classList.add('name');
    cardOfCharacter.insertAdjacentHTML('beforeend', nameElem);
 
    
    const birthElem =  document.createElement("span");
    birthElem.classList.add('birth');
    cardOfCharacter.insertAdjacentHTML('beforeend', birthElem);

    
    const genderElem = document.createElement('span');
    genderElem.classList.add('gender');
    cardOfCharacter.insertAdjacentHTML('beforeend', genderElem);

    console.log(cardOfCharacter,nameElem,birthElem,genderElem)
    
}



const getData = async (url) => {
    let response = await fetch(url);
    let data = await response.json(); 
    return data;
}

async function getCharacters(){
    const url =  "https://swapi.dev/api/films/2/"
    getData(url).then((data) => {
            data.characters.forEach(person => {
                getData(person).then((character)=>{
                    const name = character.name;
                    const birth = character.birth_year;
                    let gender;

                    character.gender === "male" ? gender = '<img src="icons/mail.svg" alt="mail">':
                    character.gender === "female" ?  gender = '<img src="icons/femail.svg" alt="femail">':
                    gender = ' <img src="icons/bi.svg" alt="bi">'

                    createTemplate()
                    nameElem.innerHTML = name;
                    birthElem.innerHTML = birth;
                    genderElem.innerHTML = gender;

                    console.log(name,birth,gender)
            })
        });
    })   
}

// getCharacters(url)

const buttonGetCharacters = document.querySelector('#getCharacters');
buttonGetCharacters.addEventListener('click', getCharacters);