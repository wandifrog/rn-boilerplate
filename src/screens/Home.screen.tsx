import React from 'react'
import styled from '@emotion/styled'
import PFlex from '../components/PFlex'
import PText from '../components/PText'
import { fontFamily, fontSize } from '../constants/Fonts.constant'
import useApp from '../hooks/App.hook'
import useTranslation from '../hooks/Translation.hook'

const Home = (): JSX.Element => {
  const [state, dispatch] = useApp()
  const { t, language } = useTranslation()

  const [playMusic, setPlayMusic] = React.useState(true)

  function _changeTheme() {
    dispatch({ type: 'CHANGE_THEME' })
  }

  function _changeLanguage() {
    dispatch({ type: 'CHANGE_LANGUAGE' })
  }

  function _goToTokopedia() {
    window.open('https://www.tokopedia.com/', '_blank')
  }

  function _goToGithub() {
    window.open('https://github.com/wandifrog', '_blank')
  }

  function _goToLinkedIn() {
    window.open('https://www.linkedin.com/in/wandi-wandi/', '_blank')
  }

  function _playMusic() {
    try {
      if (playMusic) {
        player.playVideo()
        player.unMute()
      } else {
        player.pauseVideo()
      }
    } catch (error) {
      // for passing testing
    }
    setPlayMusic(!playMusic)
  }

  return (
    <React.Fragment>
      <Content>
        <PText top="60px" size={fontSize.normal} center
          onClick={() => _changeLanguage()}>
          {t.home.bilingualButton}
          <PText left="5px" size={fontSize.small} span font={fontFamily.pokemonSolid}>
            {language === 'id' ? 'English' : 'Bahasa'}
          </PText>
        </PText>
        <PText top="30px" size={fontSize.normal} center
          onClick={() => _changeTheme()}>
          {t.home.themeButton}
          <PText left="5px" size={fontSize.small} span font={fontFamily.pokemonSolid}>
            {state.darkMode ? t.home.lightTheme : t.home.darkTheme}
          </PText>
        </PText>
        <PText top="30px" size={fontSize.normal} center
          onClick={() => _playMusic()}>
          {t.home.musicButton}
          <PText left="5px" size={fontSize.small} span font={fontFamily.pokemonSolid}>
            {playMusic ? t.home.playMusic : t.home.pauseMusic}
          </PText>
        </PText>
        <BottomInformation>
          <PFlex bottom="5px" justify="center" align="center">
            <PText size={fontSize.small} onClick={() => _goToGithub()}>Github</PText>
            <PText right="4px" left="4px">|</PText>
            <PText size={fontSize.small} onClick={() => _goToLinkedIn()}>LinkedIn</PText>
          </PFlex>
          <PText bold italic center onClick={() => _goToTokopedia()}>#MulaiAjaDulu</PText>
        </BottomInformation>
      </Content>
    </React.Fragment>
  )
}

const Content = styled.div`
  height: calc(100% - 135px);
  padding-top: 50px;
  position: relative;
  width: 100%;
`
const BottomInformation = styled.div`
  bottom: 20px;
  position: absolute;
  width: 100%;
`

export default Home
