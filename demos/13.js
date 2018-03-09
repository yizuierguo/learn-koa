/**
 * Created by yizui on 2018/3/9.
 * 作者：李绅
 * 春种一粒粟，秋成万颗子。四海无闲田，农夫犹饿死。
 * 锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。
 */
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
//主路由1
const home = new Router();
home.get('/home1', async (ctx) => {
	ctx.body = "Home home1";
}).get('/home2', async (ctx) => {
	ctx.body = 'Home home2';
})
const list = new Router();
list.get('/list1', async (ctx) => {
	ctx.body = "Home list1";
}).get('/list2', async (ctx) => {
	ctx.body = 'Home list2';
})
//装载所有子路由
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/list', list.routes(), list.allowedMethods());
//加载路由中间件
app
.use(router.routes())
.use(router.allowedMethods());
app.listen(3000, () => {
	console.log('starting at port 3000');
});