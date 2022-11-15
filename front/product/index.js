const slider1 = document.querySelector('.slider1');
const slider2 = document.querySelector('.slider2');
const slider3 = document.querySelector('.slider3');
const slide1Back = document.querySelector('.slide1Back');
const slide2Back = document.querySelector('.slide2Back');
const slide3Back = document.querySelector('.slide3Back');
const moreDescription = document.querySelector('.more-description');
const viewMore = document.querySelector('.view-more');
const shortDescription = document.querySelector('.short-description');
const primaryBtn = document.querySelector('.primary-btn');
const lightBtn = document.querySelector('.light-btn');
const darkBtn = document.querySelector('.dark-btn');
const successBtn = document.querySelector('.success-btn');
const dangerBtn = document.querySelector('.danger-btn');
const secondaryBtn = document.querySelector('.secondary-btn');
const warningBtn = document.querySelector('.warning-btn');
const shoeNum = document.querySelector('.shoe-num');
const low = document.querySelector('.low');
const add = document.querySelector('.add');
const totalPrice = document.querySelector('.total-price');
const size40 = document.querySelector('.size-40');
const size41 = document.querySelector('.size-41');
const size42 = document.querySelector('.size-42');
const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const image3 = document.querySelector('.image3');
const brandNameP = document.querySelector('.brand-name-p');

function toSlide1() {
    slider1.style.display = 'block';
    slider2.style.display = 'none';
    slider3.style.display = 'none';
}

function toSlide2() {
    slider1.style.display = 'none';
    slider2.style.display = 'block';
    slider3.style.display = 'none';
}

function toSlide3() {
    slider1.style.display = 'none';
    slider2.style.display = 'none';
    slider3.style.display = 'block';
}

document.getElementById('slide1-next-slide2').addEventListener('click', toSlide2);
document.getElementById('slide1-next-slide3').addEventListener('click', toSlide3);
document.getElementById('slide2-next-slide1').addEventListener('click', toSlide1);
document.getElementById('slide2-next-slide3').addEventListener('click', toSlide3);
document.getElementById('slide3-next-slide1').addEventListener('click', toSlide1);
document.getElementById('slide3-next-slide2').addEventListener('click', toSlide2);

slide1Back.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/home/home.html";
    }, 1000);
});

slide2Back.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/home/home.html";
    }, 1000);
});

slide3Back.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/home/home.html";
    }, 1000);
});

viewMore.addEventListener('click', function () {
    viewMore.style.display = 'none';
    moreDescription.style.display = 'block';
    shortDescription.style.display = 'block';
});

shortDescription.addEventListener('click', function () {
    viewMore.style.display = 'block';
    moreDescription.style.display = 'none';
    shortDescription.style.display = 'none';
});

primaryBtn.addEventListener('click', function () {
    primaryBtn.innerHTML = `<img src="/Assets/icons8-done-18.png"
        alt="done" class="done-img">`;
    lightBtn.innerHTML = "40";
    dangerBtn.innerHTML = "40";
    darkBtn.innerHTML = "40";
    warningBtn.innerHTML = "40";
    secondaryBtn.innerHTML = "40";
    successBtn.innerHTML = "40";
});

lightBtn.addEventListener('click', function () {
    lightBtn.innerHTML = `<img src="/Assets/icons8-done-18.png"
        alt="done" class="done-img">`;
    primaryBtn.innerHTML = "40";
    dangerBtn.innerHTML = "40";
    darkBtn.innerHTML = "40";
    warningBtn.innerHTML = "40";
    secondaryBtn.innerHTML = "40";
    successBtn.innerHTML = "40";
});

dangerBtn.addEventListener('click', function () {
    dangerBtn.innerHTML = `<img src="/Assets/icons8-done-18.png"
        alt="done" class="done-img">`;
    lightBtn.innerHTML = "40";
    primaryBtn.innerHTML = "40";
    darkBtn.innerHTML = "40";
    warningBtn.innerHTML = "40";
    secondaryBtn.innerHTML = "40";
    successBtn.innerHTML = "40";
});

darkBtn.addEventListener('click', function () {
    darkBtn.innerHTML = `<img src="/Assets/icons8-done-18.png"
        alt="done" class="done-img">`;
    lightBtn.innerHTML = "40";
    dangerBtn.innerHTML = "40";
    primaryBtn.innerHTML = "40";
    warningBtn.innerHTML = "40";
    secondaryBtn.innerHTML = "40";
    successBtn.innerHTML = "40";
});

warningBtn.addEventListener('click', function () {
    warningBtn.innerHTML = `<img src="/Assets/icons8-done-18.png"
        alt="done" class="done-img">`;
    lightBtn.innerHTML = "40";
    dangerBtn.innerHTML = "40";
    darkBtn.innerHTML = "40";
    primaryBtn.innerHTML = "40";
    secondaryBtn.innerHTML = "40";
    successBtn.innerHTML = "40";
});

secondaryBtn.addEventListener('click', function () {
    secondaryBtn.innerHTML = `<img src="/Assets/icons8-done-18.png"
        alt="done" class="done-img">`;
    lightBtn.innerHTML = "40";
    dangerBtn.innerHTML = "40";
    darkBtn.innerHTML = "40";
    warningBtn.innerHTML = "40";
    primaryBtn.innerHTML = "40";
    successBtn.innerHTML = "40";
});

successBtn.addEventListener('click', function () {
    successBtn.innerHTML = `<img src="/Assets/icons8-done-18.png"
        alt="done" class="done-img">`;
    lightBtn.innerHTML = "40";
    dangerBtn.innerHTML = "40";
    darkBtn.innerHTML = "40";
    warningBtn.innerHTML = "40";
    secondaryBtn.innerHTML = "40";
    primaryBtn.innerHTML = "40";
});

size40.addEventListener('click', function () {
    size40.classList.add('btn-dark');
    size41.classList.remove('btn-dark');
    size42.classList.remove('btn-dark');
});

size41.addEventListener('click', function () {
    size41.classList.add('btn-dark');
    size40.classList.remove('btn-dark');
    size42.classList.remove('btn-dark');
});

size42.addEventListener('click', function () {
    size42.classList.add('btn-dark');
    size41.classList.remove('btn-dark');
    size40.classList.remove('btn-dark');
});

let quantity = 0;
let price = 0;
shoeNum.innerHTML = quantity;
totalPrice.innerHTML = `$ ${price}.00`;

const url = new URL(window.location.href);
const product = new URLSearchParams(url.search);

const product1 = url.searchParams;
const brandName = product.get("brand");
const brandID = product.get("id");

async function getParams() {
    const req = await fetch(`http://localhost:3000/${brandName}`);
    const data = await req.json();
    const thisProduct = data[brandID - 1];
    image1.setAttribute("src", `${thisProduct.image3x}`);
    image2.setAttribute("src", `${thisProduct.image3x}`);
    image3.setAttribute("src", `${thisProduct.image3x}`);
    brandNameP.innerHTML = thisProduct.name;
    add.addEventListener('click', function () {
        shoeNum.innerHTML = ++quantity;
        totalPrice.innerHTML = `$ ${thisProduct.price * quantity}.00`;
    });
    low.addEventListener('click', function () {
        if (quantity != 0) {
            shoeNum.innerHTML = --quantity;
            totalPrice.innerHTML = `$ ${thisProduct.price * quantity}.00`;
        }
    });
};
getParams();

const userID = localStorage.getItem("userID");
async function addToCart() {
    const req = await fetch(`http://localhost:3000/users/${userID}`);
    const data = await req.json();
    console.log(data);
    const reqProdData = await fetch(`http://localhost:3000/${brandName}`);
    const prodNameData = await reqProdData.json();
    const thisProduct = prodNameData[brandID - 1];
    console.log(thisProduct);
    const qty = shoeNum.innerHTML;
    const carts = data.carts;
    if (qty != 0) {
        const prodData = {
            quantity: `${qty}`,
            prodId: `${brandID}`,
            brand: `${brandName}`
        };
        carts.push(prodData);

        const userNewData = {
            "email": `${data.email}`,
            "password": `${data.password}`,
            "carts": carts,
            "address": data.address,
            "id": userID
        };

        const productCart = await fetch(`http://localhost:3000/users/${userID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userNewData)
        });

        setTimeout(() => {
            window.location.href = "/myCart/index.html";
        }, 500);
    }
};