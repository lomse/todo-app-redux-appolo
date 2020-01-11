import React from 'react'
import styled from 'styled-components'

const StyledTextInput = styled.input`
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

const TextInputElement = () => <StyledTextInput placeholder="Todo title" maxLength={45} />

export default TextInputElement
