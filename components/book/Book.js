import React, { useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BookService from '../../services/book';
import { setBook, initBook, setBookValue, setBookStatus } from '../../actions/book';
import CategoryService from '../../services/category';
import PublisherService from '../../services/publisher';
import AuthorService from '../../services/author';
import { setCategories } from '../../actions/category';
import { setPublishers } from '../../actions/publisher';
import { setAuthors } from '../../actions/author';
import { setTab } from '../../actions/tab';

const Book = props => {

  const { book, status } = useSelector(state => {
    return state.book
  });

  const categories = useSelector(state => {
    return state.categories.categories
  });
  const publishers = useSelector(state => {
    return state.publishers.publishers
  });
  const authors = useSelector(state => {
    return state.authors.authors
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const _fetch = async () => {
      let data = await BookService.get(bookId);
      dispatch(setBook(data));
    }
    dispatch(setTab("book"));
    let bookId = props.match.params.id;
    if (typeof (bookId) !== "undefined") {
      _fetch();
    } else {
      dispatch(initBook());
    }
    // eslint-disable-next-line
  }, []);

  const onChangeBook = (key, value) => {
    dispatch(setBookValue(key, value));
  }

  const save = () => {
    const _save = async () => {
      try {
        let result = await BookService.save(book);
        dispatch(setBook(result));
        dispatch(setBookStatus("saved"));
        dispatch(setBookStatus("")); //reset
      } catch (error) {
        console.log("save error", error);
      }
    }
    if (status === "") {
      dispatch(setBookStatus("submitting"));
      _save();
    }
  }

  useEffect(() => {
    const _fetch = async () => {
      let data = await CategoryService.getAll();
      dispatch(setCategories(data));
    }
    _fetch()
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const _fetch = async () => {
      let data = await PublisherService.getAll();
      dispatch(setPublishers(data));
    }
    _fetch();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const _fetch = async () => {
      let data = await AuthorService.getAll();
      dispatch(setAuthors(data));
    }
    _fetch();
    // eslint-disable-next-line
  }, []);

  useEffect(() => { //unmount
    return () => { dispatch(initBook()) }
    // eslint-disable-next-line
  }, []);

  if (status === "saved") {
    return (<Redirect to="/books" />);
  }

  return (
    <>

      <section className="d-flex align-items-center">
        <h1>Book Editor</h1>
        <Link to="/books/" className="ml-auto">Books</Link>
      </section>
      <section className="mt-3">
        <form onSubmit={(event) => { event.preventDefault(); save() }}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={event => onChangeBook(event.target.name, event.target.value)}
              value={book.title}
              autoFocus
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              className="form-control"
              onChange={event => onChangeBook(event.target.name, event.target.value)}
              value={book.category}
            >
              <option value="0"> --- </option>
              {categories.map(category =>
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              )}
            </select>
          </div>

          <div className="form-group">
            <label>Publisher</label>
            <select
              name="publisher"
              className="form-control"
              onChange={event => onChangeBook(event.target.name, event.target.value)}
              value={book.publisher}
            >
              <option value="0"> --- </option>
              {publishers.map(publisher =>
                <option value={publisher.id} key={publisher.id}>
                  {publisher.name}
                </option>
              )}
            </select>
          </div>
          <div className="form-group">
            <label>Author</label>
            <select
              name="author"
              className="form-control"
              value={book.author}
              onChange={event => onChangeBook(event.target.name, event.target.value)}
            >
              <option value="0"> --- </option>
              {authors.map(author =>
                <option value={author.id} key={author.id}>
                  {author.lastName}, {author.firstName}
                </option>
              )}
            </select>
          </div>
          <div className="form-group">
            <input type="hidden" name="bookId" value={book.id} />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
};

export default Book;