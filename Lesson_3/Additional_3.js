// 1. Створити пустий масив та :
let array = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
for (let i = 0; i < 50; i++) {
    array[i] = Math.ceil(Math.random() * 101) * 2;
}
console.log('============array парні==================');
console.log(array);


//     b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; i < 50; i++) {
    let random = Math.ceil(Math.random() * 101);
    if (!(random % 2)) {
        random++;
    }
    array[i] = random;
}
console.log('============array не парні==================');
console.log(array);


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let array2 = [];
for (let i = 0; i < 20; i++) {
    array2[i] = Math.ceil(Math.random() * 100);
}
console.log('============array2 рандом==================');
console.log(array2);


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let array3 = [];
for (let i = 0; i < 20; i++) {
    let min = 8;
    let max = 732;
    array3[i] = Math.ceil(Math.random() * (max - min) + min);
}
console.log('============array3 в діапазоні 8 - 732==================');
console.log(array3);


// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < array2.length; i += 3) {
    console.log(array3[i]);
}
console.log('==============================');


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < array3.length; i += 3) {
    if (!(array3[i] % 2)) {
        console.log(array3[i]);
    }
}
console.log('==============================');


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масивє
let array4 = [];
for (let i = 2; i < array3.length; i += 3) {
    if (!(array3[i] % 2)) {
        array4[array4.length] = array3[i]
    }
}
console.log(array4);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let array5 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < array5.length; i++) {
    if (array5[i + 1] % 2 === 0) {
        console.log(array5[i]);
    }
}
console.log('==============================');

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let array6 = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (let number of array6) {
    sum += number
}
let midCost = sum / array6.length;
console.log(midCost);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let array7_1 = [];
let array7_2 = [];
for (let i = 0; i < 10; i++) {
    array7_1[i] = Math.ceil(Math.random() * 10);
    array7_2[i] = array7_1[i] * 5;
}
console.log('============array7 рандом*5==================');
console.log(array7_1);
console.log(array7_2);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
