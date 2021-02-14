import styled from '@emotion/styled'
import React from 'react'
import PCard from '../components/PCard'
import PText from '../components/PText'
import { padding } from '../constants/Metrics.constant'
import useTranslation from '../hooks/Translation.hook'
import { getPokemons } from '../queries/Pokemon.query'

const PokemonList = (): JSX.Element => {
  const { t } = useTranslation()
  const [pokemons, setPokemons] = React.useState<Result[]>([])

  React.useEffect(() => {
    _getPokemons()
  }, [])

  async function _getPokemons() {
    try {
      const response = await getPokemons(100, 1)
      const pokemons = response.data.pokemons
      const results = pokemons.results
      setPokemons(results)
    } catch (error) {
      alert(t.global.errorSystem)
    }
  }

  return (
    <React.Fragment>
      {
        pokemons.length
          ? (
            <CardContainer>
              {pokemons.map((pokemon, index) => <PCard key={index} pokemon={pokemon} />)}
              <GapSpacer />
              <GapSpacer />
            </CardContainer>
          )
          : <PText top="20px" center>{t.pokemonList.loading}</PText>
      }
    </React.Fragment>
  )
}

const CardContainer = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: auto auto;
  justify-items: center;
  max-height: calc(100% - 125px);
  overflow: scroll;
  padding-bottom: 10px;
  padding: ${padding.content};
  width: 100%;
`
const GapSpacer = styled.div`
  height: 20px;
  width: 100%;
`

export default PokemonList
