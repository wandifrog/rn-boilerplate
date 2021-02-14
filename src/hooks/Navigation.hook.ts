function useNavigation() {

  function goBack() {
    // pop stack
    alert('go back')
  }

  function push() {
    // push stack
    alert('push')
  }

  function forcePush() {
    // clear stack and push new stack
    alert('force push')
  }

  return { goBack, push, forcePush }
}

export default useNavigation
