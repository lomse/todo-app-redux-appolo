import Todo from "./todo.model"
import { ITodoQuery, ITodosQuery, IAddTodoMutation } from "./todo.interfaces"

export default () => {
  const resolvers = {
    Query: {
      todo: async (_: any, args: ITodoQuery) => await Todo.findOne(args),

      todos: async (_: any, args: ITodosQuery) => {
        const todos = await Todo.find(args)
        return { total: todos.length, list: todos }
      }
    },

    Mutation: {
      addTodo: async (_: any, { input }: IAddTodoMutation) => {
        if(!input.status) {
          input = Object.assign({}, input, {status: 'Active'})
        }
        console.log({input})
        return await Todo.create(input)
      }
    }
  }
  return resolvers
};