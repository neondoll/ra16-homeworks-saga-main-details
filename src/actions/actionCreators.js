import {
  SERVICE_DETAILS_FAILURE, SERVICE_DETAILS_REQUEST, SERVICE_DETAILS_SUCCESS,
  SERVICES_FAILURE, SERVICES_REQUEST, SERVICES_SUCCESS,
} from "./actionTypes";

export const serviceDetailsFailure = error => ({ type: SERVICE_DETAILS_FAILURE, payload: { error } });
export const serviceDetailsRequest = id => ({ type: SERVICE_DETAILS_REQUEST, payload: { id } });
export const serviceDetailsSuccess = item => ({ type: SERVICE_DETAILS_SUCCESS, payload: { item } });

export const servicesFailure = error => ({ type: SERVICES_FAILURE, payload: { error } });
export const servicesRequest = () => ({ type: SERVICES_REQUEST });
export const servicesSuccess = items => ({ type: SERVICES_SUCCESS, payload: { items } });
