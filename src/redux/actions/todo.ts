import ApolloClient from 'apollo-boost'
import { FETCH_TODOS_BEGIN, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, ADD_TODO_FAILURE, ADD_TODO_SUCCESS, ADD_TODO_STARTED, DELETE_TODO_STARTED, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE, UPDATE_TODO_SUCCESS } from '../action-types/todos'
import { ITodo, IFetchTodosTypes, IAddTodoFailureTypes, IAddTodoSuccessTypes, IAddTodoStartedTypes, IAddDeleteFailureTypes } from '../../types/todo'
import { GET_TODOS_QUERY, ADD_TODO_MUTATION, DELETE_TODO_MUTATION, UPDATE_TODO_MUTATION } from '../../graphql/queries'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

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

export const addTodo = (payload: any) => {
  return async (dispatch: Function) => {

    dispatch(addTodoStarted())

    const request = await client.mutate({
      variables: { input: payload },
      mutation: ADD_TODO_MUTATION
    })

    try {
      const result = await request
      await client.resetStore()
      dispatch(addTodoSuccess(result.data.addTodo))
    } catch (error) {
      dispatch(addTodoFailure(error.message))
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

export const addTodoStarted = (): IAddTodoStartedTypes => ({
  type: ADD_TODO_STARTED
})

export const addTodoFailure = (error: any): IAddTodoFailureTypes => ({
  error,
  type: ADD_TODO_FAILURE
})

export const addTodoSuccess = (todo: ITodo): IAddTodoSuccessTypes => ({
  item: todo,
  type: ADD_TODO_SUCCESS
})

export const updateTodoSuccess = (todo: ITodo) => ({
  item: todo,
  type: UPDATE_TODO_SUCCESS
})

export const deleteTodo = (_id: string) => {
  return async (dispatch: Function) => {
    dispatch(deleteTodoStarted())

    const request = await client.mutate({
      variables: { _id },
      mutation: DELETE_TODO_MUTATION
    })

    try {
      const result = await request
      await client.resetStore()
      dispatch(deleteTodoSuccess(result.data.deleteTodo))
    } catch (error) {
      dispatch(deleteTodoFailure(error.message))
    }
  }
}

export const deleteTodoStarted = () => ({
  type: DELETE_TODO_STARTED
})

export const deleteTodoSuccess = (todo: ITodo) => ({
  type: DELETE_TODO_SUCCESS
})

export const deleteTodoFailure = (error: IAddDeleteFailureTypes) => ({
  error,
  type: DELETE_TODO_FAILURE
})

export const updateTodo = (id: String, payload: any) => {
  return async (dispatch: Function) => {

    dispatch(addTodoStarted())

    const request = await client.mutate({
      variables: { _id: id, input: payload },
      mutation: UPDATE_TODO_MUTATION
    })

    try {
      await request
      await client.resetStore()

      dispatch(fetchTodos())
    } catch (error) {
      dispatch(addTodoFailure(error.message))
    }
  }
}
