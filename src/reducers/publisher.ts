import * as actions from "../actions/types";
import { IPublisherState, IPublisherListState } from "../model";

const initialPublisherListState: IPublisherListState = {
  publisherList: []
}

export const publisherList = (
  state = initialPublisherListState,
  action: actions.PublisherListActionTypes
): IPublisherListState => {
  switch (action.type) {
    case actions.SET_PUBLISHER_LIST:
      return {
        publisherList: action.payload
      }
    case actions.SET_PUBLISHER_DELETED:
      return {
        ...state,
        publisherList: state.publisherList.filter(
          publisher => publisher.id !== action.payload
        )
      }
    default:
      return state;
  }
}

const initialPublisherState: IPublisherState = {
  publisher: {
    id: 0,
    name: ""
  },
  status: ""
}

export const publisher = (
  state = initialPublisherState,
  action: actions.PublisherActionTypes
) => {
  switch (action.type) {
    case actions.SET_PUBLISHER:
      return {
        ...state,
        publisher: action.payload
      };
    case actions.INIT_PUBLISHER:
      return {
        ...initialPublisherState
      };
    case actions.SET_PUBLISHER_NAME:
      return {
        ...state,
        publisher: {
          ...state.publisher,
          name: action.payload
        }
      };
    case actions.SET_PUBLISHER_STATUS:
      if (action.payload === "saved") {
        return {
          ...initialPublisherState,
          status: action.payload
        };
      } else {
        return {
          ...state,
          status: action.payload
        };
      }

    default:
      return state;
  }
}