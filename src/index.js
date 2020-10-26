import '../assets/css/style.css';

// Immutable Data Structures

const items = Object.freeze([
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
]);

// // array add
// const newItem = {id: '🥤', name: 'Hot Dog', price: 99};
// const newItems = [...items, newItem];
// console.log(items);
// console.log(newItems);

// // array Remove

// // mutable
// // const removed = items.splice(0, 1);

// const updatedItems = items.filter((item) => item.id !== '🍔');
// console.log('immutable', updatedItems, items);


// // object - add
// const item = { id: '🥤', name: 'Big Slurp' };
// // item.price = 699;
// const itemNewProperty = {... item, price: 299};
// console.log(item, itemNewProperty);

// // object - remove
// const itemToRemove = { id: '🍟', name: 'Jumbo Fries', price: 899 };
// console.log(itemToRemove);
// // delete itemToRemove.price;
// const { price, ...letfOverItems } = itemToRemove;
// console.log('destructure', price, itemToRemove);
// console.log(letfOverItems);


// IMPERATIVE
// const imperativeItem = [];
// for (let i = 0; i < items.length; i ++) {
//   const item = items[i];
//   imperativeItem.push(item.name);
// }
// console.log(imperativeItem);

// // DECLARATIVE
// // 

// // arrow
// const declarativeItemTotal = items
//   .map(item => item.price)
//   .reduce(function(price, nextPrice) {
//     return price + nextPrice;
//   });

// console.log(declarativeItemTotal);

// console.log(items);


// Impure way
// const getTotalImpure = () => {
//   document.querySelector('#app').innerHTML = items.reduce((x, y) => x + y.price, 0);
// };

// getTotalImpure();

// Referential Pure
const getTotalPure = (v) =>
console.log(v) || v.reduce((x, y) => x + y.price, 0);
console.log(getTotalPure(items));

// Pure function
// 1. Refential transparency
// 2. Side-effect free

// Function Closures

// Higher Order Functions

// 1. Return a new function
// 2. Take other function as arguments

const getNameFromId = (id) => (items) =>
  items.find((item) => item.id === id).name;

const getFries = getNameFromId('🍟');
const getBurgers = getNameFromId('🍔');


console.log(getFries(items));
console.log(getBurgers(items));