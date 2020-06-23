let mostPopularFood = [
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  undefined,
];

//step 1

const fixList = (arr, first, last) => {

  const fixedList = [...arr];

  fixedList.pop();
  fixedList.unshift(first);
  fixedList.push(last);


  return fixedList;

};

//step 2

const printList = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log( (i + 1) + (arr[i]));
  }
};

// call

printList(fixList(mostPopularFood, 'bean burritos', 'buffalo-flavored cauliflower'));