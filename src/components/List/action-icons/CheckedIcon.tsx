import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { TODO_STATUS } from '../../../types/todo'
import { updateTodo } from '../../../redux/actions/todo'

const StyledChecked = styled.i.attrs(({ className }) => ({ className }))`
  font-size: 25px;
  position: absolute;
  left: 15px;
  bottom: 23px;
  cursor: pointer;
  color: #1ba11b;
`

interface ICheckedIconProps {
  _id: string
}

const CheckedIcon: React.FC<ICheckedIconProps> = ({ _id }) => {
  const dispatch = useDispatch()

  const handleUnCheckTodo = (_id: string) => {
    dispatch(updateTodo(_id, { status: TODO_STATUS.ACTIVE }))
  }

  return <StyledChecked onClick={() => handleUnCheckTodo(_id)} className="fas fa-check-circle" />
}

export default CheckedIcon
