import React from 'react'
import { Image, ImageProps, ImageSourcePropType, ImageStyle } from 'react-native'
import { images } from '../constants/Images.constant'

type OImageProps = ComponentMetrics & ImageProps & {
  /**
   * Image height
   */
  height?: number
  /**
   * Image width
   */
  width?: number
  /**
   * Image source
   */
  source?: ImageSourcePropType
}

/**
 * Orbit image component.
 * @example
 * <OImage />
 * <OImage source={images.orbit} />
 * <OImage source={{uri: 'LINK_IMAGEE'}} />
 */
const OImage = ({
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  height = 300,
  width = 300,
  source = images.orbitLogo,
  style,
  ...props
}: OImageProps): JSX.Element => {

  const imageStyle: ImageStyle = {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
    width,
    height
  }

  return <Image source={source} style={[imageStyle, style]} {...props} />

  // return <Text style={[textStyle, style]} {...props}>{children}</Text>
}

export default OImage
