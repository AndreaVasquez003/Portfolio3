"use strict"

const menuBurgerBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBurgerBtn.addEventListener('click', () => {
	menuBurgerBtn.classList.toggle('open');
	menu.classList.toggle('open');
});
