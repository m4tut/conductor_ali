document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const burgerElem = document.getElementById('burger');
    const headerContentElem = document.querySelector('.header__content');

    burgerElem.addEventListener('click', () => {
        if (burgerElem.classList.contains('burger-open')) {
            // если есть
            burgerElem.classList.remove('burger-open');
            headerContentElem.classList.remove('header__content--active');
            burgerElem.classList.add('burger-close');
        } else {
            // если нет
            burgerElem.classList.remove('burger-close');
            headerContentElem.classList.add('header__content--active');
            burgerElem.classList.add('burger-open');
        }
    });

    // open modal window
    let modalElem;
    document.querySelectorAll('[data-modal]').forEach(elem => {
        elem.addEventListener('click', () => {
            document.addEventListener('keydown', escapeHandler);

            modalElem = document.getElementById(elem.dataset.modal);
            modalElem.classList.add('modal--active');
            modalElem.querySelector('.animate__animated').classList.add('animate__bounceInLeft');
            document.body.classList.add('no-scroll')
        });
    });

    //close modal window
    const closeModal = () => {
        modalElem.querySelector('.animate__animated').classList.remove('animate__bounceInLeft');
        modalElem.querySelector('.animate__animated').classList.add('animate__backOutRight');
        document.removeEventListener('keydown', escapeHandler);

        setTimeout(() => {
            modalElem.classList.remove('modal--active');
            document.body.classList.remove('no-scroll');
            modalElem.querySelector('.animate__animated').classList.remove('animate__backOutRight');
        }, 500);
    };

    const escapeHandler = (event) => {
        if (event.code == 'Escape') {
            closeModal();
        }
    };

    document.querySelector('[data-close]').addEventListener('click', () => {
        closeModal();
    });
});
