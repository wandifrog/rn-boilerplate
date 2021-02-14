import globalTranslation from '../translations/Global.translation'
import homeTranslation from '../translations/Home.translation'
import myPokemonListTranslation from '../translations/MyPokemonList.translation'
import pokemonDetailTranslation from '../translations/PokemonDetail.translation'
import pokemonListTranslation from '../translations/PokemonList.translation'
import useApp from './App.hook'

function useTranslation() {
  const [state] = useApp()
  const { language } = state

  const t = {
    global: globalTranslation[language],
    home: homeTranslation[language],
    myPokemonList: myPokemonListTranslation[language],
    pokemonDetail: pokemonDetailTranslation[language],
    pokemonList: pokemonListTranslation[language]
  }

  return { t, language }
}

export default useTranslation
