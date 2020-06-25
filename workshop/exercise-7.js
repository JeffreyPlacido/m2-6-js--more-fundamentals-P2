// Exercise 7
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

const createRecommendations = (obj) => {
  let arr = Object.keys(obj);
  let order = arr.map(x => `With ${x}, is it best to have ${obj[x]}`);
  return order;
}

// had to look at the solution, couldn't figure it out

const printRecommendations = (recommendations) => {
  recommendations.forEach((recommendation) => {
    console.log(`- ${recommendation}`);
  });
};

printRecommendations(createRecommendations(foodPairings));
