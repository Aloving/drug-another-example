/**
 * Controller - Базовый класс контроллера
 *
 * @param  {instance} model Инстанс модели
 * @param  {instance} view  Инстанс вью
 */
export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
};
