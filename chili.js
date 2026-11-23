const foodItems = [
    {
        name: "Brownie",
        price: 250,
        image: "images/brownie.jpg"
    },
    {
        name: "Chicken Burger",
        price: 450,
        image: "images/burger.jpg"
    },
    {
        name: "Tikka Pizza",
        price: 600,
        image: "images/tikkapizza.jpg"
    },
    {
        name: "Red Velvet Cake",
        price: 300,
        image: "images/redcake.jpg"
    },
    {
        name: "Shwarma",
        price: 350,
        image: "images/shwarma.jpg"
    },
    {
        name: "Chicken Chow Mein",
        price: 500,
        image: "images/chowmein.jpg"
    },
    {
        name: "Cheese Pizza",
        price: 550,
        image: "images/cheese.jpg"
    },
    {
        name: "Coffee Drink",
        price: 150,
        image: "images/coffedrink.jpg"
    }
];

let cartOverlay = document.querySelector(".cart-overlay");
let floatingCart = document.querySelector(".floating-cart");
let cartPanel = document.querySelector(".cart-panel");
let addBtn = document.querySelectorAll(".add-cart-btn");
let cartItem = document.querySelector(".cart-items");
let cartItemDetails = document.querySelector(".cart-item-details");
let totalPrice = document.querySelector(".total-price");
let whatsappBtn = document.querySelector(".whatsapp-order-btn");
let cartCount = document.querySelector(".cart-count");    
let cartClose = document.querySelector(".cart-close"); 


floatingCart.addEventListener("click", () => {
    cartPanel.classList.toggle("active");
    cartOverlay.classList.toggle("active");
}); 


let cartItems = [];
addBtn.forEach((button, index) => {
    button.addEventListener("click", () => {
        let item = foodItems[index];
        cartItems.push(item);
        cartCount.textContent = cartItems.length;
    cartItem.innerHTML += `<div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
        </div>
    </div>`;
    
    totalPrice.innerHTML = `$${cartItems.reduce((total, item) => total + item.price, 0)}`;
    });
});

whatsappBtn.addEventListener("click", () => {

    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello! I would like to place an order:\n\n";

    cartItems.forEach((item) => {
        message += `${item.name} - Rs ${item.price}\n`;
    });

    let total = cartItems.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    message += `\nTotal Products: ${cartItems.length}`;
    message += `\nGrand Total: Rs ${total}`;

    let phoneNumber = "03012271763";

   let whatsappURL = `https://wa.me/03012271763?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});


cartClose .addEventListener("click", () => {
    cartPanel.classList.remove("active");
    cartOverlay.classList.remove("active");
});