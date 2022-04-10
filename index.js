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

import coffeeStock from './state.js';

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};

displayStock(coffeeStock);