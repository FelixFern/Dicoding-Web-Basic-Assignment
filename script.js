window.addEventListener("scroll", () => {
    const verticalScrollPx = window.scrollY;
    const navbar = document.getElementById("header");
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
