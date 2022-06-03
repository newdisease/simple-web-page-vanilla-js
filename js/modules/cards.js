import {
    getResource
} from '../services/services';

function cards() {
    // menu items
    class MenuItem {
        constructor(src, alt, title, descripton, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = descripton;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
        }
        render() {
            const element = document.createElement('div');
            element.classList.add('menu__item');
            element.innerHTML = `<img src="${this.src}" alt="${this.alt}" class="menu__item-img">
                                <h3 class="menu__item-subtitle">${this.title}</h3>
                                <div class="menu__item-descr">${this.description}</div>
                                <div class="menu__item-divider"></div>
                                <div class="menu__item-price">
                                    <div class="menu__item-cost">Цена:</div>
                                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                            </div>`;
            this.parent.append(element);
        }
    }

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new MenuItem(
                    img,
                    altimg,
                    title,
                    descr,
                    price,
                    '.menu .container'
                ).render();
            })
        })
}

export default cards;