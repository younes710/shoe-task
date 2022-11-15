const emailInput = document.querySelector('.email');
const passInput = document.querySelector('.pass');
const check = document.querySelector('.check');
const back = document.querySelector('.back');
const signIn = document.querySelector('.signIn');
const backLogin = document.querySelector('.back-login-btn');

const addUser = async function () {
    const user = {
        "email": `${emailInput.value}`,
        "password": `${passInput.value}`,
        "carts": [],
        "address": []
    }
    if (emailInput.value !== "" && passInput.value !== "") {
        const emailReq = await fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });
        const emailPostResponse = await emailReq.json();

        const res = await fetch("http://localhost:3000/users");
        const data = await res.json();

        localStorage.setItem("userID", `${data[data.length - 1].id}`);
        setTimeout(() => {
            window.location.href = "/home/home.html";
        }, 1000);
    } else {
        alert("Please fill in both fields");
    }

};

back.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/onboarding/slider.html";
    }, 1000);
});

backLogin.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/login/login.html";
    }, 1000);
});