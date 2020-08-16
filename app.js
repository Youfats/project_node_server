const my_http = require('http'); // 导入http模块
const my_fs = require('fs');// 导入读取文件模块
const my_server = my_http.createServer((request, response) => {
    if (request.url === "/index.html") {
        my_fs.readFile('/src/index.html', 'utf-8', (err, data) => {
            response.writeHead(200, {'content-type':'text/html;charset=utf-8'});
            response.write();
            response.end();
        });
    }
});

my_server.listen(3000, () => {
    console.log('server start in port :3000')
})