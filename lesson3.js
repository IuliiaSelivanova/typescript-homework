"use strict";
//Урок 3 - TypeScript: операторы, условия и циклы, числа
// Подготовка данных
// Создайте массив initData, содержащий числа от 1 до 100
// Создайте пустой массив results
// Использование операторов и условий
// Используйте любой цикл для обхода массива initData
// При каждой итерации цикла, используйте операторы для увеличения текущего числа на два
// Если полученное число четное, добавьте его в массив results
const initData = Array.from({ length: 100 }, (_, index) => index + 1);
const results = [];
for (let i = 0; i < initData.length; i++) {
    let newValue = initData[i] + 2;
    if (newValue % 2 === 0) {
        results.push(newValue);
    }
}
// Создание нового массива
// Создайте пустой массив squareRootResults
// Снова используйте цикл для обхода массива results
// На каждой итерации цикла, вычислите квадратный корень текущего числа, и добавьте результат в squareRootResults
const squareRootResults = [];
for (let item of results) {
    let square = Math.sqrt(item);
    squareRootResults.push(square);
}
// Условия и вывод данных
// Создайте условие, которое проверяет, есть ли в squareRootResults хотя бы одно число, большее 7. Если такое число есть, выведите его в консоль
for (let i = 0; i < squareRootResults.length; i++) {
    if (squareRootResults[i] > 7) {
        console.log(squareRootResults[i]);
    }
}
// Проверка результатов
// Выведите в консоль массив initData, чтобы убедиться, что он был создан корректно
// Выведите results и squareRootResults в консоль, чтобы убедиться, что каждый шаг был корректно выполнен
console.log(initData);
console.log(results);
console.log(squareRootResults);
