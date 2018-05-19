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

        this.initListerens();
        this.init()
    }

    init() {
        const users = this.model.read('users');
        this.view.init(users.length);
        this.fetchUsers();
    }

    fetchUsers() {
        // fetch('')
    }

    initListerens() {
        this.model.on('updated', (users) => {
            this.view.updateCounter(users.length);
            this.view.toggleSearch(!users.length);
        });
    }
};
