// Core
import React from 'react'
import {
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

// Helper
import { dpi } from '../Helper/MobileHelper'

// Components
import CColors from './CColors'
import CTextApp from './CTextApp'


/**
 * Orbit default button component.
 * @example
 * <CButtonApp />
 * <CButtonApp simple/>
 * <CButtonApp label="Lanjutkan" />
 * <CButtonApp label="Mengerti" onPress={() => alert('hello world')} />
 * <CButtonApp label="Aktivasi" loading />
 * <CButtonApp label="Aktivasi" disabled />
 * @param {any} props
 * @param {string} label - button name.
 * @param {boolean} simple - for black and white button.
 * @param {function} onPress - button action when pressed.
 * @param {boolean} loading - button loading state.
 * @param {boolean} disabled - button can't be pressed.
 * @param {number} top - margin top.
 * @param {number} bottom - margin bottom.
 */
const CButtonApp = ({
  label = 'Button',
  simple = false,
  onPress = () => { },
  loading = false,
  disabled = false,
  top = 0,
  bottom = 0,
  style = {},
  ...props
}) => {

  if (loading) {disabled = true}

  const buttonStyle = {
    width: '100%',
    marginTop: top,
    marginBottom: bottom,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: dpi(10),
    borderWidth: dpi(0.5),
    paddingVertical: dpi(4),
    borderColor: disabled ? CColors.greyFive : simple ? CColors.grey100 : CColors.red100,
    backgroundColor: disabled ? CColors.greyFive : simple ? CColors.white : CColors.red100,
    ...style
  }
  const buttonFontColor = simple ? CColors.blackTwo : CColors.white

  return (
    <TouchableOpacity style={buttonStyle} onPress={() => onPress()} disabled={disabled} {...props}>
      {
        loading
          ? <ActivityIndicator color={CColors.white} />
          : <CTextApp size={dpi(8)} color={buttonFontColor} center bold>{label}</CTextApp>
      }
    </TouchableOpacity>
  )
}

export default CButtonApp
