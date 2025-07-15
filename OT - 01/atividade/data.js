function padZero(num) {
    return num.toString().padStart(2, '0');
  }
  
  const agora = new Date();
  
  const dia = padZero(agora.getDate());
  const mes = padZero(agora.getMonth() + 1); // Meses começam do 0
  const ano = agora.getFullYear();
  
  const horas = padZero(agora.getHours());
  const minutos = padZero(agora.getMinutes());
  const segundos = padZero(agora.getSeconds());
  
  const dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
  
  console.log(`Data e hora atuais: ${dataFormatada}`);