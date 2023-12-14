const MenuBtn = document.querySelector('.bi-list');
const CloseBtn = document.querySelector('.bi-x-lg');
const Nav = document.querySelector('.nav');
const body = document.querySelector('body');

MenuBtn.addEventListener('click', function () {
	Nav.classList.toggle('active');
});

CloseBtn.addEventListener('click', function () {
	Nav.classList.remove('active');
});

var ThemeSelector = document.querySelector('.bi-gear');

ThemeSelector.addEventListener('click', function () {
	body.classList.toggle('light-theme');
});
