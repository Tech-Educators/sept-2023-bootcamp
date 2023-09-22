// recap on arrays and functions 

// you can run this file by typing node recap.js in the terminal if you want. 

// the return statement

console.log('Hello, students!')

let myTestArray = ['1','2','3']

console.log(myTestArray[0])

let myInfo = ['sam',
             24, 
             'true', 
             ['Darcy', 'Charlie', 'einstien']
            ]

console.log(myInfo[3][1], ' is my fav dog!')

let myDog1 = 'Darcy'
let myDog2 = 'Charlie'
let myDog3 = 'Einstein'

let myIndexExample = ['itemOne', 'itemTwo', 'itemThree']

// intialisation; condition; afterthough

for (let i = 0; i < myIndexExample.length; i++) {
    console.log(myIndexExample[i] + ' has an index of ' + i + ' in the array')
}

// What are functions? 
// Reusable blocks of code. 

// function declartion 


// a and B here are parameters
function myFunc(a , b) {
    return a + b 
}

let var1 = 15
let var2 = 24
// what are arguments
console.log(39)
console.log(myFunc(5 + 5,18))
myFunc(12,41)