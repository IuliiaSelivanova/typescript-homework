"use strict";
// Урок 1 - Введение в TypeScript
console.log("Hello TypeScript!");
//Урок 2 - TypeScript: базовый синтаксис,типы данных и переменные
// 2. Создайте несколько переменных, включая string, number, boolean, null, undefined и array. Присвойте им некоторые начальные значения и выведите эти значения в консоль.
// 3. Измените значения некоторых из переменных, которые вы создали в первом шаге, а затем снова выведите их в консоль.
let course = "Product Star";
let price = 30000;
let isDone = false;
let info = null;
let newInfo = undefined;
let grades = [5, 4, 3, 5];
console.log(course, price, isDone, info, newInfo, grades);
course = "Web-develop";
isDone = true;
// 4. Создайте массив, который содержит элементы одного типа, и выполните некоторые базовые операции с массивами, такие как добавление элемента, удаление элемента, получение длины массива, сортировку числового массива.
let numbers = [4, 6, 63, 77, 2, 1, 5];
numbers.push(7);
numbers.pop();
let numberLength = numbers.length;
numbers.sort();
console.log(numbers);
