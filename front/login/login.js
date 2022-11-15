const emailInput = document.querySelector('.email');
const passInput = document.querySelector('.pass');
const check = document.querySelector('.check');
const back = document.querySelector('.back');
const wrongToast = document.querySelector('.wrong-toast');
const logIn = document.querySelector('.logIn');
const signInBtn = document.querySelector('.signIn-btn');

const getData = async function () {
    const response = await fetch('http://localhost:3000/users');
    const userdata = await response.json();

    for (const user of userdata) {
        if (emailInput.value == user.email) {
            const userId = user.id;
            const resPass = await fetch(`http://localhost:3000/users/${userId}`);
            const passData = await resPass.json();
            if (passData.password == passInput.value) {
                localStorage.setItem("userID", `${userId}`);
                setTimeout(() => {
                    window.location.href = "/home/home.html";
                }, 1000);
            } else {
                setTimeout(() => {
                    wrongToast.style.display = 'block';
                    logIn.style.marginTop = '15%';
                    setTimeout(() => {
                        wrongToast.style.display = 'none';
                        logIn.style.marginTop = '25%';
                    }, 4000);
                }, 1100);
            }
        }
    }
};

signInBtn.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/login/signup.html";
    }, 1000);
});

back.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = "/onboarding/slider.html";
    }, 1000);
});
