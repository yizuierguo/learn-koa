/**
 * Created by yizui on 2018/3/2.
 * 作者：李绅
 * 春种一粒粟，秋成万颗子。四海无闲田，农夫犹饿死。
 * 锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。
 */
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
	ctx.response.body = 'Hello koa!';
};

app.use(main);
app.listen(3000);