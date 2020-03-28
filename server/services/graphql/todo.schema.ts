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

  input UpdateTodoInput {
    title: String
    dueDate: String
    dueTime: String
    repeatInterval: String
    status: String
  }

  type Mutation {
    addTodo(input: AddTodoInput!): Todo
    updateTodo(_id: String!, input: UpdateTodoInput): Todo
    deleteTodo(_id: ID!): Todo
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