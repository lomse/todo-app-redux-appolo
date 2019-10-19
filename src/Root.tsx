import React from 'react'
import { Store, AnyAction } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ListTodosContainer from './components/ListTodosContainer'
import AddTodoContainer from './components/AddTodoContainer'
import styled from 'styled-components'

interface IRoot {
  store: Store<any, AnyAction>
}

const StyledWrapper = styled.div`
  width: 400px;
  margin: 50px auto;
  height: 700px;
  position: relative;
  background-color: #e5e5e5;
  padding: 20px 0 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
`

const Root: React.FC<IRoot> = ({ store }) => (
  <Provider store={store}>
    <StyledWrapper>
      <Router>
        <Route exact={true} path="/" component={ListTodosContainer} />
        <Route exact path="/filter/:filter" component={ListTodosContainer} />
        <Route exact={true} path="/new-todo" component={AddTodoContainer} />
      </Router>
    </StyledWrapper>
  </Provider>
)

export default Root
