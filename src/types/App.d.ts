type AppAction =
| { type: 'CHANGE_THEME' }
| { type: 'CHANGE_LANGUAGE' }
| { type: 'UPDATE_MY_POKEMON_LIST', data: MyPokemon[] }
| { type: string, data: any }

type AppDispatch = (action: AppAction) => void

type MyPokemon = {
  date: Date
  givenName: string
  image: string | undefined
  name: string
}

type AppState = {
  darkMode: boolean
  language: 'id' | 'en'
  myPokemonList: MyPokemon[]
}
