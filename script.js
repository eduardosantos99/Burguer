const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const sumAllitens = document.querySelector(".sum-all")
const filterAllitens = document.querySelector(".filter-all")
const drinks = document.querySelector(".drinks-all")




function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    return newValue
}



function showAll(productsArray = menuOptions) {
    let myLi = ""
    productsArray.forEach(products => {
        myLi += `
        <button class = "button-teste" onclick="buttonSelect()">
            <img src=${products.src}>
            ${products.name}
            <p class="item-price">${formatCurrency(products.price)}</p>
       </button>
`
        list.innerHTML = myLi

    })
}

function mapAllItems() {
    const newPrices = menuOptions.map(products => ({
        ...products,
        price: products.price * 0.9
    }))
    showAll(newPrices)
}

function sumAllItems() {

    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
        
        <p>O valor total é de ${formatCurrency(totalValue)}</p>
        
   </li>
`
}

function filterAll() {
    const filter = menuOptions.filter(products => products.vegan === true)
    showAll(filter)
}

function drinksAll() {
    const justDrinks = menuOptions.filter(drinks => drinks.drink)
    showAll(justDrinks)
}


function buttonSelect(){
    console.log("Clicado")
}

