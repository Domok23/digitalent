// const evenNumber = [];
// for (i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     evenNumber.push(i);
//   }
// }

// console.log('Menyalakan mesin kopi');
// console.log('Menggiling biji kopi');
// console.log('Memanaskan air');
// console.log('Mencampurkan air dan kopi');
// console.log('Menuangkan kopi ke dalam gelas');
// console.log('Menuangkan susu ke dalam gelas');
// console.log('Kopi Anda sudah siap!');

// import coffeeStock from './state.js';

// const displayStock = (stock) => {
//   for (const type in stock) {
//     console.log(type);
//   }
// };

// displayStock(coffeeStock);

import _ from 'lodash';

const myArray = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}

console.log(sum);

let sum2 = myArray.reduce((prev, curr) => {
  return prev + curr;
});

console.log(sum2);

const sum3 = _.sum(myArray);

console.log(sum3);