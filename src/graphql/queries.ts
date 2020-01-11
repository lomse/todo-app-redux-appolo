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
  mutation addTodo($input:TodoInput!){
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
