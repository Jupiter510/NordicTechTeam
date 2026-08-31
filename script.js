/* ========================================
   DATUM
======================================== */

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


const currentDate = document.getElementById("currentDate");

if (currentDate) {
    currentDate.textContent = getSwedishDate();
}


/* ========================================
   MOBILMENY
======================================== */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("mainNavigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        navigation.classList.toggle("open");

        const isOpen =
            navigation.classList.contains("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Stäng mobilmenyn när en länk väljs */

    document
        .querySelectorAll(".navigation a")
        .forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

}


/* ========================================
   POPUP – OM NORDICTECHTEAM
======================================== */

const openAbout =
    document.getElementById("openAbout");

const openAboutButton =
    document.getElementById("openAboutButton");

const closeAbout =
    document.getElementById("closeAbout");

const aboutModal =
    document.getElementById("aboutModal");


function showAbout(event) {

    if (event) {
        event.preventDefault();
    }

    if (aboutModal) {
        aboutModal.classList.add("show");
    }

}


function hideAbout() {

    if (aboutModal) {
        aboutModal.classList.remove("show");
    }

}


if (openAbout) {
    openAbout.addEventListener(
        "click",
        showAbout
    );
}


if (openAboutButton) {
    openAboutButton.addEventListener(
        "click",
        showAbout
    );
}


if (closeAbout) {
    closeAbout.addEventListener(
        "click",
        hideAbout
    );
}


if (aboutModal) {

    aboutModal.addEventListener(
        "click",
        function (event) {

            if (event.target === aboutModal) {
                hideAbout();
            }

        }
    );

}


/* ========================================
   POPUP – VÅR IDÉ
======================================== */

const openIdea =
    document.getElementById("openIdea");

const closeIdea =
    document.getElementById("closeIdea");

const ideaModal =
    document.getElementById("ideaModal");


function showIdea(event) {

    if (event) {
        event.preventDefault();
    }

    if (ideaModal) {
        ideaModal.classList.add("show");
    }

}


function hideIdea() {

    if (ideaModal) {
        ideaModal.classList.remove("show");
    }

}


if (openIdea) {
    openIdea.addEventListener(
        "click",
        showIdea
    );
}


if (closeIdea) {
    closeIdea.addEventListener(
        "click",
        hideIdea
    );
}


if (ideaModal) {

    ideaModal.addEventListener(
        "click",
        function (event) {

            if (event.target === ideaModal) {
                hideIdea();
            }

        }
    );

}


/* ========================================
   ESC STÄNGER POPUP
======================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            hideAbout();
            hideIdea();

        }

    }
);

/* ========================================
   DROPDOWN-MENYER PÅ MOBIL
======================================== */

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function (dropdown) {
    const button = dropdown.querySelector(".nav-link");
    const menu = dropdown.querySelector(".dropdown-menu");

    if (!button || !menu) {
        return;
    }

    button.addEventListener("click", function (event) {

        if (window.innerWidth > 1000) {
            return;
        }

        event.preventDefault();

        const isOpen = dropdown.classList.contains("mobile-open");

        dropdowns.forEach(function (otherDropdown) {
            otherDropdown.classList.remove("mobile-open");
        });

        if (!isOpen) {
            dropdown.classList.add("mobile-open");
        }

    });
});


/* ========================================
   PRODUKT-UNDERMENYER PÅ MOBIL
======================================== */

const submenus = document.querySelectorAll(".submenu");

submenus.forEach(function (submenu) {
    const button = submenu.querySelector(".submenu-button");

    if (!button) {
        return;
    }

    button.addEventListener("click", function (event) {

        if (window.innerWidth > 1000) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        submenu.classList.toggle("mobile-open");

    });
});