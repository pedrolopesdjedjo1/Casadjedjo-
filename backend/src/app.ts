import express from "express";

const app = express();

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    app: "NÔDJUNTA SERVICE",
    message: "API preparada",
  });
});

export default app;
