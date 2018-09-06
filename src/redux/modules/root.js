import 'rxjs';
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { _user } from './user';
import { _books } from './book';

export const rootEpic = combineEpics(
	..._user.epics,
	..._books.epics
);

export const rootReducer = combineReducers({
	user: _user.reducer,
	books: _books.reducer
});