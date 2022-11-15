const home = document.querySelector('.home-page1');
const seeAllPage = document.querySelector('.home-page2');
const nikePage = document.querySelector('.home-page3');
const seeAll = document.querySelector('.see');
const backToHome = document.querySelector('.backHome');
const nikeLogo = document.querySelector('.nike-logo');
const backFromPages = document.querySelector('.back-to-home');
const mainPage = document.querySelector('.main-page');
const cart = document.querySelector('.cart-btn');
const row1 = document.querySelector('.brand-row');
const orders = document.querySelector('.orders-btn');
const brandPagaTitle = document.querySelector('.brand-page-title');
const allBtn = document.querySelector('.all-btn');
const nikeBtn = document.querySelector('.nike-btn');
const adidasBtn = document.querySelector('.adidas-btn');
const pumaBtn = document.querySelector('.puma-btn');
const asicsBtn = document.querySelector('.asics-btn');
const reebokBtn = document.querySelector('.reebok-btn');
const newBalanceBtn = document.querySelector('.nb-btn');
const converseBtn = document.querySelector('.converse-btn');
const sectionAll = document.querySelector('.all-section');
const popularPage = document.querySelector('.popular-page');
const mostPop = document.querySelector('.most-pop');
const mostAllBtn = document.querySelector('.all-btn-most');

seeAll.addEventListener('click', function () {
    home.style.display = 'none';
    seeAllPage.style.display = 'block';
});

backToHome.addEventListener('click', function () {
    home.style.display = 'block';
    seeAllPage.style.display = 'none';
});

backFromPages.addEventListener('click', function () {
    home.style.display = 'block';
    nikePage.style.display = 'none';
});

cart.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/myCart/index.html";
    }, 500);
});

orders.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/myOrders/index.html";
    }, 500);
});

function brandClicked() {
    allBtn.classList.remove('btn-dark');
    allBtn.classList.add('btn-outline-dark');
};

function mostBrandClicked() {
    mostAllBtn.classList.remove('btn-dark');
    mostAllBtn.classList.add('btn-outline-dark');
}
nikeLogo.addEventListener('click', function () {
    home.style.display = 'none';
});

const getBrandProducts = async function (brand) {
    let start = 0;
    row1.innerHTML = '';
    const req = await fetch(`http://localhost:3000/${brand}`);
    const data = await req.json();

    brandPagaTitle.innerHTML = `${brand}`;
    home.style.display = 'none';
    nikePage.style.display = 'block';
    while (start < data.length) {
        for (let i = start; i < start + 2; i++) {
            const col = document.createElement("div");
            row1.classList.add("brand-section");
            col.setAttribute("onclick", `goToProductPage(${data[i].id},'${brand}')`);

            col.classList.add("card", "border-0", "product-card");

            const img = document.createElement("img");
            img.classList.add("card-img-top", "rounded", "prod-img");
            img.setAttribute("src", `${data[i].image}`);
            img.setAttribute("alt", "Card image cap");
            col.appendChild(img);

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            col.appendChild(cardBody);

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title", "fw-bold", "prod-title", "cart-name");
            cardTitle.innerHTML = data[i].name;
            cardBody.appendChild(cardTitle);

            const cardText = document.createElement("span");
            cardText.classList.add("card-text", "fw-semibold", "prod-price");
            cardText.innerHTML = `$${data[i].price}.00`;
            cardBody.appendChild(cardText);

            row1.appendChild(col);
        }
        start += 2
    }
};

let saveId = [];

const homeBrands = async function (brand) {
    let start = 0;
    sectionAll.innerHTML = '';
    const req = await fetch(`http://localhost:3000/${brand}`);
    const data = await req.json();

    brandPagaTitle.innerHTML = `${brand}`;
    while (start < data.length) {
        for (let i = start; i < start + 2; i++) {
            const col = document.createElement("div");
            col.setAttribute("onclick", `goToProductPage(${data[i].id},'${brand}')`);

            sectionAll.classList.add("brand-section", "bottom-page");
            col.classList.add("card", "border-0", "product-card");

            const img = document.createElement("img");
            img.classList.add("card-img-top", "rounded", "prod-img");
            img.setAttribute("src", `${data[i].image}`);
            img.setAttribute("alt", "Card image cap");
            col.appendChild(img);

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            col.appendChild(cardBody);

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title", "fw-bold", "prod-title", "cart-name");
            cardTitle.innerHTML = data[i].name;
            cardBody.appendChild(cardTitle);

            const cardText = document.createElement("span");
            cardText.classList.add("card-text", "fw-semibold", "prod-price");
            cardText.innerHTML = `$${data[i].price}.00`;
            cardBody.appendChild(cardText);

            sectionAll.appendChild(col);
        }
        start += 2
    }
};
homeBrands('all');
const popularPageBrands = async function (brand) {
    let start = 0;
    popularPage.innerHTML = '';
    const req = await fetch(`http://localhost:3000/${brand}`);
    const data = await req.json();

    mostPop.innerHTML = `${brand}`;
    while (start < data.length) {
        for (let i = start; i < start + 2; i++) {
            const col = document.createElement("div");
            col.setAttribute("onclick", `goToProductPage(${data[i].id},'${brand}')`);

            popularPage.classList.add("brand-section");
            col.classList.add("card", "border-0", "product-card", "mt-0");

            const img = document.createElement("img");
            img.classList.add("card-img-top", "rounded", "prod-img");
            img.setAttribute("src", `${data[i].image}`);
            img.setAttribute("alt", "Card image cap");
            col.appendChild(img);

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            col.appendChild(cardBody);

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title", "fw-bold", "prod-title", "cart-name");
            cardTitle.innerHTML = data[i].name;
            cardBody.appendChild(cardTitle);

            const cardText = document.createElement("span");
            cardText.classList.add("card-text", "fw-semibold", "prod-price");
            cardText.innerHTML = `$${data[i].price}.00`;
            cardBody.appendChild(cardText);

            popularPage.appendChild(col);
        }
        start += 2
    }
};
popularPageBrands('all');
function goToProductPage(id, brand) {
    setTimeout(() => {
        window.location.href = `/product/index.html?brand=${brand}&id=${id}`;
    }, 500);
}