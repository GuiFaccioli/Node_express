const express = require("express");
const app = express();
const port = 3000;

const atendimentoRouter = require("./routers/atendimentoRoute");

app.use(atendimentoRouter);

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
