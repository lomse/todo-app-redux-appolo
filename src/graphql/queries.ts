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
