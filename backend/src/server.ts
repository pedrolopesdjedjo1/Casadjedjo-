import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "NÔDJUNTA SERVICE API funcionando",
  });
});

app.listen(PORT, () => {
  console.log(`NÔDJUNTA SERVICE API rodando na porta ${PORT}`);
});
