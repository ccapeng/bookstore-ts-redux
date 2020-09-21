import * as actions from "../actions/types";
import { IPublisher } from "../model";

export const setPublisherList = (data: IPublisher[]) => {
  return {
    type: actions.SET_PUBLISHER_LIST,
    payload: data
  }
}

export const setPublisherDeleted = (id: number) => {
  return {
    type: actions.SET_PUBLISHER_DELETED,
    payload: id
  }
}

export const setPublisher = (data: IPublisher) => {
  return {
    type: actions.SET_PUBLISHER,
    payload: data
  }
}

export const initPublisher = () => {
  return {
    type: actions.INIT_PUBLISHER
  }
}

export const setPublisherName = (name: string) => {
  return {
    type: actions.SET_PUBLISHER_NAME,
    payload: name
  }
}

export const setPublisherStatus = (status: string) => {
  return {
    type: actions.SET_PUBLISHER_STATUS,
    payload: status
  }
}