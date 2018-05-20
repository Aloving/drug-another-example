import { EventEmitter, createElement } from './helpers';

/**
 * View - Базовый класс вью
 */
export default class View extends EventEmitter {
    constructor() {
        super();

        this.search = document.querySelector('.search');
        this.container = document.querySelector('.main-container');
        this.counter = document.querySelector('.counter');
        this.loader = document.querySelector('.my-loader');
        this.errorBlock = document.querySelector('.error-block');

        this.tryAgain = document.querySelector('.try-again');

        this.initListeners();
    }

    initListeners() {
        this.tryAgain.addEventListener('click', () => {
            this.emit('tryAgain');
        });
    }

    init(usersCount) {
        this.toggleLoader(true);
        this.updateCounter(usersCount);
        this.toggleSearch(!usersCount);
    }

    toggleSearch(condition) {
        this.search.disabled = condition;
    }

    visabilityToggler(element, condition) {
        if (condition) {
            element.style.visibility = 'visible';
            return;
        } 

        element.style.visibility = 'hidden';        
    }

    toggleLoader(condition) {
        this.visabilityToggler(this.loader, condition)
    }

    toggleError(condition) {
        this.visabilityToggler(this.errorBlock, condition)
    }

    updateCounter(count) {
        this.counter.innerText = count;
    }
}
