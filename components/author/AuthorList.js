import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import AuthorService from '../../services/author';
import { setAuthors, setAuthorDeleted } from '../../actions/author';
import { setTab } from '../../actions/tab';

const Author = () => {

  const authors = useSelector(state => {
    return state.authors.authors
  });
  const dispatch = useDispatch();


  useEffect(() => {
    const _fetch = async () => {
      let data = await AuthorService.list();
      dispatch(setAuthors(data));
    }

    dispatch(setTab("author"));
    _fetch();
    // eslint-disable-next-line
  }, []);

  const onDeleteAuthor = (id) => {
    const _del = async () => {
      let result = await AuthorService.delete(id);
      if (result === "deleted") {
        dispatch(setAuthorDeleted(id));
      }
    }
    _del();
  }

  return (
    <>

      <section className="d-flex align-items-center">
        <h1>Authors</h1>
        <Link to="/author/add/" className="ml-auto">Add Author</Link>
      </section>
      <ul className="list-group mt-5">
        {authors.map(author =>
          <li key={author.id} className="list-group-item d-flex">
            <div>
              <Link to={`/author/${author.id}/`}>{author.lastName}, {author.firstName}</Link>
            </div>
            <button
              className="btn btn-secondary ml-auto"
              onClick={() => onDeleteAuthor(author.id)}
            >
              Delete
              </button>
          </li>
        )}
      </ul>
    </>
  )

};

export default Author;