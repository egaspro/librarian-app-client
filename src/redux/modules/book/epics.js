import { of} from 'rxjs';
import { mergeMap,  delay } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { ajax } from "rxjs/ajax";
import {
	types,
	actionCreators
} from './';

const allBooksEpic = (action$) => 
    action$.pipe(
        ofType(types.ALL_BOOKS_REQ),
        mergeMap((action) =>     
            ajax.getJSON(`http://localhost:3000/api/book`).pipe(
                map(response => actionCreators.allBooksResp(response))
            )                           
        )
    );

const takeBookEpic = (action$) => 
    action$.pipe(
        ofType(types.TAKE_BOOK_REQ),
        delay(2000), //Remove after endpoint implementation
        mergeMap((action) =>    
            of(actionCreators.takeBookResp())          
            // ajax.getJSON(`http://localhost:3000/api/book/take?${action.payload.data}`).pipe(
            //     map(response => actionCreators.takeBookResp())
            // )             
        )
    );

const takenBooksEpics = (action$) => 
    action$.pipe(
        ofType(types.TAKEN_BOOKS_REQ),
        mergeMap((action) =>            
            ajax.getJSON(`http://localhost:3000/api/user/${action.payload.data}/books`).pipe(
                map(response => actionCreators.takenBooksResp(response))
            )        
        )
    );

const leaveBookEpic = (action$) => 
    action$.pipe(
        ofType(types.LEAVE_BOOK_REQ),
        delay(2000), //Remove after endpoint implementation
        mergeMap((action) =>        
            of(actionCreators.leaveBookResp())       
            // ajax.getJSON(`http://localhost:3000/api/book/leave?${action.payload.data}`).pipe(
            //     map(response => actionCreators.leaveBookResp())
            // )           
        )
    );

export const epics = [
    allBooksEpic,
    takenBooksEpics,
    takeBookEpic,
    leaveBookEpic
];