const fs = require('fs');
const path =  require('path');

const caminhoArquivo = path.join(__dirname, 'arquivoGrande.txt');

const streamLeitura = fs.createReadStream(caminhoArquivo, {encoding: 'utf8'});

streamLeitura.on('data', (chunk) => {
    console.log('🔹 Novo pedaço de dados recebido:');
    console.log(chunk);
  });

  streamLeitura.on('end', () => {
    console.log('✅ Leitura do arquivo concluída!');
  });
  
  streamLeitura.on('error', (err) => {
    console.error('❌ Erro ao ler o arquivo:', err.message);
  });