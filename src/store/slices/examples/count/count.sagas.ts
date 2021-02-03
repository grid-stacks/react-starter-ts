import { put, takeEvery } from "redux-saga/effects";
import { countActions } from "./count.slice";

export const delay = (ms: number): Promise<unknown> =>
	new Promise((res) => setTimeout(res, ms));

export function* incrementAsync(): Generator {
	yield delay(3000);
	yield put({ type: countActions.incrementByAmount.toString(), payload: 3 });
}

export function* watchIncrementAsync(): Generator {
	yield takeEvery([countActions.increment], incrementAsync);
}
