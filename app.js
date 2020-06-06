const express = require('express')
// 创建web服务器
const app= express();
app.listen(3001,()=>{
    console.log('jsonP-Express服务器3001端口启动');
})

app.get('/',(req,res)=>{
    const weather={city:'北京',info:'晴，33~36'}
    res.jsonp(weather)
})