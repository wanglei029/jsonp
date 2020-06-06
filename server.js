// 引入http模块
const http = require('http')
// 创建http Web服务器
const app = http.createServer()
app.listen(3000, () => {
    console.log('http服务器3000端口启动成功！');
})
app.on('request', (req, res) => {
    // console.log(req);
    if (req.url === '/') {
        res.writeHead(200,{
            'content-type':'text/html;charset=utf-8'
        })
        const weather='北京 晴 35~37'
        res.write(weather)
        res.end()
    }
})