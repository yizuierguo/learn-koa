
const str  = 'userName=%E9%86%89&age=12&webSite=baidu.com';
function returnObj(str){
    let tempObj = {};
    let strList = str.split('&');
    console.log(strList);
}
returnObj(str);