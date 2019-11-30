import { ITodo } from "./todo";
import { INotification } from "./notification";

export interface IDataStore {
  todos: ITodo[]
  notification: INotification
}