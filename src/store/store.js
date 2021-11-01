import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import { AuthReducer } from "../reducers/authReducer";
import { NotesReducer } from "../reducers/notes";
import { ThemesReducer } from "../reducers/themesReducer";
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: AuthReducer,
    ui: uiReducer,
    themes: ThemesReducer,
    notes: NotesReducer
})
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)