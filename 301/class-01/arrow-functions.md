# Arrow Functions

## Normal declaration

Here is how we previously have been delcaring functions:

```js
function sum(a, b) {
  return a + b;
}
```

## Arrow Function

Here is a similar function, using an arrow declaration:

```js
const multiply = (a, b) => {
  return a * b;
};
```

## One line arrow functions

We can also do write arrow functions on a single line by omitting the {} for the body of the function"

```js
const subtract = (a, b) => a - b;
```

The above will have `a -b` be the implicite return of the function, meaning it is autoamically returned.

## Bracketless one line arrow functions (ﾉ ◕ ヮ ◕)ﾉ\*:・ﾟ ✧

We can also have one line with no brackets at all!

```js
const divideBy12 = (a) => a / 12;
```

because we only have one parameter in this function (a) it doesn't need to be surrended in (a)
