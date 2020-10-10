import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { reposApi } from '../../../services/api';
import * as actions from './actions';

export function* requestApi({
	payload,
}: ActionType<typeof actions.reposRequest>) {
	try {
		const { repos_url } = payload;

		const response = yield call(reposApi, repos_url);

		yield put(
			actions.reposRequestSuccess({
				repos: response.data,
				repos_sucess: response.repos_sucess,
			}),
		);
	} catch (err) {
		yield put(actions.userRequestFailure());
	}
}

export default all([takeLatest('@repos/REPOS_REQUEST', requestApi)]);
