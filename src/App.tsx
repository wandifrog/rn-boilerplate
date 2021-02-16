import React from 'react'
import Navigation from './App.navigation'
import { AppProvider } from './contexts/App.context'

const App = () => {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  )
}

export default App
