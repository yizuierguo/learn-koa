const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
app.use(async (ctx) => {
	let url = ctx.url;
	let html = await router(url);
	ctx.body = html;
});
//处理路由
async function router(url) {
	let page = '404.html';
	switch (url) {
		case '/':
			page = 'index.html';
			break;
		case '/index':
			page = 'index.html';
			break;
		case '/todo':
			page = 'todo.html';
			break;
		case '/404':
			page = '404.html';
			break;
		default:
			break;
	}
	let html = await render(page);
	console.log(html);
	return html;
}
//解析html到文件
function render(page) {
	return new Promise((resolve, reject) => {
		let pageUrl = `./pages/${page}`;
		fs.readFile(pageUrl, "binary", (err, data) => {
			console.log(444);
			if (err) {
				reject(err)
			} else {
				resolve(data);
			}
		})
	});
}
app.listen(3000, () => {
	console.log('300 port!');
});