const resMenu = document.getElementById('restaurant-menu')
const addCartForm = document.getElementById('add-to-cart-form')

function createMenu(data) {
    const spanBurger = document.createElement('span')
    spanBurger.textContent = data.name
    resMenu.appendChild(spanBurger)
    
    spanBurger.addEventListener('click', () =>{
            displayBurger(data)
    })
}

function displayBurger(data){
    const burgerName = document.getElementById('name')
    burgerName.textContent = data.name
    const burgerImg = document.getElementById('image')
    burgerImg.src = data.image
    const cartNum = document.getElementById('number-in-cart-count')
    cartNum.textContent = data.number_in_cart
            
}
addCartForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const cartNum = document.getElementById('number-in-cart-count')
    const cartAdd = parseInt(document.getElementById('number-to-add').value)
    cartNum.textContent = parseInt(cartNum.textContent) + cartAdd
    
})


fetch("http://localhost:3000/burgers")
.then(response => response.json())
.then(burgerData => {
    burgerData.forEach(burgerData => createMenu(burgerData))
    displayBurger(burgerData[0])
})

