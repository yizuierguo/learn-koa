const fs = require('fs');
fs.unlink('/tmp/hello',(err)=>{
    if (err) {throw err;}
    console.log('成功删除 /tmp/hello');
});