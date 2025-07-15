function espera3segundos(callback) {
    setTimeout(() => {
      callback('Esperei 3 segundos!'); 
    }, 3000);
  }
  
  espera3segundos(function(mensagem) {
    console.log('Recebi a mensagem:', mensagem); 
  });
  