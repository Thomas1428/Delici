function openPopup(popupName) {
    let popupEle = document.querySelector(`[data-popup-name="${popupName}"]`)
    popupEle.classList.add("active");
    setTimeout(() => {
        popupEle.classList.add("show");
    }, 1);
};

function closePopup(popupName) {
    let popupEle = document.querySelector(`[data-popup-name="${popupName}"]`)
    popupEle.classList.remove("show");
    setTimeout(() => {
        popupEle.classList.remove("active");
    }, 500);
};

function updateActive(linksArr) {
    linksArr.forEach(function (link) {
        link.addEventListener("click", function () {
            let currentLink = link.parentElement.querySelector(".active");
            console.log(link)
            currentLink.classList.remove("active");
            link.classList.add("active");
        })
    });
}

function updateActiveLinks(links, parent) {
    links.forEach(function (link) {
        let currentId = link.getAttribute("href"),
            currentSection = document.querySelector(currentId);

        if (!currentSection) return;

        let sectionTop = currentSection.offsetTop,
            sectionBottom = sectionTop + currentSection.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            parent.querySelector(".links li.active")?.classList.remove("active");
            link.parentElement.classList.add("active");
        }
    });
}

function getProduct(productId) {
    return allMenu.filter((product) => product.id == productId)[0];
}
function productPopup(that) {
    let popupEle = document.querySelector(".product-popup .product-ele"),
        productId = that.closest(".item").getAttribute("data-id"),
        product = getProduct(productId);

    popupEle.innerHTML = `
        <i class="fa-regular fa-circle-xmark cancel text-white" onclick="closePopup('productPopup')"></i>
        <div class="title text-center">
            <h4>SPECIAL SELECTION</h4>
            <img src="./images/separator.svg" alt="separator">
            <h2 class="display-6 my-3">${product.name}</h2>
        </div>

        <div class="item" data-id="${product.id}">
            <div class="content">
                <img src="./images/${product.images}" class="img-fluid" alt="product">

                <button class="next active text-light" onclick="nextProduct(this)" ><i class="fa-solid fa-angle-right"></i></button>
                <button class="prev active text-light" onclick="prevProduct(this)" ><i class="fa-solid fa-angle-left"></i></button>

                <p class="mb-0">$${product.price.toFixed(2)}</p>
            </div>
            <div class="description">
                <p class="m-0">${product.description}</p>
            </div>
        </div>
    `

    openPopup('productPopup');
}

function nextProduct(that) {
    let
        popupEle = document.querySelector(".product-popup .product-ele"),
        item = that.closest(".item"),
        productId = Number(item.getAttribute("data-id")),
        nextId = productId + 1;

    if (nextId > allMenu.length) {
        nextId = 1;
    }

    let product = getProduct(nextId);

    popupEle.innerHTML = `
        <i class="fa-regular fa-circle-xmark cancel text-white" onclick="closePopup('productPopup')"></i>

        <div class="title text-center">
            <h4>SPECIAL SELECTION</h4>
            <img src="./images/separator.svg" alt="separator">
            <h2 class="display-6 my-3">${product.name}</h2>
        </div>

        <div class="item" data-id="${product.id}">
            <div class="content">
                <img src="./images/${product.images}" class="img-fluid" alt="product">

                <button class="next active text-light" onclick="nextProduct(this)">
                    <i class="fa-solid fa-angle-right"></i>
                </button>

                <button class="prev active text-light" onclick="prevProduct(this)">
                    <i class="fa-solid fa-angle-left"></i>
                </button>

                <p class="mb-0">$${product.price.toFixed(2)}</p>
            </div>

            <div class="description">
                <p class="m-0">${product.description}</p>
            </div>
        </div>
    `;
}

function prevProduct(that) {
    let
        popupEle = document.querySelector(".product-popup .product-ele"),
        item = that.closest(".item"),
        productId = Number(item.getAttribute("data-id")),
        prevId = productId - 1;

    if (prevId == 0) {
        prevId = allMenu.length;
    }

    let product = getProduct(prevId);

    popupEle.innerHTML = `
        <i class="fa-regular fa-circle-xmark cancel text-white" onclick="closePopup('productPopup')"></i>

        <div class="title text-center">
            <h4>SPECIAL SELECTION</h4>
            <img src="./images/separator.svg" alt="separator">
            <h2 class="display-6 my-3">${product.name}</h2>
        </div>

        <div class="item" data-id="${product.id}">
            <div class="content">
                <img src="./images/${product.images}" class="img-fluid" alt="product">

                <button class="next active text-light" onclick="nextProduct(this)">
                    <i class="fa-solid fa-angle-right"></i>
                </button>

                <button class="prev active text-light" onclick="prevProduct(this)">
                    <i class="fa-solid fa-angle-left"></i>
                </button>

                <p class="mb-0">$${product.price.toFixed(2)}</p>
            </div>

            <div class="description">
                <p class="m-0">${product.description}</p>
            </div>
        </div>
    `;
}
