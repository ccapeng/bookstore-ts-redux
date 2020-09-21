import React, { useEffect } from 'react';
import { Link, Redirect, RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CategoryService from '../../services/category';
import {
  setCategory,
  initCategory,
  setCategoryName,
  setCategoryStatus
} from '../../actions/category';
import { returnErrors } from '../../actions/messages';
import { setTab } from '../../actions/tab';
import { RootState } from "../../reducers/rootReducer";

type TParams = { id: string };
const Category = ({ match }: RouteComponentProps<TParams>) => {

  const { category, status } = useSelector((state: RootState) => {
    return state.category
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const _fetch = async () => {
      let categoryId = match.params.id;
      if (typeof (categoryId) !== "undefined") {
        try {
          let id = parseInt(categoryId, 10);
          let data = await CategoryService.get(id);
          dispatch(setCategory(data));
        } catch (error) {
          dispatch(returnErrors(error, "error"));
        }
      } else {
        dispatch(initCategory());
      }
    }
    dispatch(setTab("category"));
    _fetch();
    // eslint-disable-next-line
  }, []);

  const onChangeName = (value: string) => {
    dispatch(setCategoryName(value));
  }

  const save = () => {
    const _save = async () => {
      let result = await CategoryService.save(category);
      dispatch(setCategory(result));
      dispatch(setCategoryStatus("saved"));
      dispatch(setCategoryStatus("")); //reset
    }
    if (status === "") {
      dispatch(setCategoryStatus("submitting"));
      _save();
    }
  }

  if (status === "saved") {
    return (<Redirect to="/categories" />);
  }

  return (
    <>
      <section className="d-flex align-items-center">
        <h1>Category Editor</h1>
        <Link to="/categories" className="ml-auto">Categories</Link>
      </section>
      <section className="mt-3">
        <form onSubmit={(event) => { event.preventDefault(); save() }}>
          <div className="form-group">
            <label>Category Name</label>
            <input
              type="text"
              name="category"
              className="form-control"
              onChange={(event) => { onChangeName(event.target.value) }}
              value={category.name}
              autoFocus
            />
          </div>
          <div className="form-group">
            <input type="hidden" name="categoryId" value={category.id} />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
};

export default Category;