import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../../../redux/actions/todo'
import { TODO_STATUS } from '../../../types/todo'

const StyledUnchecked = styled.i.attrs(({ className }) => ({ className }))`
  font-size: 25px;
  position: absolute;
  left: 15px;
  bottom: 23px;
  cursor: pointer;
  color: #c5c5c5;
`

interface IUnCheckedIconProps {
  _id: string
}

const UnCheckedIcon: React.FC<IUnCheckedIconProps> = ({ _id }) => {
  const dispatch = useDispatch()

  const handleCheckTodo = (_id: string) => {
    dispatch(updateTodo(_id, { status: TODO_STATUS.COMPLETED }))
  }

  return <StyledUnchecked onClick={() => handleCheckTodo(_id)} className="far fa-circle" />
}

export default UnCheckedIcon