const burgerIcon = document.getElementById('burger-icon');
const timesIcon = document.getElementById('times-icon');

const navList = document.getElementById('nav-list');

burgerIcon.addEventListener('click', openNavList);
timesIcon.addEventListener('click', closeNavList);

function openNavList() {
  navList.classList.add('opened');
}

function closeNavList() {
  navList.classList.remove('opened');
}
