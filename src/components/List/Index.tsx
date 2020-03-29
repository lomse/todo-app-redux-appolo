import React from 'react'
import RoundedPlusButton from '../Elements/RoundedPlusButton'
import PlusIcon from '../Elements/PlusIcon'
import TodosList from './TodosList'
import { Link } from 'react-router-dom'
import PageTitle from '../Elements/PageTitle'
import styled from 'styled-components'
import { ITodo } from '../../types/todo'

const FilterLinksMenu = styled.ul`
  margin: 0 0 20px 0;
  padding: 0;
  display: flex;
  justify-content: center;
`

const FilterLinksMenuItem = styled.li`
  list-style-type: none;
  font-size: 14px;
  padding: 0 5px;
`

const PreloaderDiv = styled.div`
  padding-top: 40%;
  text-align: center;
`
interface ITodosListWrapper {
  todos: ITodo[]
  loading: boolean
  error: string | null
  filter: string | undefined
}

const TodosListWrapper: React.FC<ITodosListWrapper> = ({ todos, loading, error, filter }) => {
  return (
    <React.Fragment>
      <PageTitle>ALL TODOS</PageTitle>

      {/* {todos.length > 0 && ( */}
      <FilterLinksMenu>
        <FilterLinksMenuItem>Show:</FilterLinksMenuItem>
        <FilterLinksMenuItem>
          <Link to="/" style={{ color: (filter === undefined ? 'red' : '') }}>All</Link>
        </FilterLinksMenuItem>
        <FilterLinksMenuItem>
          <Link to="/filter/active" style={{ color: (filter === 'active' ? 'red' : '') }}>Active</Link>
        </FilterLinksMenuItem>
        <FilterLinksMenuItem>
          <Link to="/filter/completed" style={{ color: (filter === 'completed' ? 'red' : '') }}>Completed</Link>
        </FilterLinksMenuItem>
      </FilterLinksMenu>
      {/* )} */}

      {loading && (
        <PreloaderDiv>
          <img src="./spinner.gif" alt="Preloader" />
        </PreloaderDiv>
      )}
      {error && <p>Error Message: {error}</p>}

      {!loading && <TodosList todos={todos} />}

      {!loading && !error && (
        <Link to="/new-todo">
          <RoundedPlusButton classNames="btn rounded-circle position-absolute">
            <PlusIcon styles={{ fontSize: 25 }} />
          </RoundedPlusButton>
        </Link>
      )}
    </React.Fragment>
  )
}

export default TodosListWrapper
