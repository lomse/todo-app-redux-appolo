import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface IRoundedPlusButton {
  classNames?: string
  children: ReactNode
}

const FloatingRoundButton = styled.button.attrs(({ className }) => ({ className }))`
  left: 160px;
  bottom: 20px;
  width: 70px;
  height: 70px;
  box-shadow: 2px 2px 3px #999;
`

const RoundedPlusButton: React.FC<IRoundedPlusButton> = ({ classNames, children }) => (
  <FloatingRoundButton className={classNames}>{children}</FloatingRoundButton>
)

export default RoundedPlusButton
