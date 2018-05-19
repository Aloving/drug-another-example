import { EventEmitter } from './helpers';
  
/**
 * Model - Базовый класс модели
 */
export default class Model extends EventEmitter {
    constructor() {
        super();
    }
}