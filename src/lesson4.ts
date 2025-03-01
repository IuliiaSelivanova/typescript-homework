// 1. Функция расчета двойного факториала
// Создайте функцию, которая принимает целое число и вычисляет его двойной факториал. Двойной факториал числа n равен произведению всех чисел от 1 до n, включительно, через один (т.е., n* (n-2) * (n-4) *...). Функция должна корректно обрабатывать ошибку при получении отрицательного значения или значения, не являющегося числом.
const doubleFactorial = (
  num: number | string,
): number | string => {
  if (typeof num === "string" || num <= 0) {
    return "Некорректное значение. На вход подается число большее 0";
  }

  if (num === 1 || num === 2) {
    return num;
  }

  const result = doubleFactorial(num - 2);

  return typeof result === "number" ? num * result : result;
};

console.log(doubleFactorial(10));

// 2. Функция с rest параметрами
// Создайте функцию, которая принимает сочетание строк и чисел (используйте rest параметры). Ваша функция должна возвращать массив только чисел из предоставленных аргументов.
const arrayWithNumbers = (...args: any[]): number[] => {
  return args.filter((item) => typeof item === "number");
};

console.log(
  arrayWithNumbers(1, "res", 45, "vf", 24, 63, "cc", "cd"),
);

// 3. Перегрузка функций
// Создайте перегруженную функцию calculate, которая может принимать либо два числа и оператор в виде строки ('+', ', '*' или '/'), либо массив чисел и строк-операторов, и возвращать результат соответствующей математической операции.
const calculate = (
  num1: number | number[],
  num2: number | ("+" | "-" | "/" | "*")[],
  operation?: "+" | "-" | "/" | "*",
): number | string => {
  if (
    typeof num1 === "number" &&
    typeof num2 === "number"
  ) {
    switch (operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "/":
        return num1 / num2;
      case "*":
        return num1 * num2;
      default:
        return "Некорректный оператор";
    }
  } else if (Array.isArray(num1) && Array.isArray(num2)) {
    if (num1.length - 1 !== num2.length) {
      return "Количество операторов должно быть на 1 меньше, чем количество операндов";
    }

    return num1.slice(1).reduce((acc, val, index) => {
      if (!["+", "-", "*", "/"].includes(num2[index])) {
        throw new Error(
          `Некорректный оператор: ${num2[index]}`,
        );
      }
      switch (num2[index]) {
        case "+":
          return acc + val;
        case "-":
          return acc - val;
        case "/":
          return acc / val;
        case "*":
          return acc * val;
      }
    }, num1[0]);
  }
  return "Некорректные аргументы";
};

console.log(calculate(5, 9, "*"));
console.log(calculate([2, 3, 4], ["+", "*"]));

// 4. Стрелочные функции
// Перепишите все предыдущие задания с использованием стрелочных функций вместо обычных.
// Функции переписаны на стрелочные

// 5. Функции высшего порядка
// Задан массив чисел. Создайте функцию высшего порядка applyOperation, которая принимает массив чисел и функцию операции и возвращает новый массив, к элементам которого применяет операцию. Например, функция applyOperation
// (arr, double) должна вернуть массив, где каждое число умножено на 2. Попробуйте использовать applyOperation со встроенным методом.map ().
type Operation = (number: number) => number;
function applyOperation(
  array: number[],
  operate: Operation,
): number[] {
  let newArray = array.map((num) => {
    return operate(num);
  });
  return newArray;
}

const double: Operation = function (x: number): number {
  return x * 2;
};
console.log(applyOperation([15, 2, 3, 4, 10, 0], double));
