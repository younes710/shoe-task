const loading = document.querySelector('.loading');
const welcome = document.querySelector('.welcome');
const slider1 = document.querySelector('.slider1');
const next1 = document.querySelector('.next1-btn');
const slider2 = document.querySelector('.slider2');
const next2 = document.querySelector('.next2-btn');
const slider3 = document.querySelector('.slider3');
const start = document.querySelector('.start-btn');

setTimeout(() => {
    loading.style.display = 'none';
    welcome.style.display = 'block';
    setTimeout(() => {
        window.location.href = "/onboarding/slider.html";
    }, 3000);
}, 3000);

next1.addEventListener('click', function () {
    slider1.style.display = 'none';
    slider2.style.display = 'block';
});

next2.addEventListener('click', function () {
    slider2.style.display = 'none';
    slider3.style.display = 'block';
});

start.addEventListener('click', function () {
    window.location.href = "/login/login.html";
});

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