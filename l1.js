// Створення змінних
let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bool1 = true;
let bool2 = false;

// Вивід змінних
console.log(str1, str2, str3, str4, num1, num2, num3, num4, num5, num6, num7, bool1, bool2);
alert(`${str1}, ${str2}, ${str3}, ${str4}, ${num1}, ${num2}, ${num3}, ${num4}, ${num5}, ${num6}, ${num7}, ${bool1}, ${bool2}`);
document.write(`${str1} ${str2} ${str3} ${str4} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${num7} ${bool1} ${bool2}<br>`);

// Переприсвоєння змінних
str1 = 'goodbye';
str2 = 'abc';
str3 = 'xyz';
str4 = 'us';
num1 = 5;
num2 = 20;
num3 = -888;
num4 = 456;
num5 = 6.28;
num6 = 5.4;
num7 = 32;
bool1 = false;
bool2 = true;

// Вивід змінних після переприсвоєння
console.log(str1, str2, str3, str4, num1, num2, num3, num4, num5, num6, num7, bool1, bool2);
alert(`${str1}, ${str2}, ${str3}, ${str4}, ${num1}, ${num2}, ${num3}, ${num4}, ${num5}, ${num6}, ${num7}, ${bool1}, ${bool2}`);
document.write(`${str1} ${str2} ${str3} ${str4} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${num7} ${bool1} ${bool2}<br>`);

// Отримання даних через prompt
let firstName = prompt("Введіть ваше ім'я:");
let patronymic = prompt("Введіть ваше по-батькові:");
let age = prompt("Введіть ваш вік:");

// Вивід привітання
document.write(`Вітаю ${firstName} ${patronymic}. Тобі ${age} років.<br>`);

// Конкатенація змінних
let concatenatedString = firstName + ' ' + patronymic + '. Тобі ' + age + ' років.';
console.log(concatenatedString);

// Отримання та приведення чисел
let numA = Number(prompt("Введіть перше число:"));
let numB = Number(prompt("Введіть друге число:"));
let numC = Number(prompt("Введіть третє число:"));
console.log(numA, numB, numC);

// Отримання та приведення цілих чисел через parseInt
let int1 = parseInt(prompt("Введіть перше ціле число:"));
let int2 = parseInt(prompt("Введіть друге ціле число:"));
let int3 = parseInt(prompt("Введіть третє ціле число:"));
let int4 = parseInt(prompt("Введіть четверте ціле число:"));
let sumInt = int1 + int2 + int3 + int4;
console.log(sumInt);

// Отримання чисел з плаваючою точкою через parseFloat
let float1 = parseFloat(prompt("Введіть перше число з плаваючою точкою:"));
let float2 = parseFloat(prompt("Введіть друге число з плаваючою точкою:"));
let float3 = parseFloat(prompt("Введіть третє число з плаваючою точкою:"));
let result = float1 + float2 + float3;
console.log(result);

// Отримання чисел з плаваючою точкою та округлення
let rounded1 = Math.round(parseFloat(prompt("Введіть перше число з плаваючою точкою для округлення:")));
let rounded2 = Math.round(parseFloat(prompt("Введіть друге число з плаваючою точкою для округлення:")));
let rounded3 = Math.round(parseFloat(prompt("Введіть третє число з плаваючою точкою для округлення:")));
let sumRounded = rounded1 + rounded2 + rounded3;
console.log(sumRounded);

// Піднесення до степеня
let base = parseInt(prompt("Введіть число, яке будуть підносити до степеня:"));
let exponent = parseInt(prompt("Введіть степінь:"));
let powerResult = Math.pow(base, exponent);
console.log(powerResult);

// Визначення типів змінних
let a = 100;
let b = '100';
let c = true;