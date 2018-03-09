const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
//主路由
const router = new Router({
	prefix:'/page'
});
//路由
router.get('/', (ctx, next) => {
	ctx.body = 'hello index!';
}).get('/todo', (ctx, next) => {
	ctx.body = 'hello todo!';
});
//加载路由中间件
app
.use(router.routes())
.use(router.allowedMethods());
app.listen(3000, () => {
	console.log('starting at port 3000');
});