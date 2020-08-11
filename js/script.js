"use strict";
// const num = 266219;

// let total = 1;

// // const array = num
// //   .toString()
// //   .split("")
// //   .map(function (item, index) {
// //     return parseInt(item);
// //   });
// // console.log(array);

// // for (let i = 0; i < array.length; ++i) {
// //   total *= array[i];
// // }

// //console.log(total ** 3);

// //alert(String(total ** 3).substr(0, 2));

let lang = "en";
let array = [];
//выводяться дни недели с ипользованием If
// if (lang == 'ru') {
//     array = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// }
// if (lang == 'en') {
//     array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// }
// console.log(array);
//выводяться дни недели с ипользованием switch
// switch (lang) {
//     case 'ru':
//         array = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//         break;
//     case 'en':
//         array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//         break;
// }
// console.log(array);

//выводяться дни недели с ипользованием массива
// let array = {
//     'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
// };
// console.log(array[lang]);

// Использую тернарные операторы, без использования if или switch
let namePerson = "Женя";
let result;
result =
  namePerson == "Артем"
    ? "Босс"
    : namePerson == "Максим"
    ? "Преподаватель"
    : "Студент";
console.log(result);
