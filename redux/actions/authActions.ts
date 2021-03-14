import { LOGIN, LOGOUT, SIGNUP } from '../actions/actionTypes';

export const login = (user: User) => dispatch => dispatch({
  type: LOGIN,
  payload: user
})


export const logout = () => dispatch => dispatch({
  type: LOGOUT,
  payload: {}
})


export const signup = (user: User) => dispatch => dispatch({
  type: SIGNUP,
  payload: user
})

interface User {
  email: string
  siteName: string
}