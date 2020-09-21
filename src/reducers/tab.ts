import { SET_TAB, TabActionTypes } from "../actions/types";
import { ITab } from "../model";

const initialState: ITab = {
  tab: ""
}

export const tab = (state = initialState, action: TabActionTypes) => {
  switch (action.type) {
    case SET_TAB:
      return {
        tab: action.payload
      }
    default:
      return state;
  }
}