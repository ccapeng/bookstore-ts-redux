import { CREATE_MESSAGE, GET_ERRORS } from "./types";

export const createMessage = (msg: string) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  }
}

export const returnErrors = (msg: any, status: any) => {
  return {
    type: GET_ERRORS,
    payload: {
      msg, status
    }
  }
}