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
    name: 'Алексей Картушин',
    img: '/img/alex.png',
  },
  {
    id: 3,
    name: 'Алексей Картушин',
    img: '/img/alex.png',
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
