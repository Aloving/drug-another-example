import { debounce } from './helpers';

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

    this.onSearch = debounce(this.onSearch.bind(this), 250);

    this.initListerens();
    this.init()
  }

  init() {
    const users = this.model.read('users');
    this.view.init(users.length);
    this.fetchUsers();
  }

  fetchUsers() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.model.update('users', users));
  }

  onSearch({ target: { value } }) {
    if (!value.length) {
      this.view.filter([]);
      return;
    }

    const filtered = this.model
      .searchBy({
        modelField: 'users',
        searchField: 'name',
        value,
      })
      .map(user => user.id);

    this.view.filter(filtered);
    this.view.updateCounter(filtered.length);
  }

  initListerens() {
    this.model.on('updated', (users) => {
      this.view.onUpdateList(users.length);
      this.view.createUserList(users);
    });

    this.view.on('tryAgain', () => {
      this.fetchUsers();
    });

    this.view.on('search', this.onSearch);
  }
}
