import { INotification } from './notification'
import { ITodoState } from '../redux/reducers/todosReducer'

export interface IDataStore {
  todos: ITodoState
  notification: INotification
}
