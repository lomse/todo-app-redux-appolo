import Todo from "./todo.model"
import { ITodoQuery, ITodosQuery } from "./todo.interfaces"

export default () => {
  const resolvers = {
    Query: {
      todo: async (_: any, args: ITodoQuery) => {
        return await Todo.findOne(args)
      },
      todos: async (_: any, args: ITodosQuery) => {
        const todos = await Todo.find(args)
        return { total: todos.length, list: todos }
      }
    },

    Mutation: {
      addTodo: async (_: any, { input }: any) => await Todo.create(input)
    }
  }
  return resolvers
};