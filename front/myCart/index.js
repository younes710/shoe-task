const home = document.querySelector('.home-btn');
const orders = document.querySelector('.orders-btn');
const checkout = document.querySelector('.checkout-btn');
const removeCart = document.querySelector('.remove-cart');
const removeProdCart = document.querySelector('.remove-prod-cart');
const prodCart = document.querySelector('.prod-cart');
const prodImg = document.querySelector('.prod-img');
const cartName = document.querySelector('.cart-name');
const prodPrice = document.querySelector('.prod-price');
const shoeNum = document.querySelector('.shoe-num');
const low = document.querySelector('.low');
const totalPrice = document.querySelector('.total-price');
const totalNum = document.querySelector('.total-num');


home.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/home/home.html";
    }, 500);
});

orders.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/myOrders/index.html";
    }, 500);
});

checkout.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/checkout/index.html";
    }, 500);
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

const userID = localStorage.getItem("userID");
let num = 0;
async function getUser() {
    const req = await fetch(`http://localhost:3000/users/${userID}`);
    const data = await req.json();
    const dataCarts = data.carts;
    console.log(dataCarts);

    for (let i = 0; i < dataCarts.length; i++) {
        const prodReq = await fetch(`http://localhost:3000/${dataCarts[i].brand}/${dataCarts[i].prodId}`);
        const prodData = await prodReq.json();

        const prodHtml = `
        <div class="d-flex mt-5">
                <div class="prod-cart-img ms-4">
                    <img src="${prodData.image}" alt="${prodData.name}" class="w-75 ms-3 prod-img">
                </div>
                <div>
                    <div class="d-flex justify-content-between ms-4">
                        <h5 class="fw-bold cart-name">${prodData.name}</h5>
                        <button class="trash-btn me-4" onclick="openForm()"><img src="/Assets/icons8-trash-24.png"
                                alt="trash"></button>
                    </div>
                    <div class="d-flex gap-2 mt-2 ms-4">
                        <div class="color-cart-div mt-1"></div>
                        <p class="text-secondary">Silver | Size = <span>42</span></p>
                    </div>
                    <div>
                        <div class="d-flex gap-5 ms-4 mt-1">
                            <h4 class="fw-bold prod-price">$${prodData.price * dataCarts[i].quantity}.00</h4>
                            <div class="d-flex gap-4 me-4">
                                <button class="low display-5 low-shoe-btn"">-</button>
                                <h4 class="shoe-num fw-bold">${dataCarts[i].quantity}</h4>
                                <button class="add display-5 add-shoe-btn">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        prodCart.insertAdjacentHTML("beforeend", prodHtml);

        num += Number(prodData.price * dataCarts[i].quantity);
        totalNum.innerHTML = num;

        document.querySelectorAll(".add-shoe-btn").forEach(function (element) {
            element.onclick = (event) => {
                console.log('hello');
                let value = +event.target.closest("div").querySelector("h4").innerText;
                value++
                event.target.closest("div").querySelector("h4").innerText = value;
            }
        })
        document.querySelectorAll(".low-shoe-btn").forEach(function (element) {
            element.onclick = (event) => {
                console.log('hello');
                let value = +event.target.closest("div").querySelector("h4").innerText;
                if (value > 1) {
                    value--
                }
                event.target.closest("div").querySelector("h4").innerText = value;
            }
        })
    }
};
getUser();