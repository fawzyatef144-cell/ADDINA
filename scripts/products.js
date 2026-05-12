// AOS.init();

const products = [
    {
        id: 1,
        name: "Alexander Roll Arm Sofa",
        quantity : 1 ,
        price: 150.00,
        discount: "10% off",
        image: "../images/product1.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        name: "Luxury Chair Pillow",
        quantity : 1 ,
        price: 45.00,
        discount: null,
        image: "../images/product2.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        name: "Velvet Accent Armchair",
        quantity : 1 ,
        price: 210.00,
        discount: "15% off",
        image: "../images/product3.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 4,
        name: "Nordic Wooden Coffee Table",
        quantity : 1 ,
        price: 85.00,
        discount: null,
        image: "../images/product4.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 5,
        name: "Minimalist Floor Lamp",
        quantity : 1 ,
        price: 60.00,
        discount: "5% off",
        image: "../images/product5.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 6,
        name: "Artisan Ceramic Vase",
        quantity : 1 ,
        price: 32.00,
        discount: null,
        image: "../images/product6.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 7,
        name: "Classic Oak Bookshelf",
        quantity : 1 ,
        price: 180.00,
        discount: "20% off",
        image: "../images/product7.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 8,
        name: "Modern Tufted Ottoman",
        quantity : 1 ,
        price: 75.00,
        discount: null,
        image: "../images/product8.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 9,
        name: "Rustic Dining Table",
        quantity : 1 ,
        price: 320.00,
        discount: "10% off",
        image: "../images/product1.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 10,
        name: "Boho Hanging Macrame",
        quantity : 1 ,
        price: 25.00,
        discount: null,
        image: "../images/product2.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
];

document.addEventListener('DOMContentLoaded' , () => {
    let items = ``
    products.forEach( (val , index ) => {
        items +=`
        <div class="card" data-aos="fade-up" data-aos-delay="100">
                <div>
                    <img src="${val.image}" alt="">
                    
                    <div class="icons">
                        <p class="iconEnf">
                            <span> add to cart </span>
                            <i onclick = addToCart(${index}) class="fa-solid fa-cart-flatbed"></i>
                        <p>
                        <p class="iconEnf">
                            <span> quick view </span>
                            <i class="fa-regular fa-eye"></i>
                        </p>
                        <p class="iconEnf">
                            <span> add to wishlist </span>
                            <i class="fa-regular fa-heart"></i>
                        </p>
                    </div>
                </div>
                
                <div class="cardB">
                    <b> ${val.name} </b>
                    <p> ${val.description} </p>
                    <div class="stars">
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <span> USD ${val.price}.00 </span>
                </div>
            </div>`
    })
    setTimeout( function(){
        document.querySelector('.cards').innerHTML = items
    }, 1500)
})
let openCart = document.querySelector('.openCart')
let toUp = document.querySelector('.topScrol');
let iconMenue = document.querySelector('.icon-menu');
let navMenue = document.querySelector('.navMune')
let shadwo = document.querySelector('.shadwo')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('.closeCart')


let cartItems
let x = localStorage.getItem('cartItems')
if( x ){
    cartItems = JSON.parse(x)
}else{
    cartItems = []
}
function addToCart(i){
    let product = products[i]
    let finded = cartItems.find((val , index )=> val.id == product.id)
    if( finded ){
        finded.quantity++
    }else{
        cartItems.push(product)
    }
    console.log( cartItems );
    sucsessAddToCart(product)
    displayProducts()
}


function sucsessAddToCart( pro ){
    let box = document.createElement('div')
        box.className = 'checkedBox'

    let icon = document.createElement('i')
        icon.className = 'fa-regular fa-circle-check'


    let text = document.createElement('p')
        text.innerHTML = `sucsses add product <br> <span>( ${pro.name} )</span>`
    
    let div = document.createElement('div')

        let closeBtn = document.createElement('button')
            closeBtn.innerText = 'CLose'
        let openBtn = document.createElement('button')
            openBtn.innerText = 'Open Cart'


    div.append(closeBtn , openBtn)
    box.append(icon , text , div)
    console.log( box );

    document.body.append(box)
    setTimeout(()=>{
        box.style.transform = 'translate(-50% , -50%) scaleY(1)'
        shadwo.classList.add('open')
    },120)

    const removeBox = function(){
        box.style.transform = 'translate(-50% , -50%) scaleY(0)'
        setTimeout(()=>{
            box.remove()
        } , 200)
        shadwo.classList.remove('open')
    }
    
    closeBtn.addEventListener('click' , () => {
        removeBox()
    })

    openBtn.addEventListener('click' , () => {
        cart.classList.add('open')
        removeBox()
        shadwo.classList.add('open')
    })
    shadwo.addEventListener('click' , () => {
        cart.classList.remove('open')
        removeBox()
        shadwo.classList.remove('open')
    })
}

function displayProducts(){
    let cardInCart = cartItems.map(( val , index )=>
    `
        <div class="item">
                <div class="left">
                <div>
                <img src="${val.image}" alt="">
                </div>
                </div>
                <div class="nameItems">
                    <b> ${val.name} </b>
                    <p> $${val.price}</p>
                </div>
                <div class="right">
                    <i onclick = encriment(${index}) class="fa-solid fa-plus"></i>
                    <span> ${val.quantity} </span>
                    <i onclick = decriment(${index}) class="fa-solid fa-minus"></i>
                    <i onclick = deleteItem(${index}) class="fa-solid fa-trash delete"></i>
                </div>
            </div>
    `
    ).join(' ')
    if( cardInCart.length > 0){
        document.querySelector('.cart .contener').innerHTML = cardInCart
    }else{
        document.querySelector('.cart .contener').innerHTML = '<p >Your Cart IS Empty</p>'
        
    }

    let totall = cartItems.reduce(( a , b)=>{
        return a + b.price
    } , 0)
    document.querySelector('.total').innerHTML = "$ " + totall.toFixed(2)
    let counts = cartItems.reduce(( a , b)=>{
        return a + b.quantity
    } , 0)
    document.querySelector('.amount').innerHTML = counts

    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
    
}
function encriment(i){
    cartItems[i].quantity++
    displayProducts()
    
}
function decriment(i){
    if( cartItems[i].quantity > 1){
        cartItems[i].quantity--
        displayProducts()
    }else{
        deleteItem(i)
    }
}

displayProducts()


window.addEventListener( 'scroll', () => {
    if (this.scrollY >= 700) {
        toUp.style.visibility = 'visible';
        toUp.style.opacity = '1';
        toUp.style.bottom = '30px'
    } else {
        toUp.style.visibility = 'heidden';
        toUp.style.opacity = '0';
        toUp.style.bottom = '100%'
        
    }
})
toUp.addEventListener('click' , function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

iconMenue.addEventListener('click', function() {
    this.classList.toggle('open')
    navMenue.classList.toggle('open')
    shadwo.classList.toggle('open')
})


function deleteItem( i ){
    let x = confirm('Are You sure To Delet That Product !!')
    if( x ){
        const id = cartItems[i].id
        let filterdCart = cartItems.filter( function(val , index){
            return val.id != id
        })
        cartItems = filterdCart
        displayProducts()
    }

}





openCart.addEventListener('click' , function(){
    cart.classList.add('open')
    shadwo.classList.add('open')
})
closeCart.addEventListener('click' , function(){
    cart.classList.remove('open')
    shadwo.classList.remove('open')
})
shadwo.addEventListener('click' , function(){
    navMenue.classList.remove('open')
    shadwo.classList.remove('open')
    iconMenue.classList.remove('open')
    cart.classList.remove('open')
})
// let dark = document.querySelector('.dark')
// let light = document.querySelector('.light')
// dark.addEventListener('click' , function(){
//     document.body.classList.add('dark')
//     document.body.classList.remove('light')
//     dark.style.display = 'none'
//     light.style.display = 'block'
// })
// light.addEventListener('click' , function(){
//     document.body.classList.add('light')
//     document.body.classList.remove('dark')
//     dark.style.display = 'block'
//     light.style.display = 'none'
// })