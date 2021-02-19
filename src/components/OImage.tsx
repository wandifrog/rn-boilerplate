import React from 'react'
import { Image, Text, TextProps, TextStyle } from 'react-native'
import useTheme from '../hooks/Theme.hook'

type OImageProps = ComponentMetrics & TextProps & {
  children: React.ReactNode | string
  /**
   * Font weight
   */
  bold?: boolean
  /**
   * Font weight
   */
  color?: string
  /**
   * Text align center
   */
  center?: boolean
  /**
   * Font size
   */
  size?: number
  /**
   * Line Height
   */
  lineHeight?: number
  /**
   * Span element
   */
  span?: boolean
}

/**
 * Orbit text component.
 * @example
 * <OImage>Hello</OImage>
 */
const OImage = ({
  children,
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  bold = false,
  center = false,
  color,
  size = 14,
  style,
  ...props
}: OImageProps): JSX.Element => {
  const colors = useTheme()

  const textStyle: TextStyle = {
    color: color || colors.text,
    fontSize: size,
    fontWeight: bold ? 'bold' : 'normal',
    textAlign: center ? 'center' : undefined,
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left
  }

  return <Image source={} />

  return <Text style={[textStyle, style]} {...props}>{children}</Text>
}

export default OImage
