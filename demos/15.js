
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
//主路由1
const router = new Router();
router.get('/index', async (ctx, next) => {
	console.log(ctx.origin);//http://127.0.0.1:3000
	console.log(ctx.originalUrl);//index
	console.log(ctx.href);//http://127.0.0.1:3000/index
	ctx.body = ctx.url;
});
//加载路由中间件
app
.use(router.routes())
.use(router.allowedMethods());
app.listen(3000, () => {
	console.log('starting at port 3000');
});