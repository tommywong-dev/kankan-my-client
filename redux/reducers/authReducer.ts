import { LOGIN, LOGOUT, SIGNUP } from '../actions/actionTypes';

const authReducer = (state = { user: null }, action: Action) => {
  switch (action.type) {
    case LOGIN: return { user: action.payload }
    case LOGOUT: return { user: action.payload }
    case SIGNUP: return { user: action.payload }
    default: return { ...state }
  }
}

interface Action {
  type: string
  payload: object
}

export default authReducer
