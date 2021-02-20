import React from 'react'
import DashboardScreen from './screens/Dashboard.screen'
import HomeScreen from './screens/Home.screen'
import LoginScreen from './screens/Login.screen'
import useApp from './hooks/App.hook'

const Navigation = () => {
  const [state] = useApp()
  const { current } = state.navigation

  // eslint-disable-next-line no-console
  console.log(
    '%cContext State:',
    'color: orange; font-weight: bold',
    state
  )

  return React.useMemo(() => <PresentationScreen screen={current} />, [current])
}

const PresentationScreen = ({
  screen
}: { screen: Screens }) => {

  switch (screen) {
    case 'HomeScreen':
      return <HomeScreen />
    case 'LoginScreen':
      return <LoginScreen />
    case 'DashboardScreen':
      return <DashboardScreen />
    default:
      throw new Error('Screen not found')
  }
}

export default Navigation
