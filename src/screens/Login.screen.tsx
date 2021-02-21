import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { dpi } from '../functions/Common.function'
import { screenHeight, screenWidth } from '../constants/Dimension.constant'
import images from '../constants/Images.constant'
import useNavigation from '../hooks/Navigation.hook'
import useTheme from '../hooks/Theme.hook'
import OButton from '../components/OButton'
import OFlexRow from '../components/OFlexRow'
import OImage from '../components/OImage'
import OText from '../components/OText'
import OView from '../components/OView'

const LoginScreen = () => {
  const navigation = useNavigation()
  const colors = useTheme()

  return (
    <ScrollView contentContainerStyle={{ height: '100%' }} >
      <OFlexRow top={screenHeight / 5} justify="center">
        <OImage source={images.orbitLogo} width={dpi(54)} height={dpi(24)} resizeMode="contain" />
      </OFlexRow>
      <OText top={dpi(4)} size={dpi(17)} center bold>Selamat Datang</OText>
      <OView top={screenHeight / 4} paddingHorizontal={dpi(12)} >
        <OButton bottom={dpi(9)} label="Login" />
        <OFlexRow bottom={dpi(8)} justify="center">
          <OText right={dpi(2)} size={dpi(6)} >Belum memiliki Orbit?</OText>
          <TouchableOpacity>
            <OText size={dpi(6)} color="red" bold>Beli Sekarang</OText>
          </TouchableOpacity>
        </OFlexRow>
        <OText size={dpi(7)} color={colors.grey_100} center>atau</OText>
        <OView style={{ zIndex: 10 }}>
          <OButton top={dpi(4)} label="Saya membeli Orbit dari outlet" backgroundWhite />
        </OView>
      </OView>
      <OView style={{ position: 'absolute', bottom: 0 }}>
        <OImage source={images.waveImage}
          width={screenWidth} height={dpi(69)} resizeMode="stretch" />
      </OView>
    </ScrollView>
  )
}

export default LoginScreen
