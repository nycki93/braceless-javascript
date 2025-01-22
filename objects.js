// for loop without curly braces
const range = (length) => Array(length).fill().map((_, i) => i);

// object literal without curly braces
const obj = withMy((my, ...items) => Object.fromEntries(
  range(items.length / 2).map(i => [items[2*i], items[2*i + 1]])
));

// use closure to create a 'my' variable
const withMy = (fn) => (...args) => fn(Object(), ...args);

// if-then without curly braces
const main = withMy((my) => (
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
  obj('a', my.a, 'entries', my.entries)
));

console.log(main());
// {
//   a: { one: 1, two: 2, three: 'fizz', four: 4, five: 'buzz' },
//   entries: undefined
// }
