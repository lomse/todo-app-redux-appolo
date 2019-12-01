import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodosListPresentation from './List/Index'
import { fetchTodos } from '../redux/actions/todo'
import { IDataStore } from '../types/common'

interface IAppProps {
  onAddTodo: Function
  onFetchTodo: Function
}

class AppContainer extends Component<IAppProps> {
  componentDidMount() {
    this.props.onFetchTodo()
  }

  render() {
    return <TodosListPresentation />
  }

  onAddTodo = () => {
    this.props.onAddTodo()
  }

  onDeleteTodo = () => { }
}

const mapStateToProps = (state: IDataStore, ownProps: IAppProps) => {
  return {
    ...ownProps,
    todos: state.todos.items,
    loading: state.todos.loading,
    error: state.todos.error
  }
}

const mapDispatchToProps = {
  onFetchTodo: fetchTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
