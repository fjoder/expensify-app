//
// Object Destructuring
//

const person = {
  name: 'Frank',
  age: 34,
  location: {
    city: 'Cincinnati',
    temp: 30,
  },
};

const { name = 'Anonymous', age } = person;
const { temp: temperature, city } = person.location;

console.log(`${name} is ${age}.`);
console.log(`It's ${temperature} in ${city}.`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(`${publisherName}`);


//
// Array Destructuring
//

const address = ['1299 S Juniper Street', 'Cincinnati', 'Ohio', '45215'];
const [, cityName, state] = address;
console.log(`You are in ${cityName} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
