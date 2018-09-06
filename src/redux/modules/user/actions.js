export const types = {
  TAKE_BOOK: "user/TAKE_BOOK",
  LEAVE_BOOK: "user/LEAVE_BOOK",
  GET_USER_REQ: "user/GET_USER_REQ",
  GET_USER_RES: "user/GET_USER_RES",
  COUNTDOWN_TIME: "user/COUNTDOWN_TIME",
  COUNTDOWN_DONE: "user/COUNTDOWN_DONE",
  VALIDATE_USER_REQ: "user/VALIDATE_USER_REQ",
  VALIDATE_USER_RES: "user/VALIDATE_USER_RES",
  VALIDATE_USER_ERR: "user/VALIDATE_USER_ERR"
};

const takeBook = () => ({ type: types.TAKE_BOOK });
const leaveBook = () => ({ type: types.LEAVE_BOOK });
const countDownTime = data => ({
  type: types.COUNTDOWN_TIME,
  payload: { data }
});
const countDownDone = () => ({ type: types.COUNTDOWN_DONE });
const validateUserReq = data => ({
  type: types.VALIDATE_USER_REQ,
  payload: { data }
});
const validateUserRes = data => ({
  type: types.VALIDATE_USER_RES,
  payload: { data }
});
const validateUserErr = error => ({
  type: types.VALIDATE_USER_ERR,
  payload: { error }
});
const getUserReq = data => ({ type: types.GET_USER_REQ, payload: { data } });
const getUserRes = data => ({ type: types.GET_USER_RES, payload: { data } });

export const actionCreators = {
  takeBook,
  leaveBook,
  countDownTime,
  countDownDone,
  validateUserReq,
  validateUserRes,
  validateUserErr,
  getUserReq,
  getUserRes
};
