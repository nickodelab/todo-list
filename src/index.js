import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

import { store } from './redux/store'
import { theme } from './styles/theme'

import App from './components/App'

if (process.env.NODE_ENV === 'development') console.log('@theme', theme)

export const Config = ({ children }) => (
  <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
              {children}
        </ThemeProvider>
  </Provider>
)

ReactDOM.render(
  <Config>
    <App />
  </Config>,
  document.getElementById('root')
)