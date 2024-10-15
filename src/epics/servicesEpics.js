import { ajax } from "rxjs/ajax";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { ofType } from "redux-observable";
import { SERVICE_DETAILS_REQUEST, SERVICES_REQUEST } from "../actions/actionTypes";
import {
  serviceDetailsFailure, serviceDetailsSuccess,
  servicesFailure, servicesSuccess,
} from "../actions/actionCreators";

export const serviceDetailsEpic = action$ => action$.pipe(
  ofType(SERVICE_DETAILS_REQUEST),
  map(action => action.payload.id),
  switchMap(id => ajax.getJSON(import.meta.env.VITE_BACKEND_URL + `/api/services/${id}`).pipe(
    map(item => serviceDetailsSuccess(item)),
    catchError(error => of(serviceDetailsFailure(error))),
  )),
);

export const servicesEpic = action$ => action$.pipe(
  ofType(SERVICES_REQUEST),
  switchMap(() => ajax.getJSON(import.meta.env.VITE_BACKEND_URL + "/api/services").pipe(
    map(items => servicesSuccess(items)),
    catchError(error => of(servicesFailure(error))),
  )),
);
