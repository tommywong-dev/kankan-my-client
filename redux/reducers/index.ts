import { combineReducers } from "redux";
import auth from './authReducer'
import color from './colorReducer'

export default combineReducers({auth, color})
