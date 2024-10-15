import ServiceList from "../components/ServiceList";
import States from "../components/States";
import { Outlet } from "react-router-dom";
import { servicesRequest } from "../actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Root() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.services);

  useEffect(() => {
    dispatch(servicesRequest());
  }, [dispatch]);

  return (
    <>
      <ServiceList items={items} />
      <States error={error} loading={loading} />
      <Outlet />
    </>
  );
}
