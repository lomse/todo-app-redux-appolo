import ApolloClient from 'apollo-boost'
import { FETCH_TODOS_BEGIN, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, ADD_TODO_FAILURE, ADD_TODO_SUCCESS, ADD_TODO_STARTED } from '../action-types/todos'
import { ITodo, IFetchTodosTypes, IAddTodoFailureTypes, IAddTodoSuccessTypes, IAddTodoStartedTypes } from '../../types/todo'
import { GET_TODOS_QUERY, ADD_TODO_MUTATION } from '../../graphql/queries'

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

export const addTodo = (body: any) => {
  return async (dispatch: Function) => {

    dispatch(addTodoStarted())


    // const request = await client.mutate({
    //   variables: {input: body},
    //   mutation: ADD_TODO_MUTATION
    // })

    // try {
    //   const result = await request
    //   console.log({result})
    //   dispatch(addTodoSuccess(result.data.todos.list))
    // } catch (error) {
    //   dispatch(addTodoFailure(error.message))
    // }
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

export const deleteTodo = () => { }

export const updateTodo = () => { }

export const completeTodo = () => { }
