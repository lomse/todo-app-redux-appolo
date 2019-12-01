import React from 'react'
import styled from 'styled-components'

const StyledDeleteIcon = styled.i.attrs(({ className }) => ({ className }))`
  position: absolute;
  right: 20px;
  top: 30px;
  color: crimson;
  cursor: pointer;
`

const DeleteIcon: React.FC = () => <StyledDeleteIcon className="fas fa-trash" />

export default DeleteIcon
