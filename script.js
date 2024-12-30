const cardArray = document.getElementsByClassName("card")

function setActive(cardNumber){
    for(let i = 0; i < cardArray.length; i++){
        cardArray[i].classList.remove("active")
    }
    cardArray[cardNumber].classList.add("active")
}

let x = 0

function goLeft(){
    const parent = document.getElementById("products")
    console.log(parent.clientWidth)
    const container = document.getElementById("products-container")
    console.log(container.clientWidth)

    if(x-100 < (parent.clientWidth - container.clientWidth) ) {return}
    x -= 100
    container.style.left = `${x}px`
}
function goRight(){
    x += 100
    document.getElementById("products-container").style.left = `${x}px`
}

const container = document.getElementById("products-container")
const productsFace = [
    { name: 'Chill Sesh', price: '1600 DA' },
    { name: 'Bioré Charcoal', price: '1900 DA' },
    { name: 'Blackhead Strips', price: '1700 DA' },
    { name: 'Nose Pore', price: '1800 DA' },
    { name: 'Peeling Solution', price: '2000 DA' },
    { name: 'Charcoal Mask', price: '2200 DA' },
    { name: 'Caffeine Solution', price: '2300 DA' },
    { name: 'Caudalie', price: '2500 DA' },
    { name: 'Effaclar', price: '2100 DA' },
    { name: 'Eye Cream', price: '2000 DA' },
    { name: 'Brightening Eye Cream', price: '2400 DA' },
    { name: 'Pigmentclar', price: '2100 DA' },
    { name: 'Hydrating Eye Gel Cream', price: '2300 DA' },
    { name: 'Collagen Eye Serum', price: '2200 DA' },
    { name: 'Eye Repair Cream', price: '2100 DA' },
    { name: 'Skin Renewing Vita C', price: '2400 DA' },
    { name: 'Kylieskin', price: '2300 DA' },
    { name: 'Fortif Eye Patches', price: '2500 DA' },
    { name: 'Eye Patches', price: '2200 DA' },
    { name: 'Peace Eye Patches', price: '2100 DA' },
    { name: 'Lavender Eye Patches', price: '2000 DA' },
    { name: 'Rose Eye Patches', price: '2200 DA' },
    { name: 'Hydra Gel Eye Patches', price: '2100 DA' }
];
for(let i = 0; i < 10; i++){
    container.style.width = `calc(100% +${i*258}px)`
    container.innerHTML += `
    <div class="product-card">
                    <img src="shop/faceshop/face (${i + 1}).jpg" alt="">
                    <div class="desc">
                        <h2 id="product-name">${productsFace[i].name}</h2>
                        <span>${productsFace[i].price}</span>
                        <div>
                            <button>
                                <i class="fa-regular fa-heart"></i>
                            </button>
                            <button>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                </div>
    `
}
const container2 = document.getElementById('all-products-container')
for(let i = 0; i < 10; i++){
    container2.innerHTML += `
    <div class="product-card">
    <img src="shop/faceshop/face (${i + 1}).jpg" alt="">
    <div class="desc">
        <h2 id="product-name">${productsFace[i].name}</h2>
        <span>${productsFace[i].price}</span>
        <div>
            <button>
                <i class="fa-regular fa-heart"></i>
            </button>
            <button>
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
    `
}
const productsHair = [
    { name: 'Almond Oil', price: '1800 DA' },
    { name: 'Argan Oil', price: '2000 DA' },
    { name: 'Avocado Oil', price: '2200 DA' },
    { name: 'Banana Hair Mask', price: '1900 DA' },
    { name: 'Organic Castor Oil', price: '2100 DA' },
    { name: 'Coconut Hair Mask', price: '2300 DA' },
    { name: 'Coconut Oil', price: '2500 DA' },
    { name: 'Banana Hair Mask', price: '1900 DA' },
    { name: 'Papaya Hair Mask', price: '2000 DA' },
    { name: 'Cacao Hair Mask', price: '2200 DA' },
    { name: 'Macadamia Hair Mask', price: '2400 DA' },
    { name: 'Grape Seed Oil', price: '2100 DA' },
    { name: 'Potent Hydration Mask', price: '2300 DA' },
    { name: 'Coconut Milk', price: '2200 DA' },
    { name: 'Jojoba Oil', price: '2000 DA' },
    { name: 'Hair Comb', price: '1500 DA' },
    { name: 'Scalp & Hair Quencher', price: '2100 DA' },
    { name: 'Scalp & Hair Strengthening Oil', price: '2300 DA' },
    { name: 'Bonding Oil', price: '2400 DA' }
];
const container3 = document.getElementById('hair-products-container')
for(let i = 0; i < 10; i++){
    container2.innerHTML += `
    <div class="product-card">
                    <img src="shop/hairshop/hair (${i + 1}).jpg" alt="">
                    <div class="desc">
                        <h2 id="product-name">${productsHair[i].name}</h2>
                        <span>${productsHair[i].name}</span>
                        <div>
                            <button>
                                <i class="fa-regular fa-heart"></i>
                            </button>
                            <button>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                </div>
    `
}