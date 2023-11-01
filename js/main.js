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