const Router = require('koa-router');

const router = new Router();

const users = [
  {
    id: 1,
    name: 'Алексей Картушин',
    avatar: '/img/alex.png'
  },
  {
    id: 2,
    name: 'Алексей Картушин',
    avatar: '/img/alex.png'
  },
  {
    id: 3,
    name: 'Алексей Картушин',
    avatar: '/img/alex.png'
  }
];

// render index page
router.get('/', async (ctx) => {
  await ctx.render('index');
});

router.get('/api/users', async (ctx) => {
  ctx.body = users;
});

module.exports = router;
