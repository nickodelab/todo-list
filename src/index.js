import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

import { store } from './redux/store'
import { theme } from './styles/theme'
import App from './components/App'

if (process.env.NODE_ENV === 'development') console.log('@theme', theme)

const Config = ({ children }) => <>
  <Provider store={store}>
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <StrictMode>
              {children}
            </StrictMode>
        </ThemeProvider>
    </BrowserRouter>
  </Provider>
</>

const Routes = () => <>
  <Switch>
    <Route
        path="/"
        exact
        key="home"
        component={App}
    />
    <Route
        path="/edit/:itemId"
        exact
        key="edit"
        component={App}
    />
  </Switch>
</>

ReactDOM.render(
  <Config>
    <Routes />
  </Config>,
  document.getElementById('root')
)