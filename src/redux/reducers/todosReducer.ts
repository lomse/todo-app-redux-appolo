import { IFetchTodosTypes, ITodo } from '../../types/todo'
import { FETCH_TODOS_BEGIN, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '../action-types/todos'

export interface ITodoState {
  items: ITodo[]
  loading: boolean
  error: string | null
}

const initialState: ITodoState = {
  items: [],
  loading: true,
  error: null
}

const todosReducer = (state = initialState, action: IFetchTodosTypes) => {
  switch (action.type) {
    case FETCH_TODOS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        items: action.items,
        loading: false,
        error: null
      }

    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        items: [],
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default todosReducer
