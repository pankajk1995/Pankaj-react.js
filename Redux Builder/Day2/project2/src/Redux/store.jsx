import {applyMiddleware, legacy_createStore} from 'redux'


import { combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import { reducer as counterReducer } from './counter/reducer'
let rootreducer=combineReducers({
    counterReducer
})
export const store =legacy_createStore(rootreducer,applyMiddleware(thunk))
