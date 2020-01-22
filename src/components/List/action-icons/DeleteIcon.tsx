import React from 'react'
import styled from 'styled-components'

const StyledDeleteIcon = styled.i.attrs(({ className }) => ({ className }))`
  position: absolute;
  right: 20px;
  top: 30px;
  color: crimson;
  cursor: pointer;
`

interface IDeleteIcon {
  onClick: () => void
}

const DeleteIcon: React.FC<IDeleteIcon> = () => <StyledDeleteIcon className="fas fa-trash" />

export default DeleteIcon
