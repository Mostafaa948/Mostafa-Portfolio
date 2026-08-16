let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");
let themeBtn = document.getElementById("themeBtn");
let scrollTop = document.getElementById("scrollTop");
let year = document.getElementById("year");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

let links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        scrollTop.classList.add("show");
    } else {
        scrollTop.classList.remove("show");
    }
});

scrollTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

year.textContent = new Date().getFullYear();
let sections = document.querySelectorAll("section");
let navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(function (section) {
        let sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");

        }

    });


    navItems.forEach(function (item) {
        item.classList.remove("active-link");

        if (item.getAttribute("href") === "#" + current) {
            item.classList.add("active-link");
        }
    });
});

let cards = document.querySelectorAll(
    ".experience-card, .project-card, .learning-card, .timeline-content"
);

let observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },

    {
        threshold: 0.15
    }
);

cards.forEach(function (card) {
    observer.observe(card);
});