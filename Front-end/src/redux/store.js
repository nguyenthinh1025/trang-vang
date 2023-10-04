import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk';
import { CareersReducer } from './reducers/CareersReducer';
import { MainCategory } from './reducers/MainCategory';
import { CareersTypeReducer } from './reducers/CareersTypeReducer';
import { BusinessReducer } from './reducers/BusinessReducer';
import { LoginReducer } from './reducers/LoginReducer.js';
import { AdvertisementsReducer } from './reducers/AdvertisementsReducer';




const rootReducer = combineReducers({
    CareersReducer,
    MainCategory,
    CareersTypeReducer,
    BusinessReducer,
    LoginReducer,
    AdvertisementsReducer,
})

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(middleWare, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer, composeCustom);