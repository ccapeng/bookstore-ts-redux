export interface ICategory {
  id: number
  name: string
}

export interface ICategoryListState {
  categoryList: ICategory[]
}

export interface ICategoryState {
  category: ICategory
  status: string
}


export interface IPublisher {
  id: number,
  name: string
}

export interface IPublisherListState {
  publisherList: IPublisher[]
}

export interface IPublisherState {
  publisher: IPublisher
  status: string
}

export interface IAuthor {
  id: number,
  lastName: string,
  firstName: string
}

export interface IAuthorListState {
  authorList: IAuthor[]
}

export interface IAuthorState {
  author: IAuthor
  status: string
}

export interface IBook {
  id: number,
  title: string,
  category: number,
  categoryName: string,
  publisher: number,
  publisherName: string,
  author: number,
  authorFirstName: string,
  authorLastName: string
}

export interface IBookListState {
  bookList: IBook[]
}

export interface IBookState {
  book: IBook
  status: string
}

export interface ITab {
  tab: string
}

export interface ILoose {
  [key: string]: string
}
