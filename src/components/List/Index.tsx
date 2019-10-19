import React from 'react'
import RoundedPlusButton from '../Elements/RoundedPlusButton'
import PlusIcon from '../Elements/PlusIcon'
import TodosList from './TodosList'
import { Link } from 'react-router-dom'
import PageTitle from '../Elements/PageTitle'
import styled from 'styled-components'

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

const App: React.FC = () => {
  return (
    <React.Fragment>
      <PageTitle>ALL TODOS</PageTitle>
      <FilterLinksMenu>
        <FilterLinksMenuItem>Show:</FilterLinksMenuItem>
        <FilterLinksMenuItem>
          <Link to="/">All</Link>
        </FilterLinksMenuItem>
        <FilterLinksMenuItem>
          <Link to="/filter/active">Active</Link>
        </FilterLinksMenuItem>
        <FilterLinksMenuItem>
          <Link to="/filter/completed">Completed</Link>
        </FilterLinksMenuItem>
      </FilterLinksMenu>

      <TodosList />
      <Link to="/new-todo">
        <RoundedPlusButton classNames="btn btn-info rounded-circle position-absolute">
          <PlusIcon styles={{ fontSize: 25 }} />
        </RoundedPlusButton>
      </Link>
    </React.Fragment>
  )
}

export default App
