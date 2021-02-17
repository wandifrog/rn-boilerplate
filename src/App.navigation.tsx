import React from 'react'
import { SafeAreaView } from 'react-native'
import DashboardScreen from './screens/Dashboard.screen'
import HomeScreen from './screens/Home.screen'
import LoginScreen from './screens/Login.screen'
import useApp from './hooks/App.hook'

const App = () => {
  const [state] = useApp()
  const { current } = state.navigation
  let presentationScreen: null | JSX.Element = null

  // navigate animation on progress

  switch (current) {
    case 'HomeScreen':
      presentationScreen = <HomeScreen />
      break
    case 'LoginScreen':
      presentationScreen = <LoginScreen />
      break
    case 'DashboardScreen':
      presentationScreen = <DashboardScreen />
      break
    default:
      throw new Error('Screen not found')
  }

  return (
    <SafeAreaView>
      {presentationScreen}
    </SafeAreaView>
  )
}

export default App
