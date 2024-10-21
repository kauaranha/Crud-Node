import express from "express";
import cors from "cors";
import userRoutes from "../api/routes/users.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.set('port',8000);
app.listen(app.get('port'),() => {
    console.log(`Servidor Rodando na porta ${app.get('port')}`);
});
