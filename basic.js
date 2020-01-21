const R = require('ramda');

const print = console.log

const printList = list => R.forEach(print, list)

const double = n => n * 2
const doubleList = list => R.map(double, list)

const isEven = n => n % 2 === 0
const filterList = (p, list) => R.filter(p, list)

printList([1,2,3,4])

printList(doubleList([1,2,3,4]))

printList(R.curry(filterList)(isEven, [1,2,3,4]))

printList(R.reject(isEven, [1,2,3,4]))

const adder = (a, v) => a + v

print(R.reduce(adder, 0, [1,2,3,4]))