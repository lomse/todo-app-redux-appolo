import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface IPageTitle {
  children: ReactNode
}

const StyledTitle = styled.h5`
  margin-bottom: 20px;
  color: black;
  font-weight: bold;
  padding-right: 20px;
  text-align: center;
`

const PageTitle: React.FC<IPageTitle> = ({ children }) => <StyledTitle>{children}</StyledTitle>

export default PageTitle
