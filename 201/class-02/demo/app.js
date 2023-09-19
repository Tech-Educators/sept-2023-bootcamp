
// some conditionals!!

let answer1 = confirm('ArRE YOU READY TO RUMMMMMBLLEE!!!')
// = (assignment operator)
// == (only check value - equality checking)
// === (check value and data type - equality checking )

if (answer1 === true) {
    console.log('YOU"RE READY TO RUMBLE!!')
} else {
    console.log('You have no power here!')
}

console.log(answer1)

let first = false;
let second = false;
let third = false; 


if (first && third) {
    console.log('first and third were both true!')
} else if (first || second) {
    console.log('The first or second was true!')
} else if (third) {
    console.log('first and second were false, but the third is true')
} else {
    console.log('IS anything real??/!')
}

let color = prompt('What is your favorite colour?')

console.log(color);
console.log(color.toLowerCase())

switch (color.toLowerCase()) {
    case 'x':
    case 'red':
        console.log('Your favorite color was red!');
        break;
    case 'blue':
        console.log('Your favorite color was blue!');
        break;
    default:
        console.log(`I don't know what kind of weird color you've picked ¯\\_(ツ)_/¯`)
}

// switch case is like another way of writing if else statements 
// if (color === 'red') {
//     console.log('fav was red')
// } else if (color === 'blue') {
//     console.log('Your fav is blue!')
// }