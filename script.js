const products = [
    {
        name: "Americano",
        price: "Rp18.000,00",
        image: "assets/coffee-americano.png",
    },
    {
        name: "Cappuccino",
        price: "Rp22.000,00",
        image: "assets/coffee-americano.png",
    },
    {
        name: "Espresso",
        price: "Rp15.000,00",
        image: "assets/coffee-americano.png",
    },
    {
        name: "Cafe Latte",
        price: "Rp20.000,00",
        image: "assets/coffee-americano.png",
    },
];

window.addEventListener("scroll", () => {
    const verticalScrollPx = window.scrollY;
    const navbar = document.querySelector(".header-container");
    const hero = document.querySelector(".hero");
    const heroImage = document.querySelector(".hero-image");

    if (verticalScrollPx < 100) {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
    } else {
        navbar.style.backgroundColor = "#dbc1ac";
        navbar.style.boxShadow = " 0px 3px 30px 0px rgba(0,0,0,0.25)";
    }

    if (verticalScrollPx < 400) {
        heroImage.style.setProperty("--bg1Width", "5vw");
        heroImage.style.setProperty("--bg2Width", "30vw");
        heroImage.style.setProperty("--bg1Color", "#967259");
    } else {
        heroImage.style.setProperty("--bg1Color", "#ece1d1");
        heroImage.style.setProperty("--bg1Width", "100vw");
        heroImage.style.setProperty("--bg2Width", "100vw");
    }

    hero.style.opacity = 1 - verticalScrollPx / 1000;
});

const productList = document.querySelector(".product-list");

products.map((product) => {
    console.log("test");
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const aside = document.createElement("aside");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    aside.appendChild(img);

    const productDetail = document.createElement("div");
    productDetail.classList.add("product-detail");

    const firstDiv = document.createElement("div");

    const h3 = document.createElement("h3");
    h3.textContent = product.name;

    const p = document.createElement("p");
    p.textContent = product.price;

    firstDiv.appendChild(h3);
    firstDiv.appendChild(p);

    const button = document.createElement("button");
    button.classList.add("button-primary");
    button.textContent = "Order";

    productDetail.appendChild(firstDiv);
    productDetail.appendChild(button);

    productCard.appendChild(aside);
    productCard.appendChild(productDetail);

    productList.appendChild(productCard);
});
