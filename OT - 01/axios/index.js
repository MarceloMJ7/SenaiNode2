import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Dados recebidos:');
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro na requisição:', error);
  });
