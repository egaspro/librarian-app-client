export const types = {
    ALL_BOOKS_REQ: 'user/ALL_BOOKS_REQ',
    ALL_BOOKS_RES: 'user/ALL_BOOKS_RES',
    ALL_BOOKS_ERR: 'user/ALL_BOOKS_ERR',
    TAKE_BOOK_REQ: 'user/TAKE_BOOK_REQ',
    TAKE_BOOK_RES: 'user/TAKE_BOOK_RES',
    TAKE_BOOK_ERR: 'user/TAKE_BOOK_ERR',
    TAKEN_BOOKS_REQ: 'user/TAKEN_BOOKS_REQ',
    TAKEN_BOOKS_RES: 'user/TAKEN_BOOKS_RES',
    TAKEN_BOOKS_ERR: 'user/TAKEN_BOOKS_ERR',
    LEAVE_BOOK_REQ: 'user/LEAVE_BOOK_REQ',
    LEAVE_BOOK_RES: 'user/LEAVE_BOOK_RES',
    LEAVE_BOOK_ERR: 'user/LEAVE_BOOK_ERR'
};

const allBooksReq = () => ({ type: types.ALL_BOOKS_REQ });
const allBooksResp = () => ({ type: types.ALL_BOOKS_RES });
const allBooksErr = () => ({ type: types.ALL_BOOKS_ERR });
const takeBookReq = () => ({ type: types.TAKE_BOOK_REQ });
const takeBookResp = () => ({ type: types.TAKE_BOOK_RES });
const takeBookErr = () => ({ type: types.TAKE_BOOK_ERR });
const takenBooksReq = () => ({ type: types.TAKEN_BOOKS_REQ });
const takenBooksResp = () => ({ type: types.TAKEN_BOOKS_RES });
const takenBooksErr = () => ({ type: types.TAKEN_BOOKS_ERR });
const leaveBookReq = () => ({ type: types.LEAVE_BOOK_REQ });
const leaveBookResp = () => ({ type: types.LEAVE_BOOK_RES });
const leaveBookErr = () => ({ type: types.LEAVE_BOOK_ERR });

export const actionCreators = {
    allBooksReq,
    allBooksResp,
    allBooksErr,
    takeBookReq,
	takeBookResp,
	takeBookErr,
    takenBooksReq,
    takenBooksResp,
    takenBooksErr,
    leaveBookReq,
    leaveBookResp,
    leaveBookErr
};