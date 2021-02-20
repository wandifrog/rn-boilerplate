import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Navigation from './App.navigation'
import { AppProvider } from './contexts/App.context'

const App = () => {
  const [splashScreen, setSplashScreen] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => setSplashScreen(false), 3000)
  }, [])

  return (
    <SafeAreaView>
      {splashScreen ? <SplashScreen /> : null}
      <AppProvider>
        {!splashScreen ? <Navigation /> : null}
      </AppProvider>
    </SafeAreaView>
  )
}

const SplashScreen = () => {

  return (
    <React.Fragment>
      <Text style={{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '40%',
        textAlign: 'center'
      }}>Splash Screen</Text>
    </React.Fragment>
  )
}

export default App
