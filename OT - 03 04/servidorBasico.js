const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Servidor Funcionando");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor Rodando na porta ${PORT}`);
});
