export interface ITodo {
  id: number
  title: string
  dueDate: Date
  repeat: string
  endRepeat: {
    repeatForever: boolean
    endRepeatDate: Date
  }
}

export interface IAddTodoActionTypes {
  type: string
  payload: ITodo
}

export interface IDeleteTodoActionTypes {
  type: string
  payload: {
    id: number
  }
}

export interface IUpdateTodoActionTypes {
  type: string
  payload: {
    id: number
    body: {
      title?: string
      dueDate?: string
      endRepeat?: {
        repeatForever: boolean
        endRepeatDate: Date
      }
    }
  }
}

export type ITodosReducerActionTypes = IAddTodoActionTypes | IDeleteTodoActionTypes | IUpdateTodoActionTypes