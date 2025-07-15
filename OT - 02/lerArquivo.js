const fs = require('fs');

const lerConteudo = fs.readFileSync('texto.txt', 'utf8');

console.log(lerConteudo);