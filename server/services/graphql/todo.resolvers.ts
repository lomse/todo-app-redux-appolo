import Todo from "./todo.model"
import { ITodoQuery, ITodosQuery, IAddTodoMutation, IDeleteTodoMutation, IUpdateTodoMutation } from "./todo.interfaces"

export default () => {
  const resolvers = {
    Query: {
      todo: async (_: any, args: ITodoQuery) => await Todo.findOne(args),

      todos: async (_: any, args: ITodosQuery) => {
        const todos = await Todo.find(args, {}, { sort: { '_id': -1 } })
        return { total: todos.length, list: todos }
      }
    },

    Mutation: {
      addTodo: async (_: any, { input }: IAddTodoMutation) => {
        if (!input.status) {
          input = Object.assign({}, input, { status: 'Active' })
        }
        return await Todo.create(input)
      },
      updateTodo: async (_: any, { _id, input }: IUpdateTodoMutation) => {
        return await Todo.findByIdAndUpdate(_id, input, { new: true })
      },
      deleteTodo: async (_: any, { _id }: IDeleteTodoMutation) => {
        return await Todo.findOneAndDelete(_id)
      }
    }
  }
  return resolvers
};