import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  return response.json("Essa mensagem vem do backend");
});

app.listen(3333, () => {
  console.log("server is running");
});
