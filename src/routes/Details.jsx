import { serviceDetailsRequest } from "../actions/actionCreators.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Details() {
  const dispatch = useDispatch();
  const { details } = useSelector(state => state.services);
  const { id } = useParams();

  useEffect(() => {
    dispatch(serviceDetailsRequest(id));
  }, [dispatch, id]);

  return (details && (
    <div className="service-details">
      <h1>{details.name}</h1>
      <p>{details.content}</p>
      <p>{details.price}</p>
    </div>
  ));
}
