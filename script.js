function getSwedishDate() {

    const today = new Date();

    const weekdays = [
        "Söndagen",
        "Måndagen",
        "Tisdagen",
        "Onsdagen",
        "Torsdagen",
        "Fredagen",
        "Lördagen"
    ];

    const months = [
        "januari",
        "februari",
        "mars",
        "april",
        "maj",
        "juni",
        "juli",
        "augusti",
        "september",
        "oktober",
        "november",
        "december"
    ];

    const weekday = weekdays[today.getDay()];
    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    return `${weekday} den ${day} ${month} ${year}`;
}


document.getElementById("currentDate").textContent =
    getSwedishDate();


const menuToggle =
    document.getElementById("menuToggle");

const navigation =
    document.getElementById("mainNavigation");


menuToggle.addEventListener("click", () => {

    navigation.classList.toggle("open");

});


document
    .querySelectorAll(".navigation a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

        });

    });

    const openAbout = document.getElementById("openAbout");
const closeAbout = document.getElementById("closeAbout");
const aboutModal = document.getElementById("aboutModal");

openAbout.addEventListener("click", function (event) {
    event.preventDefault();
    aboutModal.classList.add("show");
});

closeAbout.addEventListener("click", function () {
    aboutModal.classList.remove("show");
});

aboutModal.addEventListener("click", function (event) {
    if (event.target === aboutModal) {
        aboutModal.classList.remove("show");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        aboutModal.classList.remove("show");
    }
});

const openIdea = document.getElementById("openIdea");
const closeIdea = document.getElementById("closeIdea");
const ideaModal = document.getElementById("ideaModal");

openIdea.addEventListener("click", function (event) {
    event.preventDefault();
    ideaModal.classList.add("show");
});

closeIdea.addEventListener("click", function () {
    ideaModal.classList.remove("show");
});

ideaModal.addEventListener("click", function (event) {
    if (event.target === ideaModal) {
        ideaModal.classList.remove("show");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        ideaModal.classList.remove("show");
    }
});