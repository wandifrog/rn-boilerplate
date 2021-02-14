import React from 'react'

const appContextPersist = localStorage.getItem('app-context-persist')
const appContextPersistJson: AppState | null = appContextPersist && JSON.parse(appContextPersist)
const initialState = appContextPersistJson || {
  darkMode: true,
  language: 'en',
  myPokemonList: []
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
    case 'UPDATE_MY_POKEMON_LIST': {
      return { ...prevState, myPokemonList: action.data }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function AppProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [state, dispatch] = React.useReducer(appReducer, initialState)

  localStorage.setItem('app-context-persist', JSON.stringify(state))

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export { AppStateContext, AppDispatchContext, AppProvider, appReducer }
