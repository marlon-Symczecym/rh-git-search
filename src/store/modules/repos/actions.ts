import { action } from 'typesafe-actions';
import { ReposState, ReposURL } from './types';

export function reposRequest({ repos_url }: ReposURL) {
	return action('@repos/REPOS_REQUEST', {
		repos_url,
	});
}

export function reposRequestSuccess({ repos }: ReposState) {
	return action('@repos/REPOS_REQUEST_SUCCESS', {
		repos,
	});
}

export function userRequestFailure() {
	return action('@repos/REPOS_REQUEST_FAILURE');
}
