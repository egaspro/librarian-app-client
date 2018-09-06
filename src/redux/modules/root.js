import 'rxjs';
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { _user } from './user';
//import { _example } from './example';
//import { _task } from './example_task';

export const rootEpic = combineEpics(
	..._user.epics,
	//..._task.epics
);

export const rootReducer = combineReducers({
	user: _user.reducer,
	//task: _task.reducer
});