import React from 'react'
import styled from 'styled-components'
import { INPUT_TYPES } from '../../types/common'

interface ITextInputElementProps {
  value: string | number
  type: INPUT_TYPES
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

interface IStyledTextInputProps {
  value: string | number
  type: INPUT_TYPES
}

const StyledTextInput = styled.input.attrs<IStyledTextInputProps>(props=>({type: props.type, value: props.value}))`
  border: 1px solid #c3bcbc;
  border-radius: 5px;
  width: 100%;
  padding: 5px;
  font-size: 14px;
  color: #3a3a3a;
  &:focus {
    outline: none;
  }
`

const TextInputElement: React.FC<ITextInputElementProps> = (props) => <StyledTextInput {...props} placeholder="Todo title" maxLength={45} />

export default TextInputElement
