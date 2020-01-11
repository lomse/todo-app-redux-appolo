import { INotification } from './notification'
import { ITodoState } from '../redux/reducers/todosReducer'

export interface IDataStore {
  todos: ITodoState
  notification: INotification
}

export enum BUTTON_TYPES {
  SUBMIT = 'submit',
  CANCEL = 'cancel',
  RESET = 'reset'
}

export enum INPUT_TYPES {
  BUTTON = 'button',
  CHECKBOX = 'checkbox',
  EMAIL = 'email',
  FILE = 'file',
  HIDDEN = 'hidden',
  NUMBER = 'number',
  PASSWORD = 'password',
  RADIO = 'radio',
  SUBMIT = 'submit',
  TEXT = 'text'
}