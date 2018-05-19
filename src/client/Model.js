import { EventEmitter } from './helpers';
  
/**
 * Model - Базовый класс модели
 */
export default class Model extends EventEmitter {
    constructor(users) {
        super();

        this.users = users;
    }

    read(field) {
        return this[field];
    }

    update(field, data) {
        this[field] = data;
        this.emit('updated', this[field]);
    }
}