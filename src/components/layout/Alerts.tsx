import React, { useEffect } from 'react'
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";

export const Alerts = () => {

  const errors = useSelector((state: RootState) => state.errors);
  const message = useSelector((state: RootState) => state.messages);
  console.log("errors", errors);
  console.log("message", message);
  const alert = useAlert();

  useEffect(() => {
    if (errors.msg !== "") {
      alert.error(errors.msg)
    }
    // eslint-disable-next-line
  }, [errors]);

  useEffect(() => {
    if (message !== "") {
      alert.success(message)
    }
    // eslint-disable-next-line
  }, [message]);

  return (
    <></>
  )
}

export default Alerts;