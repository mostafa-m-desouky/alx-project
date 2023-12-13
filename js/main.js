function toggleResetBtn () {
    let resetBtn = document.querySelector("#reset");
    resetBtn.classList.toggle("active");
}

function switchBanner(name) {
    const banner = document.querySelector("#banner");
    if (!banner.classList.contains(name)) {
        banner.className = "banner";
        banner.classList.add(name);
        toggleResetBtn();
    }
    return;
}

function restBanner () {
    const banner = document.querySelector("#banner");
    banner.className = "banner"
    toggleResetBtn();
}

function listSwitch () {
    document.querySelectorAll(".product-filters ul li").forEach((li) => {
        li.addEventListener("click", removeActive);
        li.addEventListener("click", mangeProducts);
    })
}
function removeActive() {
    document.querySelectorAll(".product-filters ul li").forEach((li) => {
       li.classList.remove("active");
       this .classList.add("active");
    })
}
function mangeProducts () {
    let products = Array.from(document.querySelectorAll(".product-item"));
    products.forEach((product) => {
        product.style.display = 'none';
    })
    document.querySelectorAll(this.dataset.filter).forEach((el) => {
        el.style.display = "block";
    })
}

function scroll() {
    const header = document.querySelector("header");
    const backToTop = document.querySelector("#btn-back");
    if (header) {
       const headerScrolled = () => {
            if (window.scrollY > 550) {
                header.classList.add("header-scrolled");
                backToTop.classList.add("active");
            }else {
                header.classList.remove("header-scrolled");
                backToTop.classList.remove("active");
            }
        }
        window.addEventListener("load", headerScrolled);
        window.addEventListener("scroll", headerScrolled);
    }
}
scroll();

function scrollToTop() {
    window.scrollTo(0, 0);
}

function changeColor () {
    document.querySelectorAll(".switch-btn").forEach((a) => {
        a.addEventListener("click", () => {
            if (document.querySelector("#banner").classList.contains("left")) {
                document.querySelector(".number").style.backgroundColor = "#ffff"
            }else {
                document.querySelector(".number").style.backgroundColor = "#ff0051"
            }
        })
    })
}
changeColor();

function toggleMenu () {
    document.querySelector("#menu").classList.toggle("active");
    document.querySelector("#nav-mobile").classList.toggle("active");
    document.querySelectorAll("#nav-mobile ul li").forEach((li) => {
        li.addEventListener("click", () =>{
            document.querySelector("#menu").classList.remove("active");
            document.querySelector("#nav-mobile").classList.toggle("active");
        })
    })
}

// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 20.00 },
    { id: 2, name: 'Product 2', price: 30.00 },
    // add more products as needed
];

let cart = [];

function openCart() {
    document.getElementById('cart-modal').style.display = 'block';
    updateCartUI();
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartUI();
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartCount.innerText = cart.length;
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.innerText = total.toFixed(2);
}

function checkout() {
    // Implement your checkout logic here
    alert('Checkout not implemented in MVP. This is just a demo.');
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    const cartModal = document.getElementById('cart-modal');
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
}
