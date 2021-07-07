const keyPrefix = ['a','s','d','f','g','h','j','k'];

const getAudioNames = typeOfElements('Audio');
const getKeyNames = typeOfElements('Key');

const namesOfKey = getKeyNames(keyPrefix);
const namesOfAudio = getAudioNames(keyPrefix);

const keyElements = getAllElement(namesOfKey);
const audioElements = getAllElement(namesOfAudio);

const pairKeyAudio = createPairs(keyElements,audioElements);
pairKeyAudio.forEach( ([key,audio]) => key.addEventListener('click',() => audio.play()))

document.addEventListener('keypress', checkPressedKey(audioElements), false);

/*---------------- utilities ---------------------*/

function typeOfElements(type){
    return function setPrefix(arr){
        return arr.map(el => `${el}${type}`)
    }
}

function getAllElement (elementsName){
    return elementsName.reduce( (allEllements, name) => {
        allEllements.push(document.querySelector(`#${name}`))
        return allEllements
    },[])
}

function createPairs(keys,audios){
    let pairs = [];
    for(let i = 0; i < keys.length; i++){
        pairs.push([keys[i],audios[i]])
    }
    return pairs;
}

function checkPressedKey(audioList){
    return function addEvent(event){
        if (keyPrefix.includes(event.key)) {
            let audioForKeyBeenPressed = audioList.filter((el)=> el.id[0] == event.key)
            audioForKeyBeenPressed[0].play()
        }
    }
}