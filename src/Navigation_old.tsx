import React from 'react'
import { BackHandler } from 'react-native'
import OView from './components/OView'
import useApp from './hooks/App.hook'
import useNavigation from './hooks/Navigation_old.hook'
import DashboardScreen from './screens/Dashboard.screen'
import HomeScreen from './screens/Home.screen'
import LoginScreen from './screens/Login.screen'
import Login2Screen from './screens/Login2.screen'


const Navigation = () => {
  const [state] = useApp()
  const navigation = useNavigation()

  const { current } = state.navigation

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.goBack()
      return true
    })

    return () => backHandler.remove()

  }, [navigation])

  // eslint-disable-next-line no-console
  console.log(
    '%cContext State:',
    'color: orange; font-weight: bold',
    state.navigation
  )

  return React.useMemo(() => <PresentationScreen screen={current} />, [current])
}

const PresentationScreen = ({
  screen
}: { screen: Screens }) => {
  // alert(screen)
  return (
    <React.Fragment>
      <OView style={{ left: screen === 'HomeScreen' ? 0 : '100%', position: 'absolute' }}>
        <HomeScreen />
      </OView>
      <OView style={{ left: screen === 'LoginScreen' ? 0 : '100%', position: 'absolute' }}>
        <LoginScreen />
      </OView>
      <OView style={{ left: screen === 'Login2Screen' ? 0 : '100%', position: 'absolute' }}>
        <Login2Screen />
      </OView>
      <OView style={{ left: screen === 'DashboardScreen' ? 0 : '100%', position: 'absolute' }}>
        <DashboardScreen />
      </OView>
    </React.Fragment>
  )
}


export default Navigation
