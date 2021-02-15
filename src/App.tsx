// import React from 'react'
// import {
//   View,
//   Text,
//   TouchableOpacity
// } from 'react-native'
// import { AppProvider } from './contexts/App.context'
// import useApp from './hooks/App.hook'
// import useNavigation from './hooks/Navigation.hook'



// const HomeScreen = () => {
//   const [state] = useApp()
//   const navigation = useNavigation()

//   console.log('Context State:', state)

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <TouchableOpacity onPress={() => navigation.push()}>
//         <Text>hello</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const Navigation = () => {
//   const [state] = useApp()
//   const asd = null

//   switch (state.navigation.current) {
//     case 'Home':

//       break

//     default:
//       break
//   }
//   return asd
// }

// const App = () => {
//   return (
//     <AppProvider>
//       <HomeScreen />
//     </AppProvider>
//   )
// }

// export default App

import 'react-native-gesture-handler'
import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

function HomeScreen({ navigation }) {
  React.useEffect(() => {
    setInterval(() => {
      console.log(123)
    }, 500)

    return () => {
      alert(123)
    }
  }, [])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  )
}

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
