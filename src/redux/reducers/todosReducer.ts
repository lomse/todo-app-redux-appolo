import { IFetchTodosTypes, ITodo } from '../../types/todo'
import { FETCH_TODOS_BEGIN, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, ADD_TODO_STARTED, ADD_TODO_SUCCESS, ADD_TODO_FAILURE } from '../action-types/todos'

export interface ITodoState {
  items: ITodo[]
  loading: boolean,
  addingStarted: boolean,
  addingEnded: boolean,
  error: string | null
}

const initialState: ITodoState = {
  items: [],
  loading: true,
  addingStarted: false,
  addingEnded: false,
  error: null
}

const todosReducer = (state = initialState, action: IFetchTodosTypes) => {
  switch (action.type) {
    case FETCH_TODOS_BEGIN:
      return {
        ...state,
        addingStarted: false,
        addingEnded: false,
        loading: true,
        error: null
      }
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        items: action.items,
        addingStarted: false,
        addingEnded: false,
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
    case ADD_TODO_STARTED:
      return {
        ...state,
        loading: false,
        addingStarted: true,
        addingEnded: false,
        error: null
      }
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        addingStarted: false,
        addingEnded: true,
        error: null
      }
    case ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        addingStarted: false,
        addingEnded: false,
        error: action.error
      }
    default:
      return state
  }
}

export default todosReducer
