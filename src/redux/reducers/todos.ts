import { ITodo, ITodosReducerActionTypes } from "../../types/todo"

const initialState: ITodo[] = []

const todosReducer = (state = initialState, { type, payload }: ITodosReducerActionTypes) => {
  return state
}

export default todosReducer
