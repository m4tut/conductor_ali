document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const burgerElem = document.getElementById('burger');
    const headerContentElem = document.querySelector('.header_content');

    burgerElem.addEventListener('click', () => {
        if (burgerElem.classList.contains('burger-open')) {
            // если есть
            burgerElem.classList.remove('burger-open');
            headerContentElem.classList.remove('header_content-active');
            burgerElem.classList.add('burger-close');
        } else {
            // если нет
            burgerElem.classList.remove('burger-close');
            headerContentElem.classList.add('header_content-active');
            burgerElem.classList.add('burger-open');
        }
    });
});
