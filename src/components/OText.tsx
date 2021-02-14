// Core
import * as React from 'react'

// Components
import CColors from '../Components/CColors'
import CText from '../Components/CText'


/**
 * Orbit text component.
 * @example
 * <CTextApp>Hello</CTextApp>
 * <CTextApp left={5} size={10}>World</CTextApp>
 * <CTextApp bold center color="red">!!</CTextApp>
 * @param {any} props
 * @param {number} size - font size.
 * @param {boolean} bold - font weight bold.
 * @param {boolean} center - text align center.
 * @param {string} color - font color.
 * @param {number} top - margin top.
 * @param {number} right - margin right.
 * @param {number} bottom - margin bottom.
 * @param {number} left - margin left.
 * @param {object} style - custom style.
 */
const CTextApp = ({
  children,
  size = 14,
  bold = false,
  center = false,
  color = CColors.blackTwo || 'initial',
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  style = {},
  ...props
}) => {

  return <CText
    style={{
      fontSize: size,
      color,
      marginTop: top,
      marginRight: right,
      marginBottom: bottom,
      marginLeft: left,
      textAlign: center ? 'center' : 'left',
      ...style
    }}
    bold={bold}
    {...props}
  >
    {children}
  </CText>
}

export default CTextApp
