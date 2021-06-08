//1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
function getMaxDigitFirst(number){
    console.log(('' + number).split('').sort((a,b) => a-b));
    return ('' + number).split('').sort((a,b) => a-b).pop() 
}

function getMaxDigitSecond(number){
    let arr = ('' + number).split('').map((el) => +el ).filter((el) =>  !Object.is(NaN,el));
    return Math.max(...arr);
}
// console.log(getMaxDigit(123578920352));
// console.log(getMaxDigit(-1235782,0352));
// console.log(getMaxDigit(123572,0352));



//2.Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function pow(a , n) {
    let pow = 1;
    if(n >= 0){
        for(let i = 1; i <= n ; i++){
            pow *= a
        }
        // console.log(Math.pow(a , n));
        return `${a}^${n} = ${pow}`;
    }
    else if (n < 0){
        for(let i = 1; i <= -n ; i++){
            pow *= a
        }
        // console.log(Math.pow(a , n));
        return `${a}^(${n}) = 1/${pow} = ${1/pow}`;
    }
}
// console.log(pow(2,0))
// console.log(pow(2,1))
// console.log(pow(2,5))
// console.log(pow(2,-3))



//3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function toUpperCase(str){
    return str[0].toUpperCase() + str.slice(0, str.length).toLowerCase();
}
// console.log(toUpperCase('ssssssINEJHjkj'));
// console.log(toUpperCase('ALLLETTERSAREUPPER'));
// console.log(toUpperCase('allletersarelower'));





//4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
function tax(salary , taxRate){
    return salary - salary * (parseFloat(taxRate)/100);
}
// console.log(tax(1000, 19.5));
// console.log(tax(1000, '19.5%'));
// console.log(tax(1000, '19%'));




//5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
function getRandomNumber(min , max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
}
// console.log(getRandomNumber(5,8));
// console.log(getRandomNumber(5,1));




//6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
function countLetter( letter , str) {
    let count = 0;
    str.split('').forEach((el) => el.toLowerCase() == letter.toLowerCase() ? count++ : count);
    return count;
}
// console.log(countLetter("а", "Асталавіста"))
// console.log(countLetter("o", "Lowers to LOVERS"))
// console.log(countLetter("а", "Love"))




/*7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
 Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення. */
 function convertCurrency(money , exchahgeRayte){
    let n = (parseInt(money) + '').split('').length 
    let currency = money.split('').splice(n).join('');
    let res;
    let exchangCurr;
    if  (currency.toLowerCase() === "uah"){
        res = (parseInt(money) / exchahgeRayte).toFixed(2);
        exchangCurr = "$";
    }else if(currency === "$"){
        res = (parseInt(money) * exchahgeRayte).toFixed(2);
        exchangCurr = "Uah";
    }else { 
        return "Invalid currency has been entered";
    }
    return   ` ${money} = ${res}${exchangCurr}`;
}
//  console.log(convertCurrency('100$', 25));
//  console.log(convertCurrency('2500Uah', 25));
//  console.log(convertCurrency('1000EUR', 29));




/*8. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
 Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124*/
function getRandomPassword( leng = 8){
    let res = [];
    for(let i = 1 ; i <= leng ; i++ ){
        res.push(Math.trunc(Math.random()*10))
    }
    return +res.join('');
}
// console.log(getRandomPassword(4))
// console.log(getRandomPassword())



/*9. Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"*/
function  deleteLetters(letter , str) {
    return str.split('').filter((el) => el.toLowerCase() != letter.toLowerCase()).join('')
}
// console.log(deleteLetters('a', "blablabla"));
// console.log(deleteLetters('a', "AAAhaaai"));




/*10.Створіть функцію, яка перевіряє, чи є слово паліндромом. 
Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true */
function isPalyndrom(str){
    let arrLetters = str.split('').filter((el) => el !== " ").map((elem) => elem.toLowerCase());
    let shouldBeTheSame = Math.floor(arrLetters.length / 2) //how much letters chould be identical
    let isTheSame = 0;
    for(let i = 0; i < shouldBeTheSame ; i++){
        if(arrLetters[i] === arrLetters[arrLetters.length - (i + 1)]){
            isTheSame++;
        }
    }
    if (isTheSame == shouldBeTheSame) {
        return true;
    }
    else{
        return false;
    }
}
// console.log(isPalyndrom('malo n olam'));
// console.log(isPalyndrom("кокос"));
// console.log(isPalyndrom("Я несу гусеня"));
// console.log(isPalyndrom("жаба"));



/*11. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим" */
function deleteDuplicateLetter(str){
    let arr = str.toLowerCase().split('').filter((el) => el !== " "); //array of latters wathout spaces
    if(arr.every((elem, index, arr) => arr.indexOf(elem) === index)){ // if all letters are unique . just return it  string without changes
        return str;
    } 
    else{
        let duplicated = arr.filter((elem, index, arr) => (arr.indexOf(elem) !== index));// find here letters which have been duplacated  //if element has the other indexOf result than his current positions, it means that it was founded earlier (bacause indexOf function stop working after the firs match was founded)  
        let duplicatedUnique  = Array.from(new Set(duplicated));
        let unique =  arr.filter((el) => !duplicatedUnique.includes(el));
        return unique.join('');
    }
}
// console.log(deleteDuplicateLetter('рядок який повтор'));
// console.log(deleteDuplicateLetter('рряддоккк'));
// console.log(deleteDuplicateLetter("Бісквіт був дуже ніжним"))


/*================   HTML  ===============================*/

//1
const getMaxDigit1 = document.getElementById('getMaxDigit1');
const getMaxDigit2 = document.getElementById('getMaxDigit2');
const getMaxDigit3 = document.getElementById('getMaxDigit3');

getMaxDigit1.innerHTML = `getMaxDigit(123578920352)  =>  ${getMaxDigitFirst(123578920352)}`;
getMaxDigit2.innerHTML = `getMaxDigit(-1235782,0352)  =>  ${getMaxDigitFirst(-1235782,0352)}`;
getMaxDigit3.innerHTML = `getMaxDigit(123572,0352)  =>  ${getMaxDigitFirst(123572,0352)}`;


const Result1 = document.getElementById('Result1');
function getResult1(){
    let input = Number(document.getElementById("getMaxDigit").value);
    Result1.innerHTML = getMaxDigitFirst(input);
}

//2
const pow1 = document.getElementById('pow1');
const pow2 = document.getElementById('pow2');
const pow3 = document.getElementById('pow3');

pow1.innerHTML = `pow(2,0) =>  ${pow(2,0)}`;
pow2.innerHTML = `pow(2,6) =>  ${pow(2,6)}`;
pow3.innerHTML = `pow(2,-3) =>  ${pow(2,-3)}`;


const Result2 = document.getElementById('Result2');
function getResult2(){
    let number = Number(document.getElementById("powNumber").value);
    let power = Math.round(Number(document.getElementById("powPower").value));
    Result2.innerHTML = pow(number,power);
}

//3
const toUpperCase1 = document.getElementById('toUpperCase1');
const toUpperCase2 = document.getElementById('toUpperCase2');
const toUpperCase3 = document.getElementById('toUpperCase3');

toUpperCase1.innerHTML = `toUpperCase('ssssssINEJHjkj') =>  ${toUpperCase('ssssssINEJHjkj')}`;
toUpperCase2.innerHTML = `toUpperCase('ALLLETTERSAREUPPER') =>  ${toUpperCase('ALLLETTERSAREUPPER')}`;
toUpperCase3.innerHTML = `toUpperCase('allletersarelower') =>  ${toUpperCase('allletersarelower')}`;


const Result3 = document.getElementById('Result3');
function getResult3(){
    let str = String(document.getElementById("toUpperCase").value);
    Result3.innerHTML = toUpperCase(str);
}

//4
const tax1 = document.getElementById('tax1');
const tax2 = document.getElementById('tax2');
const tax3 = document.getElementById('tax3');

tax1.innerHTML = `tax(1000, 19.5) =>  ${tax(1000, 19.5)}`;
tax2.innerHTML = `tax(1000, '19.5%') =>  ${tax(1000, '19.5%')}`;
tax3.innerHTML = `tax(1000, '19%') =>  ${tax(1000, '19%')}`;


const Result4 = document.getElementById('Result4');
function getResult4(){
    let taxWage = Number(document.getElementById("taxWage").value);
    let taxRate = String(document.getElementById("taxRate").value);
    Result4.innerHTML = tax(taxWage,taxRate);
}

//5
const getRandomNumber1 = document.getElementById('getRandomNumber1');
const getRandomNumber2 = document.getElementById('getRandomNumber2');

getRandomNumber1.innerHTML = `getRandomNumber(5,8) =>  ${getRandomNumber(5,8)}`;
getRandomNumber2.innerHTML = `getRandomNumber(5,1) =>  ${getRandomNumber(5,1)}`;

const Result5 = document.getElementById('Result5');
function getResult5(){
    let inputgetRandomNumber1 = Math.round(Number(document.getElementById("inputgetRandomNumber1").value));
    let inputgetRandomNumber2 = Math.round(Number(document.getElementById("inputgetRandomNumber2").value));
    Result5.innerHTML = getRandomNumber(inputgetRandomNumber1,inputgetRandomNumber2);
}

//6
const countLetter1 = document.getElementById('countLetter1');
const countLetter2 = document.getElementById('countLetter2');
const countLetter3 = document.getElementById('countLetter3');

countLetter1.innerHTML = `countLetter("а", "Асталавіста") =>  ${countLetter("а", "Асталавіста")}`;
countLetter2.innerHTML = `countLetter("o", "Lowers to LOVERS") =>  ${countLetter("o", "Lowers to LOVERS")}`;
countLetter3.innerHTML = `countLetter("а", "Love") =>  ${countLetter("а", "Love")}`;


const Result6 = document.getElementById('Result6');
function getResult6(){
    let letterCountLetter = String(document.getElementById("letterCountLetter").value);
    let stringCountLetter = String(document.getElementById("stringCountLetter").value);
    Result6.innerHTML = countLetter(letterCountLetter,stringCountLetter);
}

//7
const convertCurrency1 = document.getElementById('convertCurrency1');
const convertCurrency2 = document.getElementById('convertCurrency2');
const convertCurrency3 = document.getElementById('convertCurrency3');

convertCurrency1.innerHTML = `convertCurrency('100$', 25) =>  ${convertCurrency('100$', 25)}`;
convertCurrency2.innerHTML = `convertCurrency('2500Uah', 25) =>  ${convertCurrency('2500Uah', 25)}`;
convertCurrency3.innerHTML = `convertCurrency('1000EUR', 29) =>  ${convertCurrency('1000EUR', 29)}`;


const Result7 = document.getElementById('Result7');
function getResult7(){
    let moneyConvertCurrency = String(document.getElementById("moneyConvertCurrency").value);
    let currencyConvertCurrency = Number(document.getElementById("currencyConvertCurrency").value);
    Result7.innerHTML = convertCurrency(moneyConvertCurrency,currencyConvertCurrency);
}

//8
const getRandomPassword1 = document.getElementById('getRandomPassword1');
const getRandomPassword2 = document.getElementById('getRandomPassword2');

getRandomPassword1.innerHTML = `getRandomPassword(4) =>  ${getRandomPassword(4)}`;
getRandomPassword2.innerHTML = `getRandomPassword() =>  ${getRandomPassword()}`;

const Result8 = document.getElementById('Result8');
function getResult8(){
    let inputGetRandomPassword = Math.round(Number(document.getElementById("inputGetRandomPassword").value));


    (inputGetRandomPassword != 0) ? Result8.innerHTML = getRandomPassword(inputGetRandomPassword) : Result8.innerHTML = getRandomPassword();   
}

//9
const deleteLetters1 = document.getElementById('deleteLetters1');
const deleteLetters2 = document.getElementById('deleteLetters2');

deleteLetters1.innerHTML = `deleteLetters('a', "blablabla") =>  ${deleteLetters('a', "blablabla")}`;
deleteLetters2.innerHTML = `deleteLetters('a', "AAAhaaai") =>  ${deleteLetters('a', "AAAhaaai")}`;

const Result9 = document.getElementById('Result9');
function getResult9(){
    let letterDeleteLetters = String(document.getElementById("letterDeleteLetters").value);
    let wordDeleteLetters = String(document.getElementById("wordDeleteLetters").value);
    Result9.innerHTML = deleteLetters(letterDeleteLetters,wordDeleteLetters);
}

//10
const isPalyndrom1 = document.getElementById('isPalyndrom1');
const isPalyndrom2 = document.getElementById('isPalyndrom2');
const isPalyndrom3 = document.getElementById('isPalyndrom3');
const isPalyndrom4 = document.getElementById('isPalyndrom4');

isPalyndrom1.innerHTML = `isPalyndrom('malo n olam') =>  ${isPalyndrom('malo n olam')}`;
isPalyndrom2.innerHTML = `isPalyndrom("кокос") =>  ${isPalyndrom("кокос")}`;
isPalyndrom3.innerHTML = `isPalyndrom("Я несу гусеня") =>  ${isPalyndrom("Я несу гусеня")}`;
isPalyndrom4.innerHTML = `isPalyndrom("жаба") =>  ${isPalyndrom("жаба")}`;

const Result10 = document.getElementById('Result10');
function getResult10(){
    let wordIsPalyndrom = String(document.getElementById("wordIsPalyndrom").value);
    Result10.innerHTML = isPalyndrom(wordIsPalyndrom);
}

//11
const deleteDuplicateLetter1 = document.getElementById('deleteDuplicateLetter1');
const deleteDuplicateLetter2 = document.getElementById('deleteDuplicateLetter2');
const deleteDuplicateLetter3 = document.getElementById('deleteDuplicateLetter3');

deleteDuplicateLetter1.innerHTML = `deleteDuplicateLetter('рядок який повтор') =>  ${deleteDuplicateLetter('рядок який повтор')}`;
deleteDuplicateLetter2.innerHTML = `deleteDuplicateLetter('рряддоккк') =>  ${deleteDuplicateLetter('рряддоккк')}`;
deleteDuplicateLetter3.innerHTML = ` deleteDuplicateLetter("Бісквіт був дуже ніжним") =>  ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`;


const Result11 = document.getElementById('Result11');
function getResult11(){
    let stringDeleteDuplicateLetter = String(document.getElementById("stringDeleteDuplicateLetter").value);
    Result11.innerHTML = deleteDuplicateLetter(stringDeleteDuplicateLetter);
}
