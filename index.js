const express = require("express");
const mysql = require("mysql2");
const app = express();
app.use(express.json());
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "X1x2x3x4-",
  database: "estudo",
});

connection.connect((erro) => {
  if (erro) {
    console.log("Erro ao conectar no banco:", erro);
    return;
  }
  console.log("Conectado ao MySQL com sucesso");
});

app.get("/usuarios", (req, res) => {
  connection.query("SELECT * FROM usuario", (erro, resultados) => {
    if (erro) {
      return res.status(500).json({
        erro: "Erro ao buscar usuários",
      });
    }
    res.json(resultados);
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
