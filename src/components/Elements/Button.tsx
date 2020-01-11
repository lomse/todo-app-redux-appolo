import React from 'react'
import styled, { css } from 'styled-components'
import { BUTTON_TYPES } from '../../types/common'

interface IStyledButtonProps {
  buttonType: BUTTON_TYPES
  disabled: boolean
}

interface IButtonProps {
  buttonType: BUTTON_TYPES
  disabled?: boolean
  onClick?: () => void
}

const StyledButton = styled.button.attrs(props=>({disabled: props.disabled}))<IStyledButtonProps>`
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
  `};
  ${props=>props.disabled && css`
    background: #d2d2d2 !important;
  `}
`

const Button: React.FC<IButtonProps> = (props) => <StyledButton {...props}>{props.children}</StyledButton>

Button.defaultProps =  {
  disabled: false
}

export default Button