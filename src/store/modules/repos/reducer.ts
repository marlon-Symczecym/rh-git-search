import { ReposState, ReposAction } from './types';

const initalState: ReposState = {
	repos_url: '',
	repos: [
		{
			name: '',
			html_url: '',
			stargazers_count: 0,
			watchers: 0,
			forks: '0',
			language: '',
		},
	],
	repos_success: false,
	repos_error: false,
	repos_status: 200,
};

export default function repos(
	state = initalState,
	action: ReposAction,
): ReposState {
	switch (action.type) {
		case '@repos/REPOS_REQUEST':
			return {
				...state,
				repos_url: action.payload.repos_url,
			};
		case '@repos/REPOS_REQUEST_SUCCESS':
			return {
				...state,
				repos: action.payload.repos,
				repos_success: true,
				repos_status: action.payload.repos_status,
			};
		case '@repos/REPOS_REQUEST_FAILURE':
			return {
				...state,
				repos_error: true,
				repos_success: false,
			};

		default:
			return state;
	}
}
