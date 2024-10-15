import {
  SERVICE_DETAILS_FAILURE, SERVICE_DETAILS_REQUEST, SERVICE_DETAILS_SUCCESS,
  SERVICES_FAILURE, SERVICES_REQUEST, SERVICES_SUCCESS,
} from "../actions/actionTypes";

const initialState = { details: null, error: null, items: [], loading: false };

export default function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICE_DETAILS_FAILURE:
      return { ...state, error: action.payload.error.message, loading: false };
    case SERVICE_DETAILS_REQUEST:
      return { ...state, details: null, error: null, loading: true };
    case SERVICE_DETAILS_SUCCESS:
      return { ...state, details: action.payload.item, error: null, loading: false };
    case SERVICES_FAILURE:
      return { ...state, error: action.payload.error.message, loading: false };
    case SERVICES_REQUEST:
      return { ...state, error: null, items: [], loading: true };
    case SERVICES_SUCCESS:
      return { ...state, error: null, items: action.payload.items, loading: false };
    default:
      return state;
  }
}
