import * as React from 'react'
import styled from 'styled-components'
import CheckedIcon from './action-icons/CheckedIcon'
import UnCheckedIcon from './action-icons/UnCheckedIcon'
import DeleteIcon from './action-icons/DeleteIcon'

interface IOneTodo {
  title: string
  dueDate?: string
  completed?: boolean
}

interface IStyledTodoTitle {
  completed: boolean
}

const StyledOneTodo = styled.div`
  background: #ffffff;
  padding: 15px 20px 15px 50px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  font-size: 15px;
  box-shadow: 2px 2px 3px #999;
  position: relative;
  margin-bottom: 10px;
`

const StyledTodoDetails = styled.span`
  font-size: 12px;
  color: #858585;
`

const StyledTodoTitle = styled.span<IStyledTodoTitle>`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : '')};
`

const OneTodo: React.FC<IOneTodo> = ({ title, dueDate, completed = false }) => (
  <StyledOneTodo>
    <StyledTodoTitle completed={completed}>{title}</StyledTodoTitle>
    <br />
    <StyledTodoDetails>{dueDate ? dueDate : '-'}</StyledTodoDetails>
    {completed ? <CheckedIcon /> : <UnCheckedIcon />}
    <DeleteIcon />
  </StyledOneTodo>
)

export default OneTodo
