import React from 'react'
import styled from 'styled-components'

const StyledChecked = styled.i.attrs(({ className }) => ({ className }))`
  font-size: 25px;
  position: absolute;
  left: 15px;
  bottom: 23px;
  cursor: pointer;
  color: #1ba11b;
`

const CheckedIcon = () => <StyledChecked className="fas fa-check-circle" />

export default CheckedIcon
