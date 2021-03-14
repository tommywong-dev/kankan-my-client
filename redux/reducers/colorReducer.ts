import { SET_COLOR } from '../actions/actionTypes';

const colorReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_COLOR: return { data: action.payload }
    default: return state
  }
}

export default colorReducer