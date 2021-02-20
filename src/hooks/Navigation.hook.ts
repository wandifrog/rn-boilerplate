import { BackHandler } from 'react-native'
import useApp from './App.hook'

function useNavigation() {
  const [state, dispatch] = useApp()
  const { navigation } = state

  const goBack = () => {
    // pop stack
    if (navigation.stacks.length === 0) {
      return BackHandler.exitApp()
    }

    const newStacks: Screens[] = navigation.stacks.slice(0, -1)
    const current: Screens = newStacks[newStacks.length - 1] || navigation.default
    const newNavigation: Navigation = {
      ...navigation,
      current,
      stacks: newStacks
    }
    dispatch({ type: 'SET_NAVIGATION', navigation: newNavigation })
  }

  function push(newScreen: Screens, params = null) {
    // push stack
    const stacks = [...navigation.stacks, newScreen]
    const newNavigation: Navigation = {
      ...navigation,
      params,
      current: newScreen,
      stacks
    }
    dispatch({ type: 'SET_NAVIGATION', navigation: newNavigation })
  }

  function forcePush(newScreen: Screens, params = null) {
    // clear stack and push new stack
    const newNavigation: Navigation = {
      ...navigation,
      params,
      current: newScreen,
      default: newScreen,
      stacks: []
    }
    dispatch({ type: 'SET_NAVIGATION', navigation: newNavigation })
  }

  return { goBack, push, forcePush }
}

export default useNavigation
