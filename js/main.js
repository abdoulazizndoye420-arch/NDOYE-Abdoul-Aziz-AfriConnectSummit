// ==============================
// Dark Mode + localStorage
// ==============================
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Charger le thème enregistré
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.innerHTML = "☀️";
} else {
    themeToggle.innerHTML = "🌙";
}

// Changer de thème
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = "🌙";
    }
});


// ==============================
// Navbar dynamique au scroll
// ==============================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }

});


// ==============================
// Bouton Retour en haut
// ==============================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

// Retour en haut
backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});