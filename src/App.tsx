import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { AppProvider } from './contexts/App.context'
import useApp from './hooks/App.hook'

function dpi(x) {
  return x * 2
}

const HomeScreen = () => {
  const [state] = useApp()

  console.log(state)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Scree</Text>
    </View>
  )
}

const App = () => {
  return (
    <AppProvider>
      <HomeScreen />
    </AppProvider>
  )
}

export default App
