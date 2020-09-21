import * as actions from "../actions/types";

const initialState = {
  msg: "",
  status: null
}

export const errors = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status
      }
    default:
      return state;
  }
}