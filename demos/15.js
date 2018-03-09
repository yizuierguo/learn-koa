
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
//��·��1
const router = new Router();
router.get('/index', async (ctx, next) => {
	console.log(ctx.origin);//http://127.0.0.1:3000
	console.log(ctx.originalUrl);//index
	console.log(ctx.href);//http://127.0.0.1:3000/index
	ctx.body = ctx.url;
});
//����·���м��
app
.use(router.routes())
.use(router.allowedMethods());
app.listen(3000, () => {
	console.log('starting at port 3000');
});