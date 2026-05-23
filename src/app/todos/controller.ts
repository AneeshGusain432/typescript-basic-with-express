import {
  todoValidationSchema,
  type Todo,
} from "../../validation/todo.schema.js";
import type { Request, Response } from "express";

// using class method
export class TodoController {
  private _db: Todo[];

  constructor() {
    this._db = [];
  }

  public getAllTodos(req: Request, res: Response) {
    const todos = this._db;
    return res.json({ todos });
  }
}

// with normal classic function
let _db: Todo[] = [];
export function getAllTodos(req: Request, res: Response) {
  return res.json({ todos: _db });
}

export async function createTodo(req: Request, res: Response) {
  try {
    const data = req.body;
    const validateresult = todoValidationSchema.safeParse(data);
    if (validateresult.error)
      return res.json({
        error: validateresult.error.issues.map((err) => err.message),
      });
    _db.push(validateresult.data);

    return res.status(201).json({
      message: "todo created successfully",
      todo: validateresult.data,
    });
  } catch (error: any) {
    return res.json({ error: error.message });
  }
}

export async function updateTodo(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;
    const validationResult = todoValidationSchema.safeParse({id, data});
    if (validationResult.error)
      return res.json({
        error: validationResult.error.issues.map((err) => err.message),
      });

    const todoIndex = _db.findIndex((td) => td.id === id);

    _db[todoIndex] = {
      ..._db[todoIndex],
      ...data,
    };
    
    if(todoIndex === -1) return res.json({message: "todo not exist"})
    return res.json({message: "todo updated", data})
  } catch (error: any) {
    return res.json({ error: error.message });
  }
}


export function deleteTodo(req: Request, res:Response) {

    const {id} = req.params
     const fillterdTodo = _db.filter((td) => td.id !== id) 
     _db = fillterdTodo

     return res.json({_db})

}