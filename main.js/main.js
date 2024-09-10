"user strict";

function fruitJuicer(apple, orange) {
  console.log(apple, orange);
  const juice = `Apple juice ${apple} and orange ${orange}`;
  return juice;
}

fruitJuicer(5, 50);

const result = fruitJuicer(5, 25);
console.log(result);
