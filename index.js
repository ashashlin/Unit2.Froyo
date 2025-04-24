const userInput = prompt(
  "Enter a list of froyo flavors you would like to order, each separated with a comma: ",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const froyoFlavors = userInput.split(",");

function displayOrder(froyoFlavors) {
  const order = {};

  for (const flavor of froyoFlavors) {
    if (order[flavor]) {
      order[flavor]++;
    } else {
      order[flavor] = 1;
    }
  }

  return order;
}

console.log(displayOrder(froyoFlavors));
