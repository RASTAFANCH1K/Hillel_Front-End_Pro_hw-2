// ЗАДАНИЕ №1
// Добраться до числа 43 и также добраться до 109
let first = [4, [5, 4, 6, [5, 1, 109, 3, [2, 10, 43, 22, 32]]]];
// РЕШЕНИЕ
// first [1][3][2] (109)
// first [1][3][4][2] (43)

// ЗАДАНИЕ №2
// Пробежаться через цикл for и если значение меньше 5 то перезаписать его на значение 11 
// то есть результат должен быть [ 11, 10, 17, 11, 11 , 11 , 11 ];
// РЕШЕНИЕ
const zero = [4, 10, 17, 2, 3, 1, 0];
for (let i = 0; i < zero.length; i++) {
  if (zero[i] < 5) {
    zero[i] = 11;
  }
}
console.log(zero);

// ЗАДАНИЕ №3
// Пробежаться через цикл for и четные елементы перемножить и записать результат в odd и вывести
// то есть перемножить в цикле 4 17 3 10 
// РЕШЕНИЕ
const multiply = [4, 10, 17, 2, 3, 1, 10];
let odd = 1;
for (let i = 0; i < multiply.length; i++) {
  if (i % 2 == 0) {
    odd *= multiply[i];
  }
}
console.log(odd);

// ЗАДАНИЕ №4
// Вывести только нечетные числа используя цикл: 
// - for,
// - while
// РЕШЕНИЕ

// Через for
const second = [1, 5, 10, 4, 2, 3];
for (let i = 0; i < second.length; i++) {
  if (second[i] % 2 != 0) {
    console.log(second[i]);
  }
}

// Через while
const second = [1, 5, 10, 4, 2, 3];
let i = 0;
while (i < second.length) {
  if (second[i] % 2 != 0) {
    console.log(second[i]);
  }
  i++;
}

// ЗАДАНИЕ №5
// Найти минимальное значение и вывести
// РЕШЕНИЕ
const third = [10, 2, 4, 43, 5, 3, 19, 23];
let min = third[0];
for (let i = 1; i < third.length; i++) {
  if (min > third[i]) {
    min = third[i];
  }
}
console.log(min);

// ЗАДАНИЕ №6
// Вывести все елементы в цикле for в обратном порядке то есть 28 19 14 9 23 43 3 4
// РЕШЕНИЕ
const fourth = [4, 3, 43, 23, 9, 14, 19, 28];
let tmp;
for (let i = 0, j = fourth.length - 1; i < j; i++, j--) {
  tmp = fourth[j];
  fourth[j] = fourth[i];
  fourth[i] = tmp;
}
console.log(fourth);

// ЗАДАНИЕ №7
// Найти произведение  всех елементов
// РЕШЕНИЕ
const fifth = [9, 14, 19, 28];
let multiplyNumbers = 1;
for (let i = 0; i < fifth.length; i++) {
  multiplyNumbers *= fifth[i];
}
console.log(multiplyNumbers);

// ЗАДАНИЕ №8
// Пройтись через цикл for и сложить все числа в массиве и вывести результат!
// РЕШЕНИЕ
const sixth = [9, 4, 19, 18];
let sumNumbers = 0;
for (let i = 0; i < sixth.length; i++) {
  sumNumbers += sixth[i];
}
console.log(sumNumbers);

// ЗАДАНИЕ №9
// Пройтись через цикл for и найти среднее арифметическое все елементов
// среднее арифметическое - это сумма всех елементов, разделенная на их количество!
// РЕШЕНИЕ
const seventh = [2, 0, 3, 29, 23, 19];
let sum = 0;
let avarage;
for (let i = 0; i < seventh.length; i++) {
  sum += seventh[i];
}
avarage = sum / seventh.length;
console.log(avarage);

// ЗАДАНИЕ №10
// Записать в массив eighth числа от 5 до 17 через цикл:
// - for,
// - while
// РЕШЕНИЕ

// Через for
const eighth = [];
for (let i = 5; i <= 17; i++) {
  eighth[eighth.length] = i;
}
console.log(eighth);

// Через while
const eighth = [];
let i = 5;
while (i <= 17) {
  eighth[eighth.length] = i;
  i++;
}
console.log(eighth);

// ADVANCED ЗАДАНИЯ!!!! ТО ЕСТЬ НЕОБЯЗАТЕЛЬНЫЕ!!!!!!!!

// ЗАДАНИЕ №11
// Отсортировать массив по возростанию! и вывести
// РЕШЕНИЕ
const ninth = [1, 2, 18, 3, 38, 41, 0];
let swap;
for (let i = 0; i < ninth.length; i++) {
  for (let j = 0; j < ninth.length - 1; j++) {
    if (ninth[j] > ninth[j + 1]) {
      swap = ninth[j];
      ninth[j] = ninth[j + 1];
      ninth[j + 1] = swap;
    }
  }
}
console.log(ninth);

// ЗАДАНИЕ №12
// Есть строкa в переменной ninth!! Нужно пройтись циклом for и записать в переменную res строку со значением 2a1f3c1b
// так как если обратить внимание то в строке 'aafcccb' символ а идет последовательно 2 раза далее f только один символ, символ с последовательно 3 раза
// и символ b один раз
// РЕШЕНИЕ
const tenth = 'aafcccb';
let counter = 1;
let res = '';
for (let i = 0; i < tenth.length; i++) {
  if (tenth[i] == tenth[i + 1]) {
    counter++;
  } else {
    res += counter + tenth[i];
    counter = 1;
  }
}
console.log(res);

// ЗАДАНИЕ №13
// ЗДЕСЬ ЕЩЕ ТЯЖЕЛЕЙ нужно подсчитать количество одинаковых символов в строке и при этом одинаковые символы не идут последовательно!!
// то есть результат должен быть 4a3f4c