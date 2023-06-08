// inline comment

/* 
block comment
*/

// create variables use let or var
let product = 'rice'
let how_much = 2
let unit_price = 4.99
let total_price = how_much * unit_price
document.write(`total price R$ ${total_price}
<br>`)

document.write(`total price ${total_price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})} <hr>`)

// create constant
const name = 'Edson Maia'
const weight = 83.5
const height = 1.75
const imc = weight / (height * height)

document.write(`IMC: ${imc} <br>`)
document.write(`IMC: ${imc.toFixed(2)} <br>`)

let note1 = 7.5
let note2 = 5.5
let note3 = 4.0
let notefinal = note1 + note2 + note3
document.write("note final " + notefinal + '<br>')

let purchase = 1999.9
let discont = 145.42
let purchase_with_discount = purchase - discont

document.write(`${purchase_with_discount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} <br>`)
document.write(purchase_with_discount,'<br>')