/* archive 05 objects js */

// create object
let person = {
    name : 'Edson',
    age  : 40,
    weight : 83.5,
    height : 1.75,
    donor : false
}

let products = {
    description : [],
    price : []
}

const cars = {
    brand : ['Ford','Fiat','GM'],
    model : ['Ka','Uno','Corsa'],
    year : [ 1999, 2005, 2010]
}

// acesses a property using .
/*
person.name
person.age
person.weight
person.height
person.donor
*/

// acesses a property ['']
/*
person.['name']
person.['age']
person.['weight']
person.['height']
person.['donor']
*/

// imc
let imc = person.weight / (person.height * person.height)

// .tofixed(x)
// limits the number of decimal places
console.log("IMC " + imc.toFixed(2))

// change/update values
// products.description = ['rice']
// products.price = ['4.99']

// using spreed operator
// produtos.description = [...produtos.description,'Bean','wheat']
//produtos.price = [...products.price, 9.99 , 4.99]

// using spreed operator in objects
//cars.brand  = [...cars.brand,'wv']
//cars.model =  [...cars.model, 'Fusca']
//cars.year =    [...cars.year, '1979']

