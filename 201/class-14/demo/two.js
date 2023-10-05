const catButton = document.getElementById('catbutton')

const handleButtonClick = function() {
    const catsfromLS = localStorage.getItem('cats')
    const parsedCats = JSON.parse(catsfromLS)
    console.log(parsedCats)

    for (let i = 0; i < parsedCats.length; i++) {
        const newCat = new Cat(parsedCats[i].name)
        state.allCats.push(newCat)
        newCat.render()
    }

}

catButton.addEventListener('click', handleButtonClick)