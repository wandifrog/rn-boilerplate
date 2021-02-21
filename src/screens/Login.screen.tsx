import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { images } from '../constants/Images.constant'
import OFlexRow from '../components/OFlexRow'
import OImage from '../components/OImage'
import OText from '../components/OText'
import { dpi } from '../functions/Common.function'
import useNavigation from '../hooks/Navigation.hook'
import OButton from '../components/OButton'

const LoginScreen = () => {
  const navigation = useNavigation()

  return (
    <React.Fragment>
      <OFlexRow top={dpi(78.5)} justify="center">
        <OImage source={images.orbitLogo} width={dpi(54)} height={dpi(24)} resizeMode="contain" />
      </OFlexRow>
      <OText top={dpi(4)} size={dpi(17)} lineHeight={dpi(24)} center bold>Selamat Datang</OText>
      <OFlexRow justify="center">
        <OText right={dpi(2)} size={dpi(6)} lineHeight={dpi(12)}>Belum memiliki Orbit?</OText>
        <OText size={dpi(6)} lineHeight={dpi(12)} color="red" bold>Beli Sekarang</OText>
      </OFlexRow>
      <TouchableOpacity onPress={() => navigation.push('DashboardScreen')}>
        <OText top={100} size={dpi(17)} center bold>klik saya</OText>
      </TouchableOpacity>
      <OFlexRow flexDirection="column" paddingHorizontal={dpi(12)}>
        <OButton />
        <OButton />
      </OFlexRow>
    </React.Fragment>
  )
}

export default LoginScreen
