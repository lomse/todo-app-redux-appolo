import { gql } from 'apollo-boost'

export const GET_TODOS_QUERY = gql`
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

export const ADD_TODO_MUTATION = gql`
  mutation addTodo($input:AddTodoInput!){
    addTodo(input:$input) {
      _id
      title
      dueDate
      dueTime
      repeatInterval
      status
    }
  }
`

export const DELETE_TODO_MUTATION = gql`
  mutation deleteTodo($input: DeleteTodoInput!) {
    deleteTodo(input:$input) {
      _id
      title
      dueDate
      dueTime
      repeatInterval
      status
    }
  }
`