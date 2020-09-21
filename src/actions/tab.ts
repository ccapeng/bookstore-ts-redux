import { SET_TAB } from "./types";

export const setTab = (tab: string) => {
  return {
    type: SET_TAB,
    payload: tab
  }
}