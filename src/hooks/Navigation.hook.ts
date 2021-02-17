import useApp from './App.hook'

function useNavigation() {
  const [state, dispatch] = useApp()
  const { navigation } = state

  function goBack() {
    // pop stack
    alert('go back')
  }

  function push(newScreen: Screens, params = null) {
    // push stack
    const stacks = [...navigation.stacks, newScreen]
    const newNavigation: Navigation = {
      params,
      current: newScreen,
      default: null,
      stacks
    }
    dispatch({ type: 'SET_NAVIGATION', navigation: newNavigation })
    alert('push')
  }

  function forcePush() {
    // clear stack and push new stack
    alert('force push')
  }

  return { goBack, push, forcePush }
}

export default useNavigation
