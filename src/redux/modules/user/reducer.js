import { types } from "./";

const initialState = {
  error: null,
  isValidating: false,
  isValidated: false,
  isLibraryCustomer: false,
  isTakingBook: false,
  isLeavingBook: false,
  recognitionTimerValue: 100,
  recognitionTimerDone: false,
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.TAKE_BOOK:
      return {
        ...state,
        isTakingBook: true
      };
    case types.TAKE_BOOK:
      return {
        ...state,
        isLeavingBook: true
      };
    case types.COUNTDOWN_TIME:
      return {
        ...state,
        recognitionTimerValue: action.payload.data
      };
    case types.COUNTDOWN_DONE:
      return {
        ...state,
        recognitionTimerDone: true
      };
    case types.VALIDATE_USER_REQ:
      return {
        ...state,
        base64: action.payload.data,
        isValidating: true,
        recognitionTimerDone: true
      };
    case types.VALIDATE_USER_RES:
      return {
        ...state,
        isValidating: false,
        isError: null,
        isValidated: true,
        userId: action.payload.data.id,
        isLibraryCustomer: action.payload.data.isValid
      };
    case types.GET_USER_REQ:
      return {
        ...state,
        loading: true
      };
    case types.GET_USER_RES:
      return {
        ...state,
        loading: false,
        firstName: action.payload.data.firstName,
        lastName: action.payload.data.lastName
      };
    case types.VALIDATE_USER_ERR:
      return {
        ...state,
        isValidating: false,
        isValidated: true,
        error: action.payload.error
      };
    default:
      return state;
  }
}
