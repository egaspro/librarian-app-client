import { of } from "rxjs";
import { mergeMap, delay, map } from "rxjs/operators";
import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { types, actionCreators } from "./";

const apiUrl = "http://localhost:5000/api/";

const userValidateEpic = action$ =>
  action$.pipe(
    ofType(types.VALIDATE_USER_REQ),
    delay(2000),
    mergeMap(
      action => {
        console.log(action);
        return ajax
          .post(apiUrl + "user/recognize", { image: action.payload.data })
          .pipe(
            map(response => {
              console.log(response.response.userId !== -1);
              return actionCreators.validateUserRes({
                isValid: response.response.userId !== -1
              });
            })
          );
      }

      // of(actionCreators.validateUserRes({valid: true}))
    )
  );

const takePictureEpic = action$ =>
  action$.pipe(
    ofType(types.COUNTDOWN_TIME),
    delay(1000),
    mergeMap((action, state) => {
      var x = action.payload.data;
      if (x === 0) return of(actionCreators.countDownDone());
      return of(actionCreators.countDownTime(x - 1));
    })
  );

const getUserEpic = action$ =>
  action$.pipe(
    ofType(types.GET_USER_REQ),
    mergeMap(action =>
      ajax
        .getJSON(`${apiUrl}user/${action.payload.data}`)
        .pipe(map(response => actionCreators.getUserRes(response)))
    )
  );

export const epics = [userValidateEpic, takePictureEpic, getUserEpic];
