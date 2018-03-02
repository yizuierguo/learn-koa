/**
 * Created by yizui on 2018/3/2.
 * 作者：李绅
 * 春种一粒粟，秋成万颗子。四海无闲田，农夫犹饿死。
 * 锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。
 */
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
	if (ctx.request.accepts('xml')) {
		ctx.response.type = 'xml';
		ctx.response.body = '<data>Hello koa!</data>';
	} else if (ctx.request.accepts('json')) {
		ctx.response.type = 'json';
		ctx.response.body = { data: 'Hello koa!' };
	} else if (ctx.request.accepts('html')) {
		ctx.response.type = 'html';
		ctx.response.body = '<p>Hello koa!</p>';
	} else {
		ctx.response.type = 'text';
		ctx.response.body = 'Hello koa!';
	}
};

app.use(main);
app.listen(3000);
