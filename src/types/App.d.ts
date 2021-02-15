type AppAction =
| { type: 'CHANGE_THEME' }
| { type: 'CHANGE_LANGUAGE' }
| { type: 'SET_NAVIGATION', navigation: Navigation }
| { type: string, data: any }

type AppDispatch = (action: AppAction) => void

type Navigation = {
  params: unknown
  default: null | string
  stacks: string[]
  current: string
}

type AppState = {
  darkMode: boolean
  language: 'id' | 'en'
  navigation: Navigation
  modemData: any
  screen: any
}
