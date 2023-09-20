## Comparisons

### Comparison Oporators

```js
=== // equal to
!== // no equal to
<= // less than or equal
< // less than
>= // greater than or equal to
> // greater than
```

### Logical Operators

```js
&& // AND
|| // OR
```

```js
// Examples of "pairing down" the problem to find the truth(y)
1 < 2 && 3 < 4;
true && true;
true;

"Tim" === "tim" || "rich" !== "Rich";
false || true;
true;
```

#### Note:

If the first value is false:

- || will keep looking
- && will stop looking for true

If the first value is true:

- || will stop looking for true
- && will keep looking

### Evaluating Comparisons

#### syntax

operand operator operand

```js
// Examples
1 < 2; // true
1 === 2; // false
1 === 1; // true
```

### truthy/falsy

#### falsy

false
0
""
NaN // stands for Not a Number
undefined
null
"5" / 2 // NaN
let a; // undefined

#### truthy

All other values!

### Example on comparisons with only 1 thing being looked at

```js
let a = "this is a string";
let b = null;

if (a) {
  // will run
}

if (b) {
  // will NOT run
}
```

## Arrays

Arrays are lists of data in programming
Array are comma delimited (separated by commas)
Arrays are zero indexed (the first index is 0)

```js
let myArray = [1, 2, 3, 4];
let team = ["Jez", "Sam", "Rich"];
```

We can store anything in an array (string, number, object, array)

### Using arrays with for loops

```js
let team = ["Jez", "Sam", "Rich"];

// for(inisialisation; condition; increment)
for (let i = 0; i < team.length; i++) {
  console.log("Hello " + team[i]);
}
```

The above code will output

```
Hello Jez
Hello Sam
Hello Rich
```

### Array methods

```js
let arr = ["tim", "jez"];

arr.push("sam"); // push() puts an item at the end
console.log(arr); // ["tim", "jez", "sam]

arr.pop(); // pop() removes the last item
console.log(arr); // ["tim", "jez"]

arr.unshift("rich"); // unshift() puts an item at the start
console.log(arr); // ["rich", "tim", "jez"]

arr.shift(); // shift() removes the first item
console.log(arr); // ["tim", "jez"]

arr.splice(1, 0, "rich"); // using splice to add an item at an index
console.log(arr); // ["tim", "rich", "jez"]

arr.splice(1, 1); // using splice to remove an item based off the index
console.log(arr); // ["tim", "jez"]

// removing a specific item
let indexOfTim = arr.indexOf("tim");
arr.splice(indexOfTim, 1);

console.log(arr); // ["jez"]
```
