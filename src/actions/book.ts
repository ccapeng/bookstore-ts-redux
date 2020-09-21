import * as actions from "../actions/types";
import { IBook } from "../model";

export const setBookList = (data: IBook[]) => {
  return {
    type: actions.SET_BOOK_LIST,
    payload: data
  }
}

export const setBookDeleted = (id: number) => {
  return {
    type: actions.SET_BOOK_DELETED,
    payload: id
  }
}

export const setBook = (data: IBook) => {
  return {
    type: actions.SET_BOOK,
    payload: data
  }
}

export const initBook = () => {
  return {
    type: actions.INIT_BOOK
  }
}

export const setBookValue = (key: string, data: string) => {
  return {
    type: actions.SET_BOOK_VALUE,
    payload: {
      [key]: data
    }
  }
}

export const setBookStatus = (status: string) => {
  return {
    type: actions.SET_BOOK_STATUS,
    payload: status
  }
}