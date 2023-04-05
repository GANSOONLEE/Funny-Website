
// 主題切換
var themeBtn = document.querySelector('#theme');
themeBtn.addEventListener('click', () => {
    if(document.documentElement.hasAttribute('theme')){
        document.documentElement.removeAttribute('theme');
    }else{
        document.documentElement.setAttribute('theme', 'dark');
    }
})

// 加載動畫
const letters = document.querySelectorAll('.animation-letter');
function animateLetters(index) {
  if (index >= letters.length) {
    return;
  }
  setTimeout(() => {
    letters[index].classList.add('active');
    animateLetters(index + 1);
  }, index * 2000);
}
animateLetters(0);



