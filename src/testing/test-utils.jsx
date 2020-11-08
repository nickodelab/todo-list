import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import { render } from '@testing-library/react'

import { createStore, applyMiddleware } from 'redux'
import { appReducer } from '../redux/reducers'
import { appMiddlewares } from '../redux/middlewares'

import { theme } from '../styles/theme'

const customRender = (
  ui,
  {
    initialState,
    store = createStore(appReducer, initialState, applyMiddleware(...appMiddlewares))
  } = {}
) => {

  const Wrapper = <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  </Provider>
  return render(Wrapper)
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

