let
    nextBtn = document.querySelector("#Home .next"),
    prevBtn = document.querySelector("#Home .prev"),

    indicators = document.querySelectorAll(".indicators span"),

    navBar = document.querySelector(".nav-bar"),
    navPopup = document.querySelector(".nav-popup"),
    lastScrollY = window.scrollY,
    navLinks = navBar.querySelectorAll("li a"),
    navPopupLinks = navPopup.querySelectorAll(".nav-popup-ele li a"),

    popupEle = document.querySelectorAll(".popupEle"),

    breakFastContainer = document.querySelector(".break-fast"),
    lunchContainer = document.querySelector(".lunch"),
    dinnerContainer = document.querySelector(".dinner"),
    drinksContainer = document.querySelector(".drinks"),

    menuButtons = document.querySelectorAll("#Menu .buttons button"),
    navbarLinksArr = document.querySelectorAll(".nav-bar .links ul li"),
    navbarPopupLinksArr = document.querySelectorAll(".nav-popup .links ul li");

window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }

    if (window.scrollY > lastScrollY) {
        navBar.classList.add("up");
    } else if (window.scrollY < lastScrollY) {
        navBar.classList.remove("up");
    }
    lastScrollY = window.scrollY;
});

nextBtn.addEventListener("click", function () {
    let currentCarousal = document.querySelector(".carousel-content.active"),
        nextCarousal = currentCarousal.nextElementSibling ?? document.querySelector(".carousel-body").firstElementChild,
        activeIndicator = document.querySelector(`.indicators span.active`),
        nextCarousalIndex = nextCarousal.getAttribute("data-page-number");

    currentCarousal.classList.remove("active");
    nextCarousal.classList.add("active");


    indicators.forEach(function (indicator) {
        if (indicator.getAttribute("data-target") == nextCarousalIndex) {
            activeIndicator.classList.remove("active");
            indicator.classList.add("active");
        }
    });

    cameraSound();
});

prevBtn.addEventListener("click", function () {
    let currentCarousal = document.querySelector(".carousel-content.active"),
        prevCarousal = currentCarousal.previousElementSibling ?? document.querySelector(".carousel-body").lastElementChild,
        activeIndicator = document.querySelector(`.indicators span.active`),
        prevCarousalIndex = prevCarousal.getAttribute("data-page-number");

    currentCarousal.classList.remove("active");
    prevCarousal.classList.add("active");

    indicators.forEach(function (indicator) {
        if (indicator.getAttribute("data-target") == prevCarousalIndex) {
            activeIndicator.classList.remove("active");
            indicator.classList.add("active");
        }
    });

    cameraSound();
});

for (let i = 1; i <= indicators.length; i++) {
    let indicatorTarget = document.querySelector(`span[data-target="${i}"]`),
        target = document.querySelector(`.carousel-content[data-page-number="${i}"]`);

    indicatorTarget.addEventListener("click", function () {
        let
            currentCarousal = document.querySelector(".carousel-content.active"),
            activeIndicator = document.querySelector(`.indicators span.active`);

        currentCarousal.classList.remove("active");
        activeIndicator.classList.remove("active");

        target.classList.add("active");
        indicatorTarget.classList.add("active");
        cameraSound();

    });
}

popupEle.forEach(function (element) {
    element.addEventListener("click", function (e) {
        e.stopPropagation();
    });
});

breakFastContainer.innerHTML = "";
lunchContainer.innerHTML = "";
dinnerContainer.innerHTML = "";
drinksContainer.innerHTML = "";

BreakFast.forEach(function (menuItem) {
    breakFastContainer.innerHTML += `
        <div class="item col-11 col-sm-9 col-md-6 col-lg-6 mx-auto row" data-id="${menuItem.id}">
            <div class="frame col-5 col-lg-3">
                <div class="image">
                    <img src="./images/${menuItem.images}" alt="BreakFast">
                    <div class="layout">
                        <i class="fa-regular fa-square-plus" onclick="productPopup(this)"></i>
                    </div>
                </div>
            </div>
            <div class="text col-7 col-lg-9">
                <div class="header flex-column flex-sm-row">
                    <h5 class="main-color mb-0">${menuItem.name}</h5>
                    <span class="d-none d-sm-block my-auto"></span>
                    <h5 class="main-color mb-0">$${menuItem.price}</h5>
                </div>
                <div class="body">
                    <p>${menuItem.miniDescription}</p>
                </div>
            </div>
        </div>
    `
});
Lunch.forEach(function (menuItem) {
    lunchContainer.innerHTML += `
        <div class="item col-11 col-sm-9 col-md-6 col-lg-6 mx-auto row" data-id="${menuItem.id}">
            <div class="frame col-5 col-lg-3">
                <div class="image">
                    <img src="./images/${menuItem.images}" alt="BreakFast">
                    <div class="layout">
                        <i class="fa-regular fa-square-plus" onclick="productPopup(this)"></i>
                    </div>
                </div>
            </div>
            <div class="text col-7 col-lg-9">
                <div class="header flex-column flex-sm-row">
                    <h5 class="main-color mb-0">${menuItem.name}</h5>
                    <span class="d-none d-sm-block my-auto"></span>
                    <h5 class="main-color mb-0">$${menuItem.price}</h5>
                </div>
                <div class="body">
                    <p>${menuItem.miniDescription}</p>
                </div>
            </div>
        </div>
    `
});
Dinner.forEach(function (menuItem) {
    dinnerContainer.innerHTML += `
        <div class="item col-11 col-sm-9 col-md-6 col-lg-6 mx-auto row" data-id="${menuItem.id}">
            <div class="frame col-5 col-lg-3">
                <div class="image">
                    <img src="./images/${menuItem.images}" alt="BreakFast">
                    <div class="layout">
                        <i class="fa-regular fa-square-plus" onclick="productPopup(this)"></i>
                    </div>
                </div>
            </div>
            <div class="text col-7 col-lg-9">
                <div class="header flex-column flex-sm-row">
                    <h5 class="main-color mb-0">${menuItem.name}</h5>
                    <span class="d-none d-sm-block my-auto"></span>
                    <h5 class="main-color mb-0">$${menuItem.price}</h5>
                </div>
                <div class="body">
                    <p>${menuItem.miniDescription}</p>
                </div>
            </div>
        </div>
    `
});
Drinks.forEach(function (menuItem) {
    drinksContainer.innerHTML += `
        <div class="item col-11 col-sm-9 col-md-6 col-lg-6 mx-auto row" data-id="${menuItem.id}">
            <div class="frame col-5 col-lg-3">
                <div class="image">
                    <img src="./images/${menuItem.images}" alt="BreakFast">
                    <div class="layout">
                        <i class="fa-regular fa-square-plus" onclick="productPopup(this)"></i>
                    </div>
                </div>
            </div>
            <div class="text col-7 col-lg-9">
                <div class="header flex-column flex-sm-row">
                    <h5 class="main-color mb-0">${menuItem.name}</h5>
                    <span class="d-none d-sm-block my-auto"></span>
                    <h5 class="main-color mb-0">$${menuItem.price}</h5>
                </div>
                <div class="body">
                    <p>${menuItem.miniDescription}</p>
                </div>
            </div>
        </div>
    `
});

menuButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let currentButton = document.querySelector("#Menu .buttons button.active"),
            currentEle = document.querySelector(`.main-menu.active`),
            targetEleId = button.getAttribute("data-target"),

            targetEle = document.querySelector(`.main-menu[id='${targetEleId}']`);

        if (currentEle != targetEle) {
            currentEle?.classList.remove("show");
            currentEle.classList.remove("active");
            targetEle.classList.add("active");
            setTimeout(function () {
                targetEle.classList.add("show");
            }, 200);
        }

        currentButton.classList.remove("active");
        button.classList.add("active");
    });
});

updateActive(navbarLinksArr);
updateActive(navbarPopupLinksArr);

window.addEventListener("scroll", function () {
    updateActiveLinks(navLinks, navBar);
    updateActiveLinks(navPopupLinks, navPopup);
});

let loading = document.querySelector(".loading"),
    secondText = loading.querySelector(".second");

let letters = secondText.textContent.split("");

secondText.innerHTML = "";

letters.forEach((letter, index) => {
    let span = document.createElement("span");

    span.textContent = letter;
    span.style.setProperty("--i", index);

    secondText.append(span);
});

window.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        loading.classList.add("hide");
        setTimeout(function () {
            loading.classList.add("d-none");
        }, 500);
    }, 1000)
});
