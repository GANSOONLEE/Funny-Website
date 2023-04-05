
// 主題切換
var themeBtn = document.querySelector('#theme');
themeBtn.addEventListener('click', () => {
    if (document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme');
    } else {
        document.documentElement.setAttribute('theme', 'dark');
    }
})

// 加載動畫
window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});

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
for (let i = 0; i < menuBtn.length; i++){
    menuBtn[i].addEventListener('click', () => {
        document.querySelector('.navbar').classList.toggle('open');
    });
}



