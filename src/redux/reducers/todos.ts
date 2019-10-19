interface ITodosReducerAction {
  type: string
  payload: object
}

export interface ITodoState {
  id: number
  title: string
  dueDate: Date
  repeat: string
  endRepeat: {
    repeatForever: boolean
    endRepeatDate: Date
  }
}

const initialState: ITodoState[] = []

const todosReducer = (state = initialState, { type, payload }: ITodosReducerAction) => {
  return state
}

export default todosReducer
