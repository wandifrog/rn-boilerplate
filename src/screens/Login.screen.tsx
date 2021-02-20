import React from 'react'
import OText from '../components/OText'
import { dpi } from '../functions/Common.function'

const LoginScreen = () => {

  return (
    <React.Fragment>
      <OText top={100} size={dpi(17)} center bold>Selamat Datang</OText>
    </React.Fragment>
  )
}

export default LoginScreen
