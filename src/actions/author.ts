import * as actions from "../actions/types";
import { IAuthor } from "../model";

export const setAuthorList = (data: IAuthor[]) => {
  return {
    type: actions.SET_AUTHOR_LIST,
    payload: data
  }
}

export const setAuthorDeleted = (id: number) => {
  return {
    type: actions.SET_AUTHOR_DELETED,
    payload: id
  }
}

export const setAuthor = (data: IAuthor) => {
  return {
    type: actions.SET_AUTHOR,
    payload: data
  }
}

export const initAuthor = () => {
  return {
    type: actions.INIT_AUTHOR
  }
}

export const setAuthorValue = (key: string, data: string) => {
  return {
    type: actions.SET_AUTHOR_VALUE,
    payload: {
      [key]: data
    }
  }
}

export const setAuthorStatus = (status: string) => {
  return {
    type: actions.SET_AUTHOR_STATUS,
    payload: status
  }
}