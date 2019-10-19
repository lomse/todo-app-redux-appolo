import React, { Component } from 'react'
import { connect } from 'react-redux'
import App from './List/Index'
import { addTodo, deleteTodo } from '../redux/actions/todos'

interface IAppProps {
  onAddTodo: Function
}

class AppContainer extends Component<IAppProps> {
  componentDidMount() {}

  render() {
    return <App />
  }

  onAddTodo = () => {
    this.props.onAddTodo()
  }

  onDeleteTodo = () => {}
}

const mapStateToProps = (state: any) => {
  return {
    todos: state.todos
  }
}

const mapActionsToProps = {
  onAddTodo: addTodo,
  onDeleteTodo: deleteTodo
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AppContainer)
