const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
//��·��
const router = new Router({
	prefix:'/page'
});
//·��
router.get('/', (ctx, next) => {
	ctx.body = 'hello index!';
}).get('/todo', (ctx, next) => {
	ctx.body = 'hello todo!';
});
//����·���м��
app
.use(router.routes())
.use(router.allowedMethods());
app.listen(3000, () => {
	console.log('starting at port 3000');
});