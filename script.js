// Завдання №1
// const camelize = (str) => {
//   let camelizedStr = str.split('-').map((item, i) => {
//     return i > 0 ? item.substring(0, 1).toUpperCase() + item.substring(1) : item;
//   });
//   return camelizedStr.join('');
// };
// console.log(camelize('background-color'));
// console.log(camelize('list-style-image'));

// Завдання № 2
// let arr = [5, 3, 8, 1];
// const filterRange = (arr, a, b) => {
//   return arr.filter((item) => {
//     return a <= item && item <= b;
//   });
// };
// console.log(filterRange(arr, 1, 4));
// console.log(arr);

// Завдання № 3
// let arr = [5, 3, 8, 1];
// const filterRangeInPlace = (arr, a, b) => {
//   arr.forEach((item, i) => {
//     if (item < a || item > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   });
// };
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// Завдання № 4
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);

// Завдання № 5
// let arr = ['HTML', 'JavaScript', 'CSS'];
// const copySorted = (arr) => {
//   return [...arr].sort();
// };
// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);

// Завдання № 6
let number = '';
let number2 = '';
let action = '';
let sum = null;
const calcArea = document.querySelector('.calc__area');

document.querySelectorAll('.calc__button.action').forEach((button) => {
  button.addEventListener('click', (e) => {
    if (!button.classList.contains('clear')) {
      validateActions(e.target.firstChild.data);
    } else {
      clearAll();
    }
  });
});

document.querySelectorAll('.num').forEach((button) => {
  button.addEventListener('click', (e) => {
    !action
      ? (number = validateNumbers(number, e.target.firstChild.data))
      : (number2 = validateNumbers(number2, e.target.firstChild.data));
  });
});

document.querySelector('.equal').addEventListener('click', (e) => {
  if ((number || number === 0) && number2 && action) {
    let result = calcSum();
    checkResult(result);
    number2 = '';
    action = '';
    sum = null;
  }
});

function validateActions(currentAction) {
  let replaceAcBfNum1 = number === '' && number2 === '' && action;
  let replaceAcBfNum2 = number != '' && action && !action.includes(currentAction) && number2 === '';
  let isRepeatedBfNum2 = number != '' && action.includes(currentAction) && number2 === '';
  let isCalc = action && (number || number === 0) && number2;

  if (replaceAcBfNum1) {
    action = currentAction;
    calcArea.value = action;
  } else if (isRepeatedBfNum2) {
    calcArea.value = calcArea.value;
  } else if (replaceAcBfNum2) {
    action = currentAction;
    calcArea.value = calcArea.value.substring(0, calcArea.value.length - 1) + action;
  } else {
    if (isCalc) {
      calcSum();
      number = sum;
      number2 = '';
    }
    action = currentAction;
    calcArea.value += currentAction;
  }
}

function validateNumbers(num, currentValue) {
  let isDot = num.toString().includes('.') && currentValue === '.';
  let isZero = num.toString().includes('0') && num.toString().length === 1;
  let setZero = isZero && currentValue === '0';
  let replaceZero = isZero && currentValue != 0 && currentValue != '.';

  if (isDot) {
    return num;
  } else if (setZero) {
    return num;
  } else if (replaceZero) {
    calcArea.value = calcArea.value.substring(0, calcArea.value.length - 1) + currentValue;
    return currentValue;
  } else {
    if (!number && action) {
      number = 0;
    }
    calcArea.value += currentValue;
    return (num += currentValue);
  }
}

function calcSum() {
  switch (action) {
    case '+':
      sum = +number + +number2;
      return checkSum(sum);
    case '-':
      sum = +number - +number2;
      return checkSum(sum);
    case 'x':
      sum = +number * +number2;
      return checkSum(sum);
    case '÷':
      if (+number2 === 0) {
        return 'На ноль делить нельзя';
      }
      sum = +number / +number2;
      return checkSum(sum);
    default:
      throw new Error('Unexpected action');
  }
}

function checkSum(sum) {
  return Number.isInteger(sum) ? sum : sum.toFixed(2);
}

function checkResult(res) {
  let message;
  if (res === 'На ноль делить нельзя') {
    message = res;
    showError(message);
  } else if (isNaN(res)) {
    message = `Некорректный ввод`;
    showError(message);
  } else {
    calcArea.value = res;
    number = res;
  }
}

function showError(message) {
  calcArea.value = '';
  calcArea.placeholder = message;
  setTimeout(() => {
    calcArea.placeholder = 0;
  }, 1000);
  number = '';
}

function clearAll() {
  number = '';
  calcArea.value = '';
  number2 = '';
  action = '';
  sum = null;
}

// Завдання № 7
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };
// let users = [vasya, petya, masha];
// let names = users.map((item) => {
//   return Object.entries(item)[0][1];
// });
// console.log(names);

// Завдання № 8
// let vasya = { name: ' Вася ', age: 25 };
// let petya = { name: ' Петя ', age: 30 };
// let masha = { name: ' Маша ', age: 28 };
// let arr = [vasya, petya, masha];
// const sortByAge = (arr) => {
//   arr.sort((a, b) => {
//     if (a.age < b.age) return -1;
//     if (a.age > b.age) return 1;
//     return 0;
//   });
// };
// sortByAge(arr);
// console.log(arr);
// console.log(arr[0].name);
// console.log(arr[1].name);
// console.log(arr[2].name);

// Завдання № 9
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 29 };
// let arr = [vasya, petya, masha];
// const getAverageAge = (users) => {
//   let sum = users.reduce((total, amount) => {
//     return total + amount.age;
//   }, 0);
//   return sum / users.length;
// };
// console.log(getAverageAge(arr));

// Завдання № 10
// let strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'крішна', ':-O'];
// function unique(arr) {
//   return arr.filter((ietm, i, arr) => arr.indexOf(ietm) === i);
// }
// console.log(unique(strings));

// Завдання № 11
// let strings = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];
// function unique(arr) {
//   return [...new Set(arr)];
// }
// console.log(unique(strings));

// Завдання №12
// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }
// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1

// console.log(counter2()); //0
// console.log(counter2()); //1

// У функций разные внешние лексические окружения, потому что они созданы разными вызовами makeCounter.
// Поэтому у каждой своя собственная переменная count.

// Завдання № 13
// function Counter() {
//   let count = 0;
//   this.up = function () {
//     return ++count;
//   };
//   this.down = function () {
//     return -count;
//   };
// }
// let counter = new Counter();
// console.log(counter.up()); //1
// console.log(counter.up()); //2
// console.log(counter.down()); //-2

// Функции up и down созданы с одним и тем же внешним лексическим окружением, поэтому у них общий count

// Завдання № 14
// const factorial = (n) => {
//   return n ? n * factorial(n - 1) : 1;
// };
// console.log(factorial(5));
