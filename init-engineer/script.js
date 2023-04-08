// 主題切換
var themeBtn = document.querySelector('#theme');
themeBtn.addEventListener('click', () => {
    var expire = setCookie(30);
    if (document.documentElement.hasAttribute('theme')) {
        document.cookie = 'theme=light;' + expire + ';path=/'
        document.documentElement.removeAttribute('theme');
    } else {
        document.cookie = 'theme=dark;' + expire + ';path=/'
        document.documentElement.setAttribute('theme', 'dark');
    }
})

function setCookie(exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = d.toUTCString();
    return expires;
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return "";
}



// 加載動畫
window.addEventListener('load', function () {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});

window.onload = ()=>{
    const themeValue = getCookie("theme");
    if (themeValue == "dark") {
        console.log('Dark 1');
        document.documentElement.setAttribute('theme', 'dark');
        console.log('Dark 2');
    } else {
        console.log('Light 1');
        document.documentElement.removeAttribute('theme');
        console.log('Light 2');
    }
};

const letters = document.querySelectorAll('.animation-letter');
function animateLetters(index) {
    if (index >= letters.length) {
        return;
    }
    setTimeout(() => {
        letters[index].classList.add('active');
        animateLetters(index + 1);
    }, index * 100);
}
animateLetters(0);

// 菜單
var menuBtn = document.querySelectorAll('.button-menu');
for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener('click', () => {
        document.querySelector('.navbar').classList.toggle('open');
    });
}

// 按鈕
var downloadBtn = document.querySelector('.download-btn');
const list = document.querySelector('.version-list');
downloadBtn.addEventListener('click', () => {
    list.classList.toggle('show');
});

