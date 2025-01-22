// numeric for loop without curly braces
const range = (length) => Array(length).fill().map((_, i) => i);

// object literal without curly braces
const obj = (...items) => Object.fromEntries(
  range(items.length / 2).map(i => [items[2*i], items[2*i + 1]])
);

// trap object inside closure to create local scope
const withMy = (fn) => (...args) => fn(obj(), ...args);

// for convenience: iterate over object values
const objectMap = (o, fn) => Object.fromEntries(Object.entries(o).map(
  ([k, v]) => [k, fn(v)]
));

// tada!
const main = withMy((my) => (
  my.items = obj(
    'one', 1, 
    'two', 2, 
    'three', 3, 
    'four', 4, 
    'five', 5
  ),
  my.fizzbuzz = (n) => (
    n % 15 == 0 ? 'fizzbuzz' :
    n % 3 == 0 ? 'fizz' :
    n % 5 == 0 ? 'buzz' :
    n
  ),
  objectMap(my.items, my.fizzbuzz)
));

console.log(main());
// -> { one: 1, two: 2, three: 'fizz', four: 4, five: 'buzz' }

// bonus round: error catching without curly braces!
(Promise.resolve()
  .then(() => console.log(my))
  .catch((err) => console.log(err.message))
);
// -> my is not defined
