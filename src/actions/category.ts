import * as actions from "../actions/types";
import { ICategory } from "../model";

export const setCategoryList = (data: ICategory[]) => {
  return {
    type: actions.SET_CATEGORY_LIST,
    payload: data
  }
}

export const setCategoryDeleted = (id: number) => {
  return {
    type: actions.SET_CATEGORY_DELETED,
    payload: id
  }
}

export const setCategory = (data: ICategory) => {
  return {
    type: actions.SET_CATEGORY,
    payload: data
  }
}

export const initCategory = () => {
  return {
    type: actions.INIT_CATEGORY
  }
}

export const setCategoryName = (data: string) => {
  return {
    type: actions.SET_CATEGORY_NAME,
    payload: data
  }
}

export const setCategoryStatus = (status: string) => {
  return {
    type: actions.SET_CATEGORY_STATUS,
    payload: status
  }
}