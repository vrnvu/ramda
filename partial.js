const R = require('ramda');
const print = console.log

const duck = {
    name: "pato",
    breed: "datascientist",
    age: 4
}

// Initial scenario, ugly code

const canDrink = (duck, minAge) => duck.age >= minAge

const breedDrinkers = (ducks, minAge) => {
    const drinkers = R.filter(duck => canDrink(duck, minAge), ducks)
    return R.map(duck => duck.name, drinkers)
}

// Curry one parameter to simplify the filter

const canDrink = duck => minAge => duck.age >= minAge

const breedDrinkers = (ducks, minAge) => {
    const drinkers = R.filter(duck => canDrink(minAge), ducks)
    return R.map(duck => duck.name, drinkers)
}

// In Ramda we can use partial and partialRight to supply arguments
// Partial and PartialRight differ on the parameter ordering application
const canDrink = duck => minAge => duck.age >= minAge

const breedDrinkers = (ducks, minAge) => {
    const drinkers = R.filter(R.partialRight(canDrink, [minAge]))
    return R.map(duck => duck.name, drinkers)
}


// If we want to use curry we need to consider its a partial
// we reverse the arguments for our canDrink fun

const canDrink = R.curry((minAge, duck) => duck.age >= minAge)

const breedDrinkers = (ducks, minAge) => {
    const drinkers = R.filter(canDrink(minAge))
    return R.map(duck => duck.name, drinkers)
}

// If we can not modify a fun we cant flip its argument order
// Notice the flip
const canDrink = R.curry((duck, minAge) => duck.age >= minAge)

const breedDrinkers = (ducks, minAge) => {
    const drinkers = R.filter(flip(canDrink)(minAge))
    return R.map(duck => duck.name, drinkers)
}

// We can compose it with compose/pipe
const canDrink = R.curry((minAge, duck) => duck.age >= minAge)

const breedDrinkers = R.curry((minAge, ducks) =>
    R.pipe(
        R.filter(canDrink(age)),
        map(duck => duck.name)
    )(ducks)
)