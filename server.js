// 引入http模块
const http = require('http')
// 要想使用原生js解析url 需要引入url模块
const url=require('url')
// 创建http Web服务器
const app = http.createServer()
app.listen(3000, () => {
    console.log('http服务器3000端口启动成功！');
})
// app.on('request', (req, res) => {
//     // console.log(req);
//     if (req.url === '/') {
//         res.writeHead(200,{
//             'content-type':'text/html;charset=utf-8'
//         })
//         const weather='北京 晴 35~37'
//         //将数据填充进js合法的语句中 
//         res.write(`alert(${weather})`)
//         res.end()
//     }
// })
// 方案二 将普通js语句修改为函数调用语句 函数名和客户端的函数名一致
// 问题：服务端将函数名写死了，而客户端，不同的开发人员定义的函数名可能不一致，
// 有人不想使用写死的函数名
// app.on('request', (req, res) => {
//     // console.log(req);
//     if (req.url === '/') {
//         res.writeHead(200,{
//             'content-type':'text/html;charset=utf-8'
//         })
//         const weather='北京 晴 35~37'
//         // 将数据填充进一个函数调用语句中 show函数名是客户端定义好的
//         res.write(`show('${weather}')`)
//         res.end()
//     }
// })
// 方案三：服务器端接收函数名参数，动态拼接到要返回的js语句中
app.on('request', (req, res) => {
    if (req.url === '/') {
        console.log(url.parse(req.url,true));
        // console.log(req.url);
        res.writeHead(200,{
            'content-type':'text/html;charset=utf-8'
        })
        const weather='北京 晴 35~37'
        // 将数据填充进一个函数调用语句中 show函数名是客户端定义好的
        res.write(`show('${weather}')`)
        res.end()
    }else{
        // console.log(url.parse(req.url,true));
        // console.log(req.url);
        const Url=url.parse(req.url,true)
        const callback=Url.query.callback
        res.writeHead(200,{
            'content-type':'text/html;charset=utf-8'
        })
        const weather='北京 晴 35~37'
        // 将数据填充进一个函数调用语句中 show函数名是客户端定义好的
        res.write(`${callback}('${weather}')`)
        res.end()
    }
})