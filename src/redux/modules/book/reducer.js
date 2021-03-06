import { types } from './';

const initialState = {	
    takenBooks: [],
    error: null,
    allBooks: [],
    inProgress: false,
    bookIsLeft: false,
    bookIsTaken: false
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
        case types.ALL_BOOKS_REQ:
			return {
				...state,
				inProgress: true
            };
        case types.ALL_BOOKS_RES:
            console.log(action)
			return {
				...state,
                allBooks: action.payload.data,
                inProgress: false,
                bookIsTaken: false
            };
        case types.ALL_BOOKS_ERR:
			return {
				...state,
                error: action.payload.data,
                inProgress: false
            };

        case types.TAKE_BOOK_REQ:
			return {
                ...state,
                inProgress: true,
                bookIsTaken: false
            };
        case types.TAKE_BOOK_RES:
			return {
				...state,
                inProgress: false,
                bookIsTaken: true
            };
        case types.TAKE_BOOK_ERR:
			return {
				...state,
                error: action.payload.data,
                inProgress: false
            };

        case types.TAKEN_BOOKS_REQ:
			return {
				...state,
                inProgress: true,
                bookIsLeft: false
            };
        case types.TAKEN_BOOKS_RES:
			return {
				...state,
                takenBooks: action.payload.data,
                inProgress: false
            };
        case types.TAKEN_BOOKS_ERR:
			return {
				...state,
                error: action.payload.data,
                inProgress: false
            };

        case types.LEAVE_BOOK_REQ:
			return {
				...state,
                inProgress: true,
                bookIsLeft: false
            };
        case types.LEAVE_BOOK_RES:
			return {
				...state,
                inProgress: false,
                bookIsLeft: true
            };
        case types.LEAVE_BOOK_ERR:
			return {
				...state,
                error: action.payload.data,
                inProgress: false
            };
		default:
			return state;
	}
}