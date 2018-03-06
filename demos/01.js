/**
 * Created by yizui on 2018/3/2.
 * 作者：李绅
 * 春种一粒粟，秋成万颗子。四海无闲田，农夫犹饿死。
 * 锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。
 */
const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
	ctx.body = 'hello koa!';
	console.log(ctx.response);
});
app.listen(3000);
console.log('app is runing at port 3000');