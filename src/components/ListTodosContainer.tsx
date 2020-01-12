import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodosListPresentation from './List/Index'
import { fetchTodos } from '../redux/actions/todo'
import { IDataStore } from '../types/common'

const AppContainer: React.FC = () => {

  const dispatch = useDispatch()
  const todos = useSelector((state: IDataStore) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return <TodosListPresentation todos={todos.items} loading={todos.loading} error={todos.error} />
}

export default AppContainer
