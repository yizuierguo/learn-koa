function getsomething (){
    return 'something';
}
async function testAsync() {
    return 'hello async!';
}

async function test(){
    const v1 = await getsomething();
    const v2 = await testAsync();
    console.log(v1+ ' ' +v2);
}
test();