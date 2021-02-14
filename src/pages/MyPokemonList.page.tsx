import React from 'react'
import styled from '@emotion/styled'
import PFlex from '../components/PFlex'
import PModal from '../components/PModal'
import PText from '../components/PText'
import { fontFamily, fontSize } from '../constants/Fonts.constant'
import { padding } from '../constants/Metrics.constant'
import useApp from '../hooks/App.hook'
import useTranslation from '../hooks/Translation.hook'
import { formatDate } from '../functions/NotMoment.function'

const MyPokemonList = (): JSX.Element => {
  const [state, dispatch] = useApp()
  const { t, language } = useTranslation()

  const [pokemonIndex, setPokemonIndex] = React.useState(0)
  const [showModal, setShowModal] = React.useState(false)

  const _removePokemon = (index: number) => {
    const newMyPokemonList = state.myPokemonList.filter((pokemon, pokemonIndex) => {
      return pokemonIndex !== index
    })

    const pokemonName = (state.myPokemonList[pokemonIndex].name).toLowerCase()
    const pokemonOwnedDb = database.ref(`pokemonOwned/${pokemonName}`)
    pokemonOwnedDb.once('value', (snapshot: { val: () => number }) => {
      const pokemonOwned = snapshot.val()
      if (pokemonOwned === 0) return
      pokemonOwnedDb.set(pokemonOwned - 1)
    })

    dispatch({ type: 'UPDATE_MY_POKEMON_LIST', data: newMyPokemonList })
    setShowModal(false)
  }

  const _openRemoveModal = (index: number) => {
    setPokemonIndex(index)
    setShowModal(true)
  }

  return (
    <React.Fragment>
      <PModal visible={showModal}>
        <PText top="10px" bottom="30px" size={fontSize.normal} center>
          {t.myPokemonList.removeMessage} {state.myPokemonList[pokemonIndex]?.givenName}?
        </PText>
        <PFlex top="10px" padding="0 10px" justify="space-between">
          <PText font={fontFamily.pokemonSolid} center
            onClick={() => setShowModal(false)}>{t.myPokemonList.cancel}</PText>
          <PText font={fontFamily.pokemonSolid} center
            onClick={() => _removePokemon(pokemonIndex)}>{t.myPokemonList.remove}</PText>
        </PFlex>
      </PModal>
      <Content>
        <PText bottom="20px" size={fontSize.large} center>{t.myPokemonList.title}</PText>
        {
          state.myPokemonList.map((pokemon, index) => {

            return (
              <PokemonListCard key={index}>
                <PFlex justify="space-between" align="center">
                  <PFlex>
                    <PokemonImage src={pokemon.image} title={pokemon.name} />
                    <PFlex flexDirection="column" justify="center">
                      <PText>{pokemon.givenName}</PText>
                      <PText size={fontSize.small}>{formatDate(pokemon.date, 'day c s date s month s year', language)}</PText>
                    </PFlex>
                  </PFlex>
                  <PText right="12px" font={fontFamily.pokemonSolid} bold
                    onClick={() => _openRemoveModal(index)}>X</PText>
                </PFlex>
              </PokemonListCard>
            )
          })
        }
        {
          state.myPokemonList.length === 0 ? (
            <PText top="60px" center>{t.myPokemonList.emptyPokemonMessage}</PText>
          ) : null
        }
      </Content>
    </React.Fragment>
  )
}

const Content = styled.div`
  padding: ${padding.content};
`
const PokemonListCard = styled.div`
  border: 1px solid gray;
  margin: 10px 0;
  padding: 10px 0;
  width: 100%;
`
const PokemonImage = styled.img`
  height: 50px;
  width: 50px;
`

export default MyPokemonList
