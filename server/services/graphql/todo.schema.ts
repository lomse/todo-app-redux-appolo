export default
  `
  type Query {
    todo(_id: String): Todo
    todos(status: String): ListOfTodos
  }

  input AddTodoInput {
    title: String!
    dueDate: String
    dueTime: String
    repeatInterval: String
    status: String
  }

  input DeleteTodoInput {
    _id: ID!
  }

  type Mutation {
    addTodo(input: AddTodoInput!): Todo
    deleteTodo(input: DeleteTodoInput!): Todo
  }

  schema {
    query: Query
    mutation: Mutation
  }
  
  type ListOfTodos {
    total: Int,
    list: [Todo]!
  }

  type Todo {
    _id: ID!
    title: String!
    dueDate: String
    dueTime: String
    repeatInterval: String
    status: String!
  }
`