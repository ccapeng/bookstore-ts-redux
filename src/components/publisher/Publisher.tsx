import React, { useEffect } from 'react';
import { Link, Redirect, RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PublisherService from '../../services/publisher';
import {
  setPublisher,
  initPublisher,
  setPublisherName,
  setPublisherStatus
} from '../../actions/publisher';
import { setTab } from '../../actions/tab';
import { RootState } from "../../reducers/rootReducer";

type TParams = { id: string };
const Publisher = ({ match }: RouteComponentProps<TParams>) => {

  const { publisher, status } = useSelector((state: RootState) => {
    return state.publisher
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const _fetch = async () => {
      let id = parseInt(publisherId, 10);
      let data = await PublisherService.get(id);
      dispatch(setPublisher(data));
    }
    dispatch(setTab("publisher"));
    let publisherId = match.params.id;
    if (typeof (publisherId) !== "undefined") {
      _fetch()
    } else {
      dispatch(initPublisher());
    }
    // eslint-disable-next-line
  }, []);

  const onChangeName = (value: string) => {
    dispatch(setPublisherName(value));
  }

  const save = () => {
    const _save = async () => {
      let result = await PublisherService.save(publisher);
      dispatch(setPublisher(result));
      dispatch(setPublisherStatus("saved"));
      dispatch(setPublisherStatus("")); //reset
    }
    if (status === "") {
      dispatch(setPublisherStatus("submitting"));
      _save();
    }
  }

  if (status === "saved") {
    return (<Redirect to="/publishers"></Redirect>);
  }

  return (
    <>
      <section className="d-flex adjust-items-center">
        <h1>Publisher Editor</h1>
        <Link to="/publishers" className="ml-auto">Publishers</Link>
      </section>
      <section className="mt-3">
        <form onSubmit={(event) => { event.preventDefault(); save() }}>
          <div className="form-group">
            <label>Publisher Name</label>
            <input
              type="text"
              name="publisher"
              className="form-control"
              onChange={(event) => { onChangeName(event.target.value) }}
              value={publisher.name}
              autoFocus
            />
          </div>
          <div className="form-group">
            <input type="hidden" name="publisherId" value={publisher.id} />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )

};

export default Publisher;