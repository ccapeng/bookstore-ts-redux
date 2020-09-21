import * as actions from "../actions/types";
import { IAuthorState, IAuthorListState } from "../model";

const initialAuthorsState: IAuthorListState = {
  authorList: []
}

export const authorList = (
  state = initialAuthorsState,
  action: actions.AuthorListActionTypes
): IAuthorListState => {
  switch (action.type) {
    case actions.SET_AUTHOR_LIST:
      return {
        authorList: action.payload
      }
    case actions.SET_AUTHOR_DELETED:
      return {
        ...state,
        authorList: state.authorList.filter(author => author.id !== action.payload)
      }
    default:
      return state;
  }
}


const initialAuthorState: IAuthorState = {
  author: {
    id: 0,
    lastName: "",
    firstName: ""
  },
  status: ""
}

export const author = (
  state = initialAuthorState,
  action: actions.AuthorActionTypes
) => {
  switch (action.type) {
    case actions.SET_AUTHOR:
      return {
        ...state,
        author: action.payload
      };
    case actions.INIT_AUTHOR:
      return {
        ...initialAuthorState
      };

    case actions.SET_AUTHOR_VALUE:
      return {
        ...state,
        author: {
          ...state.author,
          ...action.payload
        }
      };

    case actions.SET_AUTHOR_STATUS:
      if (action.payload === "saved") {
        return {
          ...initialAuthorState,
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