import ApolloClient, { gql } from 'apollo-boost'
import { FETCH_TODOS_BEGIN, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '../action-types/todos'
import { ITodo, IFetchTodosTypes } from '../../types/todo'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

const GET_TODOS_QUERY = gql`
  query TodoApp {
    todos {
      total
      list {
        _id
        title
        dueDate
        dueTime
        repeatInterval
        status
      }
    }
  }
`

export const fetchTodos = () => {
  return async (dispatch: Function) => {
    const request = await client.query({
      query: GET_TODOS_QUERY
    })

    try {
      const result = await request
      dispatch(fetchTodosSuccess(result.data.todos.list))
    } catch (error) {
      dispatch(fetchTodosFailure(error.message))
    }
  }
}

export const fetchTodosBegin = (): IFetchTodosTypes => ({
  type: FETCH_TODOS_BEGIN
})

export const fetchTodosSuccess = (todos: ITodo[]): IFetchTodosTypes => ({
  type: FETCH_TODOS_SUCCESS,
  items: todos
})

export const fetchTodosFailure = (error: any): IFetchTodosTypes => ({
  error,
  type: FETCH_TODOS_FAILURE
})

export const addTodo = () => { }

export const deleteTodo = () => { }

export const updateTodo = () => { }

export const completeTodo = () => { }
