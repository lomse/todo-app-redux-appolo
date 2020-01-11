import React from 'react'
import styled, { css } from 'styled-components'
import { BUTTON_TYPES } from '../../types/common'

interface IStyledButtonProps {
  buttonType: BUTTON_TYPES
}

interface IButtonProps {
  buttonType: BUTTON_TYPES
  onClick?: () => void
}

const StyledButton = styled.button<IStyledButtonProps>`
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 5px;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  &:focus {
    outline: none;
  };
  ${props => props.buttonType === BUTTON_TYPES.SUBMIT && css`
    background: #83bdfb !important;
  `}
`

const Button: React.FC<IButtonProps> = (props) => <StyledButton {...props}>{props.children}</StyledButton>

export default Button