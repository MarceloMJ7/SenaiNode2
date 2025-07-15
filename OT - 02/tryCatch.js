const fs = require('fs');
const path = require('path');

const caminhoInexistente = path.join(__dirname, 'caminho.txt');

try {
    const leituraConteudo = fs.readFileSync(caminhoInexistente, 'utf8') //Estou tentando ler o caminho do arquivo usando o módulo fs
    console.log('Leitura do' + leituraConteudo)
} catch {
    console.log("Erro ao tentar ler conteudo");
};