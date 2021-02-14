import React from 'react'
import {
  View,
  Text
} from 'react-native'

function dpi(x) {
  return x * 2
}

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

const App = () => {
  return (
    <HomeScreen />
  )
}

export default App
