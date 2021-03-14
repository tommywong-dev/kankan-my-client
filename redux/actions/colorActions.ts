import { SET_COLOR } from './actionTypes';

export const setColor = (theme) => dispatch => {
  return dispatch({
    type: SET_COLOR,
    payload: { theme }
  })
}