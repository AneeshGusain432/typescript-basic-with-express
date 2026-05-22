
import {createTodo, getAllTodos, TodoController} from './controller.js'
import { Router } from "express";

const router = Router();

// const controller = new TodoController()

router.get("/get-todos", getAllTodos);
// router.get("/get-todos", controller.getAllTodos.bind(controller));
router.post("/create-todos", createTodo);

export default router;
