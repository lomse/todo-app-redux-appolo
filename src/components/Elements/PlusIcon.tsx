import React, { CSSProperties } from 'react'

interface IPlusIcon {
  styles?: CSSProperties
}

const PlusIcon: React.FC<IPlusIcon> = ({ styles }) => <i className="fas fa-plus" style={styles}></i>

export default PlusIcon
