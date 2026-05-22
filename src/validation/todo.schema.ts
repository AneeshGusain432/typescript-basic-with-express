import {  z } from "zod"

// export interface ITodo {
//     id: string
//     tittle: string
//     description?: string,
//     isCompleted: boolean
// }

export const todoValidationSchema = z.object({
    id: z.string().describe("ID of the todo"),
    tittle: z.string().describe("tittle of the todo"),
    description: z.string().optional().describe("description of the todo"),
    isCompleted: z.boolean().default(false).describe("if the todo items is competed or not")
})

export  type Todo = z.infer<typeof todoValidationSchema>