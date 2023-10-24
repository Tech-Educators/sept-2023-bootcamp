# Classes

Before we used contructors like this:

## Constructors

```js
function Animal(name, colour, age) {
  this.name = name;
  this.colour = colour;
  this.age = age;
}

Animal.prototype.speak = function () {
  console.log(this.name + " shouts");
};

const spot = new Animal("Spot", "Yellow", 43);
spot.speak();
console.log(spot);
```

We added added our methods to a protoype that each instance of the object could access.

## Classes

Now we can use classes. Each class has a contructor inside it:

```js
class Animal {
  constructor(name, colour, age) {
    this.name = name;
    this.colour = colour;
    this.age = age;
  }

  speak = () => {
    console.log(`${this.name} makes a noise`);
  };
}
```

The instantiation of classes is identical to contructor functions:

```js
const spot = new Dog("Spot", "Yellow", 43, "Pointer");
console.log(spot);
spot.speak();
```

But now we can EXTEND our classes, which means making a new class that has all the features of the old one, with more added:

```js
class Dog extends Animal {
  constructor(name, colour, age, breed) {
    super(name, colour, age);
    this.breed = breed;
  }

  goodBoi = () => {
    console.log(`You pat ${this.name} on the head.`);
  };
}
```

Now a `Dog` object with have all the properties and methods of the `Animal` objects, but also a breed property and a goodBoi method.

Notice how we use `super()` with all the properties of the parent class. This is us running the contructor function of the parent class, as part of our constructor for the extended class.
