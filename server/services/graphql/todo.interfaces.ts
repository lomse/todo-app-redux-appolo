import { Document } from "mongoose";

enum ITodoRepeatInterval {
  Weekly='Weekly',
  Monthly='Monthly',
  Yearly='Yearly'
}

enum ITodoStatus {
  Active='Active',
  Completed='Completed'
}

export interface ITodoModel extends Document {
  title: string
  dueDate: Date
  dueTime: Date
  repeatInterval: ITodoRepeatInterval
  status?: ITodoStatus
}

export interface ITodoUpdateModel extends Document {
  title?: string
  dueDate?: Date
  dueTime?: Date
  repeatInterval?: ITodoRepeatInterval
  status?: ITodoStatus
}

export interface ITodoQuery {
  _id?: string
}

export interface ITodosQuery {
  status?: string
}

export interface IAddTodoMutation {
  input: ITodoModel
}

export interface IUpdateTodoMutation {
  _id: string
  input: ITodoUpdateModel
}

export interface IDeleteTodoMutation {
  _id: string
}