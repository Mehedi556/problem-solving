const persons = [
  {
    name: "Abdullah",
    age: 43,
    gender: "male",
  },
  {
    name: "Shahida",
    age: 43,
    gender: "female",
  },
  {
    name: "Faruk",
    age: 43,
    gender: "male",
  },
  {
    name: "Shamima",
    age: 43,
    gender: "female",
  },
  {
    name: "Rohima",
    age: 43,
    gender: "female",
  },
];

function getOnlyMales(data) {
  return data
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
}

// console.log(getOnlyMales(persons));
// ---------------------------------------------------
const books = [
  { title: "New book", author: "Hasan", year: 1960 },
  { title: "Black berry", author: "Rofiq", year: 1949 },
  { title: "History", author: "kader", year: 1925 },
  { title: "Fishing", author: "Muhammad", year: 1951 },
  { title: "Developer", author: "Mehedi", year: 1813 },
];

function bookTitles(books) {
  return books.map((book) => book.title);
}

// console.log(bookTitles(books));
// -----------------------------------------------------

const cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Honda", model: "Accord", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2015 },
  { make: "Chevrolet", model: "Malibu", year: 2017 },
  { make: "Tesla", model: "Model S", year: 2019 },
];

function sortCars(cars) {
  return cars.sort((value1, value2) => value1.year - value2.year);
}

// console.log(sortCars(cars));
// ---------------------------------------------------------

const numbers = [1, 2, 3, 4, 2, 1, 3, 5, 3, 6, 4, 7, 5, 8];

function getUniqueNumbers(arr) {
  return [...new Set(arr)];
}

// console.log(getUniqueNumbers(numbers));
// --------------------------------------------------------

function maxValue(arr) {
  return Math.max(...arr);
}

const number = [1, 5, 3, 9, 2, 8];
// console.log(maxValue(number));
