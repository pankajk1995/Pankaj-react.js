import {combineReducers, legacy_createStore} from 'redux'
import { reducer as counterreducer} from './counter/reducer'
import { reducer as productreducer } from './product/reducer'

let rootReducer=combineReducers({
    counterreducer,
    productreducer
})

export const store= legacy_createStore(rootReducer)