const http = require('http');
const url = require('url');

const servidor = http.createServer((req, res) => {
  const rota = url.parse(req.url, true).pathname;

 
  res.setHeader('Content-Type', 'text/plain');


  if (rota === '/') {
    res.statusCode = 200;
    res.end(' Bem-vindo à página inicial!');
  } else if (rota === '/sobre') {
    res.statusCode = 200;
    res.end(' Esta é a página Sobre.');
  } else if (rota === '/contato') {
    res.statusCode = 200;
    res.end(' Página de contato.');
  } else {
    res.statusCode = 404;
    res.end(' Página não encontrada!');
  }
});

const PORTA = 3000;
servidor.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
