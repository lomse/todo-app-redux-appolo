import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../../redux/actions/todo'

const StyledDeleteIcon = styled.i.attrs(({ className }) => ({ className }))`
  position: absolute;
  right: 20px;
  top: 30px;
  color: crimson;
  cursor: pointer;
`

interface IDeleteIconProps {
  _id: string
}

const DeleteIcon: React.FC<IDeleteIconProps> = ({ _id }) => {

  const dispatch = useDispatch()

  const handleDeleteTodo = (_id: string) => {
    dispatch(deleteTodo(_id))
  }

  return <StyledDeleteIcon onClick={() => handleDeleteTodo(_id)} className="fas fa-trash" />
}

export default DeleteIcon
