// for loop without curly braces
const range = (length) => Array(length).fill().map((_, i) => i);

// use closure to create a 'my' variable
const withMine = (fn) => (...args) => fn(null, ...args);

// object literal without curly braces
const obj = withMine((my, ...items) => (
  my = range(items.length / 2).map((i) => [items[2*i], items[2*i + 1]]),
  Object.fromEntries(my)
));

// if-then without curly braces
const main = (my) => (
  my = obj('a', null),
  my.a = obj(
    'one', 1, 
    'two', 2, 
    'three', 3, 
    'four', 4, 
    'five', 5
  ),
  Object.keys(my.a).map((k) => (
    my.a[k] % 15 == 0 ? my.a[k] = 'fizzbuzz' :
    my.a[k] % 3 == 0 ? my.a[k] = 'fizz' :
    my.a[k] % 5 == 0 ? my.a[k] = 'buzz' :
    null
  )),
  my.a
);

console.log(main());
