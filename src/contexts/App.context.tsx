import React from 'react'

const initialState: AppState = {
  darkMode: true,
  language: 'id',
  navigation: {
    params: null,
    default: null,
    stacks: [],
    current: 'Home'
  },
  modemData: {},
  screen: {}
}

const AppStateContext = React.createContext<AppState | undefined>(undefined)
const AppDispatchContext = React.createContext<AppDispatch | undefined>(undefined)

function appReducer(prevState: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'CHANGE_THEME': {
      return { ...prevState, darkMode: !prevState.darkMode }
    }
    case 'CHANGE_LANGUAGE': {
      return { ...prevState, language: prevState.language === 'id' ? 'en' : 'id' }
    }
    case 'SET_NAVIGATION': {
      return { ...prevState }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function AppProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [state, dispatch] = React.useReducer(appReducer, initialState)

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export { AppStateContext, AppDispatchContext, AppProvider, appReducer }
