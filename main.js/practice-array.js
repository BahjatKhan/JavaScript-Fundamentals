"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (mainIndex, startIndex) {
    return [this.mainMenu[mainIndex], this.starterMenu[startIndex]];
  },
};
/**Destructuring Object Practice */
const {
  openingHours,
  categories,
  name,
  location: restaurantLocation,
} = restaurant;
console.log(openingHours, categories, name, restaurantLocation);
// Setting a default value
const { menu = ["Indian", "Russian", "Chinese"], starterMenu: starters = [] } =
  restaurant;
console.log(menu, starters);
/** ------------------------------------------- */

/**Destructuring Array Practice */
const arr = [1, 2, 3];

const [x, y, z] = arr;

console.log(x, y, z);

//Swapping Variables
let [firstCategory, secondCategory, lastCategory, thirdCategory] =
  restaurant.categories;
console.log(firstCategory, thirdCategory, lastCategory);

[firstCategory, secondCategory] = [secondCategory, firstCategory];
console.log(firstCategory, secondCategory);

const foodDelivery = restaurant.order(2, 3);
console.log(foodDelivery);

const [foodDeliveryMain, foodDeliveryStarter] = restaurant.order(2, 3);
console.log(foodDeliveryMain, foodDeliveryStarter);

const nested = [2, 4, [5, 6]];

const [a, b, [c, d]] = nested;
console.log(c, d);

const [w = 2, e = 4, r = 463] = [8];
console.log(w, e, r);
/** ------------------------------------------- */
