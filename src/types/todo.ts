export interface ITodo {
  id: number
  title: string
  dueDate?: Date
  repeat?: string
  endRepeat?: {
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

// export interface IFetchTodosActionTypes {
//   type: string
//   payload: {
//     todos: ITodo[]
//   }
// }

// export interface IAddTodoActionTypes {
//   type: string
//   payload: {
//     todo: ITodo
//   }
// }

// export interface IDeleteTodoActionTypes {
//   type: string
//   payload: {
//     todo: {
//       id: number
//     }
//   }
// }

// export interface IUpdateTodoActionTypes {
//   type: string
//   payload: {
//     id: number
//     body: {
//       title?: string
//       dueDate?: string
//       endRepeat?: {
//         repeatForever: boolean
//         endRepeatDate: Date
//       }
//     }
//   }
// }

// export type ITodosReducerActionTypes =
//   | IFetchTodosSuccessTypes
//   | IFetchTodosFailureTypes
