import Request from "./request";
import { IBook } from "../model";

const BookService = {
  list: () => {
    let url = "api/book/";
    return Request.get(url);
  },
  get: (bookId: number) => {
    let url = `api/book/${bookId}/`;
    return Request.get(url);
  },
  save: (book: IBook) => {
    if (book.id === 0) {
      let bookObj = {
        title: book.title,
        category: book.category === 0 ? "" : book.category,
        publisher: book.publisher === 0 ? "" : book.publisher,
        author: book.author === 0 ? "" : book.author
      }
      const body = JSON.stringify(bookObj);
      let url = "api/book/";
      return Request.create(url, body);
    } else {
      let bookObj = {
        id: book.id,
        title: book.title,
        category: book.category === 0 ? "" : book.category,
        publisher: book.publisher === 0 ? "" : book.publisher,
        author: book.author === 0 ? "" : book.author
      }
      const body = JSON.stringify(bookObj);
      let url = `api/book/${book.id}/`;
      return Request.update(url, body);
    }
  },
  delete: (bookId: number) => {
    let url = `api/book/${bookId}/`;
    return Request.delete(url);
  }
}

export default BookService;