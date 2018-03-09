/**
 * Created by yizui on 2018/3/9.
 * 作者：李绅
 * 春种一粒粟，秋成万颗子。四海无闲田，农夫犹饿死。
 * 锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。
 */
const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
	if (ctx.url === '/index') {
		ctx.cookies.set(
			'MyName','yizui',{
				domain:'127.0.0.1', // 写cookie所在的域名
				//path:'/index',       // 写cookie所在的路径
				maxAge:1000*60*60*24,   // cookie有效时长
				expires:new Date('2018-11-11'), // cookie失效时间
				httpOnly:false,  // 是否只用于http请求中获取
				overwrite:false  // 是否允许重写
			}
		);
		ctx.body = 'cookie is ok';
	} else {
		if( ctx.cookies.get('MyName')){
			ctx.body = ctx.cookies.get('MyName'); //'yiui'
		}else{
			ctx.body = 'Cookie is none';
		}
	}
});
app.listen(3000, () => {
	console.log('run');
});