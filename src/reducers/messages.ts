import * as actions from "../actions/types";

const initialState = "";

export const messages = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
}