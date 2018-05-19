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
    }

    init(usersCount) {
        this.toggleLoader(true);
        this.updateCounter(usersCount);
        this.toggleSearch(!usersCount);
    }

    toggleSearch(condition) {
        this.search.disabled = condition;
    }

    toggleLoader(condition) {
        if (condition) {
            this.loader.style.visibility = 'visible';
            return;
        } 

        this.loader.style.visibility = 'hidden';
    }

    updateCounter(count) {
        this.counter.innerText = count;
    }
}
