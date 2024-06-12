import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as ProductReducer} from "./Product/reducer";
import { thunk } from "redux-thunk";
import { reducer as Authreducer } from "./auth/reducer";
let rootReducer=combineReducers({
    ProductReducer,
    Authreducer
})
export const store= legacy_createStore(rootReducer,applyMiddleware(thunk))