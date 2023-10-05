console.log('Hello!');

const catform = document.getElementById('catform')
console.log(catform)
const catlist = document.getElementById('catlist')
const catInput = document.getElementById('kitten-id')


// 

const state = {
    allCats: [],
}

function Cat(name) {
    this.name = name;
}

Cat.prototype.render = function() {
    const li = document.createElement('li')
    li.textContent = this.name;
    catlist.appendChild(li)
}


function handleSubmit(e) {
    e.preventDefault()

    const newCat = new Cat(catInput.value)
    state.allCats.push(newCat)
    catform.reset()
    newCat.render()

    // store my cat in local storage 
    localStorage.setItem('cats', JSON.stringify(state.allCats))
}


catform.addEventListener('submit', handleSubmit)
















// REINSTANCE DEMO

// Apple 

function AppleMaker(name) {
    this.name = name;
    this.eat = function() {
        console.log("I'm eating a " + this.name)
    }
}

let apple1 = new AppleMaker('Pink Lady') // eat



console.log(apple1)

apple1.eat()

// I want to store my apple in local storage

localStorage.setItem('apple', JSON.stringify(apple1))

// get my apple back from local storage 

let applesLS = localStorage.getItem('apple')
console.log(JSON.parse(applesLS))

let reInstancedApple = new AppleMaker(JSON.parse(applesLS).name)
console.log(reInstancedApple)