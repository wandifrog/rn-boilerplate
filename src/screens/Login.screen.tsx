import React from 'react'
import { TouchableOpacity } from 'react-native'
import OText from '../components/OText'
import { dpi } from '../functions/Common.function'
import useNavigation from '../hooks/Navigation.hook'

const LoginScreen = () => {
  const navigation = useNavigation()

  return (
    <React.Fragment>
      <OText>LOGIN screen</OText>
      <TouchableOpacity onPress={() => navigation.push('DashboardScreen')}>
        <OText>Click Me</OText>
      </TouchableOpacity>
    </React.Fragment>
    // <React.Fragment>
    //   <OText top={100} size={dpi(17)} center bold>Selamat Datang</OText>
    //   <TouchableOpacity onPress={() => navigation.push('DashboardScreen')}>
    //     <OText top={100} size={dpi(17)} center bold>klik saya</OText>

  //   </TouchableOpacity>
  // </React.Fragment>
  )
}

export default LoginScreen
