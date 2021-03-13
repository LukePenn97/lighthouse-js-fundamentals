const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let x = 0;
let length = ingredients.length;
console.log(ingredients.length);
while(x < ingredients.length){
  console.log(ingredients[x]);
  x++;
}

// Write a for loop that prints out the contents of ingredients:
for(let i = 0; i < length; i++){
  console.log(ingredients[i])
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(let j = ingredients.length-1; j >= 0; j--){
  console.log(ingredients[j]);
}