/**
 * Created by yizui on 2018/3/5.
 * 作者：李绅
 * 春种一粒粟，秋成万颗子。四海无闲田，农夫犹饿死。
 * 锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。
 */
const Koa = require('koa');
const app = new Koa();
const hostname = '127.0.0.1';
const port = 3000;
app.use(async (ctx) => {
	let url = ctx.request.url;
	// let request = ctx.request;
	let req_query = ctx.query;
	let req_querystring = ctx.querystring;
	ctx.body = {
		url,
		req_query,
		req_querystring
	}
	console.log(ctx.req);
});
// app.listen(port,()=>{
// 	console.log(`服务器运行在 http://${hostname}:${port}/`);
// });
app.listen(port,function(){
	console.log(`服务器运行在 http://${hostname}:${port}/`);
});