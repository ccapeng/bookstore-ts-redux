import * as actions from "../actions/types";
import { IBookState, IBookListState } from "../model";

const initialBookListState: IBookListState = {
  bookList: []
}

export const bookList = (
  state = initialBookListState,
  action: actions.BookListActionTypes
): IBookListState => {
  switch (action.type) {
    case actions.SET_BOOK_LIST:
      return {
        bookList: action.payload
      }
    case actions.SET_BOOK_DELETED:
      return {
        ...state,
        bookList: state.bookList.filter(book => book.id !== action.payload)
      }
    default:
      return state;
  }
}


const initialBookState: IBookState = {
  book: {
    id: 0,
    title: "",
    category: 0,
    publisher: 0,
    author: 0,
    categoryName: "",
    publisherName: "",
    authorFirstName: "",
    authorLastName: ""
  },
  status: ""
}

export const book = (
  state = initialBookState,
  action: actions.BookActionTypes
) => {
  switch (action.type) {
    case actions.SET_BOOK:
      let book = action.payload;
      if (book.category === null) {
        book.category = 0;
      }
      if (book.publisher === null) {
        book.publisher = 0;
      }
      if (book.author === null) {
        book.author = 0;
      }
      return {
        ...state,
        book: book
      };
    case actions.INIT_BOOK:
      return {
        ...initialBookState
      };

    case actions.SET_BOOK_VALUE:
      return {
        ...state,
        book: {
          ...state.book,
          ...action.payload
        }
      };

    case actions.SET_BOOK_STATUS:
      if (action.payload === "saved") {
        return {
          ...initialBookState,
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