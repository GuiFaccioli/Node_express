const { Router } = require("express");
const router = Router();

/*    

POST            -              CREATE
GET              -                READ
PUT                  -                 UPDATE
DELETE                 -                 DELETE

  */

router.get("/atendimentos", (req, res) => {
  res.send("Chegou aqui, estamos listando todos os atendimentos...");
});

router.post("/atendimentos", (req, res) => {
  res.send("Chegou aqui, estamos criando um novo atendimento.");
});

router.put("/atendimentos/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Estamos atualizando o atendimento: ${id}`);
});

router.delete("/atendimentos/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Estamos deletando o atendimento: ${id} `);
});

module.exports = router;
