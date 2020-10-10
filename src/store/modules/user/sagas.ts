import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { api } from '../../../services/api';
import * as actions from './actions';

export function* requestApi({
	payload,
}: ActionType<typeof actions.userRequest>) {
	try {
		const { name } = payload;

		const response = yield call(api, name);

		yield put(
			actions.userRequestSuccess({
				user: response.data,
				user_success: response.user_sucess,
			}),
		);
	} catch (err) {
		yield put(actions.userRequestFailure());
	}
}

// combinar a action e a function que serão atrelados
export default all([takeLatest('@user/USER_REQUEST', requestApi)]);
