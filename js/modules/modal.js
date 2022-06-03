    function closeModal(modalSelector) {
        const modal = document.querySelector(modalSelector);

        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal(modalSelector, modalTimerId) {
        const modal = document.querySelector(modalSelector);

        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';

        if (modalTimerId) {
            clearInterval(modalTimerId);
        }
    }

    function modal(triggerSelector, modalSelector, modalTimerId) {
        // Modal
        const modalTrigger = document.querySelectorAll(triggerSelector), // кнопки открытия модального окна
            modal = document.querySelector(modalSelector); // модальное окно

        // показать модальное окно при нажатии на кнопки "Связаться с нами"
        modalTrigger.forEach(item => {
            item.addEventListener('click', () => openModal(modalSelector, modalTimerId));
        });

        // скрыть модальное окно по клику на пустое место
        modal.addEventListener('click', (event) => {
            if (event.target === modal || event.target.getAttribute('data-close') == '') {
                closeModal(modalSelector);
            }
        });

        // скрыть модальное окно по нажатию на esc
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                closeModal(modalSelector);
            }
        });

        // показать модальное окно после скролла страницы до конца
        function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
                openModal(modalSelector, modalTimerId);
                window.removeEventListener('scroll', showModalByScroll);
            }
        }

        window.addEventListener('scroll', showModalByScroll);

    }

    export default modal;
    export {
        closeModal
    };
    export {
        openModal
    };