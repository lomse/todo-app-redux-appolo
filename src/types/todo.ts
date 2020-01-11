export enum TODO_STATUS {
  ACTIVE = 'Active',
  COMPLETED = 'Completed'
}

export enum TODO_REPEAT_INTERVAL {
  WEEKLY = 'Weekly',
  MONTHLY = 'Monthly',
  YEARLY = 'Yearly'
}

export interface ITodo {
  _id: number
  title: string
  dueDate?: number
  dueTime?: number
  repeat?: string
  status?: TODO_STATUS
  repeatInterval?: {
    repeatForever: boolean
    endRepeatDate: Date
  }
}

export interface IFetchTodosBeginTypes {
  type: 'FETCH_TODOS_BEGIN'
}

export interface IFetchTodosSuccessTypes {
  type: 'FETCH_TODOS_SUCCESS'
  items: ITodo[]
}

export interface IFetchTodosFailureTypes {
  type: 'FETCH_TODOS_FAILURE'
  error: string
}

export type IFetchTodosTypes = IFetchTodosBeginTypes | IFetchTodosSuccessTypes | IFetchTodosFailureTypes

export interface IDropdownOption {
  label: string
  value: string | number
}