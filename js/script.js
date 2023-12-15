const MenuBtn = document.querySelector('.bi-list');
const CloseBtn = document.querySelector('.bi-x-lg');
const Nav = document.querySelector('.nav');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');

MenuBtn.addEventListener('click', function () {
	Nav.classList.toggle('active');
});

CloseBtn.addEventListener('click', function () {
	Nav.classList.remove('active');
});

toggle.addEventListener('click', () => {
	toggle.classList.toggle('active');
	body.classList.toggle('light-theme');
});
