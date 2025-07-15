const { Duplex } = require('stream');


class MaiusculoDuplex extends Duplex {
  constructor(options) {
    super(options);
    this.dadosInternos = '';
  }


  _write(chunk, encoding, callback) {
    const texto = chunk.toString().toUpperCase(); 
    this.dadosInternos += texto; 
    callback(); 
  }


  _read(size) {
    this.push(this.dadosInternos);
    this.push(null);
  }
}


const stream = new MaiusculoDuplex();

stream.write('Olá, mundo! ');
stream.write('nodejs é legal!');
stream.end();


stream.on('data', (chunk) => {
  console.log('🔁 Dados transformados:', chunk.toString());
});
