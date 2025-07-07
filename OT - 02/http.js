const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Bem vindo ao Node.js');
});

server.listen(3000, () => {
    console.log('Servidor rodando');
})
