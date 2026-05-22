import { todoValidationSchema, type Todo } from "../../validation/todo.schema.js";
import type {Request, Response} from 'express'

// using class method 
export class TodoController {
    private _db: Todo[]

    constructor() {
        this._db = []
    }

    public getAllTodos(req: Request, res: Response) {
        const todos = this._db
        return res.json({todos})
    }
}


// with normal classic function
export function getAllTodos(req:Request, res:Response) {
    let _db: Todo[] = []
    return res.json({todos: _db})

}

export async function createTodo(req: Request, res: Response) {
    try {
        const data = req.body
        const validateresult =  todoValidationSchema.safeParse(data)
        if(validateresult.error) return res.json({error: validateresult.error.issues.map(err => err.message)})
        let todos = []
        todos.push(validateresult)
        
        return res.status(201).json({message: "todo created successfully", todos})

    } catch (error: any) {
        return res.json({error: error.message})
    }

}