/**
 * Created by yizui on 2018/3/9.
 * 作者：李绅
 * 春种一粒粟，秋成万颗子。四海无闲田，农夫犹饿死。
 * 锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。
 */
const Koa = require('koa');
const views = require('koa-views');
const static = require('koa-static');
const path = require('path');
const app = new Koa();
//静态资源中间件
app.use(static(
	path.join( __dirname,  '../assets')
))
// 加载模板引擎中间件
app.use(views(path.join(__dirname, '../tpl'), {
	extension: 'ejs'
}));

app.use(async (ctx) => {
	let title = 'hello koa2'
	await ctx.render('list', {
		title
	})
})
app.listen(3000, () => {
	console.log('[demo] server is starting at port 3000');
})