import { of} from 'rxjs';
import { mergeMap,  delay } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { ajax } from "rxjs/ajax";
import {
	types,
	actionCreators
} from './';

const userValidateEpic = (action$) => 
    action$.pipe(
        ofType(types.VALIDATE_USER_REQ),
        delay(2000),
        mergeMap((action) =>            
                of(actionCreators.validateUserRes({valid: true}))            
        )
    );

const takePictureEpic = (action$) => 
    action$.pipe(
        ofType(types.COUNTDOWN_TIME),
        delay(1000),
        mergeMap((action, state) => {
            var x = action.payload.data;
            if (x === 0) return of(actionCreators.countDownDone());
            return of(actionCreators.countDownTime(x - 1));
            }
        )
    )

export const epics = [
    userValidateEpic,
    takePictureEpic
];