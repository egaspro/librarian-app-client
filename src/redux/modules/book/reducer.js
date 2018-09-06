import { types } from './';

const initialState = {	
    takenBooks: [],
    error: null,
    allBooks: [],
    inProgress: false,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
        case types.ALL_BOOKS_REQ:
			return {
				...state,
				inProgress: true
            };
        case types.ALL_BOOKS_RES:
			return {
				...state,
                allBooks: action.payload.data,
                inProgress: false
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
				inProgress: true
            };
        case types.TAKE_BOOK_RES:
			return {
				...state,
                inProgress: false
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
				inProgress: true
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
				inProgress: true
            };
        case types.LEAVE_BOOK_RES:
			return {
				...state,
                inProgress: false
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