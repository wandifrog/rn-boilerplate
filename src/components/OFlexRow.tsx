import React from 'react'
import { ComponentMetrics } from '../types/Component'
import { FlexAlignType, FlexStyle, View, ViewStyle } from 'react-native'

type OFlexProps = ComponentMetrics & {
  children: React.ReactNode
  /**
   * Align items
   */
  align?: FlexAlignType
  /**
   * Align items
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
 * Pokemon flex component.
 * @example
 * <PFlex>
 *   <div>Hello</div>
 *   <div>wWrld</div>
 * </PFlex>
 */
const PFlex = ({
  children,
  top,
  bottom,
  align,
  flexDirection,
  height,
  justify,
  padding,
  style,
  width,
  ...props
}: OFlexProps): JSX.Element => {

  const flexstyle: ViewStyle = {
    alignItems: align,
    flexDirection,
    height,
    justifyContent: justify,
    marginBottom: bottom,
    marginTop: top,
    padding,
    width,
    ...style
  }

  return <View style={flexstyle} {...props}>{children}</View>

  // return <Flex style={flexstyle} {...props}>{children}</Flex>
}

export default PFlex
