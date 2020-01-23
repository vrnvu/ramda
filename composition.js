const R = require('ramda');
const print = console.log

const isEven = x => x % 2 === 0
 
const isOdd = R.complement(isEven)
 
print(R.find(isOdd, [1, 2, 3, 4]))

const isOver3 = n => n > 3
const isUnder6 = n => n < 3

const filterEither = R.either(isOver3, isUnder6)
const filterBoth = R.both(isOver3, isUnder6)

const filterAll = R.allPass([isOver3, isEven])

print(R.filter(filterAll, [1,2,3,4,5,6,7,8,9,10,11,12]))

const multiply = (a, b) => a * b
const addOne = x => x + 1
const square = x => x * x
 

const operatePipe = R.pipe(
    multiply,
    addOne,
    square
)

const operateCompose = R.compose(
    square,
    addOne,
    multiply
)

print(operatePipe(3, 2))
print(operateCompose(3, 2))