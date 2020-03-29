import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodosListPresentation from './List/Index'
import { fetchTodos } from '../redux/actions/todo'
import { IDataStore } from '../types/common'
import { withRouter } from 'react-router-dom'
import { ITodo } from '../types/todo'

const AppContainer: React.FC = (props: any) => {
  
  const dispatch = useDispatch()
  let todos = useSelector((state: IDataStore) => state.todos)
  let items: ITodo[] = todos.items

  const filter = props.match.params.filter

  if(filter) {
    items = todos.items.filter(todo=>todo.status && todo.status.toLowerCase() === filter)
  }

  console.log({todos, filter})

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return <TodosListPresentation todos={items} loading={todos.loading} error={todos.error} filter={filter} />
}

export default withRouter(AppContainer)
