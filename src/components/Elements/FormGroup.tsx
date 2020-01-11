import React from 'react'
import styled, { css } from 'styled-components'

interface IStyledFormGroupProps {
  textAlign?: string
}

interface IFormGroupProps {
  textAlign?: string
}

const StyledFormGroup = styled.div<IStyledFormGroupProps>`
  width: 80%;
  margin: 15px auto;
  ${props => props.textAlign === 'center' && css`
    text-align: center
  `}
`

const FormGroup: React.FC<IFormGroupProps> = props => <StyledFormGroup {...props}>{props.children}</StyledFormGroup>

export default FormGroup
