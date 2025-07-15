function somaCallback(a, b, callback) {
    const resultado = a + b;
    callback(resultado); 
  }
  
  somaCallback(2, 4, function(resultado) {
    console.log(resultado);  
  });
  