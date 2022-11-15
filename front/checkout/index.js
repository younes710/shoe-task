const backMyCart = document.querySelector('.back-myCart');
const mainPage = document.querySelector('.main-page');
const addressPage = document.querySelector('.shipping-address-page');
const shippingPage = document.querySelector('.choose-shipping-page');
const edit = document.querySelector('.edit-btn');
const chooseBtn = document.querySelector('.choose-btn');
const chooseDiv = document.querySelector('.choose');
const radio1 = document.querySelector('.radio1');
const radio2 = document.querySelector('.radio2');
const radio3 = document.querySelector('.radio3');
const radio4 = document.querySelector('.radio4');
const orderList = document.querySelector('.order-list');
const amountNum = document.querySelector('.amount-num');
const shippingNum = document.querySelector('.shipping-num');
const totalNum = document.querySelector('.total-num');
const addAddressDiv = document.querySelector('.add-address-form');
const newAddressBtn = document.querySelector('.add-new-address');
const newAddressDiv = document.querySelector('.new-address-div');
const forAddresses = document.querySelector('.for-addresses');
const locationName = document.querySelector('.location-name');
const exactAddress = document.querySelector('.exact-address');
const addAddressBtn = document.querySelector('.add-address');
const locationChoose = document.querySelector('.location-choose');
const addressChoose = document.querySelector('.address-choose');
const addressRadio = document.querySelector('.address-radio');
const locationAddressChoose = document.querySelector('.location-address-choose');
const chooseEdit = document.querySelector('.choose-edit-btn');
const continuePayment = document.querySelector('.continue');
const paymentPage = document.querySelector('.payment-page');
const viewOrder = document.querySelector('.viewOrder-btn');

backMyCart.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/myCart/index.html";
    }, 500);
});

function backCheckout() {
    setTimeout(() => {
        mainPage.style.display = 'block';
        shippingPage.style.display = 'none';
        addressPage.style.display = 'none';
        paymentPage.style.display = 'none';
    }, 500);
}

edit.addEventListener('click', function () {
    setTimeout(() => {
        mainPage.style.display = 'none';
        addressPage.style.display = 'block';
    }, 500);
});

chooseBtn.addEventListener('click', function () {
    setTimeout(() => {
        mainPage.style.display = 'none';
        shippingPage.style.display = 'block';
    }, 500);
});

const economy = `
<div class="d-flex justify-content-between ms-4">
<div class="d-flex gap-3 mt-4 ms-4">
    <div class="regular-img-div">
        <img src="/Assets/box-2-24.png" alt="regular" class="regular-img">
    </div>
    <div>
        <h6 class="fw-bold mt-2">Regular</h6>
        <p class="text-secondary address-p">Estimated Arrival, Nov 23-25</p>
    </div>
</div>
<div class="mt-4 me-4">
    <button class="choose-edit-btn mt-2 onclick=" goChooseShipping()"">
        <img src="/Assets/icons8-edit-24.png" alt="edit">
    </button>
</div>
</div>
`;

const regular = `
<div class="d-flex justify-content-between ms-4">
<div class="d-flex gap-3 mt-4 ms-4">
    <div class="regular-img-div">
        <img src="/Assets/box-2-24.png" alt="regular" class="regular-img">
    </div>
    <div>
        <h6 class="fw-bold mt-2">Regular</h6>
        <p class="text-secondary address-p">Estimated Arrival, Nov 23-25</p>
    </div>
</div>
<div class="mt-4 me-4">
    <button class="choose-edit-btn mt-2 onclick=" goChooseShipping()"">
        <img src="/Assets/icons8-edit-24.png" alt="edit">
    </button>
</div>
</div>
`;

const cargo = `
<div class="d-flex justify-content-between ms-4">
<div class="d-flex gap-3 mt-4 ms-4">
    <div class="regular-img-div">
        <img src="/Assets/box-2-24.png" alt="regular" class="regular-img">
    </div>
    <div>
        <h6 class="fw-bold mt-2">Regular</h6>
        <p class="text-secondary address-p">Estimated Arrival, Nov 23-25</p>
    </div>
</div>
<div class="mt-4 me-4">
    <button class="choose-edit-btn mt-2 onclick=" goChooseShipping()"">
        <img src="/Assets/icons8-edit-24.png" alt="edit">
    </button>
</div>
</div>
`;

const express = `
<div class="d-flex justify-content-between ms-4">
<div class="d-flex gap-3 mt-4 ms-4">
    <div class="regular-img-div">
        <img src="/Assets/box-2-24.png" alt="regular" class="regular-img">
    </div>
    <div>
        <h6 class="fw-bold mt-2">Regular</h6>
        <p class="text-secondary address-p">Estimated Arrival, Nov 23-25</p>
    </div>
</div>
<div class="mt-4 me-4">
    <button class="choose-edit-btn mt-2 onclick=" goChooseShipping()"">
        <img src="/Assets/icons8-edit-24.png" alt="edit">
    </button>
</div>
</div>
`;

function goChooseShipping() {
    setTimeout(() => {
        mainPage.style.display = 'none';
        shippingPage.style.display = 'block';
    }, 500);
};

function backMainPage() {
    mainPage.style.display = 'block';
    shippingPage.style.display = 'none';
}

let shipp = 0;
document.querySelector('#chooseApply').addEventListener('click', function () {
    if (radio1.checked) {
        chooseDiv.innerHTML = economy;
        shippingNum.innerHTML = 10;
        shipp += 10;
        totalNum.innerHTML = +totalNum.innerHTML + shipp;
        backMainPage();
    } else if (radio2.checked) {
        chooseDiv.innerHTML = regular;
        shippingNum.innerHTML = 15;
        shipp += 15;
        totalNum.innerHTML = +totalNum.innerHTML + shipp;
        backMainPage();
    } else if (radio3.checked) {
        chooseDiv.innerHTML = cargo;
        shippingNum.innerHTML = 20;
        shipp += 20;
        totalNum.innerHTML = +totalNum.innerHTML + shipp;
        backMainPage();
    } else if (radio4.checked) {
        chooseDiv.innerHTML = express;
        shippingNum.innerHTML = 30;
        shipp += 30;
        totalNum.innerHTML = +totalNum.innerHTML + shipp;
        backMainPage();
    } else {
        alert('Please choose one');
    }
});

const userID = localStorage.getItem("userID");
let num = 0;
async function getUser() {
    const req = await fetch(`http://localhost:3000/users/${userID}`);
    const data = await req.json();
    const dataCarts = data.carts;

    for (let i = 0; i < dataCarts.length; i++) {
        const prodReq = await fetch(`http://localhost:3000/${dataCarts[i].brand}/${dataCarts[i].prodId}`);
        const prodData = await prodReq.json();

        const orderHtml = `
            <div class="prod-cart-div d-flex mt-5">
                <div class="prod-cart-img ms-4">
                    <img src="${prodData.image}" alt="${prodData.name}" class="w-75 ms-3">
                </div>
                <div>
                    <div class="d-flex gap-3 ms-4">
                    <h5 class="fw-bold cart-name">${prodData.name}</h5>
                </div>
                <div class="d-flex gap-2 mt-2 ms-4">
                    <div class="color-cart-div mt-1"></div>
                        <p class="text-secondary">silver | Size = <span>42</span></p>
                    </div>
                    <div>
                        <div class="d-flex gap-5 ms-4 mt-1">
                        <h4 class="fw-bold">$${prodData.price * dataCarts[i].quantity}.00</h4>
                        <div class="shoes-number rounded-circle text-center pt-1 ms-5">${dataCarts[i].quantity}</div>
                        </div>
                    </div>
                </div>
            </div>
                `;
        orderList.insertAdjacentHTML("beforeend", orderHtml);

        num += Number(prodData.price * dataCarts[i].quantity);
        amountNum.innerHTML = +num;
        totalNum.innerHTML = +num;
    }
};
getUser();

newAddressBtn.addEventListener('click', function () {
    newAddressDiv.style.display = 'none';
    addAddressDiv.style.display = 'block';
});

async function addAddress() {
    const req = await fetch(`http://localhost:3000/users/${userID}`);
    const data = await req.json();
    console.log(data);
    const dataAddress = data.address;
    console.log(dataAddress);

    const newAddress = {
        locationName: `${locationName.value}`,
        exactAddress: `${exactAddress.value}`
    };

    dataAddress.push(newAddress);
    const userNewData = {
        "email": `${data.email}`,
        "password": `${data.password}`,
        "carts": data.carts,
        "address": dataAddress,
        "id": userID
    };
    if (locationName.value !== "" && exactAddress.value !== "") {
        const productCart = await fetch(`http://localhost:3000/users/${userID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userNewData)
        });
        setTimeout(() => {
            newAddressDiv.style.display = 'block';
            addAddressDiv.style.display = 'none';
            getAddresses();
            locationName.value = "";
            exactAddress.value = "";
        }, 1000);
    } else {
        alert("Please fill in both fields");
    }
};

async function getAddresses() {
    const req = await fetch(`http://localhost:3000/users/${userID}`);
    const data = await req.json();
    const dataAddress = data.address;
    if (dataAddress !== []) {
        forAddresses.innerHTML = "";
        locationAddressChoose.innerHTML = "";
        for (let i = 0; i < dataAddress.length; i++) {
            const addressHtml = `
            <div class="d-flex justify-content-between mt-4">
                <div class="d-flex gap-3 ms-4">
                    <div>
                        <img src="/Assets/icons8-location-48.png" alt="Location">
                    </div>
                    <div>
                        <h6 class="fw-bold">${dataAddress[i].locationName}</h6>
                        <p class="text-secondary address-p">${dataAddress[i].exactAddress}</p>
                    </div>
                </div>
                <div>
                    <div class="me-4">
                        <button class="edit-btn mt-2">
                            <input class="address-radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        </button>
                    </div>
                </div>
            </div>
            `;
            forAddresses.insertAdjacentHTML("beforeend", addressHtml);

        };
        const locAddressHtml = `
                <h6 class="fw-bold location-choose">${dataAddress[0].locationName}</h6>
                <p class="text-secondary address-p address-choose">${dataAddress[0].exactAddress}</p>
        `;
        locationAddressChoose.insertAdjacentHTML("beforeend", locAddressHtml);
    }
};
getAddresses();

continuePayment.addEventListener('click', function () {
    setTimeout(() => {
        mainPage.style.display = 'none';
        paymentPage.style.display = 'block';
    }, 500);
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

viewOrder.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/myOrders/index.html";
    }, 1000);
});