import { type } from "os"

export type Quiz={
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type:string
}

export type QuestionTypes={
    answer: string
    question: string
    option: string[]
}
