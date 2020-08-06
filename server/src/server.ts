import express from "express";

const app = express();

app.get("/users", (req, res) => {
  return res.send("Ola");
});

app.listen(3333);
