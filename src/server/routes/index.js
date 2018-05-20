const Router = require('koa-router');

const router = new Router();

const users = [
  {
    id: 1,
    name: 'Алексей Картушин',
    img: '/img/alex.png',
  },
  {
    id: 2,
    name: 'Аибар Макхат',
    img: '/img/aibar.jpg',
  },
  {
    id: 3,
    name: 'Иван Загребельный',
    img: '/img/ivan.jpg',
  },
  {
    id: 4,
    name: 'Андрей Махнев',
    img: '/img/andrey.jpg',
  },
  {
    id: 5,
    name: 'Дарья Резанова',
    img: '/img/darya.jpg',
  },
  {
    id: 6,
    name: 'Roman Kobriy',
    img: '/img/roman.jpg',
  },
  {
    id: 7,
    name: 'Татьяна Шимберева',
    img: '/img/tatiana.jpg',
  },
  {
    id: 8,
    name: 'Алексей Яшин',
    img: '/img/aleksey.jpg',
  },
  {
    id: 9,
    name: 'Олег Унгер',
    img: '/img/oleg.jpg',
  },
  {
    id: 10,
    name: 'Юлия Гербаневская',
    img: '/img/julia.jpg',
  },
  {
    id: 10,
    name: 'Марина Артюшкова',
    img: '/img/marina.jpg',
  },
];

// render index page
router.get('/', async (ctx) => {
  await ctx.render('index');
});

router.get('/api/users', async (ctx) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.8) {
        resolve(users);
        return;
      }

      reject();
    }, 2000);
  });

  try {
    ctx.body = await promise;
  } catch (e) {
    ctx.throw(400, 'error');
  }
});

module.exports = router;
