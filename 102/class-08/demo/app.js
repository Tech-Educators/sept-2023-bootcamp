// value 
// 5 
// 'word'
// true 

// expression 
// something we ask for, or calculate, that produces a value 

// function sum() {
//     console.log(24 + 2)
// }

// sum()

// return 24
// return error message
// return 2424

// 100 + 4 * 2 // 108
// (100 + 4) * 2// 208


// our types

// strings 
// "This is a string in double quotes"
// 'This is a string in single quotes'
// `This is a string in weird quotes`

// numbers 

// 23324
// 234234234
// 23
// 1

// boolean 

// true 
// false

// let answer = prompt('Do you like banana on pizza?')

// let output = 'whoo!!!'
// //keyword 

// // strickly equal checks if the type and value are different. 
// if (answer === 'Hell yeah!!') {
//     console.log(output)
// } else if (answer === 'You monster!'){
//     console.log(output + ' - wait! But I like oit :((')
// } else {
//     console.log('Be more assertive about your feelings')
// }

let userName;

// functions are steps of code that we can reuse over and over. 

// function getPlayerName() {
//     userName = prompt(`What is your name's?`)
// }

// with return, the function will give us back the value of a + b
function sum(a, b) {
    return a + b
}

// without return 
// declaring function with parameters
// function sum(a, b) {
//     console.log(a + b)
// }


function greet() {
    // getPlayerName();
    // here, we invoke the function with arguments
    console.log('You have ' + sum(10,5) + ' gold')
    console.log('You have ' + sum(24,53) + ' gold')
}

greet()


function asdfasdfxcvawserer(number1, number2) {
    return number1 * number2

}

console.log(asdfasdfxcvawserer(5, 5))
console.log(25)
asdfasdfxcvawserer(10, 10)
