import { of} from 'rxjs';
import { mergeMap, map, delay } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { ajax } from "rxjs/ajax";
import {
	types,
	actionCreators
} from './';

const apiUrl = "http://localhost:5000/api/";

const allBooksEpic = (action$) => 
    action$.pipe(
        ofType(types.ALL_BOOKS_REQ),
        mergeMap((action) =>     
            ajax.getJSON(`${apiUrl}book`).pipe(
                map(response => actionCreators.allBooksResp(response))
            )                           
        )
    );

const takeBookEpic = (action$) => 
    action$.pipe(
        ofType(types.TAKE_BOOK_REQ),
        mergeMap((action) =>             
            ajax.post(`${apiUrl}transaction/takeBook`, {
                userId: action.payload.data.userId,
                bookId: action.payload.data.bookId,
            }).pipe(
                map(response => actionCreators.takeBookResp())
            )             
        )
    );

const takenBooksEpics = (action$) => 
    action$.pipe(
        ofType(types.TAKEN_BOOKS_REQ),
        mergeMap((action) =>            
            ajax.getJSON(`${apiUrl}user/${action.payload.data}/books`).pipe(
                map(response => actionCreators.takenBooksResp(response))
            )        
        )
    );

const leaveBookEpic = (action$) => 
    action$.pipe(
        ofType(types.LEAVE_BOOK_REQ),
        mergeMap((action) =>             
            ajax.post(`${apiUrl}transaction/returnBook`, {
                userId: action.payload.data.userId,
                bookId: action.payload.data.bookId,
            }).pipe(
                map(response => actionCreators.leaveBookResp())
            )           
        )
    );

export const epics = [
    allBooksEpic,
    takenBooksEpics,
    takeBookEpic,
    leaveBookEpic
];