// const firstString = 'Hello';
// const secondString = 'JavaScript';

// console.log(firstString + secondString);

// const name = 'Dicoding';
// const language = 'JavaScript';

// console.log(`Hello $name. Welcome to $language!`);




// for (let i = 1; i < 9; i += 2) {
//     console.log(i);
// }

// for (let i = 1; i < 10; i += 2) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) { 
//     if (i % 2 !== 0) {
//          console.log(i);
// }
// }




// const artistsAndSongs = {
//   Keyakizaka46: ['Silent Majority'],
//   Blackpink: ['How You Like That', 'Ice Cream'],
//   JKT48: ['Rapsodi', 'Heavy Rotation'],
//   Twice: ['What is Love?'],
// };

// artistsAndSongs['Babymetal'] = ['Gimme chocolate'];

// delete artistsAndSongs['Keyakizaka46'];

// console.log(artistsAndSongs);

// const phoneticAlphabet = ['Alpha', 'Bravo', 'Delta'];

// // TODO: Kode untuk menambahkan item Charlie pada index ke-2

// console.log(phoneticAlphabet);




// const artistsAndSongs = {
//   Keyakizaka46: ['Silent Majority'],
//   Blackpink: ['How You Like That', 'Ice Cream'],
//   JKT48: ['Rapsodi', 'Heavy Rotation'],
//   Twice: ['What is Love?'],
// };

// artistsAndSongs['Babymetal'] = ['Gimme chocolate'];
// delete artistsAndSongs['Keyakizaka46'];
// artistsAndSongs['Blackpink'].push('Rose - Gone');

// console.log(artistsAndSongs);



// function minMax(arrayOfNumbers) {
//   let currentMin = arrayOfNumbers[0];
//   let currentMax = arrayOfNumbers[0];
//   for (value of arrayOfNumbers) {
//     if (value < currentMin) {
//       currentMin = value;
//     } else if (value > currentMax) {
//       currentMax = value;
//     }
//   }

//   console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
// }

// minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);




// try {
//   const arr = [1, 2, 3, 4];
//   for (let i = 0; i <= 4; i++) {
//     console.log(arr[i]);
//   }
// } catch (e) {
//   console.log('Out of bounds');
// }



// let myString = '';

// try {
//   myString += 'a';
//   throw Error();
// } catch (e) {
//   myString += 'b';
// } finally {
//   myString += 'c';
//   throw Error();
//   myString += 'd';
// }

// console.log(myString);


// function fetchUsername() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('JSUser');
//     }, 3000);
//   });
// }

// console.log('Fetching username...');
// fetchUsername()
//   .then((value) => {
//     console.log(`You are logged in as ${value}`);
//   })
//   .finally(() => {
//     console.log('Welcome!');
//   });



// function main() {
//     try {
//         console.log("Fetching username...");
//         const username = await fetchUsername();
//         console.log(`You are logged in as ${username}`);
//         console.log("Welcome!");
//     } catch(e) {
//         console.log("Username tidak ditemukan");
//     }
// }



function fetchUsername() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('JSUser');
    }, 3000);
  });
}

console.log('Fetching username...');
const username = fetchUsername();
console.log(`You are logged in as ${username}`);
console.log('Welcome!');