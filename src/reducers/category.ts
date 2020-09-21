//import * as actions from "../actions/types";
import * as actions from "../actions/types";
import { ICategory, ICategoryState, ICategoryListState } from "../model";

const initialCategoryListState: ICategoryListState = {
  categoryList: []
}

export const categoryList = (
  state = initialCategoryListState,
  action: actions.CategoryListActionTypes
): ICategoryListState => {
  switch (action.type) {
    case actions.SET_CATEGORY_LIST:
      return {
        categoryList: action.payload
      }
    case actions.SET_CATEGORY_DELETED:
      return {
        ...state,
        categoryList: state.categoryList.filter(category => category.id !== action.payload)
      }
    default:
      return state;
  }
}


const initialCategoryState: ICategoryState = {
  category: {
    id: 0,
    name: ""
  },
  status: ""
}

export const category = (
  state = initialCategoryState,
  action: actions.CategoryActionTypes
): ICategoryState => {
  switch (action.type) {
    case actions.SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case actions.INIT_CATEGORY:
      return {
        ...initialCategoryState
      };
    case actions.SET_CATEGORY_NAME:
      return {
        ...state,
        category: {
          ...state.category,
          name: action.payload
        }
      };
    case actions.SET_CATEGORY_STATUS:
      if (action.payload === "saved") {
        return {
          ...initialCategoryState,
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