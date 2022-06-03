import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import cards from './modules/cards';
import {
    openModal
} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    // Modal window shows after 30 seconds
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-08-31');
    modal('[data-modal]', ".modal", modalTimerId);
    calc();
    forms('form', modalTimerId);
    slider({
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        container: '.offer__slider'
    });
    cards();

});