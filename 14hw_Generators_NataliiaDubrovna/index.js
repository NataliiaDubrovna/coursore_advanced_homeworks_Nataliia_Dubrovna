// Завдання 1:
// Створіть нескінченний генератор ідентифікаторів. Повинен працювати наступним чином:

function* createIdGenerator(){
    let i = 1;
    while(true){
        yield i++;
    }
}
const idGenerator = createIdGenerator();

console.group('-------------------------   1   ---------------------------');
console.log('idGenerator.next().value =>', idGenerator.next().value);
console.log('idGenerator.next().value =>', idGenerator.next().value);
console.log('idGenerator.next().value =>', idGenerator.next().value);
console.log('idGenerator.next().value =>', idGenerator.next().value);



// Завдання 2 (advanced)
// Створіть генератор, який буде регулювати розміри шрифту для вашого сайту. (Можна допрацювати, щоб реально змінював шрифт, але це не є обов'язковою умовою)
// Працювати генератор буде наступним чином:
// const fontGenerator = newFontGenerator(14); // 14 – стартове значення

function* newFontGenerator(fontSize = 14) {
    let result = yield fontSize;
    while (true) {
        if (result === 'up') {
            result = yield fontSize += 2;
        } else if (result === 'down') {
            result = yield fontSize -= 2;
        } else {
            result = yield fontSize;
        }
    }
}
const fontGenerator = newFontGenerator(14);

console.group('-------------------------   2   ---------------------------');
console.log('fontGenerator.next("up").value =>',fontGenerator.next("up").value);
console.log('fontGenerator.next("up").value =>',fontGenerator.next("up").value);
console.log('fontGenerator.next("up").value =>',fontGenerator.next("up").value);
console.log('fontGenerator.next().value =>',fontGenerator.next().value);
console.log('fontGenerator.next("down").value =>',fontGenerator.next("down").value);
console.log('fontGenerator.next("down").value =>',fontGenerator.next("down").value);
console.log('fontGenerator.next("down").value =>',fontGenerator.next("down").value);
console.log('fontGenerator.next().value =>',fontGenerator.next().value);
