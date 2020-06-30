import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux-immutable'
import { reducer as homeReducer } from '@/pages/home/store'
// import { reducer as headerReducer } from '@/components/header/store'

// 这里让项目支持浏览器插件Redux DevTools
const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const reducer = combineReducers({
    home: homeReducer,
    // header: headerReducer
})

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(
    reducer,
    enhancer
)

export default store
