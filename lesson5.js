"use strict";
// 1. Напишите обобщенную функцию findElement, которая принимает массив и искомый элемент.
// Функция должна вернуть индекс первого вхождения искомого элемента в массиве или -1, если элемент не найден.
//функция возвращает первый индекс вхождения значения target
function findElement(array, target) {
    return array.findIndex((item) => item === target);
}
console.log(findElement([1, 2, 3, 4, 5], 3));
console.log(findElement(["dt", "cv", "cvs", "nyg", "rt"], "c"));
// 2. Напишите обобщенную функцию mergeObjects, которая принимает два объекта и объединяет их в один.
// Если у объектов есть общие свойства, то значения этих свойств должны быть объединены (например, если оба объекта имеют свойство name, то в результирующем объекте оно должно содержать значение из обоих объектов).
const person1 = { name: "Alice", age: 30 };
const person2 = { age: 25, city: "New York" };
// Вариант 1 - функция возвращает новый объект, в соответствии с премером повторяюзиеся свойства перезписывает
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const mergedPerson = mergeObjects(person1, person2);
console.log(mergedPerson);
//Вариант 2 - функция возвращает новый объект, значения повторяющихся свойств обоиъ обхектов объединяются в массив ( в новом объекте сохраняются значения из обоих объектов)
function mergeObjectsWithValues(obj1, obj2) {
    //Создаём новый объект, копируя свойства obj1
    const mergedObject = Object.assign({}, obj1);
    //Перебираем свойства obj2
    for (const key in obj2) {
        if (key in mergedObject) {
            // Проверяем, массив ли это, чтобы избежать вложенных массивов
            mergedObject[key] = Array.isArray(mergedObject[key])
                ? [...mergedObject[key], obj2[key]]
                : [mergedObject[key], obj2[key]];
        }
        else {
            mergedObject[key] = obj2[key];
        }
    }
    return mergedObject;
}
const mergedPersonWithValues = mergeObjectsWithValues(person1, person2);
console.log(mergedPerson);
