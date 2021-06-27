//1 Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. 
function getRandomArray(length, min, max){
    const res = [];
    for(let i = 0 ; i < length ; i++){
        res.push(Math.floor(min + Math.random() * (max - min + 1)));
    }
    return res;
}
console.log('/----------------- 1 -----------------/')
console.log("getRandomArray(6,1,3) ==>" , getRandomArray(6,1,3));



//2  Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getModa(...numbers){
    const intNumbers = numbers.filter((el) => parseInt(el) === el );
    const pairs = intNumbers.map(function(el, i, arr){
        return [el , arr.filter((elem) =>  el === elem).length]// pairs [elem,frequency]
    });

    if(pairs.every((elem)=> elem[1] === 1)){
        return 'There is no moda (all values are unique)'
    }

    const modaPair = pairs.sort((a,b) => a[1] - b[1]).pop();// moust frequency pairs
    const mostFrequency = modaPair[1]; //get exact frequency
    const modaRes =  Array.from(new Set(pairs.filter((el) => el[1] === mostFrequency).map((el) => el[0])));
    return modaRes;
}
console.log('/----------------- 2 -----------------/')
console.log("getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) ===>",getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log("getModa(6,6,7,7,7.8,7.8,8,8) ==>",getModa(6,6,7,7,7.8,7.8,8,8));
console.log('getModa(6,6,7,7,8,8) ==>',getModa(6,6,7,7,8,8));
console.log('getModa(1,2,3) ==>',getModa(1,2,3));
console.log('getModa(2,2) ==>',getModa(2,2));




//3 Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getAverage(...numbers){
    const intNumbers = numbers.filter((el) => parseInt(el) === el );
    const sum = intNumbers.reduce((sum,el) => sum += el , 0);
    return sum / intNumbers.length;
}
console.log('/----------------- 3 -----------------/')
console.log('getAverage(1,2,2.4,7.8,2)==>',getAverage(1,2,2.4,7.8,2));
console.log('getAverage(1,2,2,7,2)==>',getAverage(1,2,2,7,2));



//4  Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getMedian(...numbers){
    const intNumbers = numbers.filter((el) => parseInt(el) === el );
    const sortedNumbers = intNumbers.sort((a,b) => a-b);
    if(sortedNumbers.length % 2 === 1 ){
        return sortedNumbers[Math.floor(sortedNumbers.length/2)]
    }
    else if(sortedNumbers.length % 2 === 0 ){
        return (sortedNumbers[ sortedNumbers.length / 2 ] + sortedNumbers[ (sortedNumbers.length / 2 ) - 1 ] ) / 2;
    }
    else{
        return []}
}
console.log('/----------------- 4 -----------------/')
console.log( 'getMedian(1,2,3,5.7,4) ==>', getMedian(1,2,3,5.7,4));
console.log( "getMedian(1,2,3,4,5,7.9) ==>", getMedian(1,2,3,4,5,7.9));
console.log( "getMedian(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2) ==>",getMedian(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2));



//5 Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// function filterEvenNumbers(...numbers){
//     const res = numbers.filter((el) => el % 2 == 1 )
//     return res;
// }

const filterEvenNumbers = (...numbers) => numbers.filter((el) => el % 2 == 1 )

console.log('/----------------- 5 -----------------/')
console.log('filterEvenNumbers(1,3,7,9,8,7,6) ==>', filterEvenNumbers(1,3,7,9,8,7,6));



//6 Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// function countPositiveNumbers(...numbers){
//     return numbers.filter((el) => el> 0).length;
// }

const countPositiveNumbers = (...numbers) => numbers.filter((el) => el> 0).length;

console.log('/----------------- 6 -----------------/')
console.log('countPositiveNumbers(1,2,6,-3,-3,0,-5,6)==>',countPositiveNumbers(1,2,6,-3,0,-3,-5,6));




// 7 dСтворіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5.
// function getDividedByFive(...numbers){
//     return numbers.filter((el) => el % 5 === 0);
// }
const getDividedByFive = (...numbers) => numbers.filter((el) => el % 5 === 0);

console.log('/----------------- 7 -----------------/')
console.log('getDividedByFive(6,2,3,4,55,555,6,7,5,10,6,4) ==>', getDividedByFive(6,2,3,4,55,555,6,7,5,10,6,4))


//8 Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
function replaceBadWords(string , ...censor){
    const wordsArray = string.split(' ');
    const badWords = ['shit' , 'fuck'];
    censor.forEach(item => badWords.push(item.toString()));

    const res = wordsArray.map(function(el) {
        for(let badItem of badWords){
           if(el.search(badItem) !== -1){
                const index = el.search(badItem);
                const length = badItem.length;
                const elArr = el.split('');
                elArr.splice(index, length,"***");
                return elArr.join('');
           }
        }
        return el;
        
    })
    return res.join(' ');
}

console.log('/----------------- 8 -----------------/')
console.log('replaceBadWords("Are you fucking kidding?") ==>',replaceBadWords("Are you fucking kidding?"));
console.log('replaceBadWords("Holy shit!")',replaceBadWords("Holy shit!"));
console.log('replaceBadWords("It is bullshit!")==>', replaceBadWords("It is bullshit!"));
console.log('replaceBadWords("It is  fucking and sexy! ","sex") ==>', replaceBadWords("It is  fucking and sexy! ",'sex'));




//9 Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
function divideByThree(word){
    if(word.split('').length < 3){
        return 'Less than three letters'
    }
    else{
        const letters = word.toLowerCase().split('');
        const res = [];
        letters.forEach((el,i,arr) => res.push(arr.splice(i,3,0).join('')));
        return res;
    }
}
console.log('/----------------- 9 -----------------/')
console.log('divideByThree("something") ==>',divideByThree('something'));
console.log('divideByThree("Commander") ==>',divideByThree("Commander"));
console.log('divideByThree("live") ==>',divideByThree("live"));
console.log('divideByThree("sm")',divideByThree("sm"))





//10 Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами.
function generateCombinations(word){
    if(word.length > 10){
        return "Too long word"
    }
    else{
            // to be continued
    }
}
console.log('/----------------- 10 -----------------/')
console.log('to be continued =))')