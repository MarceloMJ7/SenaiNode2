const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Servidor Funcionando");
});

const PORT = 3000;

app.get("/users", (req, res) => {
  //get é usando para buscar dados
  res.json({ message: "Listando Usuários" });
});

app.post("/users", (req, res) => {
  //Usado para enviar dados para o servidor
  res.json({ message: "Usuário Criado" });
});

app.put("/users/:id", (req, res) => {
  //Atualiza dados existentes
  res.json({ message: `Usuário ${req.params.id} atualizado` });
});

app.delete("/users/:id", (req, res) => {
  res.json({ message: `Usuário ${req.params.id} deletado` });
});

app.use((req, res, next) => {
  // dados middleware é usado para verificar dados, aqui é um middleware global
  console.log(`Método: ${req.method}, URL: ${req.url}`);
  next();
});

app.use("/users", (req, res, next) => {
  // middleware específico
  console.log("Middleware aplicado apenas ás rotas de /users");
  next();
});

app.listen(PORT, () => {
  console.log(`Servidor Rodando na porta ${PORT}`);
});

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sua_senha",
  database: "projeto_node",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado ao MySQL");
});

app.get("/users", (req, res) => {
  connection.query("SELECT * FROM usuarios", (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});
