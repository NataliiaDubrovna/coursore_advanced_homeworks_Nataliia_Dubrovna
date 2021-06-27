const lavazzaPrice = 123.965;
const  nescafePrice = 90.2345;
const jacobsPrice = 15.678;

document.getElementById('lavazza').innerHTML= `${lavazzaPrice}$`;
document.getElementById('nescafe').innerHTML= `${nescafePrice}$`;
document.getElementById('jacobs').innerHTML= `${jacobsPrice}$`;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxPrice = Math.max(lavazzaPrice , nescafePrice , jacobsPrice);
console.log(maxPrice);

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minPrice = Math.min(lavazzaPrice , nescafePrice , jacobsPrice);
console.log(minPrice);

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const sumPrice = lavazzaPrice + nescafePrice + jacobsPrice;
console.log(sumPrice);

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
const sumIntPrices = Math.floor(lavazzaPrice) + Math.floor(nescafePrice) + Math.floor(jacobsPrice);//round in less side
console.log(sumIntPrices);

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
const sumPriceRoundTwoPoint = (Math.round(sumPrice / 100) ) * 100;
console.log(sumPriceRoundTwoPoint);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
//even парне
const isEven = (Math.floor(sumPrice) % 2 === 0) ? true : false;
console.log(isEven);

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const clientMoney = 500;
const change = clientMoney - sumPrice;
console.log(change);

//Виведіть середнє значення цін, округлене до другого знаку після коми
const average = +(sumPrice / 3).toFixed(2);
console.log(average);

//Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
const discountRate = +(Math.random()).toFixed(2);// Math.random Є [0 ; 1)
console.log(`${discountRate * 100}%`);

//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
const discountSum = +(sumPrice * discountRate).toFixed(2);
console.log(discountSum);
const priceWithDiscount = +((sumPrice - discountSum).toFixed(2));
console.log(priceWithDiscount);

//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
const costOfGoods = sumPrice / 2;
console.log(costOfGoods);
const netProfit = +(priceWithDiscount - costOfGoods).toFixed(2);
console.log(netProfit);

let sumUp = ` 
<ul>
<li> Calculated values: 
<li> The most expencive coffee costs: ${maxPrice}$, 
<li> The cheapest coffee costs: ${minPrice}$,
<li> Total price of all products: ${sumPrice}$,
<li> Total price of products , whose prices were rounded to the second point(in less side): ${sumIntPrices}$,
<li> Total price rounded to hundereds: ${sumPriceRoundTwoPoint}$,
<li> Is the total price of all products (rounded to the less side) even ? ==> ${isEven},
<li> Your change from 500$: ${change}$,
<li> Average price: ${average}$,
<li> Discount Rate: ${discountRate * 100}%,
<li> Discounted sum: ${discountSum}$,
<li> Price of goods with discount: ${priceWithDiscount}$,
<li> Net Income with discount: ${netProfit}.
</ul>
`;
document.getElementById('info').innerHTML = sumUp;

