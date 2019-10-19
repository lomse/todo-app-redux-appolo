import React from 'react'
import styled from 'styled-components'

const StyledUnchecked = styled.i.attrs(({ className }) => ({ className }))`
  font-size: 25px;
  position: absolute;
  left: 15px;
  bottom: 23px;
  cursor: pointer;
  color: #c5c5c5;
`

const UnCheckedIcon: React.FC = () => <StyledUnchecked className="far fa-circle" />

export default UnCheckedIcon
