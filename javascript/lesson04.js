/* archive JS lesson 04 array */

let products = ['rice','bean','milk']
var codes = Array('10','20','30')
let months = ['January','February','March','April']

// add at the end push = empurre
products.push('sugar')
codes.push('40','50','60','70')
months.push('May','June','August','07')

// remove on the final pop = estourar
products.pop('milk')
codes.pop('April')
months.pop('07')

// add on start unshift
products.unshift('grape','apple')

// remove on start shift
products.shift('January')

// remove from a specific position splice
// splice = emendar
// starting position, how many to remove
codes.splice(1,3) 

// copy array slice = fatiar porção
// starting position, how many to remove
//let months1 = months.slice()
//let months2 = months.slice(0,3)

// see size of ARRAY lenght comprimento
//months.lenght
//months1.lenght
//months2.lenght

//spreed operator
let test = [...products,'egg','pear']