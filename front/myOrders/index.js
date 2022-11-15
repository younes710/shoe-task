const home = document.querySelector('.home-btn');
const cart = document.querySelector('.cart-btn');
const paste = document.querySelector('.paste');
const paste2 = document.querySelector('.paste2');
const activeBtn = document.querySelector('.active-btn');
const completedBtn = document.querySelector('.completed-btn');
const completedLine = document.querySelector('.completed-line');
const activeLine = document.querySelector('.active-line');
const activeH5 = document.querySelector('.active-h5');
const completedH5 = document.querySelector('.completed-h5');
const ordersP = document.querySelector('.orders-p');
const activeProdCart = document.querySelector('.prod-cart');

home.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/home/home.html";
    }, 500);
});

cart.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/myCart/index.html";
    }, 500);
});

completedBtn.addEventListener('click', function () {
    activeProdCart.style.display = 'none';
    paste2.style.display = 'block';
    completedLine.style.backgroundColor = "rgb(0, 0, 0)";
    activeLine.style.backgroundColor = "rgb(230, 222, 222)";
    activeH5.style.color = "rgb(230, 222, 222)";
    completedH5.style.color = "rgb(0, 0, 0)";
    ordersP.innerHTML = "You don't have an completed orders at this time"
});

activeBtn.addEventListener('click', function () {
    activeProdCart.style.display = 'block';
    paste2.style.display = 'none';
    activeLine.style.backgroundColor = "rgb(0, 0, 0)";
    completedLine.style.backgroundColor = "rgb(230, 222, 222)";
    completedH5.style.color = "rgb(230, 222, 222)";
    activeH5.style.color = "rgb(0, 0, 0)";
    ordersP.innerHTML = "You don't have an active orders at this time"
});

const userID = localStorage.getItem("userID");

async function getUser() {
    const req = await fetch(`http://localhost:3000/users/${userID}`);
    const data = await req.json();
    const dataCarts = data.carts;
    if (dataCarts != []) {
        paste.style.display = 'none';
    }
    for (let i = 0; i < dataCarts.length; i++) {
        const prodReq = await fetch(`http://localhost:3000/${dataCarts[i].brand}/${dataCarts[i].prodId}`);
        const prodData = await prodReq.json();

        const prodCartHtml = `
            <div class="prod-cart-div d-flex mt-5">
                <div class="prod-cart-img ms-3">
                    <img src="${prodData.image}" alt="${prodData.name}" class="w-75 ms-3 mt-3">
                </div>
                <div>
                    <div class="d-flex gap-3 ms-3">
                        <h5 class="fw-bold cart-name">${prodData.name}</h5>
                    </div>
                    <div class="d-flex gap-2 mt-1 ms-3">
                        <div class="color-cart-div mt-1"></div>
                        <p class="text-secondary cart-p">Silver | Size = <span>42</span> | Qty = <span>${dataCarts[i].quantity}</span></p>
                    </div>
                    <div>
                        <p class="delivery ms-3 ps-2">In Delivery</p>
                    </div>
                    <div>
                        <div class="d-flex gap-4 ms-3">
                            <h4 class="fw-bold">$${prodData.price * dataCarts[i].quantity}.00</h4>
                            <button class="btn btn-dark rounded-pill track-btn">Track Order</button>
                        </div>
                    </div>
                </div>
            </div>
                `;
        activeProdCart.insertAdjacentHTML("beforeend", prodCartHtml);
    }
};
getUser();