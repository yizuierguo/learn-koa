/**
 * Created by yizui on 2018/3/10.
 * 作者：李绅
 * 春种一粒粟，秋成万颗子。四海无闲田，农夫犹饿死。
 * 锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。
 */
const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const app = new Koa();
const staticPath = '../assets';
app.use(static(
	path.join(__dirname, staticPath)
));
app.use(async (ctx) => {
	console.log(path.join(__dirname,staticPath));
	console.log(ctx.href);
	ctx.body = 'hello world'
})
app.listen(3000, () => {
	console.log('[demo] static-use-middleware is starting at port 3000')
});