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
		},
	],
	repos_sucess: false,
	repos_error: false,
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
				repos_sucess: true,
			};
		case '@repos/REPOS_REQUEST_SUCCESS':
			return {
				...state,
				repos: action.payload.repos,
			};
		case '@repos/REPOS_REQUEST_FAILURE':
			return {
				...state,
				repos_error: true,
				repos_sucess: false,
			};

		default:
			return state;
	}
}
