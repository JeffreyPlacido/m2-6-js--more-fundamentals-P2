// Exercise 4
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

const converter = (obj) => {
  const nipsey =  Object.keys(obj);
  const hussle =  Object.values(obj);
  return [nipsey, hussle] 
  };
console.log(converter(foodPairings));

