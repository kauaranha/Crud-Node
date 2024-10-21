import express from "express";
import { TodosUsuarios, InsertUsers, DeleteUsers, Usuario, DeleteAll } from "../controllers/user.js";

const router = express.Router();

router.get("/", TodosUsuarios);

router.get("/:id", Usuario);

router.post("/", InsertUsers);

router.delete("/:id", DeleteUsers);

router.delete("/", DeleteAll);

export default router;