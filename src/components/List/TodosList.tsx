import React from 'react'
import OneTodo from './OneTodo'
import styled from 'styled-components'
import { ITodo, TODO_STATUS } from '../../types/todo'

const StyledTodosList = styled.div`
  height: 500px;
  overflow-y: auto;
  width: 90%;
  margin: auto;
`

interface ITodosList {
  todos: ITodo[]
}

const TodosList: React.FC<ITodosList> = ({ todos }) => (
  <React.Fragment>
    {todos.length === 0 && <p style={{textAlign: 'center', fontSize: 17, fontWeight: 'bold', marginTop: 250}}>No Todo found. Create one.</p>}
    {todos.length > 0 && (
      <StyledTodosList>
        {todos.map(todo => (
          <OneTodo
            key={todo._id}
            title={todo.title}
            dueDate="12/9/19, 4AM, Monthly"
            completed={todo.status === TODO_STATUS.ACTIVE ? false : true}
          />
        ))}
      </StyledTodosList>
    )}

  </React.Fragment>
)

export default TodosList
