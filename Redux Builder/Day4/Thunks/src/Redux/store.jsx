import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as counterreducer } from "./counter/reducer";
import { reducer as  productreducer} from "./product/reducer";
import { thunk } from "redux-thunk";
let rootReducer= combineReducers({
    counterreducer,
    productreducer
})
export const store= legacy_createStore(rootReducer,applyMiddleware(thunk))