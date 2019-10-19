import React from 'react'
import OneTodo from './OneTodo'
import styled from 'styled-components'

const StyledTodosList = styled.div`
  height: 500px;
  overflow-y: auto;
  width: 90%;
  margin: auto;
`

const TodosList: React.FC = () => (
  <StyledTodosList>
    <OneTodo title="Learn React.js" dueDate="12/9/19, 4AM, Monthly" />
    <OneTodo title="Go for jogging" dueDate="12/9/19, 4AM, Monthly" completed={true} />
    <OneTodo title="Do push-ups" />
    <OneTodo title="Drink water" dueDate="12/9/19, 4AM, Monthly" completed={true} />
    <OneTodo title="Call Mom" completed={true} />
    <OneTodo title="Pay video games" dueDate="12/9/19, 4AM, Monthly" completed={true} />
    <OneTodo title="Visit auntie Jane" />
    <OneTodo title="Read books" completed={true} />
    <OneTodo title="Write a tutorial" />
    <OneTodo title="Go to the kitchen" dueDate="12/9/19, 4AM, Monthly" completed={true} />
    <OneTodo title="Check upon madam" dueDate="12/9/19, 4AM, Monthly" completed={true} />
    <OneTodo title="Watch documentary" completed={true} />
  </StyledTodosList>
)

export default TodosList
