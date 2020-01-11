export default
  `
  type Query {
    todo(_id: String): Todo
    todos(status: String): ListOfTodos
  }

  input TodoInput {
    title: String!
    dueDate: String
    dueTime: String
    repeatInterval: String
    status: String
  }

  type Mutation {
    addTodo(input: TodoInput!): Todo
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