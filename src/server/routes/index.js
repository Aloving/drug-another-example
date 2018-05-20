const Router = require('koa-router');

const router = new Router();

const users = [
  {
    id: 1,
    name: 'Алексей Картушин',
    img: '/img/alex.png'
  },
  {
    id: 2,
    name: 'Алексей Картушин',
    img: '/img/alex.png'
  },
  {
    id: 3,
    name: 'Алексей Картушин',
    img: '/img/alex.png'
  }
];

// render index page
router.get('/', async (ctx) => {
  await ctx.render('index');
});

router.get('/api/users', async (ctx) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 2000)
  })

  ctx.body = await promise
});

module.exports = router;
