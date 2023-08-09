const originalError = console.error

console.error = (...args) => {
  // Suppress jest error msg
  if (args[0].includes('ReactDOM.render is no longer supported in React 18.')) {
    return
  } else if (
    args[0].includes(
      'Warning: An update to %s inside a test was not wrapped in act',
    )
  ) {
    return
  }

  originalError.call(console, ...args)
}
