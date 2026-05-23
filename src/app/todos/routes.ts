
import {createTodo, deleteTodo, getAllTodos, TodoController, updateTodo} from './controller.js'
import { Router } from "express";

const router = Router();

// const controller = new TodoController()

router.get("/get-todos", getAllTodos);
// router.get("/get-todos", controller.getAllTodos.bind(controller));
router.post("/create-todos", createTodo);
router.put("/update-todos/:id", updateTodo);
router.delete("/delete-todos/:id", deleteTodo);

export default router;
