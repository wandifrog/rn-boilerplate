import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import useNavigation from '../hooks/Navigation.hook'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <React.Fragment>
      <Text>Home screen</Text>
      <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </React.Fragment>
  )
}

export default HomeScreen
