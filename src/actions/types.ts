import {
  ICategory,
  IPublisher,
  IAuthor,
  IBook,
  IBookState,
  ITab,
  ILoose
} from "../model";

export const SET_BOOK_LIST = "SET_BOOK_LIST";
export const SET_BOOK_DELETED = "SET_BOOK_DELETED";
interface SetBookListAction {
  type: typeof SET_BOOK_LIST
  payload: IBook[]
}
interface SetBookDeleteAction {
  type: typeof SET_BOOK_DELETED
  payload: number
}
export type BookListActionTypes = SetBookListAction | SetBookDeleteAction

export const SET_BOOK = "SET_BOOK";
export const INIT_BOOK = "INIT_BOOK";
export const SET_BOOK_VALUE = "SET_BOOK_VALUE";
export const SET_BOOK_STATUS = "SET_BOOK_STATUS";
interface SetBookAction {
  type: typeof SET_BOOK
  payload: IBook
}
interface InitBookAction {
  type: typeof INIT_BOOK
  payload: IBookState
}
interface SetBookValueAction {
  type: typeof SET_BOOK_VALUE
  payload: ILoose
}
interface SetBookStatusAction {
  type: typeof SET_BOOK_STATUS
  payload: string
}
export type BookActionTypes =
  SetBookAction | InitBookAction | SetBookValueAction | SetBookStatusAction

export const SET_CATEGORY_LIST = "SET_CATEGORY_LIST";
export const SET_CATEGORY_DELETED = "SET_CATEGORY_DELETED";
interface SetCategoryListAction {
  type: typeof SET_CATEGORY_LIST
  payload: ICategory[]
}
interface SetCategoryDeleteAction {
  type: typeof SET_CATEGORY_DELETED
  payload: number
}
export type CategoryListActionTypes = SetCategoryListAction | SetCategoryDeleteAction

export const SET_CATEGORY = "SET_CATEGORY";
export const INIT_CATEGORY = "INIT_CATEGORY";
export const SET_CATEGORY_NAME = "SET_CATEGORY_NAME";
export const SET_CATEGORY_STATUS = "SET_CATEGORY_STATUS";
interface SetCategoryAction {
  type: typeof SET_CATEGORY
  payload: ICategory
}
interface InitCategoryAction {
  type: typeof INIT_CATEGORY
}
interface SetCategoryNameAction {
  type: typeof SET_CATEGORY_NAME
  payload: string
}
interface SetCategoryStatusAction {
  type: typeof SET_CATEGORY_STATUS
  payload: string
}
export type CategoryActionTypes =
  SetCategoryAction | InitCategoryAction | SetCategoryNameAction | SetCategoryStatusAction

export const SET_PUBLISHER_LIST = "SET_PUBLISHER_LIST";
export const SET_PUBLISHER = "SET_PUBLISHER";
interface SetPublisherListAction {
  type: typeof SET_PUBLISHER_LIST
  payload: IPublisher[]
}
interface SetPublisherDeleteAction {
  type: typeof SET_PUBLISHER_DELETED
  payload: number
}
export type PublisherListActionTypes =
  SetPublisherListAction | SetPublisherDeleteAction

export const SET_PUBLISHER_NAME = "SET_PUBLISHER_NAME";
export const INIT_PUBLISHER = "INIT_PUBLISHER";
export const SET_PUBLISHER_STATUS = "SET_PUBLISHER_STATUS";
export const SET_PUBLISHER_DELETED = "SET_PUBLISHER_DELETED";
interface SetPublisherAction {
  type: typeof SET_PUBLISHER
  payload: IPublisher
}
interface InitPublisherAction {
  type: typeof INIT_PUBLISHER
}
interface SetPublisherNameAction {
  type: typeof SET_PUBLISHER_NAME
  payload: string
}
interface SetPublisherStatusAction {
  type: typeof SET_PUBLISHER_STATUS
  payload: string
}
export type PublisherActionTypes =
  SetPublisherAction | InitPublisherAction | SetPublisherNameAction | SetPublisherStatusAction

export const SET_AUTHOR_LIST = "SET_AUTHOR_LIST";
export const SET_AUTHOR_DELETED = "SET_AUTHOR_DELETED";
interface SetAuthorListAction {
  type: typeof SET_AUTHOR_LIST
  payload: IAuthor[]
}
interface SetAuthorDeleteAction {
  type: typeof SET_AUTHOR_DELETED
  payload: number
}
export type AuthorListActionTypes = SetAuthorListAction | SetAuthorDeleteAction

export const SET_AUTHOR = "SET_AUTHOR";
export const INIT_AUTHOR = "INIT_AUTHOR";
export const SET_AUTHOR_VALUE = "SET_AUTHOR_VALUE";
export const SET_AUTHOR_STATUS = "SET_AUTHOR_STATUS";
interface SetAuthorAction {
  type: typeof SET_AUTHOR
  payload: IAuthor
}
interface InitAuthorAction {
  type: typeof INIT_AUTHOR
}
interface SetAuthorValueAction {
  type: typeof SET_AUTHOR_VALUE
  payload: ILoose
}
interface SetAuthorStatusAction {
  type: typeof SET_AUTHOR_STATUS
  payload: string
}
export type AuthorActionTypes =
  SetAuthorAction | InitAuthorAction | SetAuthorValueAction | SetAuthorStatusAction

export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const GET_ERRORS = "GET_ERRORS";

export const SET_TAB = "SET_TAB";
interface SetTabAction {
  type: typeof SET_TAB
  payload: ITab[]
}
export type TabActionTypes = SetTabAction