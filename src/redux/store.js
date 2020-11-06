import { createStore, applyMiddleware, compose } from 'redux'

import { appReducers } from './reducers'
import { appMiddlewares } from './middlewares'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    appReducers,
    composeEnhancers(applyMiddleware(...appMiddlewares))
);