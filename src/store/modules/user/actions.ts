import { action } from 'typesafe-actions';
import { UserName, UserState } from './types';

export function userRequest({ name }: UserName) {
	return action('@user/USER_REQUEST', {
		name,
	});
}

export function userRequestSuccess({ user }: UserState) {
	return action('@user/USER_REQUEST_SUCCESS', {
		user,
	});
}

export function userRequestFailure() {
	return action('@user/USER_REQUEST_FAILURE');
}
