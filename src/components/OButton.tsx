import React from 'react'
import { ActivityIndicator, TouchableOpacity, ViewStyle } from 'react-native'
import { dpi } from '../functions/Common.function'
import useTheme from '../hooks/Theme.hook'
import OText from './OText'

type OButtonProps = ComponentMetrics & {
  /**
   * Button label
   */
  label?: string
  /**
   * Button action when pressed
   */
  onPress?: () => void
  /**
   * Button loading state.
   */
  loading?: boolean
  /**
   * Button can't be pressed.
   */
  disabled?: boolean
}


/**
 * Orbit default button component.
 * @example
 * <OButton />
 * <OButton label="Lanjutkan" />
 * <OButton label="Mengerti" onPress={() => alert('hello world')} />
 * <OButton label="Aktivasi" loading />
 * <OButton label="Aktivasi" disabled />
 */
const OButton = ({
  top,
  bottom,
  label = 'Button',
  onPress = () => {},
  loading = false,
  disabled = false
}: OButtonProps): JSX.Element => {
  const colors = useTheme()

  if (loading) disabled = true

  const buttonStyle: ViewStyle = {
    marginTop: top,
    marginBottom: bottom,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: dpi(10),
    borderWidth: dpi(0.5),
    paddingVertical: dpi(4),
    borderColor: disabled ? 'gray' : colors.buttonRed,
    backgroundColor: disabled ? 'gray' : colors.buttonRed
  }


  const buttonLabelColor = colors.black

  return (
    <TouchableOpacity style={buttonStyle} onPress={() => onPress()} disabled={disabled}>
      {
        loading
          ? <ActivityIndicator color={colors.white_100} />
          : <OText size={dpi(8)} color={buttonLabelColor} center bold>{label}</OText>
      }
    </TouchableOpacity>
  )
}

export default OButton
