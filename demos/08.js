const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    if(ctx.url === '/' && ctx.method === 'GET'){
        let html =`<h1>Koa2 request post demo</h1>
                <form method="POST"  action="/">
                    <p>userName</p>
                    <input name="userName" /> <br/>
                    <p>age</p>
                    <input name="age" /> <br/>
                    <p>webSite</p>
                    <input name='webSite' /><br/>
                    <button type="submit">submit</button>
                </form>`;
        ctx.body = html;
    }else if(ctx.method === 'POST'){
        let data = await parsePostData(ctx);
        ctx.body = data;
    }else {
        ctx.body = '<h1>404!</h1>';
    }
});
//获取获取到的数据
function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let basedata = '';
            ctx.req.on('data',(data)=>{
                basedata += data;
            });
            ctx.req.addListener('end',()=>{
                //返回json对象
                // let parseObj = parseQueryStr(basedata);
                // resolve(parseObj);
                //直接返回字符串
                resolve(basedata);
            });
        }catch(error){
            reject(error);
        }
    });
}
//将字符串转化成{key:value}
function parseQueryStr(queryStr){
    let queryData={};
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    for( let [index,queryStr] of queryStrList.entries() ){
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    } 
    return queryData
}
app.listen(3000,()=>{
    console.log('300 port!');
});