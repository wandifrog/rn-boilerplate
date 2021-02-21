import React from 'react'
import { FlexAlignType, View, ViewStyle } from 'react-native'

type OFlexRowProps = ComponentMetrics & {
  children: React.ReactNode
  /**
   * Align items
   */
  align?: FlexAlignType
  /**
   * Flex direction
   */
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /**
   * Height
   */
  height?: number | string
  /**
   * Justify content
   */
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /**
   * Width
   */
  width?: number | string
  /**
   * Padding
   */
  padding?: number | string
  /**
   * Style
   */
  style?: ViewStyle
}

/**
 * Orbit flex component.
 * @example
 * <OFlex>
 *   <OText>Hello</OText>
 *   <OText>wWrld</OText>
 * </OFlex>
 */
const OFlexRow = ({
  children,
  top,
  right,
  bottom,
  left,
  align,
  flexDirection = 'row',
  height,
  justify,
  padding,
  paddingHorizontal,
  paddingVertical,
  style,
  width,
  ...props
}: OFlexRowProps): JSX.Element => {

  const flexRowStyle: ViewStyle = {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
    alignItems: align,
    flexDirection,
    height,
    justifyContent: justify,
    padding,
    paddingHorizontal,
    paddingVertical,
    width,
    ...style
  }

  return <View style={flexRowStyle} {...props}>{children}</View>
}

export default OFlexRow
